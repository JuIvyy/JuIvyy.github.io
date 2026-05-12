---
layout: single
title: "GPOcc: Generalizing Visual Geometry Priors to Sparse Gaussian Occupancy Prediction"
permalink: /gpocc/
author_profile: false
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

## Videos

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-top: 1rem;">
  <video controls playsinline preload="metadata" style="width: 100%; border-radius: 10px;">
    <source src="/assets/gpocc/demo1.mp4" type="video/mp4">
  </video>
  <video controls playsinline preload="metadata" style="width: 100%; border-radius: 10px;">
    <source src="/assets/gpocc/demo2.mp4" type="video/mp4">
  </video>
  <video controls playsinline preload="metadata" style="width: 100%; border-radius: 10px;">
    <source src="/assets/gpocc/demo3.mp4" type="video/mp4">
  </video>
  <video controls playsinline preload="metadata" style="width: 100%; border-radius: 10px;">
    <source src="/assets/gpocc/demo4.mp4" type="video/mp4">
  </video>
</div>
