---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
  .publication-list {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .publication-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 1.25rem;
    align-items: center;
    padding: 1.25rem 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .publication-card:last-child {
    border-bottom: 0;
  }

  .publication-card.no-image {
    grid-template-columns: 1fr;
  }

  .publication-title {
    margin: 0 0 0.4rem 0;
    font-size: 1.35rem;
    line-height: 1.35;
    font-weight: 700;
  }

  .publication-title a {
    text-decoration: none;
  }

  .publication-meta {
    margin: 0 0 0.45rem 0;
    font-size: 0.95rem;
    color: #555;
  }

  .publication-authors {
    margin: 0;
    font-size: 0.95rem;
    color: #222;
  }

  .publication-links {
    margin: 0 0 0.45rem 0;
    font-size: 0.92rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
  }

  .publication-links a {
    text-decoration: none;
    font-weight: 600;
    color: #111;
  }

  .publication-summary {
    margin: 0.65rem 0 0 0;
    font-size: 0.95rem;
    color: #444;
  }

  .publication-image {
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    background: #f5f5f5;
  }

  .publication-image img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .publication-card {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="publication-list">

  <!-- ===================== 2026 ===================== -->

  <!-- FreeOcc -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">FreeOcc: Training-Free Embodied Open-Vocabulary Occupancy Prediction</h2>
      <div class="publication-links">
        <a href="https://the-masses.github.io/freeocc-web/">project</a>
        <a href="https://github.com/the-masses/FreeOcc">code</a>
        <a href="https://huggingface.co/datasets/the-masses/ReplicaOcc">data</a>
      </div>
      <p class="publication-meta">RSS 2026</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=i3Lr8_8AAAAJ">Z. Jiang</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="REPLACE_WITH_AUTHOR_URL">X. Zuo</a>, <a href="https://scholar.google.com/citations?user=OqlY-98AAAAJ">C. Chen</a></p>
    </div>
  </article>

  <!-- Monocular Open Vocabulary Occupancy -->
  <article class="publication-card">
    <div>
      <h2 class="publication-title">Monocular open vocabulary occupancy prediction for indoor scenes</h2>
      <div class="publication-links">
        <a href="REPLACE_WITH_PROJECT_URL">project</a>
        <a href="REPLACE_WITH_CODE_URL">code</a>
        <a href="https://arxiv.org/abs/2602.22667">paper</a>
      </div>
      <p class="publication-meta">CVPR 2026 <span style="color: #d32f2f; font-weight: 700;">Oral</span></p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Y. Luo</a>, <a href="https://github.com/hanzhang-tech">H. Zhang</a>, <a href="https://scholar.google.com/citations?user=i3Lr8_8AAAAJ">Z. Jiang</a>, <a href="https://scholar.google.com/citations?user=OqlY-98AAAAJ">C. Chen</a></p>
    </div>
    <div class="publication-image">
      <img src="/assets/legoocc/framework.png" alt="Monocular open vocabulary occupancy prediction for indoor scenes">
    </div>
  </article>

  <!-- Generalizing Visual Geometry Priors -->
  <article class="publication-card">
    <div>
      <h2 class="publication-title">Generalizing visual geometry priors to sparse Gaussian occupancy prediction</h2>
      <div class="publication-links">
        <a href="REPLACE_WITH_PROJECT_URL">project</a>
        <a href="REPLACE_WITH_CODE_URL">code</a>
        <a href="https://arxiv.org/abs/2602.21552">paper</a>
      </div>
      <p class="publication-meta">CVPR 2026</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Y. Luo</a>, <a href="https://scholar.google.com/citations?user=OqlY-98AAAAJ">C. Chen</a></p>
    </div>
    <div class="publication-image">
      <img src="/assets/gpocc/framework.png" alt="Generalizing visual geometry priors to sparse Gaussian occupancy prediction">
    </div>
  </article>

  <!-- ===================== 2025 ===================== -->

  <!-- RelTopo -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">RelTopo: Multi-level relational modeling for driving scene topology reasoning</h2>
      <div class="publication-links">
        <a href="REPLACE_WITH_PROJECT_URL">project</a>
        <a href="REPLACE_WITH_CODE_URL">code</a>
        <a href="https://arxiv.org/abs/2506.13553">paper</a>
      </div>
      <p class="publication-meta">arXiv 2025</p>
      <p class="publication-authors"><a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Y. Luo</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="REPLACE_WITH_AUTHOR_URL">Y. Yang</a>, <a href="REPLACE_WITH_AUTHOR_URL">E. Li</a>, <a href="https://scholar.google.com/citations?user=6A1yEFMAAAAJ">C. Zheng</a>, <a href="REPLACE_WITH_AUTHOR_URL">S. Mei</a>, <a href="https://scholar.google.com/citations?user=1o_qvR0AAAAJ">S. Cui</a>, <a href="https://scholar.google.com/citations?user=0TTt3QsAAAAJ">Z. Li</a></p>
    </div>
  </article>

  <!-- ===================== 2024 ===================== -->

  <!-- Exploring Point-BEV Fusion -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">Exploring point-BEV fusion for 3D point cloud object tracking with transformer</h2>
      <div class="publication-links">
        <a href="https://github.com/Jasonkks/PTTR">code</a>
      </div>
      <p class="publication-meta">IEEE TPAMI 2024</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://liangpan99.github.io/">L. Pan</a>, <a href="https://zhanggongjie.github.io/">G. Zhang</a>, <a href="REPLACE_WITH_AUTHOR_URL">T. Liu</a>, <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Y. Luo</a>, <a href="https://scholar.google.com/citations?user=sMQV1ecAAAAJ">H. Zhao</a>, <a href="https://liuziwei7.github.io/">Z. Liu</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a></p>
    </div>
  </article>

  <!-- Modeling Continuous Motion -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">Modeling continuous motion for 3D point cloud object tracking</h2>
      <div class="publication-links">
      </div>
      <p class="publication-meta">AAAI 2024</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://zhanggongjie.github.io/">G. Zhang</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://scholar.google.com/citations?user=wMDgLCYAAAAJ">Z. Wu</a>, <a href="https://scholar.google.com/citations?user=fMXnSGMAAAAJ">Q. Tao</a>, <a href="https://scholar.google.com/citations?user=zdgKJXIAAAAJ">L. Lu</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a></p>
    </div>
  </article>

  <!-- ===================== 2023 ===================== -->

  <!-- TransPillars -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">TransPillars: Coarse-to-fine aggregation for multi-frame 3D object detection</h2>
      <div class="publication-links">
      </div>
      <p class="publication-meta">WACV 2023</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://zhanggongjie.github.io/">G. Zhang</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="REPLACE_WITH_AUTHOR_URL">T. Liu</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a>, <a href="https://liangpan99.github.io/">L. Pan</a></p>
    </div>
  </article>

  <!-- ===================== 2022 ===================== -->

  <!-- DETR4D -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">DETR4D: Direct multi-view 3D object detection with sparse attention</h2>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2212.07849">paper</a>
      </div>
      <p class="publication-meta">arXiv 2022</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://zhanggongjie.github.io/">G. Zhang</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a></p>
    </div>
  </article>

  <!-- PTTR -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">PTTR: Relational 3D point cloud object tracking with transformer</h2>
      <div class="publication-links">
        <a href="https://github.com/Jasonkks/PTTR">code</a>
      </div>
      <p class="publication-meta">CVPR 2022</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://scholar.google.com.hk/citations?user=B588EyYAAAAJ">Y. Luo</a>, <a href="REPLACE_WITH_AUTHOR_URL">T. Liu</a>, <a href="https://liangpan99.github.io/">L. Pan</a>, <a href="https://caizhongang.com/">Z. Cai</a>, <a href="https://scholar.google.com/citations?user=sMQV1ecAAAAJ">H. Zhao</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a></p>
    </div>
  </article>

  <!-- ===================== 2021 ===================== -->

  <!-- Unsupervised Domain Adaptive 3D Detection -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">Unsupervised domain adaptive 3D detection with multi-level consistency</h2>
      <div class="publication-links">
        <a href="https://github.com/Jasonkks/mlcnet">code</a>
      </div>
      <p class="publication-meta">ICCV 2021</p>
      <p class="publication-authors"><a href="https://scholar.google.com/citations?user=mw-qVgcAAAAJ&hl=en">Z. Luo</a>, <a href="https://caizhongang.com/">Z. Cai</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://zhanggongjie.github.io/">G. Zhang</a>, <a href="https://scholar.google.com/citations?user=sMQV1ecAAAAJ">H. Zhao</a>, <a href="https://scholar.google.com/citations?user=afbbNmwAAAAJ">S. Yi</a>, <a href="https://personal.ntu.edu.sg/shijian.lu/index.htm">S. Lu</a>, <a href="https://scholar.google.com/citations?user=BN2Ze-QAAAAJ">H. Li</a>, <a href="https://scholar.google.com/citations?user=voqw10cAAAAJ">S. Zhang</a>, <a href="https://liuziwei7.github.io/">Z. Liu</a></p>
    </div>
  </article>

  <!-- Auto-Exposure Fusion Shadow Removal -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">Auto-exposure fusion for single-image shadow removal</h2>
      <div class="publication-links">
        <a href="https://github.com/tsingqguo/exposure-fusion-shadow-removal">code</a>
      </div>
      <p class="publication-meta">CVPR 2021</p>
      <p class="publication-authors"><a href="REPLACE_WITH_AUTHOR_URL">L. Fu</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://tsingqguo.github.io/">Q. Guo</a>, <a href="https://xujuefei.com/">F. Juefei-Xu</a>, <a href="https://cis.csuohio.edu/~h.yu">H. Yu</a>, <a href="https://scholar.google.com/citations?user=7ory1i8AAAAJ">W. Feng</a>, <a href="https://personal.ntu.edu.sg/yangliu/">Y. Liu</a>, <a href="https://scholar.google.com/citations?user=eycXl_QAAAAJ">S. Wang</a></p>
    </div>
  </article>

  <!-- Sparta -->
  <article class="publication-card no-image">
    <div>
      <h2 class="publication-title">Sparta: Spatially attentive and adversarially robust activation</h2>
      <div class="publication-links">
        <a href="https://arxiv.org/abs/2105.08269">paper</a>
      </div>
      <p class="publication-meta">arXiv 2021</p>
      <p class="publication-authors"><a href="https://tsingqguo.github.io/">Q. Guo</a>, <a href="https://xujuefei.com/">F. Juefei-Xu</a>, <a href="https://scholar.google.com/citations?user=FZ3jPs4AAAAJ"><strong>C. Zhou</strong></a><sup>*</sup>, <a href="https://scholar.google.com/citations?user=7ory1i8AAAAJ">W. Feng</a>, <a href="https://personal.ntu.edu.sg/yangliu/">Y. Liu</a>, <a href="https://scholar.google.com/citations?user=eycXl_QAAAAJ">S. Wang</a></p>
    </div>
  </article>

</div>
