import CMS from 'netlify-cms-app'

import HomePagePreview from './preview-templates/home-preview.js'
import BlogPagePreview from './preview-templates/blog-preview.js'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('blog', BlogPagePreview)
