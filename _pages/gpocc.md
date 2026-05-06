---
layout: single
title: "GPOcc"
permalink: /gpocc/
author_profile: false
---

# GPOcc: Generalizing Visual Geometry Priors to Sparse Gaussian Occupancy Prediction

<p style="text-align: center; color: #d32f2f; font-weight: 700;">
  <strong>CVPR 2026</strong>
</p>

<p style="text-align: center;">
  <strong>Authors:</strong>
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

![GPOcc teaser](/images/gpocc/framework.png)

## Method

GPOcc leverages generalizable visual geometry priors and extends surface points inward along camera rays to generate volumetric samples. These samples are represented as Gaussian primitives, which support probabilistic occupancy inference in a sparse yet expressive 3D formulation.

To support streaming monocular input, GPOcc further introduces a training-free incremental update strategy that fuses frame-wise Gaussians into a unified global representation. This design makes the method suitable for both single-frame and streaming settings while keeping inference efficient.

## Performance

![GPOcc teaser](/images/gpocc/results.png)
