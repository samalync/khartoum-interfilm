'use client';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import { Service } from '../types';
import { useLanguage } from '../components/LanguageContext';
import { FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function Home() {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<{src: string, index: number, images: string[]} | null>(null);
  const [activeAboutModal, setActiveAboutModal] = useState<string | null>(null);

  // Pause and reset all videos when modals close
  useEffect(() => {
    if (!activeService && !activeProject) {
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
        video.src = video.src; // Force reload to free memory
      });
    }
  }, [activeService, activeProject]);

  // Aggressive video cleanup on service modal close
  useEffect(() => {
    if (!activeService) {
      // Small delay to ensure modal is fully closed
      const timer = setTimeout(() => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
          if (video.readyState > 0) {
            video.pause();
            video.currentTime = 0;
            // Force garbage collection hint
            video.src = '';
            video.load();
          }
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeService]);

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
                  description: 'استراتيجيات إعلانية مدفوعة استراتيجية عبر منصات فيسبوك وإنستغرام وتيك توك مع تخطيط ميزانية شامل، تحسين الأداء المستمر، وتقارير تحليل مفصلة لزيادة العائد على الاستثمار.'
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
                'We work with a curated roster of voice artists to match your brand’s tone—warm, authoritative, playful, or cinematic. We handle casting, recording, and final mix for every platform.',
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
              {language === 'ar' ? 'مرحباً بكم في الخرطوم إنتر فيلم' : 'Welcome to Khartoum InterFilm'}
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
              <a href="#services" className="btn btn-primary">
                {language === 'ar' ? 'استعرض الخدمات' : 'Explore services'}
              </a>
              <a href="#contact" className="btn btn-secondary">
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
        
        <style jsx>{`
          .hero {
            position: relative;
            background: linear-gradient(135deg, rgba(0, 27, 224, 0.8), rgba(0, 180, 255, 0.75)),
              url('/marketing.png') center/cover no-repeat;
            color: white;
            padding: 150px 0 120px;
            margin-top: 60px;
            overflow: hidden;
          }
          
          .hero::after {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.08), transparent 30%),
              radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.12), transparent 32%),
              linear-gradient(120deg, rgba(255, 255, 255, 0.06), transparent 60%);
            pointer-events: none;
          }
          
          .hero .container {
            position: relative;
            z-index: 1;
          }
          
          .hero-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-badge {
            display: inline-flex;
            align-self: center;
            padding: 10px 16px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            font-weight: 600;
            letter-spacing: 0.5px;
            backdrop-filter: blur(6px);
          }
          
          .hero-content h1 {
            font-size: 3.2rem;
            margin-bottom: 0.5rem;
            font-weight: 800;
            letter-spacing: -0.5px;
          }
          
          .hero-content p {
            font-size: 1.2rem;
            max-width: 820px;
            margin: 0 auto 0.5rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.92);
          }
          
          .hero-highlights {
            display: flex;
            gap: 0.8rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .pill {
            padding: 10px 14px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-weight: 600;
            font-size: 0.95rem;
          }
          
          .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 0.5rem;
          }
          
          .hero-stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 1.5rem;
          }
          
          .hero-stats div {
            padding: 14px 16px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.16);
          }
          
          .hero-stats strong {
            display: block;
            font-size: 1.6rem;
            margin-bottom: 4px;
          }
          
          .hero-stats span {
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.95rem;
          }
          
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.2rem;
            }
            
            .hero-content p {
              font-size: 1.05rem;
            }
            
            .hero-stats {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>{language === 'ar' ? 'خدماتنا' : 'Our Services'}</h2>
            <p>
              {language === 'ar'
                ? 'حلول متكاملة في التسويق والإنتاج الإعلامي مصممة لتناسب أهداف عملك.'
                : 'Comprehensive marketing and content production services tailored to your needs'}
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => {
                  if (service.title === 'Software Solutions') {
                    window.open('https://www.samalync.com', '_blank', 'noopener,noreferrer');
                  } else {
                    setActiveService(service);
                  }
                }}
              />
            ))}
          </div>
        </div>
        
        <style jsx>{`
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

      {activeService && (
        <div className="service-modal-backdrop" onClick={() => setActiveService(null)}>
          <div
            className="service-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="service-modal-cover">
              <div className="service-modal-icon">{renderServiceIcon(activeService.icon)}</div>
              <div className="service-modal-cover-content">
                <div className="service-modal-cover-tag">Service highlight</div>
                <h3>{activeService.title}</h3>
              </div>
            </div>
            <div className="service-modal-header">
              <button
                type="button"
                className="service-modal-close"
                onClick={() => setActiveService(null)}
              >
                ✕
              </button>
            </div>
            <p className="service-modal-body">{activeService.details ?? activeService.description}</p>
            {activeService.projects && activeService.projects.length > 0 && (
              <div className="service-modal-projects">
                <h4>{activeService.icon === 'marketing' || activeService.icon === 'development' ? 'Service Offerings' : 'Example projects'}</h4>
                <div className="service-modal-projects-grid">
                  {activeService.projects.map((project, index) => (
                    <div key={index} className="service-project-card" onClick={() => setActiveProject(project)}>
                      {typeof project === 'string' ? (
                        <p>{project}</p>
                      ) : (
                        <div>
                          <h5>{project.title}</h5>
                          <p>{project.description}</p>
                          {project.media && (
                            <div className="video-container">
                            <video
                              className="service-project-video"
                              preload="none"
                              muted
                            >
                                <source src={project.media} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                              <div className="play-overlay">
                                <div className="play-button">
                                  <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                          {project.images && project.images.length > 0 && (
                            <div className="project-images-grid">
                              {project.images.slice(0, 3).map((image: string, imgIndex: number) => (
                                <div
                                  key={imgIndex}
                                  className="project-image-container"
                                >
                                  <Image
                                    src={image}
                                    alt={`${project.title} - Image ${imgIndex + 1}`}
                                    width={200}
                                    height={150}
                                    className="project-image"
                                    style={{ objectFit: 'cover' }}
                                  />
                                  {project.images!.length > 3 && imgIndex === 2 && (
                                    <div className="image-overlay">
                                      <span>+{project.images!.length - 3} more</span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button
              type="button"
              className="service-modal-cta-btn"
              onClick={() => {
                goToContactWithSubject(activeService.title);
                setActiveService(null);
              }}
            >
              <span className="cta-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
              <span className="cta-text">Talk to us about {activeService.title}</span>
              <span className="cta-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </div>
          <style jsx>{`
            .service-modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(15, 23, 42, 0.55);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1200;
              padding: 1rem;
            }
            .service-modal {
              width: 100%;
              height: 100%;
              background: #ffffff;
              border-radius: 14px;
              padding: 2.25rem 2rem 2rem;
              box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
              overflow-y: auto;
            }
            .service-modal-cover {
              width: 100%;
              border-radius: 14px;
              padding: 1.4rem 1.6rem;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.08), rgba(0, 180, 255, 0.06));
              border: 2px solid rgba(0, 27, 224, 0.14);
              color: var(--primary);
              margin-bottom: 1.1rem;
              display: flex;
              align-items: center;
              gap: 1rem;
              min-height: auto;
            }

            .service-modal-icon {
              flex-shrink: 0;
              width: 48px;
              height: 48px;
              border-radius: 12px;
              background: rgba(0, 27, 224, 0.06);
              border: 1px solid rgba(0, 27, 224, 0.14);
              display: grid;
              place-items: center;
              color: var(--primary);
            }

            .service-modal-icon-svg {
              width: 24px;
              height: 24px;
            }

            .service-modal-cover-content {
              flex: 1;
            }
            .service-modal-cover h3 {
              margin: 0;
              font-size: 1.7rem;
            }
            .service-modal-cover-tag {
              display: inline-flex;
              align-self: flex-start;
              padding: 0.25rem 0.7rem;
              border-radius: 999px;
              background: rgba(15, 23, 42, 0.4);
              font-size: 0.75rem;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              font-weight: 600;
            }
            .service-modal-header {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              margin-bottom: 0.5rem;
            }
            .service-modal-close {
              border: none;
              background: transparent;
              font-size: 1.1rem;
              cursor: pointer;
              line-height: 1;
            }
            .service-modal-body {
              margin: 0 0 1rem;
              color: rgba(17, 17, 17, 0.8);
              line-height: 1.7;
            }
            .service-modal-projects h4 {
              margin: 0 0 0.5rem;
              font-size: 1rem;
              color: #111111;
            }
            .service-modal-projects-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
              gap: 1.5rem;
              margin-bottom: 1rem;
            }
            .service-project-card {
              background: #f9fafb;
              border-radius: 12px;
              padding: 0.75rem 0.9rem;
              border: 1px solid rgba(15, 23, 42, 0.06);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }

            .service-project-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
              border-color: rgba(0, 27, 224, 0.15);
            }

            .service-project-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(0, 27, 224, 0.03), transparent);
              transition: left 0.5s ease;
            }

            .service-project-card:hover::before {
              left: 100%;
            }
            .service-project-card h5 {
              margin: 0 0 0.5rem 0;
              font-size: 1rem;
              color: #001299;
              font-weight: 600;
            }
            .service-project-card p {
              margin: 0 0 0.75rem 0;
              font-size: 0.9rem;
              color: rgba(15, 23, 42, 0.85);
              line-height: 1.4;
            }
            .video-container {
              position: relative;
              width: 100%;
              border-radius: 8px;
              overflow: hidden;
              cursor: pointer;
              margin-top: 0.5rem;
            }

            .service-project-video {
              width: 100%;
              border-radius: 8px;
              display: block;
            }

            .play-overlay {
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(0, 0, 0, 0.3);
              transition: background 0.3s ease;
            }

            .play-overlay:hover {
              background: rgba(0, 0, 0, 0.8);
            }

            .play-button {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
              transition: all 0.3s ease;
            }

            .play-button:hover {
              background: rgba(255, 255, 255, 1);
              transform: scale(1.1);
            }

            .play-button svg {
              width: 24px;
              height: 24px;
              color: #001299;
              margin-left: 3px;
            }

            .service-modal-cta-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.75rem;
              padding: 1rem 1.5rem;
              border: none;
              border-radius: 12px;
              background: linear-gradient(135deg, var(--primary), var(--secondary));
              color: white;
              font-size: 1rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 8px 25px rgba(0, 27, 224, 0.25);
              position: relative;
              overflow: hidden;
            }

            .service-modal-cta-btn::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, var(--secondary), var(--primary));
              opacity: 0;
              transition: opacity 0.3s ease;
            }

            .service-modal-cta-btn:hover::before {
              opacity: 1;
            }

            .service-modal-cta-btn:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 35px rgba(0, 27, 224, 0.35);
            }

            .service-modal-cta-btn:active {
              transform: translateY(0);
              box-shadow: 0 6px 20px rgba(0, 27, 224, 0.25);
            }

            .cta-icon {
              width: 20px;
              height: 20px;
              flex-shrink: 0;
              position: relative;
              z-index: 1;
            }

            .cta-text {
              font-weight: 600;
              letter-spacing: 0.02em;
              position: relative;
              z-index: 1;
            }

            .cta-arrow {
              width: 18px;
              height: 18px;
              flex-shrink: 0;
              transition: transform 0.3s ease;
              position: relative;
              z-index: 1;
            }

            .service-modal-cta-btn:hover .cta-arrow {
              transform: translateX(3px);
            }

            .cta-icon svg,
            .cta-arrow svg {
              width: 100%;
              height: 100%;
              stroke-width: 2.5;
            }

            .project-images-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 0.5rem;
              margin-top: 0.5rem;
            }

            .project-image-container {
              position: relative;
              aspect-ratio: 4/3;
              border-radius: 6px;
              overflow: hidden;
              border: 1px solid rgba(15, 23, 42, 0.08);
            }

            .project-image {
              width: 100%;
              height: 100%;
              transition: transform 0.3s ease;
            }

            .project-image-container:hover .project-image {
              transform: scale(1.05);
            }

            .image-overlay {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.6);
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-weight: 600;
              font-size: 0.9rem;
            }
          `}</style>
        </div>
      )}

      {activeProject && (
        <div className="project-modal-backdrop" onClick={() => setActiveProject(null)}>
          <div
            className="project-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="project-modal-header">
              <div className="project-modal-info">
                <h2>{activeProject.title}</h2>
                <p>{activeProject.description}</p>
              </div>
              <button
                type="button"
                className="project-modal-close"
                onClick={() => setActiveProject(null)}
              >
                ✕
              </button>
            </div>

            {activeProject.images && activeProject.images.length > 0 && (
              <div className="project-gallery-grid">
                {activeProject.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className="gallery-grid-item"
                    onClick={() => setActiveImage({ src: image, index, images: activeProject.images })}
                  >
                    <Image
                      src={image}
                      alt={`${activeProject.title} - Image ${index + 1}`}
                      width={400}
                      height={300}
                      className="gallery-grid-image"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            )}

            {activeProject.media && (
              <div className="project-video">
                <video
                  controls
                  className="project-video-player"
                  preload="metadata"
                  onLoadStart={(e) => {
                    // Pause any other videos when this one starts loading
                    const videos = document.querySelectorAll('video');
                    videos.forEach(video => {
                      if (video !== e.currentTarget) {
                        video.pause();
                      }
                    });
                  }}
                >
                  <source src={activeProject.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          <style jsx>{`
            .project-modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(15, 23, 42, 0.8);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1300;
              padding: 1rem;
            }

            .project-modal {
              width: 95%;
              max-width: 1200px;
              height: 90vh;
              background: #ffffff;
              border-radius: 16px;
              box-shadow: 0 32px 80px rgba(0, 0, 0, 0.3);
              overflow: hidden;
              display: flex;
              flex-direction: column;
            }

            .project-modal-header {
              padding: 2rem;
              border-bottom: 1px solid rgba(15, 23, 42, 0.1);
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              gap: 2rem;
            }

            .project-modal-info h2 {
              margin: 0 0 0.5rem 0;
              font-size: 2rem;
              color: #001299;
              font-weight: 700;
            }

            .project-modal-info p {
              margin: 0;
              font-size: 1.1rem;
              color: rgba(15, 23, 42, 0.8);
              line-height: 1.6;
            }

            .project-modal-close {
              border: none;
              background: transparent;
              font-size: 1.5rem;
              cursor: pointer;
              line-height: 1;
              color: rgba(15, 23, 42, 0.6);
              transition: color 0.2s ease;
            }

            .project-modal-close:hover {
              color: rgba(15, 23, 42, 0.9);
            }

            .project-gallery {
              flex: 1;
              overflow-y: auto;
              padding: 2rem;
            }

            .gallery-item {
              margin-bottom: 2rem;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(15, 23, 42, 0.08);
            }

            .gallery-image {
              width: 100%;
              height: auto;
              max-height: 600px;
              display: block;
            }

            .project-gallery-grid {
              flex: 1;
              overflow-y: auto;
              padding: 2rem;
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              gap: 1.25rem;
              align-items: start;
            }

            .gallery-grid-item {
              cursor: pointer;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
              border: 1px solid rgba(15, 23, 42, 0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              width: 100%;
              max-width: 320px;
            }

            .gallery-grid-item:hover {
              transform: scale(1.02);
              box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
            }

            .gallery-grid-image {
              width: 100%;
              height: 200px;
              object-fit: cover;
              display: block;
              transition: transform 0.3s ease;
            }

            .gallery-grid-item:hover .gallery-grid-image {
              transform: scale(1.05);
            }

            .project-video {
              flex: 1;
              padding: 1rem 2rem 3rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 1.5rem;
            }

            .project-video-player {
              width: 100%;
              max-width: 850px;
              max-height: 500px;
              border-radius: 12px;
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
              margin: 3rem auto;
              object-fit: contain;
            }
          `}</style>
        </div>
      )}

      {activeImage && (
        <div className="image-modal-backdrop" onClick={() => setActiveImage(null)}>
          <div
            className="image-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setActiveImage(null)}
            >
              ✕
            </button>

            {activeImage.images.length > 1 && (
              <>
                <button
                  type="button"
                  className="image-modal-nav image-modal-nav-left"
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = activeImage.index > 0 ? activeImage.index - 1 : activeImage.images.length - 1;
                    setActiveImage({
                      src: activeImage.images[newIndex],
                      index: newIndex,
                      images: activeImage.images
                    });
                  }}
                  disabled={activeImage.images.length <= 1}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="image-modal-nav image-modal-nav-right"
                  onClick={(e) => {
                    e.stopPropagation();
                    const newIndex = activeImage.index < activeImage.images.length - 1 ? activeImage.index + 1 : 0;
                    setActiveImage({
                      src: activeImage.images[newIndex],
                      index: newIndex,
                      images: activeImage.images
                    });
                  }}
                  disabled={activeImage.images.length <= 1}
                >
                  ›
                </button>
              </>
            )}

            <div className="image-modal-content">
              <Image
                src={activeImage.src}
                alt="Full screen image"
                width={1200}
                height={800}
                className="image-modal-image"
                style={{ objectFit: 'contain' }}
              />
            </div>

            {activeImage.images.length > 1 && (
              <div className="image-modal-counter">
                {activeImage.index + 1} / {activeImage.images.length}
              </div>
            )}
          </div>
          <style jsx>{`
            .image-modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.9);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1400;
              cursor: zoom-out;
            }

            .image-modal {
              position: relative;
              width: 95vw;
              height: 95vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .image-modal-close {
              position: absolute;
              top: 1rem;
              right: 1rem;
              border: none;
              background: rgba(255, 255, 255, 0.9);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              cursor: pointer;
              z-index: 10;
              transition: all 0.2s ease;
            }

            .image-modal-close:hover {
              background: rgba(255, 255, 255, 1);
              transform: scale(1.1);
            }

            .image-modal-nav {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              border: none;
              background: rgba(255, 255, 255, 0.9);
              border-radius: 50%;
              width: 50px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2rem;
              cursor: pointer;
              z-index: 10;
              transition: all 0.2s ease;
              color: #001299;
              font-weight: bold;
            }

            .image-modal-nav:hover:not(:disabled) {
              background: rgba(255, 255, 255, 1);
              transform: translateY(-50%) scale(1.1);
            }

            .image-modal-nav:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }

            .image-modal-nav-left {
              left: 1rem;
            }

            .image-modal-nav-right {
              right: 1rem;
            }

            .image-modal-content {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
            }

            .image-modal-image {
              width: 100%;
              height: 100%;
              border-radius: 8px;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }

            .image-modal-counter {
              position: absolute;
              bottom: 2rem;
              left: 50%;
              transform: translateX(-50%);
              background: rgba(0, 0, 0, 0.7);
              color: white;
              padding: 0.5rem 1rem;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 600;
              z-index: 10;
            }

            @media (max-width: 768px) {
              .image-modal-nav {
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
              }

              .image-modal-nav-left {
                left: 0.5rem;
              }

              .image-modal-nav-right {
                right: 0.5rem;
              }
            }
          `}</style>
        </div>
      )}

      {/* About Modal */}
      {activeAboutModal && (
        <div className="about-modal-backdrop" onClick={() => setActiveAboutModal(null)}>
          <div
            className="about-modal"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="about-modal-header">
              <h2>
                {activeAboutModal === 'history' && (language === 'ar' ? 'تاريخنا وخبرتنا' : 'Our History & Experience')}
                {activeAboutModal === 'international' && (language === 'ar' ? 'التواجد الدولي' : 'International Presence')}
                {activeAboutModal === 'company' && (language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview')}
                {activeAboutModal === 'mission' && (language === 'ar' ? 'مهمتنا وقيمنا' : 'Our Mission & Values')}
              </h2>
              <button
                type="button"
                className="about-modal-close"
                onClick={() => setActiveAboutModal(null)}
              >
                ✕
              </button>
            </div>
            <div className="about-modal-content">
              {activeAboutModal === 'history' && (
                <div className="modal-section">
                  <h3>{language === 'ar' ? 'بناء إرث التميز' : 'Building a Legacy of Excellence'}</h3>
                  <p>
                    {language === 'ar'
                      ? 'منذ تأسيسنا في عام 2013، كانت مجموعة الخرطوم إنترفيلم في طليعة إنتاج المحتوى الإعلاني في السودان وخارجه. بدأت رحلتنا برؤية بسيطة: إنشاء محتوى مرئي لا يلفت الانتباه فحسب، بل يحقق نتائج ملموسة لعملائنا.'
                      : 'Since our inception in 2013, Khartoum Interfilm Group has been at the forefront of advertising content production in Sudan and beyond. Our journey began with a simple vision: to create visual content that not only captures attention but drives meaningful results for our clients.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'أساسنا' : 'Our Foundation'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'تأسسنا في عام 2013، بدأنا كفريق صغير من المبدعين المتحمسين الذين آمنوا بقوة السرد المرئي. ما بدأ كشركة إنتاج إعلاني محلي تطور بسرعة إلى وكالة إبداعية شاملة، تخدم عملاء عبر صناعات متعددة وتوسع نطاقنا دولياً.'
                      : 'Founded in 2013, we started as a small team of passionate creatives who believed in the power of visual storytelling. What began as a local advertising production company quickly evolved into a comprehensive creative agency, serving clients across multiple industries and expanding our reach internationally.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'الشراكات مع العملاء التي تحددنا' : 'Client Partnerships That Define Us'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'بنيت سمعتنا كواحدة من أبرز شركات إنتاج المحتوى الإعلاني في السودان على تعاوننا مع عملاء بارزين. لقد كان لدينا الشرف في العمل مع قادة الصناعة الذين يثقون بنا لإحياء رؤى علاماتهم التجارية.'
                      : 'Our reputation as one of Sudan\'s leading advertising content production companies is built on our collaborations with prominent clients. We\'ve had the privilege of working with industry leaders who trust us to bring their brand visions to life.'
                    }
                  </p>

                  <div className="clients-grid">
                    <div className="client-card">
                      <h4>MTN Telecommunications</h4>
                      <p>{language === 'ar' ? 'مزود الاتصالات الرائد في السودان، شريك للحملات الشاملة للعلامة التجارية وإنتاج المحتوى الرقمي.' : 'Leading telecommunications provider in Sudan, partnering for comprehensive brand campaigns and digital content production.'}</p>
                    </div>
                    <div className="client-card">
                      <h4>Nile Bank</h4>
                      <p>{language === 'ar' ? 'مؤسسة مصرفية رائدة، تتعاون في تسويق الخدمات المالية ومبادرات التفاعل مع العملاء.' : 'Premier banking institution, collaborating on financial services marketing and customer engagement initiatives.'}</p>
                    </div>
                    <div className="client-card">
                      <h4>Coldair Refrigeration & Air Conditioning</h4>
                      <p>{language === 'ar' ? 'قائد صناعي في حلول التكييف، نعمل معاً في التسويق B2B وعروض المنتجات.' : 'Industry leader in HVAC solutions, working together on B2B marketing and product showcase campaigns.'}</p>
                    </div>
                    <div className="client-card">
                      <h4>{language === 'ar' ? 'شركات غذائية رئيسية' : 'Major Food Companies'}</h4>
                      <p>{language === 'ar' ? 'شراكات مع العلامات التجارية الرائدة في الأغذية والمشروبات لتسويق المنتجات ومحتوى الوصفات والتفاعل مع المستهلكين.' : 'Partnerships with leading food and beverage brands for product marketing, recipe content, and consumer engagement campaigns.'}</p>
                    </div>
                  </div>

                  <h4>{language === 'ar' ? 'التقدير الصناعي' : 'Industry Recognition'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'كسبتنا تقديم عمل متسق عالي الجودة وحلول مبتكرة تقديراً كواحدة من أفضل الشركات في مجال التسويق البصري والإعلاني. نحن نواصل تحديد معايير الصناعة من خلال التزامنا بالتميز والإبداع ورضا العملاء.'
                      : 'Our consistent delivery of high-quality work and innovative solutions has earned us recognition as one of the top companies in the advertising and visual marketing field. We continue to set industry standards through our commitment to excellence, creativity, and client satisfaction.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'المستقبل' : 'Looking Forward'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'مع استمرار نمونا وتطورنا، يخدم تاريخنا كأساس للابتكار المستقبلي. كل مشروع نتولاه يبني على إرث التميز لدينا، مما يدفع حدود ما هو ممكن في التسويق البصري وإنتاج المحتوى.'
                      : 'As we continue to grow and evolve, our history serves as the foundation for future innovation. Every project we undertake builds on our legacy of excellence, pushing the boundaries of what\'s possible in visual marketing and content production.'
                    }
                  </p>
                </div>
              )}

              {activeAboutModal === 'international' && (
                <div className="modal-section">
                  <h3>{language === 'ar' ? 'الوصول العالمي، التميز المحلي' : 'Global Reach, Local Excellence'}</h3>
                  <p>
                    {language === 'ar'
                      ? 'امتدت مجموعة الخرطوم إنترفيلم خارج حدود السودان، محملة خبرتنا في التسويق البصري وإنتاج المحتوى إلى الجماهير الدولية. يعكس تواجدنا الدولي التزامنا بالفهم الثقافي والتميز الإبداعي عبر الأسواق المتنوعة.'
                      : 'Khartoum Interfilm Group has expanded beyond Sudan\'s borders, bringing our expertise in visual marketing and content production to international audiences. Our international presence reflects our commitment to cultural understanding and creative excellence across diverse markets.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'عيد استقلال السودان في رواندا' : 'Sudanese Independence Day in Rwanda'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'كان أحد أبرز إنجازاتنا الدولية مساهمتنا في الأحداث البصرية للاحتفال بعيد استقلال السودان الذي أقيم في سفارة السودان في رواندا. أظهر هذا المشروع المرموق قدرتنا على التعامل مع الأحداث الدبلوماسية والثقافية عالية المستوى بأقصى درجات الاحترافية والإبداع.'
                      : 'One of our most significant international achievements was our contribution to the visual events of the Sudanese Independence Day Celebration held at the Sudanese Embassy in Rwanda. This prestigious project showcased our ability to handle high-profile diplomatic and cultural events with the utmost professionalism and creativity.'
                    }
                  </p>

                  <div className="highlight-box">
                    <h4>{language === 'ar' ? 'أبرز الحدث' : 'Event Highlights'}</h4>
                    <ul>
                      <li>{language === 'ar' ? 'تغطية سينمائية للاحتفالات بعيد الاستقلال' : 'Cinematic coverage of the Independence Day celebrations'}</li>
                      <li>{language === 'ar' ? 'خدمات التصوير والإنتاج المهنية' : 'Professional videography and production services'}</li>
                      <li>{language === 'ar' ? 'توثيق التراث الثقافي وسرد القصص' : 'Cultural heritage documentation and storytelling'}</li>
                      <li>{language === 'ar' ? 'تنسيق وتنفيذ الأحداث الدبلوماسية' : 'Diplomatic event coordination and execution'}</li>
                      <li>{language === 'ar' ? 'توزيع المحتوى متعدد المنصات' : 'Multi-platform content distribution'}</li>
                    </ul>
                  </div>

                  <h4>{language === 'ar' ? 'التراث الثقافي والاحترافية' : 'Cultural Heritage & Professionalism'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'كان حدث عيد الاستقلال في رواندا أكثر من مجرد مشروع إنتاج - كان فرصة لعرض التراث الثقافي الغني للسودان أمام جمهور دولي. تعامل فريقنا مع هذا المشروع باحترام عميق للتقاليد السودانية مع تقديم معايير إنتاج عالمية المستوى.'
                      : 'The Independence Day event in Rwanda was more than just a production project—it was an opportunity to showcase Sudan\'s rich cultural heritage to an international audience. Our team approached this project with deep respect for Sudanese traditions while delivering world-class production standards.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'توسيع بصمتنا العالمية' : 'Expanding Our Global Footprint'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'فتحت هذه المغامرة الدولية الناجحة أبواباً لفرص وشراكات جديدة عبر القارة الأفريقية وما بعدها. نحن نواصل البحث عن تعاونات ذات معنى تتيح لنا مشاركة خبرتنا الإبداعية مع التعلم من المنظورات الثقافية المتنوعة.'
                      : 'This successful international venture opened doors to new opportunities and partnerships across the African continent and beyond. We continue to seek meaningful collaborations that allow us to share our creative expertise while learning from diverse cultural perspectives.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'مشاريع دولية مستقبلية' : 'Future International Projects'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'بناءً على نجاحنا في رواندا، تلتزم مجموعة الخرطوم إنترفيلم بتوسيع تواجدنا الدولي من خلال الشراكات الاستراتيجية والمشاريع المبتكرة. نحن نؤمن أن العمل الإبداعي العظيم يتجاوز الحدود ويجمع الناس من خلال التجارب البصرية المشتركة.'
                      : 'Building on our success in Rwanda, Khartoum Interfilm Group is committed to expanding our international presence through strategic partnerships and innovative projects. We believe that great creative work transcends borders and brings people together through shared visual experiences.'
                    }
                  </p>
                </div>
              )}

              {activeAboutModal === 'company' && (
                <div className="modal-section">
                  <h3>{language === 'ar' ? 'مجموعة الخرطوم إنترفيلم' : 'Khartoum Interfilm Group'}</h3>
                  <p>
                    {language === 'ar'
                      ? 'نحن مجموعة الخرطوم إنترفيلم، شركة رائدة متخصصة في إنتاج المحتوى الإعلاني (الفيديوهات، الملصقات، وجميع أنواع التسويق البصري). تأسسنا في عام 2013، وكنا ملتزمين بتقديم حلول مرئية إبداعية وعالية الجودة مصممة خصيصاً لتلبية احتياجات عملائنا المتنوعين.'
                      : 'We are Khartoum Interfilm Group, a leading company specializing in advertising content production (videos, posters, and all types of visual marketing). Established in 2013, we have been dedicated to providing creative and high-quality visual solutions tailored to the needs of our diverse clients.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'تخصصنا' : 'Our Specialization'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'في قلب أعمالنا يكمن إنشاء محتوى مرئي جذاب يحقق النتائج. يمتد خبرتنا عبر العديد من التخصصات الإبداعية، مما يضمن أن يحقق كل مشروع نتولاه التأثير الأقصى لعملائنا.'
                      : 'At the heart of our business is the creation of compelling visual content that drives results. Our expertise spans across multiple creative disciplines, ensuring that every project we undertake delivers maximum impact for our clients.'
                    }
                  </p>

                  <div className="services-overview">
                    <div className="service-item">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                            <path d="M7 10l2 2-2 2"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'إنتاج الفيديو' : 'Video Production'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'أفلام سينمائية، فيديوهات شركات، ومحتوى وسائل التواصل الاجتماعي الجذاب الذي يروي قصتك.' : 'Cinematic films, corporate videos, and engaging social media content that tells your story.'}</p>
                    </div>
                    <div className="service-item">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'تصميم الملصقات' : 'Poster Design'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'ملصقات جذابة ومواد مطبوعة تلفت الانتباه وتنقل رسالتك.' : 'Eye-catching posters and print materials that capture attention and convey your message.'}</p>
                    </div>
                    <div className="service-item">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'التسويق البصري' : 'Visual Marketing'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'حلول تسويقية بصرية شاملة لجميع أنواع الحملات والمنصات.' : 'Comprehensive visual marketing solutions for all types of campaigns and platforms.'}</p>
                    </div>
                  </div>

                  <h4>{language === 'ar' ? 'التزامنا بالتميز' : 'Our Commitment to Excellence'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'منذ تأسيسنا، حافظنا على التزام لا يتزعزع بتقديم عمل عالي الجودة يتجاوز التوقعات. يجمع فريقنا من المهنيين الإبداعيين بين الخبرة التقنية والرؤية الفنية والتفكير الاستراتيجي لإنشاء محتوى لا يبدو رائعاً فحسب، بل يحقق نتائج قابلة للقياس.'
                      : 'Since our establishment, we have maintained an unwavering commitment to delivering high-quality work that exceeds expectations. Our team of creative professionals brings together technical expertise, artistic vision, and strategic thinking to create content that not only looks great but achieves measurable results.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'قاعدة عملاء متنوعة' : 'Diverse Client Base'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'نخدم مجموعة متنوعة من العملاء عبر مختلف الصناعات، من الاتصالات والمصارف إلى شركات الأغذية وغيرها. كل شراكة عميل فريدة من نوعها، ونعدل نهجنا لتلبية الاحتياجات والأهداف المحددة لكل مشروع نتولاه.'
                      : 'We serve a diverse range of clients across various industries, from telecommunications and banking to food companies and beyond. Each client partnership is unique, and we tailor our approach to meet the specific needs and goals of every project we undertake.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'الابتكار والتكيف' : 'Innovation and Adaptation'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'المناظر الطبيعية للتسويق البصري تتطور باستمرار، وكذلك نحن. نبقى في طليعة اتجاهات الصناعة والتكنولوجيا، مع التكيف المستمر لطرقنا لتقديم حلول متطورة تحافظ على تقدم عملائنا على المنافسة.'
                      : 'The visual marketing landscape is constantly evolving, and so are we. We stay at the forefront of industry trends and technologies, continuously adapting our methods to deliver cutting-edge solutions that keep our clients ahead of the competition.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'بناء شراكات دائمة' : 'Building Lasting Partnerships'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'بعد تقديم عمل استثنائي، نركز على بناء علاقات طويلة الأمد مع عملائنا. نحن نؤمن أن النجاح الحقيقي يأتي من فهم أعمال عملائنا بعمق وأن نصبح شريكاً موثوقاً في رحلة نموهم.'
                      : 'Beyond delivering exceptional work, we focus on building long-term relationships with our clients. We believe that true success comes from understanding our clients\' businesses deeply and becoming a trusted partner in their growth journey.'
                    }
                  </p>
                </div>
              )}

              {activeAboutModal === 'mission' && (
                <div className="modal-section">
                  <h3>{language === 'ar' ? 'مهمتنا' : 'Our Mission'}</h3>
                  <p>
                    {language === 'ar'
                      ? 'في الخرطوم إنترفيلم، نؤمن أن القوة البصرية والإبداع هما أساس نجاح الأعمال. لذلك نسعى لتقديم خدمات استثنائية تساعد عملاءنا على تحقيق أهدافهم وبناء علاماتهم التجارية بطرق تعكس رؤيتهم وتطلعاتهم.'
                      : 'At Khartoum Interfilm, we believe that visual power and creativity are the foundation of business success. That\'s why we strive to provide exceptional services that help our clients achieve their goals and build their brands in ways that reflect their vision and aspirations.'
                    }
                  </p>

                  <p>
                    {language === 'ar'
                      ? 'سواء كنت شركة ناشئة صغيرة أو شركة كبيرة، نحن هنا لنكون شريكك الموثوق في إنتاج الإعلام والتسويق البصري. نحن لا نقدم خدمات فقط—نبني شراكات طويلة الأمد مبنية على الثقة والجودة.'
                      : 'Whether you\'re a small startup or a large corporation, we are here to be your trusted partner in media production and visual marketing. We don\'t just offer services—we build long-term partnerships based on trust and quality.'
                    }
                  </p>

                  <div className="mission-quote">
                    <blockquote>
                      {language === 'ar' ? '"الخرطوم إنترفيلم: حيث يلتقي الإبداع بالاحترافية، وتصبح الأفكار واقعاً!"' : '"Khartoum Interfilm: Where creativity meets professionalism, and ideas become reality!"'}
                    </blockquote>
                  </div>

                  <h4>{language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'قيمنا توجه كل قرار نتخذه وكل مشروع نتولاه. تحدد من نحن وكيفية تعاملنا مع عملنا مع العملاء والشركاء والمجتمع الإبداعي.'
                      : 'Our values guide every decision we make and every project we undertake. They define who we are and how we approach our work with clients, partners, and the creative community.'
                    }
                  </p>

                  <div className="values-detailed">
                    <div className="value-detail-card">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'التميز' : 'Distinction'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'نركز على تقديم حلول تسويقية تساعد عملاءنا على التميز في الأسواق التنافسية. نحن لا نقدم خدمات فقط—نخلق تجارب مؤثرة تترك انطباعاً دائماً لدى الجماهير.' : 'We focus on delivering marketing solutions that help our clients stand out in competitive markets. We don\'t just offer services—we create impactful experiences that leave a lasting impression on audiences.'}</p>
                    </div>
                    <div className="value-detail-card">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13,2 L3,14 L12,14 L11,22 L21,10 L12,10 L13,2 Z"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'القوة' : 'Strength'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'نساعد العملاء في بناء هويات بصرية قوية تعكس رؤيتهم وتعزز حضور علامتهم التجارية. نحن نؤمن أن الهوية البصرية القوية هي حجر الأساس لأي عمل ناجح.' : 'We assist clients in building strong visual identities that reflect their vision and enhance their brand presence. We believe a robust visual identity is the cornerstone of any successful business.'}</p>
                    </div>
                    <div className="value-detail-card">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3,7 L21,7"/>
                            <path d="M3,12 L21,12"/>
                            <path d="M3,17 L15,17"/>
                            <polyline points="18,14 21,17 18,20"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'زيادة المبيعات' : 'Increase Sales'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'نوفر استراتيجيات تسويقية فعالة تساعد العملاء على الوصول إلى جمهورهم المستهدف وتحقيق زيادات قابلة للقياس في المبيعات. فهم احتياجات السوق هو المفتاح لتقديم نتائج استثنائية.' : 'We provide effective marketing strategies that help clients reach their target audience and achieve measurable increases in sales. Understanding market needs is key to delivering outstanding results.'}</p>
                    </div>
                    <div className="value-detail-card">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M13,2 L3,14 L12,14 L11,22 L21,10 L12,10 L13,2 Z"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'السلاسة' : 'Smoothness'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'نضمن تجربة عميل سلسة وراضية من البداية إلى النهاية. التواصل الواضح والتسليم في الوقت المحدد والخدمة الاستثنائية هي دائماً أولوياتنا.' : 'We ensure a seamless and satisfying client experience from start to finish. Clear communication, timely delivery, and exceptional customer service are always our priorities.'}</p>
                    </div>
                    <div className="value-detail-card">
                      <div className="value-header">
                        <div className="value-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                        </div>
                        <h4>{language === 'ar' ? 'الخدمات المخصصة' : 'Dedicated Services'}</h4>
                      </div>
                      <p>{language === 'ar' ? 'نقدم خدمات مخصصة تلبي المتطلبات الفريدة لكل عميل، سواء كانت شركات صغيرة أو شركات كبيرة. كل عميل يستحق حلول مبتكرة مصممة خصيصاً له.' : 'We offer customized services tailored to each client\'s unique requirements, whether they are small businesses or large corporations. Every client deserves innovative solutions designed specifically for them.'}</p>
                    </div>
                  </div>

                  <h4>{language === 'ar' ? 'الالتزام بالتميز' : 'Commitment to Excellence'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'التميز ليس مجرد هدف—إنه معيارنا. نحن ملتزمون بتقديم عمل لا يلبي التوقعات فحسب، بل يتجاوزها. سعينا للتميز يدفع الابتكار والجودة والتحسين المستمر في كل ما نقوم به.'
                      : 'Excellence is not just a goal—it\'s our standard. We are committed to delivering work that not only meets expectations but exceeds them. Our pursuit of excellence drives innovation, quality, and continuous improvement in everything we do.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'بناء الثقة من خلال الشفافية' : 'Building Trust Through Transparency'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'نؤمن بالشفافية في جميع تعاملاتنا. التواصل الواضح والتغذية الراجعة الصادقة والممارسات التجارية الأخلاقية هي أساسية في طريقة عملنا. الثقة هي أساس جميع علاقاتنا، ونعمل بجد للحفاظ عليها وتعزيزها.'
                      : 'We believe in transparency in all our dealings. Clear communication, honest feedback, and ethical business practices are fundamental to how we work. Trust is the foundation of all our relationships, and we work tirelessly to maintain and strengthen it.'
                    }
                  </p>

                  <h4>{language === 'ar' ? 'تمكين نجاح العملاء' : 'Empowering Client Success'}</h4>
                  <p>
                    {language === 'ar'
                      ? 'مقياسنا النهائي للنجاح هو نجاح عملائنا. نحن متحمسون لمساعدة الشركات على النمو ولمعان العلامات التجارية وتحويل الرؤى إلى واقع. كل مشروع فرصة لإحداث تأثير معنوي في رحلة عملائنا.'
                      : 'Our ultimate measure of success is our clients\' success. We are passionate about helping businesses grow, brands shine, and visions become reality. Every project is an opportunity to make a meaningful impact on our clients\' journey.'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>

          <style jsx>{`
            .about-modal-backdrop {
              position: fixed;
              inset: 0;
              background: rgba(15, 23, 42, 0.85);
              backdrop-filter: blur(8px);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 1500;
              padding: 1rem;
              animation: fadeIn 0.3s ease-out;
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            .about-modal {
              width: 100%;
              max-width: 950px;
              max-height: 90vh;
              background: linear-gradient(145deg, #ffffff 0%, #f8faff 100%);
              border-radius: 24px;
              box-shadow:
                0 25px 80px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.6);
              overflow: hidden;
              display: flex;
              flex-direction: column;
              animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
              border: 1px solid rgba(0, 27, 224, 0.08);
            }

            @keyframes slideUp {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .about-modal-header {
              padding: 2.5rem 3rem;
              border-bottom: 1px solid rgba(0, 27, 224, 0.08);
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: linear-gradient(135deg, #001299 0%, #00b4ff 50%, #001299 100%);
              background-size: 200% 200%;
              animation: gradientShift 8s ease-in-out infinite;
              color: white;
              position: relative;
              overflow: hidden;
            }

            .about-modal-header::before {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05), transparent 50%);
            }

            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }

            .about-modal-header h2 {
              margin: 0;
              font-size: 2.2rem;
              font-weight: 700;
              letter-spacing: -0.5px;
              position: relative;
              z-index: 1;
              text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            .about-modal-close {
              border: none;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 50%;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.4rem;
              cursor: pointer;
              color: white;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              z-index: 1;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .about-modal-close:hover {
              background: rgba(255, 255, 255, 0.25);
              transform: scale(1.1) rotate(90deg);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
            }

            .about-modal-content {
              flex: 1;
              overflow-y: auto;
              padding: 3rem;
              background: linear-gradient(180deg, rgba(248, 250, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%);
            }

            .modal-section {
              margin-bottom: 3rem;
              position: relative;
            }

            .modal-section:last-child {
              margin-bottom: 0;
            }

            .modal-section h3 {
              color: #001299;
              margin-bottom: 2rem;
              font-size: 2rem;
              font-weight: 700;
              letter-spacing: -0.3px;
              position: relative;
              display: flex;
              align-items: center;
              gap: 1rem;
            }

            .modal-section h3::before {
              content: '';
              width: 4px;
              height: 32px;
              background: linear-gradient(135deg, #001299, #00b4ff);
              border-radius: 2px;
            }

            .modal-section h4 {
              color: #000000;
              margin: 2.5rem 0 1.5rem;
              font-size: 1.4rem;
              font-weight: 600;
              letter-spacing: -0.2px;
            }

            .modal-section p {
              font-size: 1.15rem;
              line-height: 1.8;
              margin-bottom: 2rem;
              color: #374151;
              font-weight: 400;
            }

            .clients-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 1.5rem;
              margin: 2.5rem 0;
            }

            .client-card {
              background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
              border: 1px solid rgba(0, 27, 224, 0.1);
              border-radius: 16px;
              padding: 2rem;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 27, 224, 0.04);
              position: relative;
              overflow: hidden;
            }

            .client-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.02), rgba(0, 180, 255, 0.02));
              opacity: 0;
              transition: opacity 0.4s ease;
            }

            .client-card:hover {
              transform: translateY(-6px) scale(1.02);
              box-shadow: 0 20px 40px rgba(0, 27, 224, 0.12);
              border-color: rgba(0, 27, 224, 0.2);
            }

            .client-card:hover::before {
              opacity: 1;
            }

            .client-card h4 {
              color: #001299;
              margin-bottom: 1rem;
              font-size: 1.3rem;
              font-weight: 600;
              position: relative;
              z-index: 1;
            }

            .client-card p {
              color: #6b7280;
              font-size: 1rem;
              line-height: 1.6;
              margin: 0;
              position: relative;
              z-index: 1;
            }

            .highlight-box {
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.03), rgba(0, 180, 255, 0.03));
              border: 2px solid transparent;
              background-clip: padding-box;
              background-image:
                linear-gradient(#ffffff, #ffffff),
                linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
              background-origin: border-box;
              border-radius: 20px;
              padding: 2.5rem;
              margin: 3rem 0;
              position: relative;
              box-shadow: 0 8px 32px rgba(0, 27, 224, 0.06);
            }

            .highlight-box h4 {
              color: #001299;
              margin-bottom: 1.5rem;
              font-size: 1.4rem;
              font-weight: 600;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            .highlight-box h4::before {
              content: '✨';
              font-size: 1.2rem;
            }

            .highlight-box ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: grid;
              gap: 1rem;
            }

            .highlight-box li {
              position: relative;
              padding-left: 2rem;
              color: #4b5563;
              line-height: 1.7;
              font-size: 1.05rem;
            }

            .highlight-box li::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: #00b4ff;
              font-weight: bold;
              font-size: 1.1rem;
              background: linear-gradient(135deg, #001299, #00b4ff);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .services-overview {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 2rem;
              margin: 3rem 0;
            }

            .service-item {
              background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
              border: 1px solid rgba(0, 27, 224, 0.08);
              border-radius: 16px;
              padding: 2.5rem 2rem;
              text-align: center;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 27, 224, 0.04);
              position: relative;
              overflow: hidden;
            }

            .service-item::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.02), rgba(0, 180, 255, 0.02));
              opacity: 0;
              transition: opacity 0.4s ease;
            }

            .service-item:hover {
              transform: translateY(-8px) scale(1.03);
              box-shadow: 0 25px 50px rgba(0, 27, 224, 0.15);
              border-color: rgba(0, 27, 224, 0.15);
            }

            .service-item:hover::before {
              opacity: 1;
            }

            .service-icon {
              width: 48px;
              height: 48px;
              margin-bottom: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
              border-radius: 12px;
              border: 1px solid rgba(0, 27, 224, 0.12);
              filter: drop-shadow(0 2px 4px rgba(0, 27, 224, 0.15));
            }

            .service-icon svg {
              width: 24px;
              height: 24px;
              color: #001299;
            }

            .service-item h4 {
              color: #001299;
              margin-bottom: 1rem;
              font-size: 1.3rem;
              font-weight: 600;
              position: relative;
              z-index: 1;
            }

            .service-item p {
              color: #6b7280;
              font-size: 1rem;
              line-height: 1.6;
              margin: 0;
              position: relative;
              z-index: 1;
            }

            .mission-quote {
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.04), rgba(0, 180, 255, 0.04));
              border: 2px solid transparent;
              background-clip: padding-box;
              background-image:
                linear-gradient(#ffffff, #ffffff),
                linear-gradient(135deg, rgba(0, 27, 224, 0.08), rgba(0, 180, 255, 0.08));
              background-origin: border-box;
              border-radius: 20px;
              padding: 3rem;
              margin: 3rem 0;
              text-align: center;
              box-shadow: 0 8px 32px rgba(0, 27, 224, 0.06);
              position: relative;
            }

            .mission-quote::before {
              content: '';
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              width: 60px;
              height: 4px;
              background: linear-gradient(135deg, #001299, #00b4ff);
              border-radius: 2px;
            }

            .mission-quote blockquote {
              font-size: 1.4rem;
              font-style: italic;
              color: #001299;
              margin: 0;
              line-height: 1.6;
              font-weight: 500;
              position: relative;
            }

            .values-detailed {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 2rem;
              margin: 3rem 0;
            }

            .value-detail-card {
              background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
              border: 1px solid rgba(0, 27, 224, 0.08);
              border-radius: 16px;
              padding: 2rem;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 20px rgba(0, 27, 224, 0.04);
              position: relative;
              overflow: hidden;
            }

            .value-detail-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.02), rgba(0, 180, 255, 0.02));
              opacity: 0;
              transition: opacity 0.4s ease;
            }

            .value-detail-card:hover {
              transform: translateY(-6px) scale(1.02);
              box-shadow: 0 20px 40px rgba(0, 27, 224, 0.12);
              border-color: rgba(0, 27, 224, 0.15);
            }

            .value-detail-card:hover::before {
              opacity: 1;
            }

            .value-header {
              display: flex;
              align-items: center;
              gap: 1.25rem;
              margin-bottom: 1.5rem;
            }

            .value-icon {
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
              border-radius: 12px;
              border: 1px solid rgba(0, 27, 224, 0.12);
              flex-shrink: 0;
              filter: drop-shadow(0 2px 4px rgba(0, 27, 224, 0.15));
            }

            .value-icon svg {
              width: 24px;
              height: 24px;
              color: #001299;
            }

            .value-detail-card h4 {
              color: #001299;
              margin: 0;
              font-size: 1.3rem;
              font-weight: 600;
              position: relative;
              z-index: 1;
            }

            .value-detail-card p {
              color: #6b7280;
              font-size: 1rem;
              line-height: 1.7;
              margin: 0;
              position: relative;
              z-index: 1;
            }

            @media (max-width: 768px) {
              .about-modal-backdrop {
                padding: 0.5rem;
              }

              .about-modal {
                max-height: 95vh;
                border-radius: 16px;
              }

              .about-modal-header {
                padding: 2rem 1.5rem;
              }

              .about-modal-header h2 {
                font-size: 1.8rem;
              }

              .about-modal-content {
                padding: 2rem 1.5rem;
              }

              .clients-grid,
              .services-overview {
                grid-template-columns: 1fr;
              }

              .values-detailed {
                grid-template-columns: 1fr;
                gap: 1.5rem;
              }

              .modal-section h3 {
                font-size: 1.6rem;
              }

              .modal-section h4 {
                font-size: 1.2rem;
              }

              .modal-section p {
                font-size: 1rem;
              }
            }
          `}</style>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-title">
            <h2>{language === 'ar' ? 'من نحن' : 'About Us'}</h2>
            <p>{language === 'ar' ? 'شركة رائدة في إنتاج المحتوى الإعلاني متخصصة في الفيديوهات والملصقات والتسويق البصري منذ عام 2013.' : 'Leading advertising content production company specializing in videos, posters, and visual marketing since 2013.'}</p>
          </div>
          <div className="about-grid">
            <div className="about-card" onClick={() => setActiveAboutModal('history')}>
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
            <div className="about-card highlight" onClick={() => setActiveAboutModal('international')}>
              <h3>{language === 'ar' ? 'التواجد الدولي' : 'International Presence'}</h3>
              <p>{language === 'ar' ? 'في توسيع تواجدنا الدولي، ساهمنا في الأحداث البصرية للاحتفال بعيد استقلال السودان الذي أقيم في سفارة السودان في رواندا.' : 'In expanding our international presence, we contributed to the visual events of the Sudanese Independence Day Celebration held at the Sudanese Embassy in Rwanda.'}</p>
              <div className="chips">
                <span className="chip">{language === 'ar' ? 'الاحترافية' : 'Professionalism'}</span>
                <span className="chip">{language === 'ar' ? 'التراث الثقافي' : 'Cultural heritage'}</span>
                <span className="chip">{language === 'ar' ? 'الوصول العالمي' : 'Global reach'}</span>
              </div>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
            <div className="about-card" onClick={() => setActiveAboutModal('company')}>
              <h3>{language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview'}</h3>
              <p>{language === 'ar' ? 'نحن مجموعة الخرطوم إنترفيلم، شركة رائدة متخصصة في إنتاج المحتوى الإعلاني بما في ذلك الفيديوهات والملصقات وجميع أنواع التسويق البصري.' : 'We are Khartoum Interfilm Group, a leading company specializing in advertising content production including videos, posters, and all types of visual marketing.'}</p>
              <div className="chips">
                <span className="chip">{language === 'ar' ? 'تأسست 2013' : 'Established 2013'}</span>
                <span className="chip">{language === 'ar' ? 'حلول إبداعية' : 'Creative solutions'}</span>
                <span className="chip">{language === 'ar' ? 'عملاء متنوعون' : 'Diverse clients'}</span>
              </div>
              <div className="card-link">{language === 'ar' ? 'اعرف المزيد →' : 'Learn more →'}</div>
            </div>
            <div className="about-card" onClick={() => setActiveAboutModal('mission')}>
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

        <style jsx>{`
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
          <div className="section-title">
            <h2>{language === 'ar' ? 'تعرف على الفريق' : 'Meet the Team'}</h2>
            <p>{language === 'ar' ? 'مواهب متعددة التخصصات تدفع الاستراتيجية والإنتاج والأداء.' : 'Cross-disciplinary talent powering strategy, production, and performance.'}</p>
          </div>
          
          <div className="team-cover">
            <Image 
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
                bio: 'Visionary leader driving the company\'s strategic direction and fostering a culture of innovation and excellence.',
                bioAr: 'قائد رؤيوي يقود الاتجاه الاستراتيجي للشركة ويعزز ثقافة الابتكار والتميز.',
                image: '/1.JPEG'
              },
              {
                name: 'Hozaifa Tarig',
                role: 'Creative Director',
                roleAr: 'مدير إبداعي',
                bio: 'Oversees the artistic vision, ensuring every project meets our high standards of creativity and impact.',
                bioAr: 'يشرف على الرؤية الفنية، وضمان أن يلبي كل مشروع معاييرنا العالية في الإبداع والتأثير.',
                image: '/2.JPEG'
              },
              {
                name: 'Awab Ahmed',
                role: 'Marketing & Business Development Lead',
                roleAr: 'قائد التسويق والتطوير التجاري',
                bio: 'Develops strategic partnerships and marketing initiatives to expand our reach and deliver value.',
                bioAr: 'يطور الشراكات الاستراتيجية ومبادرات التسويق لتوسيع نطاقنا وتقديم القيمة.',
                image: '/3.JPEG'
              },
              {
                name: 'Rawan Faroug',
                role: 'Programs Coordinator and Planner',
                roleAr: 'منسق البرامج ومخطط',
                bio: 'Orchestrates project timelines and resources, ensuring seamless execution from concept to delivery.',
                bioAr: 'ينظم جداول المشاريع والموارد، وضمان تنفيذ سلس من الفكرة إلى التسليم.',
                image: '/4.JPEG'
              },
              {
                name: 'Mujtaba Amin',
                role: 'Technical Lead',
                roleAr: 'القائد التقني',
                bio: 'Expert in technical solutions, ensuring our digital productions are built on robust and scalable foundations.',
                bioAr: 'خبير في الحلول التقنية، وضمان بناء إنتاجاتنا الرقمية على أساس متين وقابل للتوسع.',
                image: '/5.JPEG'
              },
              {
                name: 'Muaz Muntasir',
                role: 'Video Editor',
                roleAr: 'محرر فيديو',
                bio: 'Crafts compelling narratives through precise editing and post-production mastery.',
                bioAr: 'يصنع روايات جذابة من خلال التحرير الدقيق وإتقان ما بعد الإنتاج.',
                image: '/6 .JPEG'
              },
              {
                name: 'Mohammed Abdelmoneim',
                role: 'Photographer & Graphic Designer',
                roleAr: 'مصور فوتوغرافي ومصمم جرافيكي',
                bio: 'Captures moments and designs visuals that resonate with audiences and strengthen brand identity.',
                bioAr: 'يلتقط اللحظات ويصمم مرئيات تتردد صداها مع الجماهير وتعزز هوية العلامة التجارية.',
                image: '/7 .JPEG'
              },
              {
                name: 'Mohammed Yaser',
                role: 'Videographer',
                roleAr: 'مصور فيديو',
                bio: 'Brings stories to life through expert camera work and a keen eye for visual composition.',
                bioAr: 'يحيي القصص من خلال العمل الاحترافي بالكاميرا وعين حادة للتركيب البصري.',
                image: '/8 .JPEG'
              },
              {
                name: 'Kashif Abdelmajed',
                role: 'Customer Service',
                roleAr: 'خدمة العملاء',
                bio: 'Dedicated to ensuring client satisfaction and maintaining clear, positive communication channels.',
                bioAr: 'مكرس لضمان رضا العملاء وصيانة قنوات التواصل الواضحة والإيجابية.',
                image: '/9 .JPEG'
              },
              {
                name: 'Obay Eljinaid',
                role: 'Public Relations',
                roleAr: 'العلاقات العامة',
                bio: 'Manages our public image and builds strong relationships with media and the community.',
                bioAr: 'يدير صورتنا العامة ويبني علاقات قوية مع الإعلام والمجتمع.',
                image: '/10.JPEG'
              },
              {
                name: 'Ali Tajeldein',
                role: 'Content Creator',
                roleAr: 'منشئ محتوى',
                bio: 'Produces engaging content that connects with audiences across various digital platforms.',
                bioAr: 'ينتج محتوى جذاب يتواصل مع الجماهير عبر مختلف المنصات الرقمية.',
                image: '/11.JPEG'
              }
            ].map((member) => (
              <div key={member.name} className="team-card">
                <div className="member-image-container">
                  <Image
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

        <style jsx>{`
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
          <div className="section-title">
            <h2>{language === 'ar' ? 'شركاؤنا' : 'Partnerships'}</h2>
            <p>{language === 'ar' ? 'نتعاون مع الأفضل لتقديم حلول متكاملة' : 'Collaborating with the best to deliver integrated solutions'}</p>
          </div>
          <div className="partners-grid">
             <div className="partner-card" onClick={() => window.open('https://www.samalync.com', '_blank', 'noopener,noreferrer')}>
                <div className="partner-logo">
                   <Image
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
                   <Image
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
                   <Image
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

        <style jsx>{`
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
          <div className="section-title">
            <h2>{language === 'ar' ? 'اتصل بنا' : 'Contact Us'}</h2>
            <p>{language === 'ar' ? 'أخبرنا عن حملتك أو إنتاجك التالي—دعنا نبنيه معاً.' : 'Tell us about your next campaign or production—let\'s build it together.'}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>{language === 'ar' ? 'ابدأ مشروع' : 'Start a project'}</h3>
              <p>{language === 'ar' ? 'شارك أهدافك والجدول الزمني والميزانية. نرد خلال 24 ساعة.' : 'Share your goals, timeline, and budget. We respond within 24 hours.'}</p>
              <div className="contact-meta">
                <div className="contact-item">
                  {(FaEnvelope as any)({ className: "contact-icon" })}
                  <span>khartouminterfilm@gmail.com</span>
                </div>
                <div className="contact-item">
                  {(FaPhone as any)({ className: "contact-icon" })}
                  <span>0795429785</span>
                </div>
                <div className="contact-item">
                  {(FaClock as any)({ className: "contact-icon" })}
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

        <style jsx>{`
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
    </>
  );
}
