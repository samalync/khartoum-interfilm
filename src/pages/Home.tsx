import { useState, useMemo, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../../types';
import { useLanguage } from '../components/LanguageContext';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Home() {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeAboutModal, setActiveAboutModal] = useState<string | null>(null);
  const [activeTeamMember, setActiveTeamMember] = useState<any>(null);

  const services: Service[] = useMemo(
    () =>
      language === 'ar'
        ? [
            {
              title: 'المونتاج والفوتوغراف',
              description: 'أفلام سينمائية، مواد مرئية للشركات، ومحتوى رقمي مصمم ليحكي قصة علامتك التجارية بأسلوب احترافي.',
              icon: 'video',
              details:
                'ندير دورة الإنتاج كاملة من الفكرة والسيناريو والتصوير حتى المونتاج ومعالجة الألوان والصوت، مع تكييف المحتوى لكل منصة (تلفزيون، سوشيال ميديا، شاشات عرض داخلية).',
              projects: [
                {
                  title: 'عرض إنشاء المحتوى',
                  description: 'تقنيات إنشاء المحتوى والسرد الرقمي المهنية للعلامات التجارية الحديثة.',
                  media: '/videography/content-creating-2.mp4'
                },
                {
                  title: 'إنتاج المحتوى الرقمي',
                  description: 'خدمات إنتاج المحتوى الرقمي الشاملة بما في ذلك الكتابة والتصوير والتحرير.',
                  media: '/videography/content-creating.mp4'
                },
                {
                  title: 'مغامرات فريق الذهب',
                  description: 'تغطية وثائقية لتجارب السفر ومغامرات الفريق.',
                  media: '/videography/golden-team-trips.mp4'
                },
                {
                  title: 'احتفالات عيد الاستقلال',
                  description: 'تغطية سينمائية للاحتفالات الوطنية والأحداث الوطنية في السودان.',
                  media: '/videography/independance-day.mp4'
                },
                {
                  title: 'أحداث السفارة السودانية العسكرية',
                  description: 'توثيق رسمي للأحداث الدبلوماسية والعسكرية في سفارة السودان.',
                  media: '/videography/sudan-embassy-military.mp4'
                },
                {
                  title: 'الزفاف السوداني التقليدي',
                  description: 'توثيق جميل لمراسم وأعراس سودانية تقليدية.',
                  media: '/videography/sudanese-weddings.mp4'
                },
                {
                  title: 'مغامرات فريق الذهب الجزء الثاني',
                  description: 'تغطية ممتدة لمغامرات الفريق والرحلات والأنشطة الجماعية.',
                  media: '/videography/trips-golden-team-2.mp4'
                },
                {
                  title: 'أحداث الجامعة وحياة الحرم الجامعي',
                  description: 'تغطية ديناميكية لأحداث الجامعة والاحتفالات الأكاديمية وحياة الطلاب.',
                  media: '/videography/unilak.mp4'
                },
                {
                  title: 'خدمات التعليق الصوتي المهنية',
                  description: 'إنتاج تعليق صوتي عالي الجودة للإعلانات والوثائقيات والتواصل المؤسسي.',
                  media: '/videography/voiceover.mp4'
                }
              ],
            },
            {
              title: 'التصميم الجرافيكي',
              description: 'هويات بصرية، تصميم حملات، ومطبوعات تبقي علامتك حاضرة في ذهن الجمهور.',
              icon: 'design',
              details:
                'نصمم أنظمة هوية متكاملة يمكن تطبيقها على جميع نقاط الاتصال: الشعار، الأدلة البصرية، المواد المطبوعة، وقوالب المحتوى الرقمي.',
              projects: [
                {
                  title: 'تصميم علامة مطعم 249',
                  description: 'تصميم هوية بصرية شاملة ومواد تسويقية لتجربة مطعم فاخرة في الخرطوم.',
                  images: [
                    '/graphic design/249 Restaurant/44-100.jpg',
                    '/graphic design/249 Restaurant/55-100.jpg',
                    '/graphic design/249 Restaurant/65-100.jpg',
                    '/graphic design/249 Restaurant/444-100.jpg'
                  ]
                },
                {
                  title: 'نادي الهلال الرياضي',
                  description: 'تصميم شامل للعلامة التجارية لأكبر نادي كرة قدم سوداني، بما في ذلك القمصان والملصقات والأصول الرقمية.',
                  images: [
                    '/graphic design/Al Hilal S.C/1.jpg',
                    '/graphic design/Al Hilal S.C/2.jpg',
                    '/graphic design/Al Hilal S.C/3.png',
                    '/graphic design/Al Hilal S.C/4.png'
                  ]
                },
                {
                  title: 'العلامة الرسمية لسفارة السودان',
                  description: 'تصميم اتصال رسمي وتصميم علامة تجارية تمثل الهوية الوطنية والفخامة.',
                  images: [
                    '/graphic design/Embassy of Sudan/ddf-100.jpg',
                    '/graphic design/Embassy of Sudan/gdgg-100.jpg',
                    '/graphic design/Embassy of Sudan/s11 copy 3-100.jpg',
                    '/graphic design/Embassy of Sudan/s111-100.jpg',
                    '/graphic design/Embassy of Sudan/sd1.jpg'
                  ]
                },
                {
                  title: 'وكالة كريبتونايت الإبداعية',
                  description: 'هوية بصرية جريئة ومبتكرة لوكالة إبداعية متخصصة في التسويق الرقمي وتطوير العلامات التجارية.',
                  images: [
                    '/graphic design/Kriptonite/k1.jpg',
                    '/graphic design/Kriptonite/k2.jpg',
                    '/graphic design/Kriptonite/k3.jpg'
                  ]
                },
                {
                  title: 'مبادرة شباب هلون الشبابية',
                  description: 'تصميم اتصال بصري موجه للشباب وتواصل مع المجتمع لبرامج التأثير الاجتماعي.',
                  images: [
                    '/graphic design/shbab hlwen/shbab 1.png',
                    '/graphic design/shbab hlwen/shbab-.png',
                    '/graphic design/shbab hlwen/shbab-2.png',
                    '/graphic design/shbab hlwen/shbab-3.png',
                    '/graphic design/shbab hlwen/shbab-4.png'
                  ]
                },
                {
                  title: 'جمعية الطلاب السودانيين',
                  description: 'تصميم علامة تجارية تعليمية ومجتمعية للطلاب السودانيين في الخارج، تعزيز التواصل الثقافي والتميز الأكاديمي.',
                  images: [
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 4-100.jpg',
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 5-100.jpg',
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 6-100.jpg',
                    '/graphic design/Sudanese Students Association/Billboard 3.jpg'
                  ]
                },
                {
                  title: 'يسر للأزياء والأسلوب',
                  description: 'هوية بصرية أنيقة ومتطورة لعلامة أزياء تجسد التراث السوداني والأسلوب الحديث.',
                  images: [
                    '/graphic design/Yusr/y1 copy 2.png',
                    '/graphic design/Yusr/y1 copy 3.png',
                    '/graphic design/Yusr/y1 copy 4.png'
                  ]
                },
                {
                  title: 'زوال في رواندا المجتمعية',
                  description: 'تصميم علامة تجارية ثقافية ومجتمعية للشتات السوداني في رواندا، تحتفل بالتراث المشترك والاندماج المحلي.',
                  images: [
                    '/graphic design/Zoal in Rwanda/zool 1.jpg',
                    '/graphic design/Zoal in Rwanda/zool 2.jpg',
                    '/graphic design/Zoal in Rwanda/zool 3.jpg',
                    '/graphic design/Zoal in Rwanda/zool 4.jpg',
                    '/graphic design/Zoal in Rwanda/zool 5.jpg'
                  ]
                }
              ],
            },
            {
              title: 'التسويق',
              description: 'استراتيجيات تسويقية عملية تربط المحتوى بنتائج واضحة في المبيعات والنمو.',
              icon: 'marketing',
              details:
                'نبني خطط حملات متكاملة تجمع بين المحتوى، الإعلانات، والتحليلات مع لوحات متابعة توضح العائد من الاستثمار لكل قناة.',
              projects: [
                {
                  title: 'تطوير استراتيجية التسويق',
                  description: 'تحليل السوق والمنافسين، تحديد الجمهور المستهدف، إنشاء خطط تسويقية قصيرة وطويلة الأمد، تحديد مؤشرات الأداء الرئيسية، وتطوير خرائط تنفيذ واضحة لتوجيه نمو أعمالك.'
                },
                {
                  title: 'إدارة وسائل التواصل الاجتماعي',
                  description: 'إدارة شاملة لوجود وسائل التواصل الاجتماعي بما في ذلك إنشاء وإدارة الصفحات، تطوير خطط النشر الأسبوعية والشهرية، كتابة المحتوى المهنية والتصميم الجرافيكي، إدارة التفاعلات مع العملاء، وتقديم تقارير أداء شهرية مفصلة.'
                },
                {
                  title: 'حملات الإعلانات المدفوعة',
                  description: 'استراتيجيات إعلانية مدفوعة عبر منصات فيسبوك وإنستغرام وتيك توك مع تخطيط ميزانية شامل، تحسين الأداء المستمر، وتقارير تحليل مفصلة لزيادة العائد على الاستثمار.'
                },
                {
                  title: 'إنتاج المحتوى الإبداعي',
                  description: 'كتابة إعلانات احترافية، إنتاج فيديوهات قصيرة جذابة (Reels/TikTok)، سرد قصص العلامة التجارية المؤثرة، وتطوير محتوى مرئي إبداعي لبناء سرديات علامة تجارية قوية وزيادة التفاعل مع الجمهور.'
                },
                {
                  title: 'خدمات التصميم الجرافيكي',
                  description: 'تصميم هوية علامة تجارية وشعار كاملة، ملفات تعريف شركة احترافية، عروض تقديم PowerPoint، ملصقات، منشورات، وتصميمات وسائل التواصل الاجتماعي محسّنة لتعزيز حضور علامتك التجارية البصرية.'
                },
                {
                  title: 'إدارة مشاريع التسويق',
                  description: 'خدمات إدارة تسويقية شاملة بما في ذلك الإشراف على وسائل التواصل الاجتماعي، استراتيجية المحتوى، إدارة الإعلانات، التخطيط الشهري للمشاريع، وتقارير الأداء المفصلة لنجاح الحملة الكامل.'
                },
                {
                  title: 'حملات إطلاق المنتجات الجديدة',
                  description: 'دعم إطلاق منتج شامل من البداية إلى النهاية بما في ذلك التحليل الشامل للجمهور والمنتج، تطوير استراتيجية إطلاق، تنفيذ حملة متعددة القنوات، وتتبع الأداء المستمر لإطلاق سوق ناجح.'
                },
                {
                  title: 'خدمات إعادة العلامة التجارية',
                  description: 'خدمات تحويل العلامة التجارية الشاملة بما في ذلك التقييم الشامل للعلامة، إعادة تصميم هوية العلامة الكاملة، تخطيط التنفيذ الاستراتيجي، وإطلاق الهوية الجديدة من خلال حملات تسويقية متكاملة.'
                }
              ],
            },
            {
              title: 'التعليق الصوتي',
              description: 'أصوات احترافية بعدة لهجات ولغات تناسب الأفلام، الإعلانات، والبودكاست.',
              icon: 'voiceover',
              details:
                'نختار لك الصوت الأنسب لعلامتك، وندير عملية التسجيل والمكساج بالكامل لتخرج الرسالة بصوت واضح ومؤثر على كل المنصات.',
              projects: [
                {
                  title: 'خدمات التعليق الصوتي المهنية',
                  description: 'إنتاج تعليق صوتي عالي الجودة للإعلانات والوثائقيات والتواصل المؤسسي.',
                  media: '/videography/voiceover.mp4'
                }
              ],
            },
            {
              title: 'تطوير الأعمال',
              description: 'دعم استراتيجي يحول الحملات والوعي بالعلامة إلى فرص حقيقية وعلاقات طويلة الأمد.',
              icon: 'development',
              details:
                'نساعدك في بناء خطط نمو، شراكات، وفرص جديدة بالاعتماد على البيانات والرؤى القادمة من التسويق والأداء الرقمي.',
              projects: [
                {
                  title: 'دراسات السوق والتحليل',
                  description: 'دراسات السوق والفرص، تحليل المنافسين، رؤى سلوك العملاء، والتقارير الاستراتيجية لاتخاذ القرارات.'
                },
                {
                  title: 'نماذج الأعمال وخطط النمو',
                  description: 'لوحة أعمال Canvas، استراتيجيات النمو والتوسع، الخطط التشغيلية (قصيرة وطويلة الأمد)، والخرائط الاستراتيجية للشركات.'
                },
                {
                  title: 'الشراكات وتطوير العملاء',
                  description: 'العثور على العملاء والشركاء المحتملين، إعداد عرض تقديمي احترافي، بناء وصيانة العلاقات التجارية، وتحويل العملاء المحتملين إلى عملاء نشيطين.'
                },
                {
                  title: 'تحسين العمليات',
                  description: 'تطوير سير العمل الداخلي، إنشاء سياسات وبروتوكولات بسيطة، وتصميم قوالب ونماذج تشغيلية.'
                },
                {
                  title: 'تدريب التطوير التجاري',
                  description: 'مهارات التواصل والإقناع، تطوير خطط الأعمال والنماذج، ومهارات التفاوض.'
                }
              ],
            },
            {
              title: 'تنسيق الأحداث',
              description: 'خدمات شاملة لتخطيط وتنسيق الأحداث للشركات، إطلاق المنتجات، والمناسبات الخاصة.',
              icon: 'event',
              details: 'من التخطيط إلى التنفيذ، نتولى جميع جوانب تنسيق الأحداث بما في ذلك اختيار المكان، اللوجستيات، الترفيه، وتحليل ما بعد الحدث. يضمن فريقنا تنفيذاً سلساً وتجارب لا تُنسى تتوافق مع أهداف علامتك التجارية.',
              projects: [
                {
                  title: 'إدارة الأحداث الشركاتية',
                  description: 'التخطيط والتنفيذ الشامل للأحداث الشركاتية، المؤتمرات، وأنشطة بناء الفريق.'
                },
                {
                  title: 'أحداث إطلاق المنتجات',
                  description: 'إطلاقات منتجات مذهلة مع عروض تقديمية جذابة، عروض توضيحية، وتفاعل مع الجمهور.'
                },
                {
                  title: 'الأحداث الثقافية والاجتماعية',
                  description: 'التخطيط والتنسيق للاحتفالات الثقافية، التجمعات الاجتماعية، والأحداث المجتمعية.'
                }
              ],
            },
            {
              title: 'الحلول البرمجية',
              description: 'مواقع وأنظمة وأدوات رقمية تجعل التسويق والمبيعات والعمليات أكثر سلاسة.',
              icon: 'software',
              details:
                'بالشراكة مع Samalync ننفذ مواقع وأنظمة ولوحات تحكم تدعم التسويق والمبيعات وتوفر وقت فريقك من خلال الأتمتة والتقارير الواضحة.',
              projects: [
                'مواقع تسويقية وصفحات هبوط للحملات',
                'لوحات تحكم لتقارير الأداء الإعلاني',
                'أدوات داخلية مؤتمتة للمهام المتكررة',
              ],
            },
          ]
        : [
            {
              title: 'Video editing & Photography',
              description:
                'Cinematic films, corporate visuals, and social-first content with story-first editing and on-brand photography.',
              icon: 'video',
              details:
                'We handle the full lifecycle from storyboard to final cut: scripting, directing, filming, editing, color, and sound. We adapt each piece for TV, social, and in-store, ensuring your visuals are consistent across every channel.',
              projects: [
                {
                  title: 'Content Creation Showcase',
                  description: 'Professional content creation and digital storytelling techniques for modern brands.',
                  media: '/videography/content-creating-2.mp4'
                },
                {
                  title: 'Digital Content Production',
                  description: 'Comprehensive digital content production services including scripting, filming, and editing.',
                  media: '/videography/content-creating.mp4'
                },
                {
                  title: 'Golden Team Travel Adventures',
                  description: 'Documentary-style coverage of team travel experiences and adventure expeditions.',
                  media: '/videography/golden-team-trips.mp4'
                },
                {
                  title: 'Independence Day Celebrations',
                  description: 'Cinematic coverage of national celebrations and patriotic events in Sudan.',
                  media: '/videography/independance-day.mp4'
                },
                {
                  title: 'Sudan Embassy Military Events',
                  description: 'Official documentation of diplomatic and military events at the Sudan Embassy.',
                  media: '/videography/sudan-embassy-military.mp4'
                },
                {
                  title: 'Traditional Sudanese Weddings',
                  description: 'Beautiful documentation of traditional Sudanese wedding ceremonies and celebrations.',
                  media: '/videography/sudanese-weddings.mp4'
                },
                {
                  title: 'Golden Team Adventures Part 2',
                  description: 'Extended coverage of team adventures, expeditions, and group activities.',
                  media: '/videography/trips-golden-team-2.mp4'
                },
                {
                  title: 'University Events & Campus Life',
                  description: 'Dynamic coverage of university events, academic celebrations, and student life.',
                  media: '/videography/unilak.mp4'
                },
                {
                  title: 'Professional Voiceover Services',
                  description: 'High-quality voiceover production for commercials, documentaries, and corporate communications.',
                  media: '/videography/voiceover.mp4'
                }
              ],
            },
            {
              title: 'Graphic Design',
              description:
                'Brand identities, campaign visuals, and layouts that keep your brand instantly recognizable.',
              icon: 'design',
              details:
                'From logos and brand systems to campaign key visuals, we create design systems that scale across print, digital, and OOH. Every asset is optimized for clarity, impact, and consistency.',
              projects: [
                {
                  title: '249 Restaurant Branding',
                  description: 'Complete visual identity and branding materials for a premium restaurant experience in Khartoum.',
                  images: [
                    '/graphic design/249 Restaurant/44-100.jpg',
                    '/graphic design/249 Restaurant/55-100.jpg',
                    '/graphic design/249 Restaurant/65-100.jpg',
                    '/graphic design/249 Restaurant/444-100.jpg'
                  ]
                },
                {
                  title: 'Al Hilal S.C. Sports Club',
                  description: 'Comprehensive branding and visual identity for Sudan\'s premier football club, including jerseys, posters, and digital assets.',
                  images: [
                    '/graphic design/Al Hilal S.C/1.jpg',
                    '/graphic design/Al Hilal S.C/2.jpg',
                    '/graphic design/Al Hilal S.C/3.png',
                    '/graphic design/Al Hilal S.C/4.png'
                  ]
                },
                {
                  title: 'Embassy of Sudan Official Branding',
                  description: 'Diplomatic branding and official visual communications for the Embassy of Sudan, representing national identity and prestige.',
                  images: [
                    '/graphic design/Embassy of Sudan/ddf-100.jpg',
                    '/graphic design/Embassy of Sudan/gdgg-100.jpg',
                    '/graphic design/Embassy of Sudan/s11 copy 3-100.jpg',
                    '/graphic design/Embassy of Sudan/s111-100.jpg',
                    '/graphic design/Embassy of Sudan/sd1.jpg'
                  ]
                },
                {
                  title: 'Kriptonite Creative Agency',
                  description: 'Bold and innovative visual identity for a creative agency specializing in digital marketing and brand development.',
                  images: [
                    '/graphic design/Kriptonite/k1.jpg',
                    '/graphic design/Kriptonite/k2.jpg',
                    '/graphic design/Kriptonite/k3.jpg'
                  ]
                },
                {
                  title: 'Shbab Hlwen Youth Initiative',
                  description: 'Youth-focused branding and visual communications for community engagement and social impact programs.',
                  images: [
                    '/graphic design/shbab hlwen/shbab 1.png',
                    '/graphic design/shbab hlwen/shbab-.png',
                    '/graphic design/shbab hlwen/shbab-2.png',
                    '/graphic design/shbab hlwen/shbab-3.png',
                    '/graphic design/shbab hlwen/shbab-4.png'
                  ]
                },
                {
                  title: 'Sudanese Students Association',
                  description: 'Educational and community-focused branding for Sudanese students abroad, promoting cultural connection and academic excellence.',
                  images: [
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 4-100.jpg',
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 5-100.jpg',
                    '/graphic design/Sudanese Students Association/Artboard 1 copy 6-100.jpg',
                    '/graphic design/Sudanese Students Association/Billboard 3.jpg'
                  ]
                },
                {
                  title: 'Yusr Fashion & Lifestyle',
                  description: 'Elegant and sophisticated visual identity for a fashion brand capturing Sudanese heritage and modern style.',
                  images: [
                    '/graphic design/Yusr/y1 copy 2.png',
                    '/graphic design/Yusr/y1 copy 3.png',
                    '/graphic design/Yusr/y1 copy 4.png'
                  ]
                },
                {
                  title: 'Zoal in Rwanda Community',
                  description: 'Cultural and community-focused branding for Sudanese diaspora in Rwanda, celebrating shared heritage and local integration.',
                  images: [
                    '/graphic design/Zoal in Rwanda/zool 1.jpg',
                    '/graphic design/Zoal in Rwanda/zool 2.jpg',
                    '/graphic design/Zoal in Rwanda/zool 3.jpg',
                    '/graphic design/Zoal in Rwanda/zool 4.jpg',
                    '/graphic design/Zoal in Rwanda/zool 5.jpg'
                  ]
                }
              ],
            },
            {
              title: 'Marketing',
              description:
                'Performance-focused marketing strategies that connect campaigns to clear business KPIs.',
              icon: 'marketing',
              details:
                'We build full-funnel campaign plans that combine content, media, and analytics. Our team aligns messaging, targeting, and reporting so you can see exactly how your marketing is performing. Our Marketing & Business Development Department combines modern marketing strategies with effective business development solutions to help companies expand and achieve sustainable success.',
              projects: [
                {
                  title: 'Marketing Strategy Development',
                  description: 'Market and competitor analysis, defining target audiences, creating short and long-term marketing plans, setting KPIs, and developing clear implementation roadmaps to guide your business growth.'
                },
                {
                  title: 'Social Media Management',
                  description: 'Complete social media presence management including creating and managing pages, developing weekly/monthly posting plans, professional content writing and graphic design, managing customer interactions, and providing detailed monthly performance reports.'
                },
                {
                  title: 'Paid Advertising Campaigns',
                  description: 'Strategic paid advertising across Facebook, Instagram, and TikTok platforms with comprehensive budget planning, continuous performance optimization, and detailed analysis reports to maximize ROI.'
                },
                {
                  title: 'Creative Content Production',
                  description: 'Professional advertising copywriting, engaging short video production (Reels/TikTok), compelling brand storytelling, and creative visual content development to build strong brand narratives and audience engagement.'
                },
                {
                  title: 'Graphic Design Services',
                  description: 'Complete brand identity and logo design, professional company profiles, PowerPoint presentations, posters, flyers, and optimized social media graphics that strengthen your visual brand presence.'
                },
                {
                  title: 'Marketing Project Management',
                  description: 'Comprehensive marketing management services including social media oversight, content strategy, advertising management, monthly project planning, and detailed performance reporting for complete campaign success.'
                },
                {
                  title: 'New Product Launch Campaigns',
                  description: 'End-to-end product launch support including thorough audience and product analysis, comprehensive launch strategy development, multi-channel campaign execution, and ongoing performance tracking for successful market introductions.'
                },
                {
                  title: 'Rebranding Services',
                  description: 'Complete brand transformation services including comprehensive brand assessment, full brand identity redesign, strategic implementation planning, and launching the new identity through integrated marketing campaigns.'
                }
              ],
            },
            {
              title: 'Voiceover',
              description:
                'Professional voice talent in multiple tones and languages for film, radio, and digital.',
              icon: 'voiceover',
              details:
                'We work with a curated roster of voice artists to match your brand\'s tone - warm, authoritative, playful, or cinematic. We handle casting, recording, and final mix for every platform.',
              projects: [
                {
                  title: 'Professional Voiceover Services',
                  description: 'High-quality voiceover production for commercials, documentaries, and corporate communications.',
                  media: '/videography/voiceover.mp4'
                }
              ],
            },
            {
              title: 'Business Development',
              description:
                'Strategic support to turn campaigns and content into long-term business growth.',
              icon: 'development',
              details:
                'We help you translate marketing momentum into pipeline and revenue with go-to-market support, partnership strategies, and growth roadmaps tailored to your stage. Our Business Development Department supports businesses in growing their brands, improving their market presence, and increasing their revenue through comprehensive market research and strategic planning. We combine research, planning, creativity, professional execution, and continuous follow-up to ensure the best results.',
              projects: [
                {
                  title: 'Market Research & Analysis',
                  description: 'Market and opportunity studies, competitor analysis, customer behavior insights, and strategic reports for decision-making.'
                },
                {
                  title: 'Business Models & Growth Plans',
                  description: 'Business Model Canvas, growth and expansion strategies, operational plans (short & long term), and corporate roadmaps.'
                },
                {
                  title: 'Partnership & Client Development',
                  description: 'Finding potential clients and partners, preparing professional pitch decks, building and maintaining business relationships, and turning leads into active clients.'
                },
                {
                  title: 'Process Improvement',
                  description: 'Developing internal workflows, creating simple policies and procedures, and designing operational templates and forms.'
                },
                {
                  title: 'Business Development Training',
                  description: 'Communication and persuasion skills, business plans and model development, and negotiation skills.'
                }
              ],
            },
            {
              title: 'Event Coordinating',
              description: 'Comprehensive event planning and coordination services for corporate events, product launches, and special occasions.',
              icon: 'event',
              details: 'From concept to execution, we handle all aspects of event planning including venue selection, logistics, entertainment, and post-event analysis. Our team ensures seamless execution and memorable experiences that align with your brand objectives.',
              projects: [
                {
                  title: 'Corporate Event Management',
                  description: 'End-to-end planning and execution of corporate events, conferences, and team-building activities.'
                },
                {
                  title: 'Product Launch Events',
                  description: 'Spectacular product launches with engaging presentations, demonstrations, and audience interaction.'
                },
                {
                  title: 'Cultural and Social Events',
                  description: 'Planning and coordination of cultural celebrations, social gatherings, and community events.'
                }
              ],
            },
            {
              title: 'Software Solutions',
              description:
                'Websites, platforms, and tools that make marketing, sales, and operations run smoother.',
              icon: 'software',
              details:
                'In partnership with Samalync, we design and develop digital products that support your marketing—landing pages, dashboards, CRMs, and automation that save your team time.',
              projects: [
                'Marketing websites and landing page systems',
                'Custom dashboards for campaign reporting',
                'Internal tools to automate repetitive workflows',
              ],
            },
          ],
    [language],
  );

  const getServiceBackground = (icon: string) => {
    switch (icon) {
      case 'video':
        return 'photography.png';
      case 'design':
        return 'graphic-design.png';
      case 'marketing':
        return 'marketing.png';
      case 'voiceover':
        return 'voiceover.png';
      case 'development':
        return 'development.png';
      case 'software':
      default:
        return 'software-solutions.svg';
    }
  };

  const renderServiceIcon = (icon: string) => {
    switch (icon) {
      case 'video':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M4 7.5C4 6.12 5.12 5 6.5 5h6A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-6A2.5 2.5 0 0 1 4 16.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="m16 9 3-2v10l-3-2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        );
      case 'design':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 19h6.5M7 5.5 15 3l2 4-8 2.5-2-4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M11 10.5 9.5 16 7 19"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        );
      case 'marketing':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 15V5.5A1.5 1.5 0 0 1 7.4 4.4L17 8.5v7l-9.6 4.1A1.5 1.5 0 0 1 5 18.9V15Z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M17 9.5c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
      case 'voiceover':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect
              x="9"
              y="4"
              width="6"
              height="10"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
      case 'development':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 19V9.5A2.5 2.5 0 0 1 7.5 7H16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M8 13l2.5 2.5L14 11l3 3 3-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect
              x="4"
              y="5"
              width="6"
              height="3"
              rx="1.2"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        );
      case 'event':
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2"
              ry="2"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M8 2v4M16 2v4M3 10h18"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="9" cy="14" r="1.5" fill="currentColor" />
            <circle cx="12" cy="16" r="1.5" fill="currentColor" />
            <circle cx="15" cy="14" r="1.5" fill="currentColor" />
            <path
              d="M19 6l-1 1M19 18l-1 1M5 6l1 1M5 18l1 1"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
      case 'software':
      default:
        return (
          <svg className="service-modal-icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="3"
              ry="2"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M9 10 7 12l2 2M15 10l2 2-2 2M12 9v6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        );
    }
  };

  const goToContactWithSubject = (subject: string) => {
    const input = document.getElementById('contact-subject') as HTMLInputElement | null;
    if (input) {
      input.value = subject;
      input.focus();
    }

    const contact = document.getElementById('contact');
    if (!contact) return;

    const header = document.querySelector<HTMLElement>('.creative-header');
    const headerHeight = header ? header.offsetHeight : 0;
    const top = contact.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              {language === 'ar' ? 'وكالة تسويق واستوديو إنتاج' : 'Marketing agency & production studio'}
            </div>
            <h1>
              {language === 'ar' ? 'مرحباً بكم في الخرطوم إنترفيلم' : 'Welcome to Khartoum InterFilm'}
            </h1>
            <p>
              {language === 'ar'
                ? 'نبتكر حملات تسويقية وأعمالاً مرئية تحكي قصة علامتك التجارية وتساعدها على النمو. من الاستراتيجية إلى الإنتاج، نمزج بين الإبداع والنتائج.'
                : 'We craft bold marketing campaigns, cinematic visuals, and purposeful stories for brands that want to stand out. From strategy to production, our team blends creative storytelling with data-driven execution to move your audience to action.'}
            </p>
            <div className="hero-highlights">
              <div className="pill">{language === 'ar' ? 'استراتيجية الحملات' : 'Campaign strategy'}</div>
              <div className="pill">{language === 'ar' ? 'سرد العلامة التجارية' : 'Brand storytelling'}</div>
              <div className="pill">{language === 'ar' ? 'إنتاج شامل القمع' : 'Full-funnel production'}</div>
            </div>
            <div className="hero-buttons">
              <a href="#services" className="hero-btn-primary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
                color: '#001be0',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '1rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)'
              }}>
                <style>{`
                  .hero-btn-primary::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: linear-gradient(135deg, rgba(0, 27, 224, 0.3), rgba(0, 180, 255, 0.2));
                    border-radius: 50px;
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                  }
                  .hero-btn-primary:hover::before {
                    opacity: 1;
                  }
                  .hero-btn-primary:hover {
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))';
                    transform: translateY(-3px);
                    box-shadow: '0 12px 35px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                  }
                `}</style>
                {language === 'ar' ? 'استعرض الخدمات' : 'Explore services'}
              </a>
              <a href="#contact" className="hero-btn-secondary" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                borderRadius: '50px',
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                color: 'rgba(255, 255, 255, 0.95)',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <style>{`
                  .hero-btn-secondary::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    transform: translate(-50%, -50%);
                    transition: width 0.6s, height 0.6s;
                    z-index: -1;
                  }
                  .hero-btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.6);
                    color: rgba(255, 255, 255, 1);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                  }
                  .hero-btn-secondary:hover::before {
                    width: 300px;
                    height: 300px;
                  }
                `}</style>
                {language === 'ar' ? 'احجز جلسة تعريفية' : 'Book a discovery call'}
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>250+</strong>
                <span>{language === 'ar' ? 'مشاريع تم تسليمها' : 'projects delivered'}</span>
              </div>
              <div>
                <strong>15</strong>
                <span>{language === 'ar' ? 'صناعات تم خدمتها' : 'industries served'}</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>{language === 'ar' ? 'دعم العملاء' : 'client support'}</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #001be0 0%, #0011b0 100%);
            color: var(--text-primary);
            overflow: hidden;
            margin-top: var(--space-16);
            border-radius: 0 0 var(--radius-3xl) var(--radius-3xl);
            box-shadow: var(--shadow-2xl);
          }

          .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)),
              radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15), transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(0, 27, 224, 0.1), transparent 50%);
            pointer-events: none;
          }

          .hero .container {
            position: relative;
            z-index: 2;
            animation: slideUp 1s ease-out;
          }

          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: var(--space-6);
            animation: fadeIn 1.2s ease-out 0.3s both;
          }

          .hero-badge {
            display: inline-flex;
            align-self: center;
            padding: var(--space-3) var(--space-5);
            border-radius: var(--radius-2xl);
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
            animation: bounceIn 1s ease-out 0.6s both;
            position: relative;
            overflow: hidden;
          }

          .hero-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.8s ease;
            z-index: -1;
          }

          .hero-badge:hover::before {
            left: 100%;
          }

          .hero-content h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin: 0;
            font-weight: 900;
            letter-spacing: -0.02em;
            line-height: 1.1;
            background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0 0 40px rgba(255,255,255,0.3);
            animation: slideUp 1s ease-out 0.8s both;
            position: relative;
          }

          .hero-content h1::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, rgba(255,255,255,0.1), transparent, rgba(0,27,224,0.1));
            border-radius: 20px;
            z-index: -1;
            animation: glowPulse 3s ease-in-out infinite;
          }

          .hero-content p {
            font-size: clamp(1.125rem, 2.5vw, 1.375rem);
            max-width: 720px;
            margin: 0 auto;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            animation: fadeIn 1s ease-out 1s both;
          }

          .hero-highlights {
            display: flex;
            gap: var(--space-3);
            justify-content: center;
            flex-wrap: wrap;
            animation: slideUp 1s ease-out 1.2s both;
          }

          .pill {
            padding: var(--space-3) var(--space-4);
            border-radius: var(--radius-full);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.25);
            font-weight: 600;
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }

          .pill:hover {
            background: rgba(255, 255, 255, 0.25);
            color: rgba(255, 255, 255, 1);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }

          .hero-buttons {
            display: flex;
            gap: var(--space-4);
            justify-content: center;
            flex-wrap: wrap;
            margin-top: var(--space-2);
            animation: bounceIn 1s ease-out 1.4s both;
          }

          .hero-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: var(--space-6);
            margin-top: var(--space-16);
            animation: slideUp 1s ease-out 1.6s both;
          }

          .hero-stats div {
            padding: var(--space-8);
            border-radius: var(--radius-3xl);
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
            text-align: center;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--space-4);
          }

          .hero-stats div::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: left 0.6s ease;
            z-index: -1;
          }

          .hero-stats div:hover {
            transform: translateY(-12px) scale(1.05) rotateX(5deg);
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.4);
          }

          .hero-stats div:hover::before {
            left: 100%;
          }

          .stat-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: var(--space-8);
            border-radius: var(--radius-2xl);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-4);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }

          .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.05));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }

          .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            border-color: rgba(0, 27, 224, 0.4);
          }

          .stat-card:hover::before {
            opacity: 1;
          }

          .stat-icon {
            width: 64px;
            height: 64px;
            border-radius: var(--radius-xl);
            background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(0, 27, 224, 0.2);
          }

          .stat-card:hover .stat-icon {
            background: var(--gradient-primary);
            color: white;
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 8px 25px rgba(0, 27, 224, 0.3);
          }

          .stat-icon svg {
            width: 32px;
            height: 32px;
          }

          .stat-number {
            font-size: clamp(2.5rem, 5vw, 3.5rem);
            font-weight: 900;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0;
            line-height: 1;
          }

          .stat-label {
            font-size: 1.125rem;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.95);
            text-align: center;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .stat-description {
            font-size: 0.875rem;
            color: rgba(255, 255, 255, 0.8);
            text-align: center;
            margin: 0;
            font-weight: 500;
          }

          .hero-stats div:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-2xl);
          }

          .hero-stats strong {
            display: block;
            font-size: clamp(2rem, 4vw, 2.5rem);
            font-weight: 900;
            margin-bottom: var(--space-2);
            color: rgba(255, 255, 255, 0.95);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .hero-stats span {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }

          /* Floating Elements */
          .floating-shape {
            position: absolute;
            border-radius: 50%;
            background: var(--gradient-primary);
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
          }

          .floating-shape:nth-child(1) {
            width: 100px;
            height: 100px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
          }

          .floating-shape:nth-child(2) {
            width: 60px;
            height: 60px;
            top: 60%;
            right: 15%;
            animation-delay: 2s;
          }

          .floating-shape:nth-child(3) {
            width: 80px;
            height: 80px;
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-20px) rotate(120deg);
            }
            66% {
              transform: translateY(10px) rotate(240deg);
            }
          }

          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
            }
            50% {
              box-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4);
            }
          }

          @media (max-width: 768px) {
            .hero {
              min-height: 90vh;
              margin-top: var(--space-12);
              border-radius: 0 0 var(--radius-2xl) var(--radius-2xl);
            }

            .hero-content {
              gap: var(--space-4);
            }

            .hero-content h1 {
              font-size: clamp(2rem, 8vw, 3rem);
            }

            .hero-content p {
              font-size: clamp(1rem, 4vw, 1.125rem);
            }

            .hero-highlights {
              gap: var(--space-2);
            }

            .hero-stats {
              grid-template-columns: 1fr;
              gap: var(--space-4);
              margin-top: var(--space-12);
            }

            .hero-buttons {
              gap: var(--space-3);
            }
          }

          @media (max-width: 480px) {
            .hero {
              min-height: 85vh;
              margin-top: var(--space-10);
            }

            .hero-highlights {
              flex-direction: column;
              align-items: center;
            }

            .pill {
              width: 100%;
              max-width: 250px;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-subtitle">{language === 'ar' ? 'ما نقدمه' : 'What We Offer'}</div>
          <div className="section-title">
            <h2 className="section-title-gradient">{language === 'ar' ? 'خدماتنا' : 'Our Services'}</h2>
            <p>
              {language === 'ar'
                ? 'حلول متكاملة في التسويق والإنتاج الإعلامي مصممة لتلبية أهداف عملك.'
                : 'Comprehensive marketing and content production services tailored to your needs'}
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => {
                  if (service.title === 'Software Solutions' || service.title === 'حلول برمجية') {
                    window.open('https://www.samalync.com', '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = `/service/${index}`;
                  }
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
          }

          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-subtitle">{language === 'ar' ? 'تعرف علينا' : 'Get to Know Us'}</div>
          <div className="section-title">
            <h2 className="section-title-gradient">{language === 'ar' ? 'من نحن' : 'About Us'}</h2>
            <p>{language === 'ar' ? 'شركة رائدة في إنتاج المحتوى الإعلاني متخصصة في الفيديوهات والملصقات والتسويق البصري منذ عام 2013.' : 'Leading advertising content production company specializing in videos, posters, and visual marketing since 2013.'}</p>
          </div>
          <div className="about-grid">
            <div className="about-card" onClick={() => window.location.href = '/about/history'}>
              <h3>{language === 'ar' ? 'تاريخنا وخبرتنا' : 'Our History & Experience'}</h3>
              <p>{language === 'ar' ? 'منذ تأسيسنا، تعاوننا مع العديد من العملاء البارزين في السودان وخارجه، مما عزز سمعتنا كواحدة من أفضل الشركات في هذا المجال.' : 'Since our inception, we have collaborated with numerous prominent clients in Sudan and beyond, solidifying our reputation as one of the top companies in this field.'}</p>
              <ul>
                <li>MTN Telecommunications</li>
                <li>Nile Bank</li>
                <li>Coldair Refrigeration & Air Conditioning</li>
                <li>Major food companies</li>
              </ul>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
            <div className="about-card highlight" onClick={() => window.location.href = '/about/international'}>
              <h3>{language === 'ar' ? 'التواجد الدولي' : 'International Presence'}</h3>
              <p>{language === 'ar' ? 'في توسيع تواجدنا الدولي، ساهمنا في الأحداث البصرية للاحتفال بعيد استقلال السودان الذي أقيم في سفارة السودان في رواندا.' : 'In expanding our international presence, we contributed to the visual events of the Sudanese Independence Day Celebration held at the Sudanese Embassy in Rwanda.'}</p>
              <div className="chips">
                <span className="chip">{language === 'ar' ? 'الاحترافية' : 'Professionalism'}</span>
                <span className="chip">{language === 'ar' ? 'التراث الثقافي' : 'Cultural heritage'}</span>
                <span className="chip">{language === 'ar' ? 'الوصول العالمي' : 'Global reach'}</span>
              </div>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
            <div className="about-card" onClick={() => window.location.href = '/about/company'}>
              <h3>{language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview'}</h3>
              <p>{language === 'ar' ? 'نحن مجموعة الخرطوم إنترفيلم، شركة رائدة متخصصة في إنتاج المحتوى الإعلاني بما في ذلك الفيديوهات والملصقات وجميع أنواع التسويق البصري.' : 'We are Khartoum Interfilm Group, a leading company specializing in advertising content production including videos, posters, and all types of visual marketing.'}</p>
              <div className="chips">
                <span className="chip">{language === 'ar' ? 'تأسست 2013' : 'Established 2013'}</span>
                <span className="chip">{language === 'ar' ? 'حلول إبداعية' : 'Creative solutions'}</span>
                <span className="chip">{language === 'ar' ? 'عملاء متنوعون' : 'Diverse clients'}</span>
              </div>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
            <div className="about-card" onClick={() => window.location.href = '/about/mission'}>
              <h3>{language === 'ar' ? 'مهمتنا وقيمنا' : 'Our Mission & Values'}</h3>
              <p>{language === 'ar' ? 'في الخرطوم إنترفيلم، نؤمن أن القوة البصرية والإبداع هما أساس نجاح الأعمال. نبني شراكات طويلة الأمد مبنية على الثقة والجودة.' : 'At Khartoum Interfilm, we believe that visual power and creativity are the foundation of business success. We build long-term partnerships based on trust and quality.'}</p>
              <div className="chips">
                <span className="chip">{language === 'ar' ? 'التميز البصري' : 'Visual excellence'}</span>
                <span className="chip">{language === 'ar' ? 'الشراكة الإبداعية' : 'Creative partnership'}</span>
                <span className="chip">{language === 'ar' ? 'نجاح الأعمال' : 'Business success'}</span>
              </div>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
          </div>
        </div>

        <style>{`
          .about-section {
            background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
          }
          .about-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .about-card {
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.08);
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 12px 40px rgba(0,0,0,0.05);
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 280px;
          }
          .about-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            border-color: rgba(0, 27, 224, 0.2);
          }
          .about-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 27, 224, 0.02), transparent);
            transition: left 0.5s ease;
          }
          .about-card:hover::before {
            left: 100%;
          }
          .about-card h3 {
            margin-bottom: 0.75rem;
            color: var(--primary);
            position: relative;
            z-index: 1;
          }
          .about-card p {
            margin-bottom: 1rem;
            color: var(--dark);
            position: relative;
            z-index: 1;
          }
          .about-card ul {
            padding-left: 1.25rem;
            color: var(--gray);
            display: grid;
            gap: 0.5rem;
            position: relative;
            z-index: 1;
          }
          .highlight {
            background: linear-gradient(135deg, rgba(0, 27, 224, 0.06), rgba(0, 180, 255, 0.06));
          }
          .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            position: relative;
            z-index: 1;
          }
          .chip {
            padding: 8px 12px;
            border-radius: 999px;
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.15);
            font-weight: 600;
            font-size: 0.9rem;
          }
          .card-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--primary);
            font-weight: 600;
            font-size: 0.95rem;
            margin-top: 1rem;
            position: relative;
            z-index: 1;
            transition: color 0.3s ease;
          }
          .card-link:hover {
            color: var(--secondary);
          }
          .card-link::after {
            content: '';
            width: 0;
            height: 2px;
            background: var(--primary);
          }
        `}</style>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-subtitle">{language === 'ar' ? 'فريقنا الرائع' : 'Our Amazing Team'}</div>
          <div className="section-title">
            <h2 className="section-title-gradient">{language === 'ar' ? 'تعرف على الفريق' : 'Meet the Team'}</h2>
            <p>{language === 'ar' ? 'مواهب متعددة التخصصات تدفع الاستراتيجية والإنتاج والأداء.' : 'Cross-disciplinary talent powering strategy, production, and performance.'}</p>
          </div>

          <div className="team-cover">
            <img
              src="/kh.png"
              alt="Khartoum Interfilm Team"
              width={1200}
              height={600}
              className="team-image"
            />
          </div>

          <div className="team-grid">
            {[
              {
                name: 'Kareem Khalid',
                role: 'Chief Executive Officer (CEO)',
                roleAr: 'الرئيس التنفيذي',
                bio: 'Visionary leader driving the company\'s strategic direction and fostering a culture of innovation and excellence. With over 10 years of experience in creative industries, Kareem leads our team with a focus on delivering exceptional results for our clients.',
                bioAr: 'قائد رؤيوي يقود الاتجاه الاستراتيجي للشركة ويعزز ثقافة الابتكار والتميز. مع أكثر من 10 سنوات من الخبرة في الصناعات الإبداعية، يقود كريم فريقنا مع التركيز على تقديم نتائج استثنائية لعملائنا.',
                image: '/1.JPEG',
                skills: ['Strategic Leadership', 'Business Development', 'Client Relations']
              },
              {
                name: 'Hozaifa Tarig',
                role: 'Creative Director',
                roleAr: 'مدير إبداعي',
                bio: 'Oversees the artistic vision, ensuring every project meets our high standards of creativity and impact. Hozaifa brings innovative design solutions and artistic direction to all our creative projects.',
                bioAr: 'يشرف على الرؤية الفنية، وضمان أن يلبي كل مشروع معاييرنا العالية في الإبداع والتأثير. يجلب حذيفة حلول تصميم مبتكرة وتوجيهاً فنياً لجميع مشاريعنا الإبداعية.',
                image: '/2.JPEG',
                skills: ['Creative Direction', 'Art Direction', 'Brand Strategy']
              },
              {
                name: 'Awab Ahmed',
                role: 'Marketing & Business Development Lead',
                roleAr: 'قائد التسويق والتطوير التجاري',
                bio: 'Develops strategic partnerships and marketing initiatives to expand our reach and deliver value. Awab specializes in digital marketing strategies and business development.',
                bioAr: 'يطور الشراكات الاستراتيجية ومبادرات التسويق لتوسيع نطاقنا وتقديم القيمة. يتخصص عواب في استراتيجيات التسويق الرقمي والتطوير التجاري.',
                image: '/3.JPEG',
                skills: ['Digital Marketing', 'Business Development', 'Strategic Planning']
              },
              {
                name: 'Rawan Faroug',
                role: 'Programs Coordinator and Planner',
                roleAr: 'منسق البرامج ومخطط',
                bio: 'Orchestrates project timelines and resources, ensuring seamless execution from concept to delivery. Rawan excels in project management and coordination.',
                bioAr: 'ينظم جداول المشاريع والموارد، وضمان تنفيذ سلس من الفكرة إلى التسليم. تتفوق روان في إدارة المشاريع والتنسيق.',
                image: '/4.JPEG',
                skills: ['Project Management', 'Resource Planning', 'Team Coordination']
              },
              {
                name: 'Mujtaba Amin',
                role: 'Technical Lead',
                roleAr: 'القائد التقني',
                bio: 'Expert in technical solutions, ensuring our digital productions are built on robust and scalable foundations. Mujtaba leads our technical team with cutting-edge solutions.',
                bioAr: 'خبير في الحلول التقنية، وضمان بناء إنتاجاتنا الرقمية على أساس متين وقابل للتوسع. يقود مجتبى فريقنا التقني بحلول متقدمة.',
                image: '/5.JPEG',
                skills: ['Technical Leadership', 'Software Development', 'System Architecture']
              },
              {
                name: 'Muaz Muntasir',
                role: 'Video Editor',
                roleAr: 'محرر فيديو',
                bio: 'Crafts compelling narratives through precise editing and post-production mastery. Muaz specializes in cinematic storytelling and video production.',
                bioAr: 'يصنع روايات جذابة من خلال التحرير الدقيق وإتقان ما بعد الإنتاج. يتخصص معاذ في السرد السينمائي وإنتاج الفيديو.',
                image: '/6 .JPEG',
                skills: ['Video Editing', 'Post-Production', 'Cinematography']
              },
              {
                name: 'Mohammed Abdelmoneim',
                role: 'Photographer & Graphic Designer',
                roleAr: 'مصور فوتوغرافي ومصمم جرافيكي',
                bio: 'Captures moments and designs visuals that resonate with audiences and strengthen brand identity. Mohammed combines photography and design expertise.',
                bioAr: 'يلتقط اللحظات ويصمم مرئيات تتردد صداها مع الجماهير وتعزز هوية العلامة التجارية. يجمع محمد بين خبرة التصوير والتصميم.',
                image: '/7 .JPEG',
                skills: ['Photography', 'Graphic Design', 'Visual Branding']
              },
              {
                name: 'Mohammed Yaser',
                role: 'Videographer',
                roleAr: 'مصور فيديو',
                bio: 'Brings stories to life through expert camera work and a keen eye for visual composition. Mohammed specializes in videography and visual storytelling.',
                bioAr: 'يحيي القصص من خلال العمل الاحترافي بالكاميرا وعين حادة للتركيب البصري. يتخصص محمد في التصوير الفيديو والسرد البصري.',
                image: '/8 .JPEG',
                skills: ['Videography', 'Visual Storytelling', 'Camera Work']
              },
              {
                name: 'Kashif Abdelmajed',
                role: 'Customer Service',
                roleAr: 'خدمة العملاء',
                bio: 'Dedicated to ensuring client satisfaction and maintaining clear, positive communication channels. Kashif excels in customer relations and support.',
                bioAr: 'مكرس لضمان رضا العملاء وصيانة قنوات التواصل الواضحة والإيجابية. يتفوق كشف في علاقات العملاء والدعم.',
                image: '/9 .JPEG',
                skills: ['Customer Service', 'Client Relations', 'Communication']
              },
              {
                name: 'Obay Eljinaid',
                role: 'Public Relations',
                roleAr: 'العلاقات العامة',
                bio: 'Manages our public image and builds strong relationships with media and the community. Obay specializes in public relations and media relations.',
                bioAr: 'يدير صورتنا العامة ويبني علاقات قوية مع الإعلام والمجتمع. يتخصص عبيد في العلاقات العامة وعلاقات الإعلام.',
                image: '/10.JPEG',
                skills: ['Public Relations', 'Media Relations', 'Communications']
              },
              {
                name: 'Ali Tajeldein',
                role: 'Content Creator',
                roleAr: 'منشئ محتوى',
                bio: 'Produces engaging content that connects with audiences across various digital platforms. Ali specializes in content creation and digital media.',
                bioAr: 'ينتج محتوى جذاب يتواصل مع الجماهير عبر مختلف المنصات الرقمية. يتخصص علي في إنشاء المحتوى والوسائط الرقمية.',
                image: '/11.JPEG',
                skills: ['Content Creation', 'Digital Media', 'Social Media']
              }
            ].map((member) => (
              <div
                key={member.name}
                className="team-card"
                onClick={() => setActiveTeamMember(member)}
                style={{ cursor: 'pointer' }}
              >
                <div className="member-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="member-image"
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{language === 'ar' ? member.roleAr || member.role : member.role}</p>
                <p className="bio">{language === 'ar' ? member.bioAr || member.bio : member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .team-cover {
            margin-bottom: 3rem;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border: 1px solid rgba(0,0,0,0.05);
          }
          .team-image {
            width: 100%;
            height: auto;
            display: block;
          }
          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          .team-card {
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.08);
            border-radius: 16px;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          }
          .member-image-container {
            width: 180px;
            height: 180px;
            margin: 0 auto 1rem;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .member-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          .role {
            color: #001299;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }
          .bio {
            color: var(--gray);
            font-size: 0.95rem;
            line-height: 1.5;
          }
          .team-card p {
            margin-bottom: 2.5rem;
          }
        `}</style>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="section partnerships-section">
        <div className="container">
          <div className="section-subtitle">{language === 'ar' ? 'شراكاتنا الاستراتيجية' : 'Our Strategic Partners'}</div>
          <div className="section-title">
            <h2 className="section-title-gradient">{language === 'ar' ? 'شركاؤنا' : 'Partnerships'}</h2>
            <p>{language === 'ar' ? 'نتعاون مع الأفضل لتقديم حلول متكاملة' : 'Collaborating with the best to deliver integrated solutions'}</p>
          </div>
          <div className="partners-grid">
             <div className="partner-card" onClick={() => window.open('https://www.samalync.com', '_blank', 'noopener,noreferrer')}>
                <div className="partner-logo">
                   <img
                      src="/Samalync.png"
                      alt="Samalync Solutions Ltd"
                      width={300}
                      height={180}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                   />
                </div>
                <h3>Samalync Solutions Ltd</h3>
                <span className="subtitle">{language === 'ar' ? 'شركة برمجيات' : 'Software Company'}</span>
                <p>{language === 'ar' ? 'شريكنا التقني الموثوق للحلول الرقمية، يقدم خدمات البرمجة والتطوير والحلول السحابية المتقدمة لدعم مشاريعنا الرقمية.' : 'Our trusted technical partner for digital solutions, providing advanced programming, development, and cloud solutions to support our digital projects and ensure seamless integration across all platforms.'}</p>
             </div>
             <div className="partner-card">
                <div className="partner-logo">
                   <img
                      src="/serava-team.png"
                      alt="Serava Team"
                      width={300}
                      height={180}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                   />
                </div>
                <h3>Serava Team</h3>
                <span className="subtitle">{language === 'ar' ? 'إنتاج إبداعي' : 'Creative Production'}</span>
                <p>{language === 'ar' ? 'فريق مبتكر متخصص في الإنتاج الإبداعي وإنشاء المحتوى الرقمي، يحول الأفكار الجديدة إلى واقع من خلال تقنيات متقدمة وسرد القصص.' : 'Innovative team specializing in creative production and digital content creation, bringing fresh ideas to life through cutting-edge techniques and storytelling.'}</p>
             </div>
             {/* <div className="partner-card">
                <div className="partner-logo">
                   <img
                      src="/golden-team.png"
                      alt="Golden Team"
                      width={300}
                      height={180}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                   />
                </div>
                <h3>Golden Team</h3>
                <span className="subtitle">{language === 'ar' ? 'تصميم ورسوم متحركة' : 'Design & Animation'}</span>
                <p>{language === 'ar' ? 'مصممون ومصممو رسوم متحركة خبراء يصنعون تجارب بصرية مذهلة وقصص علامات تجارية جذابة تسحر الجماهير وتعزز التفاعل.' : 'Expert designers and animators crafting stunning visual experiences and compelling brand stories that captivate audiences and drive engagement.'}</p>
             </div> */}
          </div>
        </div>

        <style>{`
          .partnerships-section {
             background: linear-gradient(180deg, #ffffff 0%, #f8faff 100%);
          }
          .partners-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
          .partner-card {
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.08);
            border-radius: 16px;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 12px 40px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
          }
          .partner-card:hover {
            transform: translateY(-5px);
          }
          .partner-logo {
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            padding: 1rem;
          }
          .partner-card h3 {
            color: #000000;
            margin-bottom: 0.5rem;
            font-size: 1.35rem;
            font-weight: 700;
          }
          .subtitle {
            display: block;
            color: #001299;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .partner-card p {
            color: var(--gray);
            margin: 0;
            font-size: 1rem;
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-subtitle">{language === 'ar' ? 'تواصل معنا' : 'Get In Touch'}</div>
          <div className="section-title">
            <h2 className="section-title-gradient">{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h2>
            <p>{language === 'ar' ? 'أخبرنا عن حملتك أو إنتاجك التالي—دعنا نبنيه معاً.' : 'Tell us about your next campaign or production—let\'s build it together.'}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>{language === 'ar' ? 'ابدأ مشروع' : 'Start a project'}</h3>
              <p>{language === 'ar' ? 'شارك أهدافك والجدول الزمني والميزانية. نرد خلال 24 ساعة.' : 'Share your goals, timeline, and budget. We respond within 24 hours.'}</p>
              <div className="contact-meta">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>khartouminterfilm@gmail.com</span>
                </div>
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>0795429785</span>
                </div>
                <div className="contact-item">
                  <FaClock className="contact-icon" />
                  <span>9:00AM - 5:00PM</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Full name" required />
                <input type="email" placeholder="Work email" required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Company / Brand" />
                <input type="text" placeholder="Project budget (optional)" />
              </div>
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject"
                style={{ width: '100%' }}
              />
              <textarea placeholder="Project details" rows={4} required></textarea>
              <button type="submit" className="btn btn-primary">Send message</button>
            </form>
          </div>
        </div>

        <style>{`
          .contact-section {
            background: linear-gradient(180deg, #f6fbff 0%, #ffffff 100%);
          }
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            align-items: start;
          }
          .contact-card {
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.08);
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          }
          .contact-meta {
            display: grid;
            gap: 0.75rem;
            margin-top: 1rem;
          }

          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem;
            border-radius: 8px;
            transition: background 0.3s ease;
          }

          .contact-item:hover {
            background: rgba(0, 27, 224, 0.05);
          }

          .contact-icon {
            font-size: 1.2rem;
            color: var(--primary);
            flex-shrink: 0;
          }

          .contact-item span {
            color: var(--gray);
            font-size: 0.95rem;
          }
          .contact-form {
            background: white;
            border: 1px solid rgba(0, 27, 224, 0.08);
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 12px 40px rgba(0,0,0,0.05);
            display: grid;
            gap: 1rem;
          }
          .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 0.75rem;
          }
          input, textarea {
            width: 100%;
            padding: 0.85rem 1rem;
            border-radius: 10px;
            border: 1px solid rgba(0,0,0,0.08);
            background: #f9fbff;
            font-size: 1rem;
          }
          input:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(0, 27, 224, 0.08);
            background: white;
          }
          textarea {
            resize: vertical;
            min-height: 120px;
          }
          .btn {
            justify-self: start;
          }
        `}</style>
      </section>

      <Footer />

      {/* Team Member Modal */}
      {activeTeamMember && (
        <div className="modal-overlay" onClick={() => setActiveTeamMember(null)}>
          <div className="modal-content team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveTeamMember(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="team-modal-content">
              <div className="member-profile">
                <img
                  src={activeTeamMember.image}
                  alt={activeTeamMember.name}
                  className="member-profile-image"
                />
                <div className="member-info">
                  <h2>{activeTeamMember.name}</h2>
                  <p className="member-role">{language === 'ar' ? activeTeamMember.roleAr || activeTeamMember.role : activeTeamMember.role}</p>
                </div>
              </div>

              <div className="member-details">
                <div className="member-bio">
                  <h3>{language === 'ar' ? 'نبذة' : 'About'}</h3>
                  <p>{language === 'ar' ? activeTeamMember.bioAr || activeTeamMember.bio : activeTeamMember.bio}</p>
                </div>

                <div className="member-skills">
                  <h3>{language === 'ar' ? 'المهارات' : 'Skills'}</h3>
                  <div className="skills-grid">
                    {activeTeamMember.skills?.map((skill: string, index: number) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Modal */}
      {activeAboutModal && (
        <div className="modal-overlay" onClick={() => setActiveAboutModal(null)}>
          <div className="modal-content about-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveAboutModal(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="about-modal-content">
              {activeAboutModal === 'history' && (
                <div>
                  <h2>{language === 'ar' ? 'تاريخنا وخبرتنا' : 'Our History & Experience'}</h2>
                  <p>{language === 'ar' ? 'منذ تأسيسنا في عام 2013، تعاوننا مع العديد من العملاء البارزين في السودان وخارجه. عملاؤنا يشملون شركات الاتصالات الكبرى، البنوك، وشركات التبريد والتكييف، وشركات الأغذية الرئيسية. هذه الشراكات عززت سمعتنا كواحدة من أبرز الشركات في مجال إنتاج المحتوى الإعلاني.' : 'Since our founding in 2013, we have collaborated with numerous prominent clients in Sudan and abroad. Our clients include major telecommunications companies, banks, refrigeration and air conditioning companies, and major food companies. These partnerships have solidified our reputation as one of the top companies in advertising content production.'}</p>
                  <div className="stats-section">
                    <div className="stat">
                      <strong>2013</strong>
                      <span>{language === 'ar' ? 'تأسيس الشركة' : 'Company Founded'}</span>
                    </div>
                    <div className="stat">
                      <strong>250+</strong>
                      <span>{language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}</span>
                    </div>
                    <div className="stat">
                      <strong>15+</strong>
                      <span>{language === 'ar' ? 'قطاع خدمي' : 'Sectors Served'}</span>
                    </div>
                    <div className="stat">
                      <strong>12+</strong>
                      <span>{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
                    </div>
                  </div>
                  <h3>{language === 'ar' ? 'عملاؤنا البارزون' : 'Our Prominent Clients'}</h3>
                  <div className="clients-grid">
                    <div className="client-card">
                      <h3>MTN Telecommunications</h3>
                      <p>{language === 'ar' ? 'أكبر شركة اتصالات في السودان' : 'Sudan\'s largest telecommunications company'}</p>
                    </div>
                    <div className="client-card">
                      <h3>Nile Bank</h3>
                      <p>{language === 'ar' ? 'مؤسسة مالية رائدة' : 'Leading financial institution'}</p>
                    </div>
                    <div className="client-card">
                      <h3>Coldair</h3>
                      <p>{language === 'ar' ? 'شركة التكييف والتبريد' : 'Air conditioning and refrigeration company'}</p>
                    </div>
                    <div className="client-card">
                      <h3>{language === 'ar' ? 'شركات غذائية رئيسية' : 'Major Food Companies'}</h3>
                      <p>{language === 'ar' ? 'قطاع الأغذية والمشروبات' : 'Food and beverage sector'}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAboutModal === 'international' && (
                <div>
                  <h2>{language === 'ar' ? 'التواجد الدولي' : 'International Presence'}</h2>
                  <p>{language === 'ar' ? 'في توسيع تواجدنا الدولي، ساهمنا في الأحداث البصرية للاحتفال بعيد استقلال السودان الذي أقيم في سفارة السودان في رواندا. هذا الحدث يمثل التزامنا بالتميز والاحترافية في العروض البصرية على المستوى الدولي.' : 'In expanding our international presence, we contributed to the visual events of the Sudanese Independence Day Celebration held at the Sudanese Embassy in Rwanda. This event represents our commitment to excellence and professionalism in visual presentations at the international level.'}</p>
                  <div className="international-highlights">
                    <div className="highlight-card">
                      <div className="highlight-icon">🇷🇼</div>
                      <h3>{language === 'ar' ? 'سفارة السودان في رواندا' : 'Sudanese Embassy in Rwanda'}</h3>
                      <p>{language === 'ar' ? 'تنظيم وإنتاج العروض البصرية للاحتفال الوطني' : 'Organization and production of visual displays for the national celebration'}</p>
                    </div>
                    <div className="highlight-card">
                      <div className="highlight-icon">🎭</div>
                      <h3>{language === 'ar' ? 'الإنتاج البصري' : 'Visual Production'}</h3>
                      <p>{language === 'ar' ? 'إنتاج محتوى مرئي احترافي للمناسبات الدبلوماسية' : 'Professional visual content production for diplomatic occasions'}</p>
                    </div>
                    <div className="highlight-card">
                      <div className="highlight-icon">🌍</div>
                      <h3>{language === 'ar' ? 'الانتشار العالمي' : 'Global Reach'}</h3>
                      <p>{language === 'ar' ? 'توسيع نطاق عملائنا إلى المجتمع الدولي' : 'Expanding our client base to the international community'}</p>
                    </div>
                  </div>
                  <div className="international-values">
                    <div className="value-item">
                      <div className="value-number">01</div>
                      <h4>{language === 'ar' ? 'الجودة العالمية' : 'Global Quality'}</h4>
                      <p>{language === 'ar' ? 'معايير إنتاج تلبي أعلى المستويات الدولية' : 'Production standards that meet the highest international levels'}</p>
                    </div>
                    <div className="value-item">
                      <div className="value-number">02</div>
                      <h4>{language === 'ar' ? 'الثقافة المشتركة' : 'Shared Culture'}</h4>
                      <p>{language === 'ar' ? 'فهم عميق للقيم والتقاليد الثقافية المتنوعة' : 'Deep understanding of diverse cultural values and traditions'}</p>
                    </div>
                    <div className="value-item">
                      <div className="value-number">03</div>
                      <h4>{language === 'ar' ? 'الشراكة الدولية' : 'International Partnership'}</h4>
                      <p>{language === 'ar' ? 'بناء علاقات قوية مع الشركاء الدوليين' : 'Building strong relationships with international partners'}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAboutModal === 'company' && (
                <div>
                  <h2>{language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview'}</h2>
                  <p>{language === 'ar' ? 'نحن مجموعة الخرطوم إنترفيلم، شركة رائدة متخصصة في إنتاج المحتوى الإعلاني بما في ذلك الفيديوهات والملصقات وجميع أنواع التسويق البصري. تأسست في 2013، نمتلك فريقاً من المحترفين ذوي الخبرة في مختلف مجالات الإنتاج البصري.' : 'We are Khartoum Interfilm Group, a leading company specializing in advertising content production including videos, posters, and all types of visual marketing. Founded in 2013, we have a team of experienced professionals in various fields of visual production.'}</p>
                  <div className="company-stats">
                    <div className="stat">
                      <strong>2013</strong>
                      <span>{language === 'ar' ? 'تأسيس الشركة' : 'Founded'}</span>
                    </div>
                    <div className="stat">
                      <strong>250+</strong>
                      <span>{language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}</span>
                    </div>
                    <div className="stat">
                      <strong>50+</strong>
                      <span>{language === 'ar' ? 'عميل راضي' : 'Happy Clients'}</span>
                    </div>
                    <div className="stat">
                      <strong>15+</strong>
                      <span>{language === 'ar' ? 'قطاع خدمي' : 'Industries Served'}</span>
                    </div>
                  </div>
                  <h3>{language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Main Services'}</h3>
                  <div className="services-overview">
                    <div className="service-overview-item">
                      <div className="service-icon">🎬</div>
                      <h3>{language === 'ar' ? 'إنتاج الفيديو' : 'Video Production'}</h3>
                      <p>{language === 'ar' ? 'إنتاج فيديوهات احترافية للإعلانات والشركات والمناسبات الخاصة' : 'Professional video production for commercials, corporate, and special events'}</p>
                    </div>
                    <div className="service-overview-item">
                      <div className="service-icon">🎨</div>
                      <h3>{language === 'ar' ? 'التصميم الجرافيكي' : 'Graphic Design'}</h3>
                      <p>{language === 'ar' ? 'تصميم هويات بصرية وملصقات ومواد تسويقية متنوعة' : 'Brand identity design, posters, and various marketing materials'}</p>
                    </div>
                    <div className="service-overview-item">
                      <div className="service-icon">📢</div>
                      <h3>{language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}</h3>
                      <p>{language === 'ar' ? 'استراتيجيات تسويقية متكاملة عبر وسائل التواصل الاجتماعي' : 'Integrated marketing strategies across social media platforms'}</p>
                    </div>
                    <div className="service-overview-item">
                      <div className="service-icon">🎙️</div>
                      <h3>{language === 'ar' ? 'التعليق الصوتي' : 'Voiceover'}</h3>
                      <p>{language === 'ar' ? 'خدمات تعليق صوتي احترافي بلغات متعددة' : 'Professional voiceover services in multiple languages'}</p>
                    </div>
                    <div className="service-overview-item">
                      <div className="service-icon">🎪</div>
                      <h3>{language === 'ar' ? 'تنسيق الأحداث' : 'Event Coordination'}</h3>
                      <p>{language === 'ar' ? 'تنسيق وإدارة الأحداث الشركاتية والترويجية' : 'Coordination and management of corporate and promotional events'}</p>
                    </div>
                    <div className="service-overview-item">
                      <div className="service-icon">💻</div>
                      <h3>{language === 'ar' ? 'الحلول البرمجية' : 'Software Solutions'}</h3>
                      <p>{language === 'ar' ? 'تطوير مواقع وتطبيقات وأنظمة برمجية مخصصة' : 'Development of websites, applications, and custom software systems'}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeAboutModal === 'mission' && (
                <div>
                  <h2>{language === 'ar' ? 'مهمتنا وقيمنا' : 'Our Mission & Values'}</h2>
                  <p>{language === 'ar' ? 'في الخرطوم إنترفيلم، نؤمن أن القوة البصرية والإبداع هما أساس نجاح الأعمال. نبني شراكات طويلة الأمد مبنية على الثقة والجودة. قيمنا تشمل التميز البصري، الشراكة الإبداعية، ونجاح الأعمال.' : 'At Khartoum Interfilm, we believe that visual power and creativity are the foundation of business success. We build long-term partnerships based on trust and quality. Our values include visual excellence, creative partnership, and business success.'}</p>
                  <div className="mission-values">
                    <div className="core-value">
                      <div className="value-header">
                        <div className="value-icon">🎯</div>
                        <h3>{language === 'ar' ? 'التميز' : 'Excellence'}</h3>
                      </div>
                      <p>{language === 'ar' ? 'نسعى دائماً للأفضل في كل ما نقوم به. نلتزم بمعايير الجودة العالية ونحرص على تقديم أعمال تتجاوز توقعات عملائنا.' : 'We always strive for the best in everything we do. We are committed to high quality standards and ensure that we deliver work that exceeds our clients\' expectations.'}</p>
                    </div>
                    <div className="core-value">
                      <div className="value-header">
                        <div className="value-icon">🤝</div>
                        <h3>{language === 'ar' ? 'الشراكة' : 'Partnership'}</h3>
                      </div>
                      <p>{language === 'ar' ? 'نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة والتعاون المتبادل. نعتبر عملاءنا شركاء في النجاح وليس مجرد زبائن.' : 'We build long-term relationships with our clients based on trust and mutual cooperation. We consider our clients as partners in success, not just customers.'}</p>
                    </div>
                    <div className="core-value">
                      <div className="value-header">
                        <div className="value-icon">💡</div>
                        <h3>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
                      </div>
                      <p>{language === 'ar' ? 'نستخدم أحدث التقنيات والأفكار الإبداعية لإنتاج محتوى فريد ومبتكر. نحن نتحدى الأساليب التقليدية ونبتكر حلولاً جديدة لمشاكل قديمة.' : 'We use the latest technologies and creative ideas to produce unique and innovative content. We challenge traditional methods and innovate new solutions to old problems.'}</p>
                    </div>
                    <div className="core-value">
                      <div className="value-header">
                        <div className="value-icon">⏰</div>
                        <h3>{language === 'ar' ? 'الالتزام' : 'Commitment'}</h3>
                      </div>
                      <p>{language === 'ar' ? 'نلتزم بمواعيد التسليم وجودة العمل الموعودة. نعتبر التزامنا بالوعود جزءاً أساسياً من هويتنا وسمعتنا في السوق.' : 'We are committed to delivery dates and promised work quality. We consider our commitment to promises as an essential part of our identity and reputation in the market.'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modal-content {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.95));
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          max-width: 95vw;
          width: 100%;
          max-height: calc(100vh - 4rem);
          height: auto;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          animation: modalSlideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--gray);
          z-index: 1;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
          color: var(--dark);
        }

        .service-modal {
          padding: 3rem 2rem 2rem;
        }

        .service-modal-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .service-modal-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .service-modal-icon svg {
          width: 40px;
          height: 40px;
        }

        .service-modal h2 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 2rem;
        }

        .service-modal-body {
          display: grid;
          gap: 2rem;
        }

        .service-modal-description,
        .service-modal-details {
          padding: 1.5rem;
          background: rgba(0, 27, 224, 0.02);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
        }

        .service-modal-description h3,
        .service-modal-details h3,
        .service-modal-projects h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .service-modal-description p,
        .service-modal-details p {
          color: var(--dark);
          line-height: 1.6;
        }

        .service-modal-projects {
          padding: 1.5rem;
          background: rgba(0, 27, 224, 0.02);
          border-radius: 12px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .project-item {
          padding: 0.75rem;
          background: white;
          border-radius: 6px;
          border: 1px solid rgba(0, 27, 224, 0.1);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 8px rgba(0, 27, 224, 0.05);
        }

        .project-item:hover {
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.1);
          transform: translateY(-2px);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .project-item h4 {
          color: var(--primary);
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .project-item p {
          color: var(--gray);
          margin-bottom: 0.5rem;
          font-size: 0.8rem;
          line-height: 1.4;
          flex-grow: 1;
        }

        .feature-item {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 1px solid rgba(0, 27, 224, 0.15);
        }

        .feature-content h4 {
          color: var(--primary);
          margin-bottom: 0.25rem;
          font-size: 0.85rem;
        }

        .feature-content p {
          color: var(--dark);
          font-size: 0.8rem;
          line-height: 1.4;
        }

        .project-media video {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .project-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .service-header-section {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 2px solid rgba(0, 27, 224, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .service-header-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 27, 224, 0.05), transparent);
          transition: left 0.8s ease;
        }

        .service-header-section:hover::before {
          left: 100%;
        }

        .service-header-section h3 {
          color: var(--primary);
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .service-header-section p {
          color: var(--dark);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .service-benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          border: 1px solid rgba(0, 27, 224, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .benefit-item:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.15);
        }

        .benefit-item svg {
          color: var(--primary);
          flex-shrink: 0;
        }

        .benefit-item span {
          color: var(--dark);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .service-modal-footer {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 27, 224, 0.1);
        }

        .service-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          border-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.3);
        }

        .btn-secondary-outline {
          background: transparent;
          color: var(--primary);
          border-color: var(--primary);
        }

        .btn-secondary-outline:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.2);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .action-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        .image-modal {
          padding: 1rem;
          max-width: 90vw;
        }

        .image-modal-content {
          position: relative;
        }

        .image-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 12px;
        }

        .nav-btn {
          background: white;
          border: none;
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-btn:hover {
          background: var(--primary);
          color: white;
        }

        .image-counter {
          color: white;
          font-weight: 600;
        }

        .about-modal {
          padding: 3rem 2rem 2rem;
          max-width: 600px;
        }

        .about-modal-content h2 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .about-modal-content p {
          color: var(--dark);
          line-height: 1.7;
          text-align: justify;
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .team-modal {
          padding: 3rem 2rem 2rem;
          max-width: 700px;
        }

        .team-modal-content {
          display: grid;
          gap: 2rem;
        }

        .member-profile {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 2rem;
          align-items: start;
        }

        .member-profile-image {
          width: 200px;
          height: 200px;
          border-radius: 12px;
          object-fit: cover;
          border: 3px solid white;
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.2);
        }

        .member-info h2 {
          margin-bottom: 0.5rem;
          color: var(--primary);
          font-size: 2rem;
        }

        .member-role {
          color: #001299;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .member-experience {
          color: var(--gray);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .member-details {
          display: grid;
          gap: 2rem;
        }

        .member-details h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .member-details p {
          color: var(--dark);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
          color: var(--primary);
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          border: 1px solid rgba(0, 27, 224, 0.2);
        }

        @media (max-width: 768px) {
          .modal-content {
            margin: 1rem;
            max-height: 95vh;
          }

          .service-modal,
          .about-modal,
          .team-modal {
            padding: 2rem 1rem 1rem;
          }

          .project-gallery {
            grid-template-columns: 1fr;
          }

          .member-profile {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .member-profile-image {
            width: 150px;
            height: 150px;
            margin: 0 auto;
          }

          .member-info h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}

// </final_file_content>
