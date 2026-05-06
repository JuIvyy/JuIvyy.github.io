---
layout: single
title: "LegoOcc"
permalink: /legoocc/
author_profile: false
---

# LegoOcc: Monocular Open Vocabulary Occupancy Prediction for Indoor Scenes

<p style="text-align: center; color: #d32f2f; font-weight: 700;">
  <strong>CVPR 2026 Oral</strong>
</p>

<p style="text-align: center;">
  <strong>Authors:</strong>
  <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ">Changqing Zhou</a>,
  <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Yueru Luo</a>,
  <a href="https://github.com/hanzhang-tech">Han Zhang</a>,
  <a href="https://scholar.google.com/citations?user=i3Lr8_8AAAAJ">Zeyu Jiang</a>,
  <a href="https://scholar.google.com/citations?user=OqlY-98AAAAJ">Changhao Chen</a>
</p>

<p style="text-align: center;">
  <a href="https://arxiv.org/abs/2602.22667">Paper</a> | <a href="https://github.com/JuIvyy/LegoOcc">GitHub</a>
</p>

## Overview

LegoOcc studies open-vocabulary 3D occupancy prediction for indoor scenes from monocular input. The goal is to recover both geometry and fine-grained semantics in cluttered environments where category sets are open-ended and much richer than fixed-label occupancy benchmarks.

Instead of relying on dense semantic supervision, LegoOcc follows a geometry-only supervision setting with binary occupancy labels. The method builds on 3D language-embedded Gaussians so that geometry and open-vocabulary semantics can be represented in a unified 3D structure.


![GPOcc teaser](/images/legoocc/framework.png)

## Method

LegoOcc focuses on two core issues in indoor open-vocabulary occupancy prediction:

1. Existing Gaussian-to-occupancy operators are unstable under weak geometry-only supervision.
2. Directly aligning rendered Gaussian features with open-vocabulary segmentation features causes feature mixing and weak semantic grounding.

To address these issues, LegoOcc introduces an opacity-aware Poisson-based aggregation strategy for more stable volumetric occupancy estimation. It also uses a Progressive Temperature Decay schedule during splatting, gradually sharpening opacity and improving the alignment between Gaussian primitives and language-aware visual features.

## Performance

![GPOcc teaser](/images/legoocc/results.png)