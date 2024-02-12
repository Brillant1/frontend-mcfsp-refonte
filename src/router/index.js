import { createRouter, createWebHistory } from "vue-router";
import { authStore } from '@/store';
import axios from '@/axios';
const routes = [ 
    //Frontoffice route will go here
    {
        path: '/',
        name: 'home',
        // component: () => import('../layouts/website/WebsiteLayout.vue'),
        component: () => import('../views/website/home.vue'),
        meta: {
            requiresAuth: false,
            layout: 'WebsiteLayout'
        },
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('../views/website/faq.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/website/contact.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/notre-equipe',
        name: 'notre-equipe',
        component: () => import('../views/website/notre-equipe.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/nos-boursiers',
        name: 'nos-boursiers',
        component: () => import('../views/website/nos-boursiers.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/website/news.vue'),
        redirect: '/news/actualites',
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
        children: [
            {
                path: 'actualites',
                component: () => import('@/views/website/news/actualites.vue'),
            },
            {
                path: 'success-stories',
                component: () => import('@/views/website/news/success-stories.vue'),
            },
            {
                path: 'giving-back',
                component: () => import('@/views/website/news/giving-back.vue'),
            },
            {
                path: 'bamfa',
                component: () => import('@/views/website/news/bamfa.vue'),
            },
        ]
    },
    {
        path: '/postuler',
        name: 'postuler',
        component: () => import('@/views/website/postuler.vue'),
        redirect: '/postuler/licence',
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
        children: [
            {
                path: 'licence',
                component: () => import('@/views/website/postuler/licence.vue'),
            },
            {
                path: 'master',
                component: () => import('@/views/website/postuler/master.vue'),
            },
            {
                path: 'entrepreneuriat',
                component: () => import('@/views/website/postuler/entrepreneuriat.vue'),
            },
        ]
    },
    {
        path: '/news-detail',
        name: 'news-detail',
        component: () => import('../views/website/news-detail.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/a-propos',
        name: 'a-propos',
        component: () => import('../views/website/a-propos.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/ressources',
        name: 'ressources',
        component: () => import('../views/website/ressources.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },
    {
        path: '/ressource-detail',
        name: 'ressource-detail',
        component: () => import('../views/website/ressource-detail.vue'),
        meta: {
            requiresAuth: false,
            layout: 'website-layout'
        },
    },

    //Backoffice route will go here
    // Auth routes will go here
    {
        path: "/auth-template",
        name: "auth-template",
        component: () => import("../views/auth/template.vue"),
        meta: {
            requiresAuth: false,
            layout: 'simple-layout'
        },
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("../views/auth/login.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
            {
                path: "/register",
                name: "register",
                component: () => import("../views/auth/register.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
            {
                path: "/forgot_password",
                name: "forgot_password",
                component: () => import("../views/auth/forgot_password.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
            {
                path: "/reset_password",
                name: "reset_password",
                component: () => import("../views/auth/reset_password.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
            {
                path: "/reset_password",
                name: "reset_password",
                component: () => import("../views/auth/reset_password.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
            {
                path: "/validate_code/:from",
                name: "validate_code",
                component: () => import("../views/auth/validate_code.vue"),
                meta: {
                    requiresAuth: false,
                    layout: 'simple-layout'
                },
            },
        ]
    },
    


    //Backoffice routes will go here

    {
        path: "/admin",
        name: "admin",
        component: () => import("../layouts/admin/AdminLayout.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../views/admin/Dashboard.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },

    //Annonce routes
    {
        path: "/annonces/liste",
        name: "annonces/liste",
        component: () => import("@/views/admin/annonces/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    //Article routes
    {
        path: "/articles/index",
        name: "articles/index",
        component: () => import("@/views/admin/articles/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/articles/detail/:slug",
        name: "articles/detail",
        component: () => import("../views/admin/articles/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/articles/edit/:slug",
        name: "articles/edit",
        component: () => import("../views/admin/articles/edit.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/articles/liste",
        name: "articles/liste",
        component: () => import("../views/admin/articles/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },

    //Boursiers routes

   {
        path: "/boursiers/index",
        name: "boursiers/index",
        component: () => import("@/views/admin/boursiers/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/boursiers/:slug",
        name: "boursiers/detail",
        component: () => import("../views/admin/boursiers/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/boursiers/edit/:slug",
        name: "boursiers/edit",
        component: () => import("../views/admin/boursiers/edit.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/boursiers/liste",
        name: "boursiers/liste",
        component: () => import("../views/admin/boursiers/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },

    //Opportunite routes

    {
        path: "/opportunites/index",
        name: "opportunites/index",
        component: () => import("@/views/admin/opportunites/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/opportunites/detail/:slug",
        name: "opportunites/detail",
        component: () => import("../views/admin/opportunites/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/opportunites/edit/:slug",
        name: "opportunites/edit",
        component: () => import("../views/admin/opportunites/edit.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/opportunites/liste",
        name: "opportunites/liste",
        component: () => import("../views/admin/opportunites/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },


    //Document routes
    {
        path: "/documents/index",
        name: "documents/index",
        component: () => import("@/views/admin/documents/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/documents/edit/:id",
        name: "documents/edit",
        component: () => import("@/views/admin/documents/edit.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/documents/detail/:id",
        name: "documents/detail",
        component: () => import("@/views/admin/documents/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
   
    {
        path: "/documents/liste",
        name: "documents/liste",
        component: () => import("../views/admin/documents/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },

  

    //Activité route
    {
        path: "/activites/index",
        name: "activites/index",
        component: () => import("@/views/admin/activites/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/activites/detail",
        name: "activites/detail",
        component: () => import("@/views/admin/activites/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/activites/liste",
        name: "activites/liste",
        component: () => import("@/views/admin/activites/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },


    //Entites routes
    {
        path: "/entites/liste",
        name: "entites/liste",
        component: () => import("@/views/admin/entites/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },




    //Podcasts route
    {
        path: "/podcasts/index",
        name: "podcasts/index",
        component: () => import("@/views/admin/podcasts/index.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/podcasts/detail",
        name: "podcasts/detail",
        component: () => import("@/views/admin/podcasts/detail.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    {
        path: "/podcasts/liste",
        name: "podcasts/liste",
        component: () => import("@/views/admin/podcasts/liste.vue"),
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },


    {
        path: "/contact-newsletter",
        name: "contact-newsletter",
        component: () => import("@/views/admin/contacts/index.vue"),
        children: [
            {
                path: "/contacts",
                name: "contacts",
                component: () => import("@/views/admin/contacts/contact.vue"),
                
                meta: {
                    requiresAuth: true,
                    layout: 'admin-layout'
                },
            },
            {
                path: "/contacts/detail",
                name: "contacts/detail",
                component: () => import("@/views/admin/contacts/detail.vue"),
                
                meta: {
                    requiresAuth: true,
                    layout: 'admin-layout'
                },
            },
            {
                path: "/newsletters",
                name: "newsletters",
                component: () => import("@/views/admin/contacts/newsletter.vue"),
                
                meta: {
                    requiresAuth: true,
                    layout: 'admin-layout'
                },
            },
        ],
        meta: {
            requiresAuth: true,
            layout: 'admin-layout'
        },
    },
    




    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
            requiresAuth: true,
            layout: 'simple-layout'
        },
        component: () => import('@/views/pageNotFound.vue'), // Remplacez par le composant ou la page de votre choix
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'instant' }
        }
    },
});


router.beforeEach(async (to, from, next) => {
    const store = authStore();
    
    if (to.meta.requiresAuth && !store.isAuthenticated) {
        next('/login')
    }else if(to.meta.requiresAuth && store.isAuthenticated){
        next()
    }
    else{
        next()
    }
   
    
});

export default router;