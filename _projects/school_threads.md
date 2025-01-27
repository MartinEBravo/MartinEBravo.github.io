---

layout: page  
title: Threads Reviews Text Mining  
description: This project is a text mining analysis of reviews from the Threads platform, using different NLP techniques to extract insights.  
img: /assets/img/projects/threads/threads.jpg  
importance: 3
category: school  

---

## Overview

This project analyzes **reviews from the Threads platform** to extract insights using various **text mining and NLP techniques**. The dataset comprises user reviews along with their ratings, offering an opportunity to perform sentiment analysis, clustering, and advanced classification tasks.

The project is structured into **three questions** that explore different approaches to understanding and modeling textual data:

1. **Traditional Machine Learning Models with N-grams**  
2. **Clustering Techniques for Unsupervised Learning**  
3. **Fine-Tuning DistilBERT for Sentiment Classification**  

Each question emphasizes unique aspects of **natural language processing (NLP)** and leverages different algorithms to solve distinct problems, including sentiment classification, clustering, and interpretability.

The repository is available at [Threads Reviews Text Mining](https://github.com/MartinEBravo/App-Reviewer/blob/main/hito.ipynb) in Spanish.

---



## Dataset

The dataset contains **user reviews from Threads**, focusing on the review text and associated ratings.  
- **Text Field**: Represents the review content.  
- **Rating Field**: A numeric score indicating user satisfaction.  

To standardize tasks across questions:
- Reviews are categorized into three sentiment classes:  
  - **Positive**: Ratings above 4.  
  - **Neutral**: Ratings between 3 and 4.  
  - **Negative**: Ratings of 2 or below.  

This dataset is ideal for **text mining** as it combines structured (ratings) and unstructured (text) data. Preprocessing steps include cleaning text, creating n-grams, tokenizing for transformers, and balancing classes for fair evaluation.

---


## Question 1: Traditional Machine Learning with N-grams

In this phase, the focus is on **extracting insights from reviews** using traditional NLP techniques:
1. **N-grams**: Reviews are represented as unigrams, bigrams, and trigrams using `CountVectorizer`.  
2. **Model Training**: Four classifiers were applied to these n-grams:  
   - **Decision Tree Classifier**  
   - **Multinomial Naive Bayes**  
   - **Logistic Regression**  
   - **Support Vector Machines (SVM)**  
3. **Metrics**: Evaluation metrics included accuracy, F1-score, precision, and recall to compare model performance across n-gram variations.  

**Outcome**:  
- Logistic Regression and SVM showed the best results.  
- N-grams provided valuable insights into the textual structure of reviews.  

---


## Question 2: Clustering Techniques

Here, the goal was to explore **unsupervised learning** for grouping reviews:
1. **Dimensionality Reduction**:  
   - PCA (Principal Component Analysis) was applied to reduce the dataset's dimensionality for visualization.  
2. **Clustering Algorithms**:  
   - **K-Means**: Optimal clusters were identified using the elbow/knee method.  
   - **Agglomerative Clustering**: Hierarchical clustering was visualized through dendrograms.  
   - **DBSCAN**: Density-based clustering grouped similar reviews.  
3. **Validation**: Silhouette scores were used to assess clustering quality.  

**Outcome**:  
- Clusters revealed patterns in review sentiments, highlighting differences in user preferences and feedback themes.  


---

## Question 3: Fine-Tuning DistilBERT

This phase tackled **advanced sentiment classification** using a transformer-based approach:
1. **Dataset Preparation**:  
   - Reviews were tokenized and converted into a Hugging Face dataset format.  
   - Sentiments were labeled as **Positive**, **Neutral**, or **Negative**.  
2. **Fine-Tuning**:  
   - **DistilBERT**, a lightweight transformer model, was fine-tuned for this task.  
   - Training leveraged weighted F1-scores to address class imbalance.  
3. **Interpretability**:  
   - The **Transformers Interpret** library visualized token contributions to model predictions, ensuring transparency and trustworthiness.  

**Outcome**:  
- DistilBERT achieved high accuracy and interpretability, outperforming traditional models.  
- Visualizations provided insights into how the model processed user reviews.

---