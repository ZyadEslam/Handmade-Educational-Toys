(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LangToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/LangToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header({ locale, dict }) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { count, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const t = dict.header.nav;
    const isAr = locale === "ar";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const onScroll = {
                "Header.useEffect.onScroll": ()=>setScrolled(window.scrollY > 12)
            }["Header.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const nav = [
        {
            href: "#toys",
            label: t.toys
        },
        {
            href: "#why",
            label: t.why
        },
        {
            href: "#gallery",
            label: t.gallery
        },
        {
            href: "#story",
            label: t.story
        },
        {
            href: "#faq",
            label: t.faq
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("sticky top-0 z-50 w-full border-b-2 transition-all duration-300", scrolled ? "border-ink/10 bg-white/90 shadow-[0_4px_20px_rgba(43,36,64,0.08)] backdrop-blur-md" : "border-transparent bg-white"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${locale}#top`,
                        "aria-label": "HM Toys — home",
                        className: "shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                            locale: locale
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-1 lg:flex",
                        "aria-label": "Main",
                        children: nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "rounded-full px-3.5 py-2 text-sm font-bold text-ink-soft transition-colors hover:bg-lilac hover:text-ink",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$LangToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangToggle"], {
                                locale: locale
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openCart,
                                className: "relative grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-all hover:-translate-y-0.5 hover:bg-sun",
                                "aria-label": dict.cart.title,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 7h12l1.2 12.2a1.5 1.5 0 0 1-1.5 1.8H6.3a1.5 1.5 0 0 1-1.5-1.8L6 7Z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 9V6a3 3 0 0 1 6 0v3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Header.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -end-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full border-2 border-ink bg-coral px-1 text-[0.65rem] font-extrabold text-white",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "#toys",
                                className: "hidden md:inline-flex",
                                variant: "primary",
                                size: "md",
                                children: dict.header.cta
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((v)=>!v),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-white transition-colors hover:bg-cream lg:hidden", open && "bg-sun"),
                                "aria-expanded": open,
                                "aria-label": isAr ? "القائمة" : "Menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.4",
                                    strokeLinecap: "round",
                                    "aria-hidden": "true",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 5l14 14M19 5L5 19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 7h16M4 12h16M4 17h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 59
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-t-2 border-ink/10 bg-white px-4 py-3 lg:hidden",
                "aria-label": "Mobile",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col",
                    children: [
                        nav.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    onClick: ()=>setOpen(false),
                                    className: "block rounded-xl px-3 py-3 font-display text-base font-bold text-ink hover:bg-lilac",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Header.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: "#toys",
                                className: "w-full",
                                size: "lg",
                                onClick: ()=>setOpen(false),
                                children: dict.header.cta
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Header, "s798PTk/lo70BuG7MwgoEbuc9Hs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/LangToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangToggle",
    ()=>LangToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LangToggle({ locale }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const rest = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
    const target = `/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["otherLocale"])(locale)}${rest || ""}`;
    const isAr = locale === "ar";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: target,
        hrefLang: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["otherLocale"])(locale),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:bg-sun"),
        "aria-label": isAr ? "Switch to English" : "التبديل إلى العربية",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "h-3.5 w-3.5",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2.4",
                strokeLinecap: "round",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "9"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/LangToggle.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/LangToggle.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/LangToggle.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            isAr ? "EN" : "عربي"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/LangToggle.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(LangToggle, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LangToggle;
var _c;
__turbopack_context__.k.register(_c, "LangToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
;
const base = "inline-flex items-center justify-center gap-2 rounded-2xl font-display font-bold transition-all duration-200 border-2 border-ink select-none active:translate-y-0.5 active:shadow-none disabled:opacity-60 disabled:pointer-events-none";
const variants = {
    primary: "bg-coral text-white shadow-pop hover:-translate-y-0.5 hover:bg-coral-deep",
    secondary: "bg-white text-ink shadow-pop hover:-translate-y-0.5 hover:bg-cream",
    ink: "bg-ink text-white shadow-pop hover:-translate-y-0.5 hover:bg-[#3a3157]",
    sun: "bg-sun text-ink shadow-pop hover:-translate-y-0.5 hover:bg-[#ffd76f]",
    ghost: "border-transparent bg-transparent text-ink hover:bg-lilac"
};
const sizes = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base"
};
function Button(props) {
    const { variant = "primary", size = "md", className, children, ...rest } = props;
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])(base, variants[variant], sizes[size], className);
    if ("href" in rest && rest.href) {
        const { href, ...anchorRest } = rest;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            className: classes,
            ...anchorRest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: classes,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "SunMark",
    ()=>SunMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
;
function SunMark({ className }) {
    const rays = [
        {
            color: "#FFC94D",
            angle: 0,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#2EC4B6",
            angle: 45,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#FF92B6",
            angle: 90,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#8B7CF6",
            angle: 135,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#FFC94D",
            angle: 180,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#2EC4B6",
            angle: 225,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#FF92B6",
            angle: 270,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        },
        {
            color: "#8B7CF6",
            angle: 315,
            x: -14,
            y: -4,
            w: 28,
            h: 8,
            rx: 4
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 64 64",
        className: className,
        "aria-hidden": "true",
        focusable: "false",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: rays.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: r.x,
                        y: r.y,
                        width: r.w,
                        height: r.h,
                        rx: r.rx,
                        fill: r.color,
                        stroke: "#2B2440",
                        strokeWidth: "2.5",
                        transform: `rotate(${r.angle})`
                    }, i, false, {
                        fileName: "[project]/src/components/ui/Logo.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "19",
                fill: "#FF6B5C",
                stroke: "#2B2440",
                strokeWidth: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "25.5",
                cy: "28.5",
                r: "2.6",
                fill: "#2B2440"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "38.5",
                cy: "28.5",
                r: "2.6",
                fill: "#2B2440"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24.5 36.5c2.2 3.2 12.8 3.2 15 0",
                fill: "none",
                stroke: "#2B2440",
                strokeWidth: "3",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "20.5",
                cy: "34",
                r: "2.2",
                fill: "#FFD9DF"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "43.5",
                cy: "34",
                r: "2.2",
                fill: "#FFD9DF"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Logo.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = SunMark;
function Logo({ locale, className, compact = false }) {
    const isAr = locale === "ar";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("inline-flex items-center gap-2.5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SunMark, {
                className: "h-10 w-10 shrink-0 sm:h-11 sm:w-11"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex flex-col leading-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl",
                        children: isAr ? "HM Toys" : "HM Toys"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Logo.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden md:block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-ink-soft",
                        children: isAr ? "ألعاب تعليمية يدوية" : "Handmade · Educational · Toys"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Logo.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Logo.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Logo.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "SunMark");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrainIcon",
    ()=>BrainIcon,
    "ChatIcon",
    ()=>ChatIcon,
    "GiftIcon",
    ()=>GiftIcon,
    "HeartIcon",
    ()=>HeartIcon,
    "LeafIcon",
    ()=>LeafIcon,
    "PaletteIcon",
    ()=>PaletteIcon,
    "PencilIcon",
    ()=>PencilIcon,
    "RibbonIcon",
    ()=>RibbonIcon,
    "ShieldIcon",
    ()=>ShieldIcon,
    "StarIcon",
    ()=>StarIcon,
    "ThreadIcon",
    ()=>ThreadIcon,
    "TruckIcon",
    ()=>TruckIcon,
    "WoodIcon",
    ()=>WoodIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
;
function Base({ className, children, viewBox = "0 0 48 48" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: viewBox,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("h-full w-full", className),
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        focusable: "false",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Base;
function LeafIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 10C22 10 12 18 10 30c-1 6 3 8 7 6 9-5 17-14 21-26Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 40C17 30 24 22 34 16"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = LeafIcon;
function WoodIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "14",
                width: "28",
                height: "20",
                rx: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 18h20M14 24h20M14 30h20"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M38 40c3 3 8 3 8-2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c2 = WoodIcon;
function BrainIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 10c-3-4-10-3-11 2-4 1-5 6-2 8-2 4 0 8 4 8 0 5 6 7 9 4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 10c3-4 10-3 11 2 4 1 5 6 2 8 2 4 0 8-4 8 0 5-6 7-9 4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 10v22"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c3 = BrainIcon;
function GiftIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "10",
                y: "20",
                width: "28",
                height: "18",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 26h28M24 20v18"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 20c-6-1-10-4-9-7 1-2 4-2 6 0 2 2 3 4 3 7Zm0 0c6-1 10-4 9-7-1-2-4-2-6 0-2 2-3 4-3 7Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c4 = GiftIcon;
function PaletteIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 8a16 16 0 1 0 0 32c3 0 4-2 3-4s0-5 4-5h4c4 0 6-3 5-7-2-9-8-16-16-16Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "19",
                r: "2",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "27",
                cy: "15",
                r: "2",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "35",
                cy: "22",
                r: "2",
                fill: "currentColor",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = PaletteIcon;
function PencilIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 38l3-9 20-20a3.5 3.5 0 0 1 5 5L18 34l-8 4Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28 14l6 6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c6 = PencilIcon;
function ThreadIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 20a10 10 0 0 1 20 0v6a10 10 0 0 1-20 0v-3"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M34 20c4 0 4 8 0 8h-2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "14",
                cy: "30",
                r: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c7 = ThreadIcon;
function RibbonIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 16c-2-4-8-6-12-3-4 3-3 9 1 11l-2 3 5-1 8 10 8-10 5 1-2-3c4-2 5-8 1-11-4-3-10-1-12 3Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c8 = RibbonIcon;
function TruckIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 14h24v16H4zM28 20h8l6 6v4H28"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "32",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "34",
                cy: "32",
                r: "3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c9 = TruckIcon;
function HeartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 40C10 30 6 22 8 15c2-6 10-8 16-2 6-6 14-4 16 2 2 7-2 15-16 25Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 107,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c10 = HeartIcon;
function ShieldIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M24 6l16 6v12c0 10-6 16-16 20C14 40 8 34 8 24V12l16-6Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 24l6 6 10-12"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c11 = ShieldIcon;
function StarIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 6c1.7 9.4 4.5 13.2 18 18-13.5 4.8-16.3 8.6-18 18-1.7-9.4-4.5-13.2-18-18 13.5-4.8 16.3-8.6 18-18Z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/icons.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c12 = StarIcon;
function ChatIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Base, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10h32v22H22l-8 7v-7H8V10Z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 20h18M15 26h12"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/icons.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/icons.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_c13 = ChatIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "Base");
__turbopack_context__.k.register(_c1, "LeafIcon");
__turbopack_context__.k.register(_c2, "WoodIcon");
__turbopack_context__.k.register(_c3, "BrainIcon");
__turbopack_context__.k.register(_c4, "GiftIcon");
__turbopack_context__.k.register(_c5, "PaletteIcon");
__turbopack_context__.k.register(_c6, "PencilIcon");
__turbopack_context__.k.register(_c7, "ThreadIcon");
__turbopack_context__.k.register(_c8, "RibbonIcon");
__turbopack_context__.k.register(_c9, "TruckIcon");
__turbopack_context__.k.register(_c10, "HeartIcon");
__turbopack_context__.k.register(_c11, "ShieldIcon");
__turbopack_context__.k.register(_c12, "StarIcon");
__turbopack_context__.k.register(_c13, "ChatIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "productById",
    ()=>productById,
    "products",
    ()=>products
]);
const products = [
    {
        id: "happy-farm-busy-board",
        image: "prod-busyboard",
        accent: "coral",
        price: 990,
        badge: "bestseller",
        name: {
            en: "Happy Farm Busy Board",
            ar: "اللوحة التفاعلية «المزرعة السعيدة»"
        },
        tagline: {
            en: "Lights, switches & a whole farm of curiosity.",
            ar: "أضواء ومفاتيح ومزرعة كاملة من الفضول."
        },
        age: {
            en: "2–5 years",
            ar: "2–5 سنوات"
        }
    },
    {
        id: "wooden-rainbow",
        image: "prod-rainbow",
        accent: "grape",
        price: 520,
        name: {
            en: "Rainbow Stacker",
            ar: "قوس قزح الخشبي"
        },
        tagline: {
            en: "Twelve arches. A new game every day.",
            ar: "اثنا عشر قوسًا… ولعبة جديدة كل يوم."
        },
        age: {
            en: "1–4 years",
            ar: "1–4 سنوات"
        }
    },
    {
        id: "abc-letter-puzzle",
        image: "prod-abc",
        accent: "sky",
        price: 640,
        name: {
            en: "ABC Letter Puzzle",
            ar: "لوحة الحروف الأبجدية"
        },
        tagline: {
            en: "Letters small hands can hold — and smile at.",
            ar: "حروف تمسكها الأيدي الصغيرة… وتبتسم لها."
        },
        age: {
            en: "2–5 years",
            ar: "2–5 سنوات"
        }
    },
    {
        id: "counting-abacus",
        image: "prod-abacus",
        accent: "teal",
        price: 460,
        name: {
            en: "Counting Abacus",
            ar: "المعداد الخشبي"
        },
        tagline: {
            en: "One, two, three — the natural way.",
            ar: "واحد، اثنان، ثلاثة… بالطريقة الطبيعية."
        },
        age: {
            en: "2–6 years",
            ar: "2–6 سنوات"
        }
    },
    {
        id: "felt-quiet-book",
        image: "prod-quietbook",
        accent: "pink",
        price: 590,
        badge: "new",
        name: {
            en: "Felt Quiet Book",
            ar: "الكتاب القماشي الهادئ"
        },
        tagline: {
            en: "Soft pages, quiet hours, happy trips.",
            ar: "صفحات ناعمة، ساعات هادئة، ورحلات سعيدة."
        },
        age: {
            en: "1–4 years",
            ar: "1–4 سنوات"
        }
    },
    {
        id: "lacing-sorting-set",
        image: "prod-lacing",
        accent: "sun",
        price: 560,
        name: {
            en: "Lacing & Sorting Set",
            ar: "لعبة التشكيل والخيوط"
        },
        tagline: {
            en: "Thread it, sort it, giggle at it.",
            ar: "خيطها، رتّبها، واضحك عليها."
        },
        age: {
            en: "2–5 years",
            ar: "2–5 سنوات"
        }
    }
];
function productById(id) {
    return products.find((p)=>p.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/cart/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/cart/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/images.generated.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cx.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CartDrawer({ locale, dict }) {
    _s();
    const { isOpen, closeCart, remove, setQty, total, count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartDetails"])();
    const t = dict.cart;
    const isAr = locale === "ar";
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            if (!isOpen) return;
            const onKey = {
                "CartDrawer.useEffect.onKey": (e)=>e.key === "Escape" && closeCart()
            }["CartDrawer.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            document.body.style.overflow = "hidden";
            return ({
                "CartDrawer.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.body.style.overflow = "";
                }
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        isOpen,
        closeCart
    ]);
    const message = details.map(({ line, product })=>`• ${product.name[locale]} × ${line.qty} — ${product.price * line.qty} ${t.unit}`).concat(`(${t.total}: ${total} ${t.unit})`).join("\n");
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whatsappLink"])(`${isAr ? "مرحبًا! أريد طلب:" : "Hi! I'd like to order:"}\n${message}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("fixed inset-0 z-[60]", !isOpen && "pointer-events-none"),
        "aria-hidden": !isOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("absolute inset-0 bg-ink/40 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0"),
                onClick: closeCart
            }, void 0, false, {
                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": t.title,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cx$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cx"])("absolute inset-y-0 end-0 flex w-full max-w-md flex-col border-s-2 border-ink bg-white transition-transform duration-300 ease-out", isOpen ? "translate-x-0" : "translate-x-full rtl:-translate-x-full"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b-2 border-ink/10 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-xl font-extrabold text-ink",
                                children: [
                                    t.title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-coral",
                                        children: [
                                            "(",
                                            count,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: closeCart,
                                className: "grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-white transition-colors hover:bg-cream",
                                "aria-label": t.close,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "h-4 w-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2.6",
                                    strokeLinecap: "round",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 5l14 14M19 5L5 19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto px-5 py-4",
                        children: details.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid h-full place-items-center text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-dots mx-auto grid h-24 w-24 place-items-center rounded-3xl border-2 border-ink bg-cream",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiftIcon"], {
                                            className: "h-12 w-12 text-coral",
                                            strokeWidth: 2.2
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 font-display font-bold text-ink-soft",
                                        children: t.empty
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        href: "#toys",
                                        className: "mt-4",
                                        onClick: closeCart,
                                        variant: "primary",
                                        children: t.emptyCta
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-4",
                            children: details.map(({ line, product })=>{
                                const img = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$generated$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["images"][product.image];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex gap-3 rounded-2xl border-2 border-ink/10 bg-cream/60 p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border-2 border-ink bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: img.src,
                                                alt: product.name[locale],
                                                fill: true,
                                                sizes: "80px",
                                                className: "object-cover",
                                                placeholder: "blur",
                                                blurDataURL: img.blur
                                            }, void 0, false, {
                                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                            lineNumber: 102,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 flex-1 flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "truncate font-display text-sm font-extrabold text-ink",
                                                    children: product.name[locale]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-ink-soft",
                                                    children: [
                                                        product.price,
                                                        " ",
                                                        t.unit
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 rounded-full border-2 border-ink bg-white px-1.5 py-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "grid h-6 w-6 place-items-center rounded-full font-extrabold text-ink hover:bg-sun",
                                                                    onClick: ()=>setQty(product.id, line.qty - 1),
                                                                    "aria-label": "−",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                                    lineNumber: 120,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-5 text-center text-sm font-extrabold",
                                                                    children: line.qty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "grid h-6 w-6 place-items-center rounded-full font-extrabold text-ink hover:bg-sun",
                                                                    onClick: ()=>setQty(product.id, line.qty + 1),
                                                                    "aria-label": "+",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>remove(product.id),
                                                            className: "text-xs font-bold text-ink-soft underline-offset-2 hover:text-coral hover:underline",
                                                            children: t.remove
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, product.id, true, {
                                    fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                    lineNumber: 101,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    details.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t-2 border-ink/10 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display font-extrabold text-ink",
                                        children: t.total
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-xl font-extrabold text-coral",
                                        dir: "ltr",
                                        children: [
                                            total.toLocaleString(locale === "ar" ? "ar-EG" : "en-US"),
                                            " ",
                                            t.unit
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                href: href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-full",
                                size: "lg",
                                variant: "primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-5 w-5",
                                        fill: "currentColor",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.2 1.1-1.7 1.2-.5 0-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.5Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    t.checkout
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2.5 text-center text-xs font-bold text-ink-soft",
                                children: t.note
                            }, void 0, false, {
                                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/cart/CartDrawer.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/cart/CartDrawer.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/cart/CartDrawer.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "fyY2Eh8YypqTQQPcTcdkCH7Co9U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$cart$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartDetails"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/cart/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart,
    "useCartDetails",
    ()=>useCartDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const STORAGE_KEY = "hm-toys:cart";
const EMPTY = [];
/**
 * Tiny external store backed by localStorage.
 * Read through `useSyncExternalStore` (SSR-safe, hydration-safe, no
 * setState-in-effect, no render cascades) — customers keep their bag.
 */ class CartStore {
    lines = EMPTY;
    listeners = new Set();
    hydrated = false;
    subscribe = (listener)=>{
        this.listeners.add(listener);
        return ()=>this.listeners.delete(listener);
    };
    getSnapshot = ()=>this.lines;
    getServerSnapshot = ()=>EMPTY;
    /** Read what was saved last visit (client only, once). */ hydrate = ()=>{
        if (this.hydrated) return;
        this.hydrated = true;
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                this.lines = parsed.filter((l)=>typeof l.id === "string" && Number.isInteger(l.qty) && l.qty > 0 && Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productById"])(l.id)));
                this.emit();
            }
        } catch  {
        /* corrupted storage — start fresh */ }
    };
    /** Write current state (never called before hydrate). */ persist = ()=>{
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lines));
        } catch  {
        /* storage unavailable — cart still works in memory */ }
    };
    add = (id)=>{
        const existing = this.lines.find((l)=>l.id === id);
        this.lines = existing ? this.lines.map((l)=>l.id === id ? {
                ...l,
                qty: l.qty + 1
            } : l) : [
            ...this.lines,
            {
                id,
                qty: 1
            }
        ];
        this.emit();
    };
    remove = (id)=>{
        this.lines = this.lines.filter((l)=>l.id !== id);
        this.emit();
    };
    setQty = (id, qty)=>{
        this.lines = qty <= 0 ? this.lines.filter((l)=>l.id !== id) : this.lines.map((l)=>l.id === id ? {
                ...l,
                qty
            } : l);
        this.emit();
    };
    emit() {
        this.listeners.forEach((listener)=>listener());
    }
}
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CartProvider({ children }) {
    _s();
    const [store] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CartProvider.useState": ()=>new CartStore()
    }["CartProvider.useState"]);
    // Snapshot is the source of truth; server + first paint render empty.
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getSnapshot, store.getServerSnapshot);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            store.hydrate();
        }
    }["CartProvider.useEffect"], [
        store
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            if (store.hydrated) store.persist();
        }
    }["CartProvider.useEffect"], [
        lines,
        store
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[value]": ()=>{
            const count = lines.reduce({
                "CartProvider.useMemo[value].count": (sum, l)=>sum + l.qty
            }["CartProvider.useMemo[value].count"], 0);
            const total = lines.reduce({
                "CartProvider.useMemo[value].total": (sum, l)=>{
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productById"])(l.id);
                    return sum + (p ? p.price * l.qty : 0);
                }
            }["CartProvider.useMemo[value].total"], 0);
            return {
                lines,
                count,
                total,
                isOpen,
                openCart: ({
                    "CartProvider.useMemo[value]": ()=>setIsOpen(true)
                })["CartProvider.useMemo[value]"],
                closeCart: ({
                    "CartProvider.useMemo[value]": ()=>setIsOpen(false)
                })["CartProvider.useMemo[value]"],
                add: store.add,
                remove: store.remove,
                setQty: store.setQty
            };
        }
    }["CartProvider.useMemo[value]"], [
        lines,
        isOpen,
        store
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/features/cart/cart-context.tsx",
        lineNumber: 141,
        columnNumber: 10
    }, this);
}
_s(CartProvider, "Kge7osZirtyytsYTSgjUQMG7LWU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = CartProvider;
function useCart() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
    return ctx;
}
_s1(useCart, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useCartDetails() {
    _s2();
    const { lines } = useCart();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCartDetails.useMemo": ()=>lines.map({
                "useCartDetails.useMemo": (l)=>({
                        line: l,
                        product: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productById"])(l.id)
                    })
            }["useCartDetails.useMemo"]).filter({
                "useCartDetails.useMemo": (x)=>Boolean(x.product)
            }["useCartDetails.useMemo"])
    }["useCartDetails.useMemo"], [
        lines
    ]);
}
_s2(useCartDetails, "llhuzxOzEhqmjwSvwHECBIP4iOM=", false, function() {
    return [
        useCart
    ];
});
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/motion/MotionProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionProvider",
    ()=>MotionProvider,
    "registerMotionPlugins",
    ()=>registerMotionPlugins
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals> <export default as gsap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MotionProvider({ children }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "MotionProvider.useGSAP": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prefersReducedMotion"])()) return; // content stays fully visible & static
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerGsap"])();
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].context({
                "MotionProvider.useGSAP.ctx": ()=>{
                    // Scroll reveals
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-reveal]").forEach({
                        "MotionProvider.useGSAP.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                                y: 42,
                                autoAlpha: 0
                            }, {
                                y: 0,
                                autoAlpha: 1,
                                duration: 0.9,
                                ease: "power3.out",
                                delay: Number(el.dataset.revealDelay ?? 0),
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 88%",
                                    once: true
                                }
                            });
                        }
                    }["MotionProvider.useGSAP.ctx"]);
                    // Idle floats
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-float]").forEach({
                        "MotionProvider.useGSAP.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].to(el, {
                                y: -12,
                                duration: 2.2 + Math.random() * 1.4,
                                ease: "sine.inOut",
                                yoyo: true,
                                repeat: -1,
                                delay: Math.random() * 1.5
                            });
                        }
                    }["MotionProvider.useGSAP.ctx"]);
                    // Scrub parallax
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].utils.toArray("[data-speed]").forEach({
                        "MotionProvider.useGSAP.ctx": (el)=>{
                            const speed = Math.min(Math.max(Number(el.dataset.speed ?? 0.2), 0), 1);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__gsap$3e$__["gsap"].fromTo(el, {
                                yPercent: speed * 12
                            }, {
                                yPercent: -speed * 12,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: el.parentElement ?? el,
                                    start: "top bottom",
                                    end: "bottom top",
                                    scrub: 0.6
                                }
                            });
                        }
                    }["MotionProvider.useGSAP.ctx"]);
                }
            }["MotionProvider.useGSAP.ctx"], root);
            return ({
                "MotionProvider.useGSAP": ()=>ctx.revert()
            })["MotionProvider.useGSAP"];
        }
    }["MotionProvider.useGSAP"], {
        scope: root
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "contents",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/features/motion/MotionProvider.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(MotionProvider, "zB1iyNZzwhay0S5kVAi3Ku2nFuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = MotionProvider;
function registerMotionPlugins() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["registerGsap"])();
}
var _c;
__turbopack_context__.k.register(_c, "MotionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/i18n/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "isLocale",
    ()=>isLocale,
    "localeNames",
    ()=>localeNames,
    "localeShort",
    ()=>localeShort,
    "locales",
    ()=>locales,
    "otherLocale",
    ()=>otherLocale
]);
const locales = [
    "en",
    "ar"
];
const defaultLocale = "en";
const localeNames = {
    en: "English",
    ar: "العربية"
};
const localeShort = {
    en: "EN",
    ar: "عربي"
};
function isLocale(value) {
    return locales.includes(value);
}
function otherLocale(locale) {
    return locale === "en" ? "ar" : "en";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SITE",
    ()=>SITE,
    "whatsappLink",
    ()=>whatsappLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const SITE = {
    /** Brand owner */ founder: "HM Toys",
    brandEn: "HM Toys",
    brandAr: "HM Toys",
    taglineEn: "Handmade educational games",
    taglineAr: "ألعاب تعليمية مصنوعة يدويًا",
    city: "Cairo, Egypt",
    /** Replace with the real business number before going live. */ whatsapp: "+201234567890",
    whatsappDisplay: "+20 123 456 7890",
    email: "hello@hmtoys.com",
    instagram: "https://instagram.com/hm.toys",
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL ?? "https://hmtoys.com"
};
function whatsappLink(message) {
    return `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cx.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cx(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prefersReducedMotion",
    ()=>prefersReducedMotion,
    "registerGsap",
    ()=>registerGsap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function prefersReducedMotion() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function registerGsap() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/images.generated.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// AUTO-GENERATED by scripts/prepare-images.mjs — do not edit by hand.
// Re-run: npm run images
__turbopack_context__.s([
    "images",
    ()=>images
]);
const images = {
    "hero-alphabet": {
        "src": "/images/hero-alphabet.webp",
        "width": 1100,
        "height": 733,
        "bytes": 105244,
        "blur": "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAABwAwCdASoYABAAPt1gqU2opaQiMAgBEBuJQBOmUAAvd30N7wAA/kibVJtLQZ3UCmPJS1UeCd2nBL7GTY2zMoxxc0J9a78wAAA="
    },
    "fly-rainbow": {
        "src": "/images/fly-rainbow.webp",
        "width": 480,
        "height": 480,
        "bytes": 15442,
        "blur": "data:image/webp;base64,UklGRoYAAABXRUJQVlA4IHoAAACQBQCdASoYABgAPtlWpEyoJKOiN/VYAQAbCWgAnTKEfjDftZAZX38Ma2sx2E4n7PfFLG/wAAD8TN880SeylEtEtus/uOe/ilUspy83x5qIKnAhy3T/m1XZ0xxULlZkdf75n2aOSYTIOjRSOiNCkkPyKeFEnsuJMoAAAA=="
    },
    "prod-busyboard": {
        "src": "/images/prod-busyboard.webp",
        "width": 1000,
        "height": 1000,
        "bytes": 107914,
        "blur": "data:image/webp;base64,UklGRnYAAABXRUJQVlA4IGoAAABwBQCdASoYABgAPt1ap04opKOiMBgIARAbiUATo/+QMDZQPhQ+R+JRL8ySIbEd6neAaPgAAP7yMrUWLQUxOxrhNLHSLtfygkYEqhotMcMOs62vD+bO9u98wTngnryfPPx4YCRh5uGYmAAA"
    },
    "prod-rainbow": {
        "src": "/images/prod-rainbow.webp",
        "width": 1000,
        "height": 1000,
        "bytes": 55592,
        "blur": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAACwBQCdASoYABgAPt1UqEyopCQiMBgMARAbiWwAsQmKoGBsCyrTwWAL/prs9Yc2i9LO7crS/wAA/vTb7uAZcL7IIJbwtBW1CVld6gJdaWeRSmCt6mgzi6nXm74S3pl70kfZIaHM/cOwTXsNlTV0fV2Kkbk3Fp0DiFf6k4DnMQCmt6P4yFO9UOfA3dia5MYAAAA="
    },
    "prod-abc": {
        "src": "/images/prod-abc.webp",
        "width": 1000,
        "height": 1000,
        "bytes": 112438,
        "blur": "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACQBACdASoYABgAPt1orFCopaQqqAgBUBuJQBYj5lJ+gEHwFn0JtoMRX3+XLAAA/G58rXg1shlvwXvcjnbcg8AQoYKJAuPtSuP+FMDTlSGEE75fxS+Itsv6l9vDfH8ThCuMTAAA"
    },
    "prod-abacus": {
        "src": "/images/prod-abacus.webp",
        "width": 448,
        "height": 448,
        "bytes": 11818,
        "blur": "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAADwBACdASoYABgAPt1eqE6opKOiMBgIARAbiUAWoSjQK5T4JxXEdkyP6d/63axZywAA/vOCsez7eoE6LtlTU4C9vAU1GcyD0x+NKZMh2O1WUqwBSm+dv1vAFOTFAjv0SmpEwdFy/gd4AA=="
    },
    "prod-quietbook": {
        "src": "/images/prod-quietbook.webp",
        "width": 300,
        "height": 300,
        "bytes": 19982,
        "blur": "data:image/webp;base64,UklGRoIAAABXRUJQVlA4IHYAAABQBQCdASoYABgAPt1cqU6opKQiMBgIARAbiWIAuwAQ34hWL74Ig21rTi/rgu+vDyIlYAAA/mUmjDpYi84BXXKbBSkNbI6Iuo37aFmUBInu3lWaUqip7D6b+4xzPa2HOwVQrVX6yndfKY1XIR9IxW0IXLAR4AAA"
    },
    "prod-lacing": {
        "src": "/images/prod-lacing.webp",
        "width": 800,
        "height": 800,
        "bytes": 49402,
        "blur": "data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAADwBACdASoYABgAPt1epUyopSOiMBgMARAbiUAWnQHpXb8lFU32T+8S9SK5k10wFwAA/vTf13Umhyv7WYWmU+4Ra2d1Ebf+HbKx2iTSECoaLu310QN0X2tw/imIHOQ3VQvDAcF9p1eacNcdB5jJiFY2bwYYAA=="
    },
    "prod-gears": {
        "src": "/images/prod-gears.webp",
        "width": 750,
        "height": 590,
        "bytes": 10502,
        "blur": "data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAACwBACdASoYABMAPt1eqU2opSQiKA1REBuJZADN8oPEAF71oD56wkHRPdOW55cAAP76EQ+ehJRhNuKSOdR2aPJIqbgot7GcUa0PFsMLztVbGJDoBQkC62EmAAA="
    },
    "craft-hands": {
        "src": "/images/craft-hands.webp",
        "width": 443,
        "height": 612,
        "bytes": 30228,
        "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAACwBACdASoRABgAPt1mq1EopSOiqAgBEBuJQBfs7rAcs481oeCg9V8s55cAW3sAAP7jpbErn2G739WifFGtwsvIMn3Dp/JZbPjvewWIU1xbs+I2siD26nCKDO9l65XcnQ3qgS1Gphlog6TgAAA="
    },
    "gallery-alphabet": {
        "src": "/images/gallery-alphabet.webp",
        "width": 900,
        "height": 789,
        "bytes": 92952,
        "blur": "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAACQBACdASoYABUAPs1ao0ynpaMiN/qoAPAZiWUAAN3qpmmZHRfrPE+lRBfvroAA1lor2m9vYKRwHyx+xREnNjgkoRupxdqgYOclYu0f5G9nSeeBFFB2qgrmL/GAAAAA"
    },
    "gallery-felt": {
        "src": "/images/gallery-felt.webp",
        "width": 340,
        "height": 270,
        "bytes": 15916,
        "blur": "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAADwBACdASoYABMAPt1YqEyopSQiMBgMARAbiWIAnTLeuWgVI8SfkxW8u1jcHtbeInAA/tNXMaJloNAr0qhbAkggaaelLtbVGc4TQbEGJ4UQa8ydsFR9kgyP1LujUWJ+2VS5ZZdkAAA="
    },
    "gallery-flatlay": {
        "src": "/images/gallery-flatlay.webp",
        "width": 800,
        "height": 800,
        "bytes": 70060,
        "blur": "data:image/webp;base64,UklGRpwAAABXRUJQVlA4IJAAAACwBACdASoYABgAPt1cqUyopSQiKA1REBuJagCdMoAAyQGGO46PN+0C/Wq7f3LQAP6UwvzZjE4VluQ2YYF3L0Oy25wchx1dPAHv+pWg1v0uRO0a8nv+TkYl4rfMxRga5w0OpDJUtuN2FkeLFfhfS+xIv2y9Zo0xbFOTPKKxH5I/FeHm7XsftfXZoJe0jmKAAAA="
    },
    "gallery-busyboard": {
        "src": "/images/gallery-busyboard.webp",
        "width": 500,
        "height": 380,
        "bytes": 22738,
        "blur": "data:image/webp;base64,UklGRngAAABXRUJQVlA4IGwAAACQBACdASoYABIAPt1apEyopSOiMAgBEBuJQBWGXkBp0sMgeqG1YJWQkZbBggAA/u3cBWnQdWxPmRE07TAU+Mx0sNEjWp006Nv4U8OPPKw8aOotVGjy1y1g/bULea9xOvsE2QhAhgJn0u0gAAA="
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1jfri53._.js.map