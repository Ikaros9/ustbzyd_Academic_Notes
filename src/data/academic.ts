export const profile = {name:"ZhangYida",englishName:"Yida Zhang",role:"博士在读",institution:"北京科技大学 · USTB",tagline:"探索高效智能，也收藏微小的美好。",introduction:"我是 ZhangYida，北京科技大学（USTB）计算机科学与技术专业博士研究生。我的研究方向包括边缘计算、大模型推理加速与 IoT。",email:"ustbzyd@163.com",avatar:"/images/ikaros-avatar.webp",interests:["边缘计算","大模型推理加速","IoT"]};
export interface Publication {id:string;title:string;authors:string[];year:number;date:string;venue:string;status:"preprint"|"accepted"|"published";selected:boolean;summary:string;abstract:string;url?:string;linkLabel?:string;photos?:{src:string;alt:string;caption:string;width:number;height:number}[];pdf?:string;code?:string;project?:string;bibtex:string;}
const authors=["Yida Zhang","Zhiyong Gao","Shuaibing Yue","Jie Li","Rui Wang"];
const entries = [
{id:"2609.02514",title:"AceSpec: An Asymmetric Edge-Cloud Collaborative Framework for Communication-Efficient LLM Inference",date:"2026-09-02",selected:true,summary:"通过非对称通信与概率状态缓存，减少广域网下协同推理的回滚开销。",abstract:"本文针对不稳定广域网中的推测拒绝与流水线停顿，提出 AceSpec。框架利用边缘计算资源构建概率状态缓存，将部分跨网络回滚转换为本地查询，并结合非对称通信协议及网络感知资源分配以降低带宽需求。此处为摘要中文概述，完整摘要见 arXiv。"},
{id:"2603.19133",title:"PicoSpec: A Pipelined Collaborative Speculative Decoding Framework for Efficient Edge-Cloud LLM Inference",date:"2026-03-19",selected:false,summary:"采用异步流水线与稀疏压缩采样，重叠端云推理的计算和通信。",abstract:"PicoSpec 是无需额外训练的端云协同推测解码框架。通过异步执行边缘草拟与云端验证，减少双方等待；通过分离拒绝采样和稀疏压缩，降低词表分布传输带来的通信负担。此处为摘要中文概述，完整摘要见 arXiv。"}
];
export const publications:Publication[]=entries.map(p=>({...p,authors,year:2026,venue:"arXiv",status:"preprint",url:`https://arxiv.org/abs/${p.id}`,pdf:`https://arxiv.org/pdf/${p.id}`,bibtex:`@misc{zhang${p.id.replace('.','')},\n  title={${p.title}},\n  author={${authors.join(' and ')}},\n  year={2026},\n  eprint={${p.id}},\n  archivePrefix={arXiv},\n  primaryClass={cs.DC},\n  url={https://arxiv.org/abs/${p.id}}\n}`}));
publications.push({
  id: "sccf-cwsn-2024",
  title: "SCCF:一种基于任务状态管理的服务约束边缘计算仿真框架",
  authors: ["张易达", "苏晓", "王家濠", "肖克江", "王睿"],
  year: 2024,
  date: "2024",
  venue: "第十八届中国物联网学术会议（CWSN 2024）· 太原",
  status: "published",
  selected: false,
  summary: "通过任务状态管理与任务依赖建模，支持不同服务约束下的协同调度与过程可控仿真。",
  abstract: "SCCF（Service Constrained Collaboration Framework，服务约束协作框架）运行于 EasiEI 仿真平台，面向边缘计算中任务依赖复杂、执行状态难以感知与多约束协同仿真支持不足的问题。框架通过控制不同节点上多阶段任务的性能指标，实现服务约束下的协同任务调度，并利用状态管理模块感知任务状态、灵活控制执行过程。论文通过基于真实世界数据集的案例研究，验证任务依赖建模和实验过程再现能力。此处为论文摘要概述。",
  photos: [
    {src: "/images/cwsn-2024-presentation.webp", alt: "CWSN 2024 SCCF 报告现场，屏幕展示论文标题和作者", caption: "CWSN 2024 · SCCF 报告现场，太原。", width: 1600, height: 1200},
    {src: "/images/cwsn-2024-memories.webp", alt: "CWSN 2024 参会回忆拼图：会场、会议纪念品、住宿与旅途", caption: "CWSN 2024 · 太原参会与旅途留影。", width: 1500, height: 2000}
  ],
  bibtex: `@inproceedings{zhang2024sccf,
  title = {{SCCF}: 一种基于任务状态管理的服务约束边缘计算仿真框架},
  author = {张易达 and 苏晓 and 王家濠 and 肖克江 and 王睿},
  booktitle = {第十八届中国物联网学术会议（CWSN 2024）},
  address = {太原},
  year = {2024}
}`
});
export const news=entries.map(p=>({date:p.date,text:`${p.title.split(':')[0]} 预印本提交至 arXiv。`}));



export const education = [
  {period: "2024—至今", institution: "北京科技大学", degree: "博士研究生", program: "计算机科学与技术"},
  {period: "2020—2024", institution: "北京科技大学", degree: "本科", program: "理科试验班（物联网工程）"},
];

