---

layout: page  
title: Interpreting Object Detection using $B\text{-}\cos$  
description: This project explores the application of the B-cos method for inherently interpretable deep learning models, extending its use to object detection tasks using YOLO.  
img: /assets/img/projects/bcos/img1.png
importance: 1  
category: school

---

## Overview

This project investigates the **B-cos method**, an inherently interpretable deep learning approach, and extends its application to **object detection tasks**. Initially proposed for Convolutional Neural Networks (CNNs) and Vision Transformers (ViTs), B-cos replaces traditional linear transformations with cosine similarity-based operations to enhance model interpretability.

$B\text{-}\cos$ introduces a novel layer that computes the cosine similarity between the input and weight vectors, generating contribution maps that highlight the most relevant features for classification. This method offers a trade-off between performance and interpretability, making it suitable for applications requiring model transparency and explanation.

The B-cos transformation is defined as:

$$
\text{B-cos}(\mathbf{x}; \mathbf{w}) = \|\mathbf{x}\| \cdot \left| \cos\left( \angle (\mathbf{x}, \mathbf{w}) \right) \right|^{B} \cdot \text{sgn}\left( \cos\left( \angle (\mathbf{x}, \mathbf{w}) \right) \right)
$$

Here:
- $ \mathbf{x} $ is the input vector.
- $ \mathbf{w} $ is the weight vector.
- $ \|\mathbf{x}\| $ denotes the norm (magnitude) of $ \mathbf{x} $.
- $ \cos\left( \angle (\mathbf{x}, \mathbf{w}) \right) $ represents the cosine of the angle between $ \mathbf{x} $ and $ \mathbf{w} $.
- $ B $ is a hyperparameter that controls the degree of alignment emphasis.
- $ \text{sgn} $ is the sign function, indicating the sign of the cosine value.

This transformation encourages the alignment between the input and weight vectors, promoting interpretability in deep neural networks. ([CVF Open Access](https://openaccess.thecvf.com/content/CVPR2022/papers/Bohle_B-Cos_Networks_Alignment_Is_All_We_Need_for_Interpretability_CVPR_2022_paper.pdf?utm_source=chatgpt.com))

We reproduced key experiments from the original paper, **"B-cos Alignment for Inherently Interpretable CNNs and Vision Transformers"**, using **ResNet18** on the CIFAR-10 dataset. Furthermore, we extended the method to object detection by adapting it to **YOLO** and evaluating its performance on the Fruit Dataset. Key contributions include:

- Reproducing and validating the results of the original paper.  
- Analyzing the architectural design decisions, such as the absence of ReLU and normalization layers.  
- Implementing and demonstrating the applicability of the B-cos method in object detection tasks.  

A GitHub repository with the complete codebase is available [here](https://gits-15.sys.kth.se/mebd/b-cos-object-detection).  

More details can be found in the project report below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <iframe src="/assets/pdf/bcos-object-detection.pdf" width="100%" height="600px">
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/assets/pdf/bcos-object-detection.pdf">Download PDF</a>
        </iframe>
    </div>
</div>

---

## Methodology

### Reproducing B-cos on ResNet18
We incorporated B-cos layers into **ResNet18** for image classification on CIFAR-10, replacing standard convolutional layers. The experiments focused on:
- Validating interpretability improvements through contribution maps.  
- Exploring the impact of key hyperparameters, including the **non-linearity parameter B** and the addition of bias or activation functions.  

### Extending B-cos to YOLO
To extend B-cos for **object detection**, we replaced all convolutional layers in YOLO with B-cos transformations. This allowed YOLO to generate localized, interpretable contribution maps while preserving detection performance.  

---

## Results

### Image Classification on CIFAR-10
Using B-cos in ResNet18 achieved **84.17% accuracy**, trading off ~3% performance for enhanced interpretability. Fine-tuning the **B parameter** showed improved accuracy and more focused contribution maps with higher values.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/projects/bcos/img1.png" title="B-cos Contribution Maps on CIFAR-10" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Object Detection with YOLO
B-cos-enabled YOLO maintained competitive performance while generating interpretable explanation maps for object detection tasks. Figures demonstrate the localized maps for detecting objects like bananas and oranges, showcasing the method's broader applicability.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/projects/bcos/img2.png" title="B-cos Object Detection Maps" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---