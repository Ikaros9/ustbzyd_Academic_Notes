---
title: 边缘智能实验工具箱：仿真平台、设备与网络工具
published: 2026-11-23T23:00:00+08:00
description: 从适用场景与优势出发，整理边缘计算仿真平台、边缘智能设备、Android 手机测试床与网络研究工具。
tags: [边缘计算, 边缘智能, 仿真平台, 端侧推理, 科研工具]
category: 科研笔记
draft: false
lang: zh_CN
---

做边缘计算和边缘智能研究，经常需要在仿真环境与真实设备之间切换：通过仿真验证调度与通信策略，再在设备上观察计算、网络和系统行为。这篇笔记整理常用的平台、设备与工具，记录它们适合解决的问题和各自的优势。

## 一些可用的仿真平台

任务调度、网络协议和系统实现对应不同的实验层次。下面这些平台分别提供资源建模、协议仿真和真实应用运行能力。

| 平台与入口 | 适用场景与优势 |
| --- | --- |
| [CloudSim](https://github.com/Cloudslab/cloudsim) | 提供云计算基础设施与服务的建模能力，适合比较数据中心资源配置、虚拟机分配和任务调度策略。 |
| [EdgeSim](https://github.com/XiaofeiTJU/EdgeSim) | 面向边缘计算与边缘缓存实验，便于围绕计算和缓存策略构建仿真场景。 |
| [Mininet](https://mininet.org/) | 在单机上构建运行真实内核、交换机与应用代码的虚拟网络，适合快速搭建网络原型和 SDN 实验。 |
| [Shadow](https://shadow.github.io/) | 将真实网络应用接入模拟网络，通过可重复的执行过程评估分布式应用和网络行为。 |
| [ns-3](https://www.nsnam.org/) | 通过离散事件模拟网络协议、链路与拓扑，适合分析通信机制对时延、吞吐量和系统性能的影响。 |
| [OMNeT++](https://omnetpp.org/) | 采用模块化的离散事件建模方式，便于组合模型库、扩展组件和构建通信网络实验。 |
| [VNS：Visual Network Simulator](https://apus.uma.pt/vns/) | 为 ns-2 提供图形化场景构建界面，方便创建网络拓扑和准备仿真场景。 |
| [EasiEI](https://gitlab.com/Mirrola/ns-3-dev) | 支持边缘智能相关仿真实验，我的 SCCF 工作基于该平台研究任务状态、依赖关系与服务约束下的协同调度。 |

表中的 EdgeSim 对应 XiaofeiTJU/EdgeSim；[EdgeCloudSim](https://github.com/CagataySonmez/EdgeCloudSim) 也可用于边缘计算系统的性能评估。EasiEI 的项目入口位于名为 `ns-3-dev` 的仓库。

## 常用边缘智能设备

### 树莓派 5：Linux 边缘节点与多机协同

[树莓派 5](https://www.raspberrypi.com/products/raspberry-pi-5/) 适合研究任务卸载、设备协同、资源调度与分布式推理。它提供完整的 Linux 环境，方便部署服务、采集系统指标和控制节点行为；紧凑的形态也便于搭建多节点测试床。多台树莓派可以借助 [Distributed Llama](https://github.com/b4rtaz/distributed-llama) 分担模型计算与内存占用，用来研究 LLM 分割推理中的任务划分、通信开销和节点协同。

### NVIDIA：嵌入式推理与本地 AI 开发

NVIDIA 设备的优势在于 GPU 加速能力与 CUDA、TensorRT 等开发工具的衔接。Jetson 系列面向嵌入式边缘计算，DGX Spark 面向桌面 AI 开发；可以根据实验需要，从设备侧部署延伸到本地模型开发和系统验证。

| 设备 | 适用场景 | 主要优势 |
| --- | --- | --- |
| 初代 Jetson Nano | 嵌入式 AI 教学、视觉推理原型与已有项目复现 | 将 Linux 开发环境与 GPU 计算集成在紧凑开发板上，便于学习设备侧部署流程。 |
| Jetson Orin Nano / Nano Super | 边缘视觉、机器人感知与本地智能应用原型 | 兼顾紧凑部署与 GPU 加速，便于把推理服务接入设备端应用。 |
| Jetson Orin NX | 多路感知、机器人应用与边缘推理服务 | 提供模块化部署方式，适合研究计算资源分配及多任务协同。 |
| Jetson AGX Orin | 多模态感知、多模型并行与复杂边缘系统 | 更充裕的计算和内存资源便于组合多个模型，并分析任务之间的资源竞争。 |
| DGX Spark | 本地模型开发、推理服务原型与多节点协同实验 | 统一内存和高速网络连接便于开展模型开发、部署与节点间通信实验。 |

AGX Orin、Orin NX 和 Orin Nano 同属 Jetson Orin 产品线。相关开发资料可以从 [Jetson Orin 系列](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/)、[Jetson 入门文章](https://developer.nvidia.com/blog/getting-started-with-edge-ai-on-nvidia-jetson-llms-vlms-and-foundation-models-for-robotics/) 和 [DGX Spark 硬件说明](https://docs.nvidia.com/dgx/dgx-spark/hardware.html) 查找。

### OnePlus：端侧推理与资源调度

OnePlus 系列适合开展端侧 LLM 推理、任务调度、内存管理和 KV Cache 实验。较大内存配置为多任务和缓存策略实验提供了空间，[OnePlusOSS](https://github.com/OnePlusOSS) 中的内核源码则为系统分析与改造提供了入口，例如 [SM8650 内核仓库](https://github.com/OnePlusOSS/android_kernel_oneplus_sm8650)。OnePlus 12、OnePlus 13 可作为测试床中的设备节点；涉及内核修改时，实验准备包括确认具体版本的 Bootloader 解锁条件，并匹配源码分支与系统版本。

### Google Pixel：内核与系统机制研究

Google Pixel 适合研究 Linux 内核、DVFS 调频、系统内存管理和能耗行为。Google 提供的 [Pixel 内核构建流程](https://source.android.com/docs/setup/build/building-pixel-kernels) 为内核编译、刷写与系统实验提供了明确路径，便于将调度策略与底层实现联系起来。支持解锁的设备可用于定制系统实验，结合系统日志与外部功耗测量，还可以分析任务执行、频率变化和能耗之间的关系。[Pixel 硬件规格](https://support.google.com/pixelphone/answer/7158570?hl=en) 与 Google 的 [端侧生成模型实验](https://developers.googleblog.com/en/ai-edge-torch-generative-api-for-custom-llms-on-device/) 可用于准备实验配置。

### Xiaomi / Redmi / POCO：异构设备与多机测试床

Xiaomi、Redmi 和 POCO 覆盖多种芯片与配置，适合搭建异构测试床，研究联邦学习、任务分配和跨设备推理。不同档位的设备便于组合计算能力各异的节点，观察资源差异对协同策略的影响。对于搭载兼容高通平台的机型，可结合 QNN/QAIRT 研究 Hexagon NPU 加速及软硬件协同；[Qualcomm 设备端推理示例](https://qualcomm.github.io/qidk/release-notes/solutions.html) 提供了相关开发入口。[Redmi K60](https://www.mi.com/redmi-k60/specs) 等机型也可以纳入多机实验，围绕通信、计算和任务负载建立对照。

### Samsung Galaxy S：用户态推理与持续性能评估

Galaxy S24/S25 Ultra、Plus 等型号适合评估真实手机环境中的应用层推理、持续负载和热节流。其研究价值在于完整的商业手机运行环境，可以观察推理任务与系统后台活动、温控机制之间的相互影响。实验可从 [llama.cpp 的 Android 部署](https://github.com/ggml-org/llama.cpp/blob/master/docs/android.md) 入手，也可根据设备后端适配 MLC-LLM 或 ExecuTorch。[S25 系列规格](https://images.samsung.com/is/content/samsung/assets/us/business/mobile/phones/galaxy-s25/02052025/S25_Series_B2B_Spec_Sheet_HRc.pdf) 可用于记录硬件配置；这篇 [端侧 GPU 推理论文](https://www.openaccess.thecvf.com/content/CVPR2025W/EDGE/papers/Tang_Scaling_On-Device_GPU_Inference_for_Large_Generative_Models_CVPRW_2025_paper.pdf) 则提供了 Samsung、Pixel 和 Xiaomi 等设备的跨平台比较案例。

## 网络研究工具：awesome-pcaptools

[awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools) 汇集了网络流量处理工具，是查找抓包、解析、转换、分析和可视化项目的入口。在边缘计算实验中，可以按以下需求寻找工具：

- **理解通信过程**：检查请求、响应及协同节点之间的数据交换。
- **分析通信代价**：观察包大小、传输量、连接行为与协议开销。
- **关联系统表现**：将网络记录与应用日志、推理阶段时间戳对应起来，定位计算、网络和调度中的等待。
- **整理实验输入**：筛选并清洗实验 trace，用于后续分析或回放。

记录抓包位置、时间同步方式、截断长度和丢包情况，并对齐跨设备日志，可以让时延与吞吐量分析对应到具体的系统行为。

## 把工具用到具体问题里

仿真平台帮助验证机制，真实设备承载系统实现，网络工具则把通信过程转化为可分析的数据。将三者结合起来，可以从算法设计一路追踪到实际运行表现。

