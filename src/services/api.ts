/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DetectionResult {
  prediction: 'REAL' | 'FAKE';
  score: number;
  total_frames?: number;
  synthetic_frames?: number;
  nonsynthetic_frames?: number;
  model_name: string;
  analysis_time: number;
  status: 'SUCCESS' | 'ERROR';
  error_message?: string;
}

// Temporary Cloudflare Quick Tunnel URL for the working Colab backend.
// IMPORTANT: This URL changes when the Colab tunnel is restarted.
const API_URL =
  import.meta.env.VITE_API_URL ||
  'https://horse-boc-amendment-kijiji.trycloudflare.com';

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // The current FastAPI backend exposes GET / rather than GET /health.
    const response = await fetch(API_URL + '/', {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    return false;
  }
}

export async function analyzeMedia(
  file: File,
  type: 'image' | 'video',
  forceSandbox: boolean = false
): Promise<DetectionResult> {
  // The current real backend is available for video through WaveRep.
  // Do not silently simulate a result when Backend API Mode is selected.
  if (forceSandbox) {
    return await simulateAnalysis(file, type);
  }

  if (type !== 'video') {
    throw new Error(
      'The live Python backend currently exposes WaveRep video detection only.'
    );
  }

  const formData = new FormData();
  formData.append('file', file);

  const startTime = performance.now();

  try {
    const response = await fetch(API_URL + '/predict/video', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (!response.ok || data.success === false) {
      throw new Error(
        data.error || `Server responded with status ${response.status}`
      );
    }

    const syntheticProbability = Number(data.synthetic_probability);

    return {
      // WaveRep uses SYNTHETIC/REAL. The existing UI uses FAKE/REAL,
      // so SYNTHETIC is mapped to FAKE for the existing presentation.
      prediction: data.prediction === 'SYNTHETIC' ? 'FAKE' : 'REAL',
      score: syntheticProbability,
      total_frames:
        data.frames_processed !== undefined
          ? Number(data.frames_processed)
          : undefined,
      model_name: 'WaveRep',
      analysis_time: Number(
        ((performance.now() - startTime) / 1000).toFixed(2)
      ),
      status: 'SUCCESS',
    };
  } catch (error: any) {
    console.error('WaveRep backend connection failed:', error);
    throw new Error(
      error.message || 'Detection service is currently unavailable.'
    );
  }
}

/**
 * Client-side demo mode.
 * This is retained only for the existing Sandbox Mode in the UI.
 * It is NOT used when Backend API Mode is selected.
 */
function simulateAnalysis(
  file: File,
  type: 'image' | 'video'
): Promise<DetectionResult> {
  return new Promise((resolve) => {
    const analysisDuration = type === 'image' ? 1500 : 3200;

    setTimeout(() => {
      const nameLower = file.name.toLowerCase();
      const isFake =
        nameLower.includes('fake') ||
        nameLower.includes('synthetic') ||
        nameLower.includes('generated') ||
        nameLower.includes('ai') ||
        Math.random() > 0.45;

      const score = isFake
        ? 0.85 + Math.random() * 0.13
        : 0.82 + Math.random() * 0.16;

      if (type === 'image') {
        resolve({
          prediction: isFake ? 'FAKE' : 'REAL',
          score: Number(score.toFixed(3)),
          model_name: 'Effort',
          analysis_time: Number((1.1 + Math.random() * 0.6).toFixed(2)),
          status: 'SUCCESS',
        });
      } else {
        const total_frames = Math.floor(180 + Math.random() * 320);
        let synthetic_frames = 0;
        let nonsynthetic_frames = total_frames;

        if (isFake) {
          const ratio = 0.35 + Math.random() * 0.6;
          synthetic_frames = Math.floor(total_frames * ratio);
          nonsynthetic_frames = total_frames - synthetic_frames;
        }

        resolve({
          prediction: isFake ? 'FAKE' : 'REAL',
          score: Number(score.toFixed(3)),
          total_frames,
          synthetic_frames,
          nonsynthetic_frames,
          model_name: 'WaveRep',
          analysis_time: Number((2.8 + Math.random() * 1.5).toFixed(2)),
          status: 'SUCCESS',
        });
      }
    }, analysisDuration);
  });
}
