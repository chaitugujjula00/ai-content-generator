export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2537/2537788.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche & outline topic and given me result in Rich text Editor prompt',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name: 'Product Description',
        desc: 'An AI tool that generates detailed and engaging product descriptions based on product features.',
        category: 'E-commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/1832/1832294.png',
        aiPrompt: 'Generate a compelling product description in bullet points based on the given product features and specifications. The result should be formatted for e-commerce listing.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter product features',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Social Media Post',
        desc: 'An AI tool that creates engaging social media posts based on given topics and hashtags.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1968/1968750.png',
        aiPrompt: 'Generate a creative social media post in bullet points based on the given topic and hashtags. Ensure the tone is engaging and suitable for social platforms.',
        slug: 'generate-social-media-post',
        form: [
            {
                label: 'Enter the main topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter relevant hashtags',
                field: 'textarea',
                name: 'hashtags',
            }
        ]
    },
    {
        name: 'Email Subject Line',
        desc: 'An AI tool that generates attention-grabbing email subject lines based on the email content.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/1040/1040218.png',
        aiPrompt: 'Generate 5 email subject lines in bullet points based on the given email content. The result should be engaging and encourage opening the email.',
        slug: 'generate-email-subject-line',
        form: [
            {
                label: 'Enter email content',
                field: 'textarea',
                name: 'emailContent',
                required: true
            }
        ]
    },
    {
        name: 'SEO Meta Description',
        desc: 'An AI tool that creates SEO-friendly meta descriptions based on the page content and target keywords.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/3607/3607459.png',
        aiPrompt: 'Generate an SEO-friendly meta description in bullet points based on the given page content and target keywords. The result should be concise and include the main keywords.',
        slug: 'generate-seo-meta-description',
        form: [
            {
                label: 'Enter page content',
                field: 'textarea',
                name: 'pageContent',
                required: true
            },
            {
                label: 'Enter target keywords',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Ad Copy',
        desc: 'An AI tool that generates persuasive ad copy based on the product/service details and target audience.',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/9662/9662277.png',
        aiPrompt: 'Generate a persuasive ad copy in bullet points based on the given product/service details and target audience. The result should be engaging and tailored to the audience.',
        slug: 'generate-ad-copy',
        form: [
            {
                label: 'Enter product/service details',
                field: 'textarea',
                name: 'productDetails',
                required: true
            },
            {
                label: 'Enter target audience',
                field: 'input',
                name: 'audience',
                required: true
            }
        ]
    },
    {
        name: 'Course Outline',
        desc: 'An AI tool that generates a detailed course outline based on the given course topic and objectives.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/11517/11517973.png',
        aiPrompt: 'Generate a detailed course outline in bullet points based on the given course topic and objectives. The result should include module titles and brief descriptions.',
        slug: 'generate-course-outline',
        form: [
            {
                label: 'Enter course topic',
                field: 'input',
                name: 'courseTopic',
                required: true
            },
            {
                label: 'Enter course objectives',
                field: 'textarea',
                name: 'courseObjectives',
                required: true
            }
        ]
    },
    {
        name: 'Video Script',
        desc: 'An AI tool that creates engaging video scripts based on the given video topic and key points.',
        category: 'Video Production',
        icon: 'https://cdn-icons-png.flaticon.com/128/11513/11513415.png',
        aiPrompt: 'Generate an engaging video script in bullet points based on the given video topic and key points. The result should include an introduction, main content, and conclusion.',
        slug: 'generate-video-script',
        form: [
            {
                label: 'Enter video topic',
                field: 'input',
                name: 'videoTopic',
                required: true
            },
            {
                label: 'Enter key points',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            }
        ]
    },
    {
        name: 'Job Description',
        desc: 'An AI tool that generates comprehensive job descriptions based on the job title and responsibilities.',
        category: 'Recruitment',
        icon: 'https://cdn-icons-png.flaticon.com/128/11231/11231532.png',
        aiPrompt: 'Generate a comprehensive job description in bullet points based on the given job title and responsibilities. The result should include required skills and qualifications.',
        slug: 'generate-job-description',
        form: [
            {
                label: 'Enter job title',
                field: 'input',
                name: 'jobTitle',
                required: true
            },
            {
                label: 'Enter job responsibilities',
                field: 'textarea',
                name: 'jobResponsibilities',
                required: true
            }
        ]
    },
    {
        name: 'Recipe Generator',
        desc: 'An AI tool that creates detailed recipes based on the main ingredient and cuisine type.',
        category: 'Cooking',
        icon: 'https://cdn-icons-png.flaticon.com/128/1721/1721455.png',
        aiPrompt: 'Generate a detailed recipe in bullet points based on the given main ingredient and cuisine type. The result should include ingredients, steps, and cooking tips.',
        slug: 'generate-recipe',
        form: [
            {
                label: 'Enter main ingredient',
                field: 'input',
                name: 'mainIngredient',
                required: true
            },
            {
                label: 'Enter cuisine type',
                field: 'input',
                name: 'cuisineType',
                required: true
            }
        ]
    }    
]