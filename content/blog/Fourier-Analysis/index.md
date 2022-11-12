---
title: Fourier Analysis the Early Steps
date: "2022-11-11"
description: "Contains info on Fourier series"
tags: ["Fourier", "math", "Desmos", "series"]
private: false
---

# Fourier Representations

---

Heaviside Function's Fourier Representation

> -- Several proofs are missing -- will add later --

The Heaviside Function:

$$
g(x) = \begin{cases} 1& 0 < x <\pi \\ 0 & \pi<x < 2\pi\end{cases}
$$

> General Fourier Function:

$$
\begin{align}
f(x) = \frac{a_0}{2} + \sum\limits_{n=1}^{\infty}a_n\cos(nx) + \sum\limits_{n=1}^{\infty}b_n\sin(nx)
\end{align}
$$

We assume $g(x)$ can be represented as a linear combination of fourier series orthonormal basis vectors i.e.

$$
\{1,\cos(nx),\sin(nx)\}
$$

Given these basis vectors we need to find coefficients $a_0, a_n, b_n$ that produce our desired function $f(x)$.

> The general form of our Fourier function written as a series of projections:

$$
\begin{align}
    f(x) = <f,v_1>v_1 + <f,v_1>v_2 +\dots+ <f,v_m>v_m \quad m\in\mathbf{N}
\end{align}
$$

Where the projection $<f,v_i>$ will represent the integral inner product of the function $f$ with a basis vector $v_i$.

For example let $v_i = sin(nx)$:

$$
\begin{align}
    <f,v_i> = <f(x), sin(nx)> = \int\limits_{-\pi}^{\pi} f(x)sin(nx)dx
\end{align}
$$

> Equations for $a_0, a_n, b_n$

$$
\begin{align}
    a_0 &= \frac{1}{\pi}\int\limits_{-\pi}^{\pi} f(x) \cdot 1 \, dx \\
    a_n & = \frac{1}{\pi}\int\limits_{-\pi}^{\pi} f(x) \cdot \cos(nx) \, dx \\
    b_n & = \frac{1}{\pi}\int\limits_{-\pi}^{\pi} f(x) \cdot \sin(nx) \, dx \\
\end{align}
$$

Computation of $a_0, a_n, b_n$ for $f(x) = g(x)$. Since the function is zero for $\pi<x<2\pi$ we need not evaluate this section.

$$
\begin{align*}
    a_0 &= \frac{1}{\pi}\int\limits_{0}^{\pi} (1) \cdot 1 \, dx = \frac{1}{\pi}(\pi -0) = 1 \\
    a_n & = \frac{1}{\pi}\int\limits_{-\pi}^{\pi} (1) \cdot \cos(nx) \, dx
     = \frac{1}{\pi m}(-1)(\sin(nx))\Big|_0^\pi
     = 0 \quad \text{for all} \quad n \\
    b_n & = \frac{1}{\pi}\int\limits_{0}^{\pi} (1) \cdot \sin(nx) \, dx
     = \frac{1}{\pi n}(-1)(\cos(nx))\Big|_0^\pi \\
     &=\frac{-1}{\pi n} (\cos(n\pi)- \cos(0))\\
     &=\frac{-1}{\pi n} (\cos(n\pi)- 1)\\
     & =
     \begin{cases}
     0 & \text{if} \quad n \text{ is even}\\
     \frac{2}{\pi n} & \text{if} \quad n \text{ is odd}
     \end{cases}
\end{align*}
$$

> $a_0 = 1$, $a_n = 0$, and for odd values of $n$ $b_n = \frac{2}{n\pi}$

The Fourier Representation of the Heaviside function:

$$
f(x) = \frac{1}{2} + \sum\limits_{n= 1,3,5,\ldots}^{\infty}(\frac{2}{\pi n})\cdot \sin(nt)
$$

To graph this on Desmos we need to re-index the series by letting $n = 2k +1$ for $k\in \mathbf{N}$.

$$
f(x) = \frac{1}{2} + \sum\limits_{k = 0}^{<\infty}\frac{2}{\pi(2k+1)}sin((2k+1)x)
$$

For more information on the indexing and a visualization visit my [Desmos](https://www.desmos.com/calculator/obdb5ahmfd)!
