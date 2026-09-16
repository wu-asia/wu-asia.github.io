export const copy = {
  en: {
    languageSwitch: '中文',
    navAbout: 'About', navProjects: 'Projects', navWriting: 'Writing', navNotes: 'Notes', available: 'Available',
    heroEyebrow: 'Computer Science · 2026', viewProjects: 'View Projects',
    aboutLabel: '01 / About me', aboutHeading: 'A learner drawn to the systems behind intelligent software.',
    exploringLabel: '02 / Currently exploring', projectsLabel: '03 / Featured projects', projectsHint: 'Selected work will appear here.',
    viewAllProjects: 'View all projects', stackLabel: '04 / Tech stack', postsLabel: '05 / Latest posts', postsHint: 'Thoughts and notes, soon.', viewAllPosts: 'View all posts',
    projectsEyebrow: 'Projects', projectsHeading: 'Selected work.', projectsDescription: 'A growing collection of technical explorations and software projects.',
    blogEyebrow: 'Blog', blogHeading: 'Notes and writing.', blogDescription: 'Example content for the future technical blog.',
    notesEyebrow: 'Notes', notesHeading: 'Short learning notes.', notesDescription: 'A lightweight reference for ideas, commands, and concepts.',
    category: 'Category', allCategories: 'All categories', tag: 'Tag', allTags: 'All tags', noNotes: 'No notes match the selected filters.',
    github: 'GitHub', demo: 'Demo', planned: 'Planned', inProgress: 'In progress', complete: 'Complete',
  },
  zh: {
    languageSwitch: 'English',
    navAbout: '关于', navProjects: '项目', navWriting: '文章', navNotes: '笔记', available: '在线',
    heroEyebrow: '计算机科学 · 2026', viewProjects: '查看项目',
    aboutLabel: '01 / 关于我', aboutHeading: '探索智能软件背后系统的学习者。',
    exploringLabel: '02 / 正在探索', projectsLabel: '03 / 精选项目', projectsHint: '精选作品将在这里呈现。',
    viewAllProjects: '查看所有项目', stackLabel: '04 / 技术栈', postsLabel: '05 / 最新文章', postsHint: '思考与笔记，即将更新。', viewAllPosts: '查看所有文章',
    projectsEyebrow: '项目', projectsHeading: '精选作品。', projectsDescription: '持续积累的技术探索与软件项目。',
    blogEyebrow: '博客', blogHeading: '思考与记录。', blogDescription: '未来技术博客的示例内容。',
    notesEyebrow: '笔记', notesHeading: '简短学习笔记。', notesDescription: '用于记录想法、命令和概念的轻量参考。',
    category: '分类', allCategories: '全部分类', tag: '标签', allTags: '全部标签', noNotes: '没有符合筛选条件的笔记。',
    github: 'GitHub', demo: '演示', planned: '计划中', inProgress: '进行中', complete: '已完成',
  },
} as const;

export type Language = keyof typeof copy;
