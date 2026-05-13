---
layout: single
title: "GPOcc: Generalizing Visual Geometry Priors to Sparse Gaussian Occupancy Prediction"
permalink: /gpocc/
author_profile: false
classes: wide
---

<p style="text-align: center; color: #d32f2f; font-weight: 700;">
  <strong>CVPR 2026</strong>
</p>

<p style="text-align: center;">
  <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ">Changqing Zhou</a>,
  <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Yueru Luo</a>,
  <a href="https://scholar.google.com/citations?user=OqlY-98AAAAJ">Changhao Chen</a>
</p>

<p style="text-align: center;">
  <a href="https://arxiv.org/abs/2602.21552">Paper</a> | <a href="https://github.com/JuIvyy/GPOcc">GitHub</a>
</p>

## Overview

GPOcc explores how strong visual geometry priors can be turned into more effective occupancy prediction for embodied 3D scene understanding. Rather than stopping at visible surfaces, GPOcc aims to infer volumetric structure and free space from monocular observations with better accuracy, efficiency, and generalization.

The method is motivated by the fact that recent geometry foundation models provide strong 3D cues, but these cues mainly describe surfaces. Occupancy prediction, however, requires reasoning about the interior volume of a scene, not just what is directly visible.

![GPOcc teaser](/assets/gpocc/framework.png)

## Method

GPOcc leverages generalizable visual geometry priors and extends surface points inward along camera rays to generate volumetric samples. These samples are represented as Gaussian primitives, which support probabilistic occupancy inference in a sparse yet expressive 3D formulation.

To support streaming monocular input, GPOcc further introduces a training-free incremental update strategy that fuses frame-wise Gaussians into a unified global representation. This design makes the method suitable for both single-frame and streaming settings while keeping inference efficient.

## Performance

![GPOcc teaser](/assets/gpocc/results.png)

## Additional Visualizations

![GPOcc Vis1](/assets/gpocc/qua_mono.png)
![GPOcc Vis2](/assets/gpocc/qua_emb.png)

## Videos {#videos}

<style>
.gpocc-video-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 18px;
  margin-top: 1.2rem;
}

.gpocc-video-card {
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.gpocc-video-card video {
  width: 100%;
  display: block;
  border-radius: 10px;
  background: #000;
}

.gpocc-video-caption {
  margin-top: 8px;
  text-align: center;
  font-size: 0.92rem;
  color: #333;
  font-weight: 600;
}

@media (max-width: 720px) {
  .gpocc-video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<div class="gpocc-video-grid">

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo1.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo1.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 1</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo2.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo2.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 2</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo3.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo3.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 3</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo4.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo4.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 4</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo5.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo5.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 5</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo6.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo6.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 6</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo7.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo7.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 7</div>
  </div>

  <div class="gpocc-video-card">
    <video controls muted playsinline preload="metadata" poster="{{ '/assets/gpocc/demo8.jpg' | relative_url }}">
      <source src="{{ '/assets/gpocc/out-demo8.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="gpocc-video-caption">Demo 8</div>
  </div>

</div>