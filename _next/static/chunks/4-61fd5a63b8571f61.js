"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4], {
        1736: function (t, e, n) {
            n.d(e, {
                J: function () {
                    return o
                }
            });
            var i = n(2903),
                r = n(5007);
            let o = t => {
                let {
                    name: e,
                    ...n
                } = t;
                return (0, i.tZ)(r.Z, {
                    ...n,
                    inheritViewBox: !0,
                    children: (0, i.tZ)("use", {
                        href: "/sprite.svg#".concat(e)
                    })
                })
            }
        },
        2526: function (t, e, n) {
            n.d(e, {
                Zh: function () {
                    return _
                },
                Rs: function () {
                    return z
                },
                VM: function () {
                    return g
                },
                xK: function () {
                    return V
                },
                u$: function () {
                    return R
                },
                Ns: function () {
                    return A
                },
                wV: function () {
                    return L
                },
                jS: function () {
                    return F
                },
                xs: function () {
                    return k
                },
                V_: function () {
                    return U
                },
                gy: function () {
                    return v
                }
            });
            var i = n(2903),
                r = n(2784),
                o = n(1736),
                a = n(4682);
            let s = r.useLayoutEffect;
            var l = n(8386),
                d = n(7746),
                c = n(3411),
                p = n(7639),
                h = n(2197),
                u = n(8204),
                m = n(5801);
            let g = () => {
                let t = (0, r.useRef)(null),
                    {
                        setZoomRef: e
                    } = (0, l.F3)(),
                    {
                        palette: n
                    } = (0, d.Z)(),
                    {
                        mode: g
                    } = n,
                    f = "light" === g ? "black" : "white";
                return (0, r.useEffect)(() => {
                    (null == t ? void 0 : t.current) && e(t)
                }, []), s(() => {
                    let t = a.ZP.context(() => {
                        a.ZP.timeline({
                            scrollTrigger: {
                                scrub: !0,
                                start: "1",
                                end: "300"
                            }
                        }).to("#rotate-button", {
                            rotation: 180,
                            duration: .3
                        })
                    });
                    return () => t.revert()
                }, []), (0, i.tZ)(c.Z, {
                    justifyContent: "center",
                    sx: {
                        position: "relative",
                        height: "100vh",
                        minHeight: {
                            xs: 530,
                            sm: 800
                        },
                        py: {
                            md: 12
                        }
                    },
                    children: (0, i.BX)(p.Z, {
                        children: [(0, i.tZ)(c.Z, {
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            mt: {
                                md: "13vh"
                            },
                            sx: t => ({
                                [t.breakpoints.down("sm")]: {
                                    margin: "-120px auto -70px",
                                    width: 320
                                }
                            }),
                            children: (0, i.BX)("svg", {
                                width: "925",
                                height: "285",
                                viewBox: "0 0 925 285",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                ref: t,
                                children: [(0, i.tZ)("path", {
                                    d: "M747.04 164.12L746.72 184.76C743.946 183.693 740.586 182.787 736.64 182.04C732.693 181.293 728.96 180.92 725.44 180.92C718.826 180.92 714.026 181.987 711.04 184.12C708.16 186.147 706.72 188.867 706.72 192.28C706.72 195.48 708.373 198.68 711.68 201.88C714.986 204.973 720.266 209.027 727.52 214.04C736.16 220.12 742.986 226.04 748 231.8C753.12 237.453 755.68 243.907 755.68 251.16C755.68 260.973 751.68 269.08 743.68 275.48C735.786 281.773 725.333 284.92 712.32 284.92C710.293 284.92 708 284.813 705.44 284.6C702.88 284.387 700.32 284.067 697.76 283.64C695.2 283.32 692.746 282.947 690.4 282.52C688.053 282.093 686.186 281.667 684.8 281.24L685.12 260.28C686.506 260.813 688.266 261.4 690.4 262.04C692.64 262.573 695.04 263.107 697.6 263.64C700.16 264.067 702.826 264.44 705.6 264.76C708.48 265.08 711.2 265.24 713.76 265.24C719.84 265.24 724.426 263.907 727.52 261.24C730.613 258.573 732.16 255.533 732.16 252.12C732.16 248.813 730.453 245.56 727.04 242.36C723.733 239.053 718.453 234.947 711.2 230.04C700.746 222.893 693.493 216.547 689.44 211C685.493 205.347 683.52 199.16 683.52 192.44C683.52 188.493 684.32 184.653 685.92 180.92C687.52 177.08 689.973 173.72 693.28 170.84C696.693 167.96 701.066 165.667 706.4 163.96C711.733 162.147 718.08 161.24 725.44 161.24C729.066 161.24 732.8 161.56 736.64 162.2C740.586 162.733 744.053 163.373 747.04 164.12Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M630.127 283V184.44H604.847V163.64H678.607V184.44H653.327V283H630.127Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M572.816 283L515.696 203.16V283H492.496V163.64H515.056L572.336 244.44V163.64H595.536V283H572.816Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M411.559 283V163.64H476.679V183.8H434.759V211.64H472.679V231.8H434.759V262.84H477.959V283H411.559Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M353.877 283V184.44H328.597V163.64H402.357V184.44H377.077V283H353.877Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M296.566 283L239.446 203.16V283H216.246V163.64H238.806L296.086 244.44V163.64H319.286V283H296.566Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M177.34 283V163.64H200.54V283H177.34Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M829.138 123V3.63989H862.738C870.738 3.63989 878.471 4.86656 885.938 7.31989C893.404 9.77323 899.964 13.4532 905.618 18.3599C911.378 23.2666 915.964 29.4532 919.378 36.9199C922.898 44.3866 924.658 53.1332 924.658 63.1599C924.658 73.2932 922.898 82.1466 919.378 89.7199C915.964 97.1866 911.378 103.373 905.618 108.28C899.964 113.187 893.404 116.867 885.938 119.32C878.471 121.773 870.738 123 862.738 123H829.138ZM852.338 24.5999V102.04H863.218C868.231 102.04 873.031 101.24 877.618 99.6399C882.204 97.9332 886.258 95.4799 889.778 92.2799C893.298 89.0799 896.071 85.0266 898.098 80.1199C900.231 75.2132 901.298 69.5599 901.298 63.1599C901.298 56.8666 900.231 51.3199 898.098 46.5199C896.071 41.6132 893.298 37.5599 889.778 34.3599C886.258 31.1599 882.204 28.7599 877.618 27.1599C873.031 25.4532 868.231 24.5999 863.218 24.5999H852.338Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M748.199 123V3.63989H813.319V23.7999H771.399V51.6399H809.319V71.7999H771.399V102.84H814.599V123H748.199Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M686.754 25.3999H678.274V62.5199H687.234C694.381 62.5199 700.247 60.7066 704.834 57.0799C709.528 53.4532 711.874 48.7066 711.874 42.8399C711.874 37.6132 709.848 33.3999 705.794 30.1999C701.848 26.9999 695.501 25.3999 686.754 25.3999ZM709.154 123L678.274 83.4799V123H655.074V3.63989H684.674C691.714 3.63989 698.274 4.38656 704.354 5.87989C710.541 7.37323 715.928 9.7199 720.514 12.9199C725.101 16.1199 728.674 20.2266 731.234 25.2399C733.901 30.1466 735.234 36.0132 735.234 42.8399C735.234 47.7466 734.434 52.2266 732.834 56.2799C731.234 60.2266 729.048 63.7466 726.274 66.8399C723.608 69.8266 720.354 72.4399 716.514 74.6799C712.781 76.9199 708.781 78.7332 704.514 80.1199L737.314 123H709.154Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M574.137 123V3.63989H639.257V23.7999H597.337V51.6399H635.257V71.7999H597.337V102.84H640.537V123H574.137Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M508.663 123L487.223 38.8399L465.143 123H440.183L408.023 3.63989H432.503L454.103 90.3599L475.543 3.63989H500.183L521.463 90.5199L543.223 3.63989H565.943L533.623 123H508.663Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M220.009 88.5999H212.649V123H189.449V3.63989H220.649C227.369 3.63989 233.716 4.4399 239.689 6.0399C245.769 7.6399 250.996 10.0932 255.369 13.3999C259.743 16.7066 263.209 20.9732 265.769 26.1999C268.329 31.4266 269.609 37.6666 269.609 44.9199C269.609 52.1732 268.169 58.5199 265.289 63.9599C262.409 69.3999 258.623 73.9332 253.929 77.5599C249.343 81.1866 244.063 83.9599 238.089 85.8799C232.116 87.6932 226.089 88.5999 220.009 88.5999ZM219.209 25.3999H212.649V66.8399H219.209C227.209 66.8399 233.609 64.8666 238.409 60.9199C243.316 56.9732 245.769 51.6399 245.769 44.9199C245.769 39.0532 243.689 34.3599 239.529 30.8399C235.476 27.2132 228.703 25.3999 219.209 25.3999Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M123.355 123V3.63989H146.555V123H123.355Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    d: "M75.8909 83.6399L57.4909 34.1999L39.0909 83.6399H75.8909ZM90.6109 123L83.091 103H31.8909L24.3709 123H0.210938L46.2909 3.63989H69.3309L115.251 123H90.6109Z",
                                    fill: f
                                }), (0, i.tZ)("path", {
                                    className: "rotate-anim",
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M332.332 88.9896C332.745 89.1576 332.995 89.5837 332.917 90.0261L332.893 90.1695C332.815 90.6161 332.426 90.9438 331.971 90.9438H285.821C285.456 90.9438 285.125 90.7349 284.969 90.4071C281.139 82.2341 279 73.3278 279 63.4956C279 53.6634 281.237 44.3555 285.223 36.0473C295.461 14.7196 317.26 -0.00409508 342.5 8.5436e-07C344.589 8.5436e-07 346.654 0.106517 348.694 0.303161C349.993 0.430161 351.283 0.594031 352.561 0.794771C353.077 0.876707 353.422 1.37241 353.331 1.88451L347.461 35.2771C347.383 35.7237 346.994 36.0514 346.539 36.0514H342.5H342.41C327.293 36.1006 315.051 48.3663 315.051 63.4956C315.051 75.0607 322.208 84.9502 332.332 88.9896ZM352.621 36.0521H399.181H399.185C399.55 36.0521 399.882 36.261 400.037 36.5888C403.868 44.7618 406.006 53.6681 406.006 63.5003C406.006 73.3326 403.773 82.6404 399.783 90.9486C389.545 112.276 367.747 127 342.507 127C340.278 127 338.074 126.881 335.907 126.656C334.743 126.533 333.588 126.381 332.441 126.201C331.925 126.119 331.58 125.628 331.671 125.115L337.541 91.7229C337.619 91.2763 338.008 90.9486 338.463 90.9486H342.183V90.9404C342.289 90.9445 342.396 90.9486 342.502 90.9486C357.66 90.9486 369.951 78.6583 369.951 63.5003C369.951 51.7959 362.617 41.8121 352.298 37.867C351.876 37.7031 351.622 37.2729 351.7 36.8264C351.777 36.3798 352.167 36.0521 352.621 36.0521Z",
                                    fill: f
                                })]
                            })
                        }), (0, i.BX)(c.Z, {
                            direction: {
                                md: "row"
                            },
                            spacing: {
                                xs: 3,
                                md: 6
                            },
                            alignItems: "center",
                            justifyContent: {
                                xs: "center",
                                md: "flex-end"
                            },
                            py: {
                                md: 6
                            },
                            children: [(0, i.BX)(h.Z, {
                                color: "text.secondary",
                                variant: "body3",
                                sx: {
                                    letterSpacing: 0,
                                    textAlign: {
                                        xs: "center",
                                        md: "left"
                                    }
                                },
                                children: ["Empower Your Vision with Declarative", (0, i.tZ)("br", {}), "Strategies and Workflows"]
                            }), (0, i.tZ)(u.Z, {
                                variant: "outlined",
                                endIcon: (0, i.tZ)(o.J, {
                                    sx: {
                                        width: 14,
                                        height: 14
                                    },
                                    name: "arrow-up-right"
                                }),
                                sx: {
                                    pl: 2.5,
                                    pr: 3
                                },
                                onClick: () => window.open("https://aperture-finance-dapp.vercel.app/"),
                                children: "Launch App"
                            })]
                        }), (0, i.tZ)(c.Z, {
                            direction: "row",
                            justifyContent: "flex-end",
                            sx: t => ({
                                [t.breakpoints.down("md")]: {
                                    position: "absolute",
                                    left: "50%",
                                    bottom: {
                                        xs: 80,
                                        md: 40
                                    },
                                    transform: "translate(-50%, 0)"
                                }
                            }),
                            children: (0, i.tZ)(m.Z, {
                                size: "large",
                                variant: "outlined",
                                id: "rotate-button",
                                sx: t => ({
                                    width: 60,
                                    height: 60,
                                    [t.breakpoints.up("sm")]: {
                                        width: 100,
                                        height: 100
                                    }
                                }),
                                children: (0, i.tZ)(o.J, {
                                    sx: t => ({
                                        width: 40,
                                        height: 40,
                                        [t.breakpoints.up("sm")]: {
                                            width: 48,
                                            height: 48
                                        }
                                    }),
                                    name: "arrow"
                                })
                            })
                        })]
                    })
                })
            };
            var f = n(3597),
                Z = n(5237),
                x = n.n(Z),
                b = n(360);
            let w = x()(() => n.e(429).then(n.bind(n, 3429)), {
                    loadableGenerated: {
                        webpack: () => [3429]
                    },
                    ssr: !1
                }),
                C = t => {
                    let {
                        data: e,
                        isAmount: n = !1
                    } = t, {
                        num: o,
                        suffix: a
                    } = e >= 1e9 ? {
                        num: (e / 1e9).toFixed(1),
                        suffix: "B"
                    } : e >= 1e6 ? {
                        num: (e / 1e6).toFixed(1),
                        suffix: "M"
                    } : {
                        num: e,
                        suffix: ""
                    }, [s, l] = (0, r.useState)(0);
                    return (0, r.useEffect)(() => {
                        let t = setTimeout(() => l(o), 300);
                        return () => {
                            clearTimeout(t)
                        }
                    }, [e]), (0, i.BX)(h.Z, {
                        variant: "h3",
                        color: "text.primary",
                        sx: t => ({
                            [t.breakpoints.down("sm")]: {
                                fontSize: 24
                            }
                        }),
                        children: [n && (0, i.tZ)("span", {
                            children: "$"
                        }), (0, i.tZ)(w, {
                            style: {
                                position: "relative",
                                top: "-2px"
                            },
                            value: s,
                            duration: 3e3,
                            format: "(,ddd).dd"
                        }), (0, i.tZ)("span", {
                            children: a
                        })]
                    })
                },
                v = () => {
                    let {
                        palette: t
                    } = (0, d.Z)(), {
                        text: e
                    } = t, [n, o] = (0, r.useState)(), [a, s] = (0, r.useState)(), [l, u] = (0, r.useState)();
                    (0, r.useEffect)(() => {
                        fetch("https://api.aperture.finance/getMetricsSinceInception").then(t => t.json()).then(t => {
                            o(t.txEnabledCount), s(t.tveUsd), u(t.walletCount)
                        }).catch(t => {
                            console.error(t)
                        })
                    }, []);
                    let {
                        ref: m,
                        inView: g
                    } = (0, b.YD)({
                        threshold: 1,
                        triggerOnce: !0
                    });
                    return (0, i.tZ)(p.Z, {
                        children: (0, i.tZ)(c.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            sx: {
                                borderTop: "2px solid ".concat(e.primary),
                                borderBottom: "2px solid ".concat(e.primary),
                                pt: {
                                    xs: 5,
                                    sm: 7.5
                                },
                                pb: {
                                    xs: "28px",
                                    sm: 7.5
                                }
                            },
                            gap: 1,
                            ref: m,
                            children: Object.entries({
                                Transactions: n,
                                "Intent Volume": a,
                                "Wallet Users": l
                            }).map(t => {
                                let [e, n] = t;
                                return (0, i.BX)(f.Z, {
                                    sx: {
                                        minWidth: 150
                                    },
                                    children: [(0, i.tZ)(h.Z, {
                                        variant: "body3",
                                        pb: "14px",
                                        color: "text.secondary",
                                        sx: {
                                            letterSpacing: 0
                                        },
                                        children: e
                                    }), (0, i.tZ)(f.Z, {
                                        sx: {
                                            height: {
                                                xs: 40,
                                                sm: 55
                                            }
                                        },
                                        children: g && (0, i.tZ)(C, {
                                            data: n,
                                            isAmount: "Intent Volume" === e
                                        })
                                    })]
                                }, e)
                            })
                        })
                    })
                },
                k = () => {
                    let {
                        palette: t
                    } = (0, d.Z)(), {
                        mode: e
                    } = t, n = (0, r.useRef)(null), o = (0, r.useRef)(null), l = (0, r.useRef)(null), u = (0, r.useRef)(null);
                    return s(() => {
                        let t = a.ZP.context(() => {
                            a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    pin: !0,
                                    ease: "power4.in",
                                    end: "90% 50%",
                                    trigger: n.current
                                }
                            }).to(o.current, {
                                width: "200vmax",
                                height: "200vmax",
                                duration: 2
                            }).to(l.current, {
                                scale: 0,
                                duration: .5
                            }, "<").to(u.current, {
                                scale: 40,
                                background: "#000",
                                duration: 1
                            }, "<")
                        });
                        return () => t.revert()
                    }, []), (0, i.tZ)(c.Z, {
                        ref: n,
                        justifyContent: "center",
                        sx: {
                            height: "100vh"
                        },
                        children: (0, i.BX)(p.Z, {
                            children: [(0, i.tZ)(h.Z, {
                                fontSize: {
                                    xs: 32,
                                    md: 70,
                                    lg: 90
                                },
                                variant: "h1",
                                component: "h2",
                                color: "text.primary",
                                sx: {
                                    textTransform: "uppercase",
                                    letterSpacing: "2px"
                                },
                                children: "Aperture"
                            }), (0, i.BX)(f.Z, {
                                sx: {
                                    position: "relative"
                                },
                                children: [(0, i.tZ)(h.Z, {
                                    fontSize: {
                                        xs: 70,
                                        sm: 90,
                                        md: 200,
                                        lg: 220
                                    },
                                    fontWeight: 500,
                                    lineHeight: .9,
                                    color: "text.primary",
                                    fontFamily: "var(--font-dunbar)",
                                    children: "PRODUCT"
                                }), (0, i.tZ)(f.Z, {
                                    sx: t => ({
                                        visibility: "light" === e ? "visible" : "hidden",
                                        position: "absolute",
                                        top: 6,
                                        left: 77,
                                        width: 58,
                                        height: 58,
                                        zIndex: 1,
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        background: "light" === e ? "#000" : "#fff",
                                        [t.breakpoints.up("sm")]: {
                                            top: 10,
                                            left: 100,
                                            width: 74,
                                            height: 74
                                        },
                                        [t.breakpoints.up("md")]: {
                                            top: 20,
                                            left: 224,
                                            width: 164,
                                            height: 164
                                        },
                                        [t.breakpoints.up("lg")]: {
                                            top: 21,
                                            left: 247,
                                            width: 180,
                                            height: 180
                                        }
                                    }),
                                    children: (0, i.tZ)(f.Z, {
                                        ref: o,
                                        sx: {
                                            width: "100%",
                                            height: "100%",
                                            outline: "none",
                                            display: "inline-block",
                                            background: "light" === e ? "#000" : "#fff",
                                            borderRadius: "50%",
                                            transformOrigin: "center center",
                                            position: "absolute",
                                            left: "50%",
                                            top: "50%",
                                            transform: "translate(-50%, -50%)",
                                            willChange: "transform",
                                            ":before": {
                                                content: '""',
                                                display: "inline-block",
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                width: "100%",
                                                height: "100%",
                                                background: "light" === e ? "#000" : "#fff",
                                                borderRadius: "50%"
                                            }
                                        }
                                    })
                                }), (0, i.tZ)(f.Z, {
                                    ref: l,
                                    sx: t => ({
                                        visibility: "light" === e ? "visible" : "hidden",
                                        position: "absolute",
                                        top: 16,
                                        left: 87,
                                        width: 38,
                                        height: 38,
                                        background: "light" === e ? "#fff" : "#121212",
                                        opacity: 1,
                                        borderRadius: "50%",
                                        zIndex: 2,
                                        [t.breakpoints.up("sm")]: {
                                            top: 22,
                                            left: 113,
                                            width: 47,
                                            height: 47
                                        },
                                        [t.breakpoints.up("md")]: {
                                            top: 46,
                                            left: 253,
                                            width: 108,
                                            height: 108
                                        },
                                        [t.breakpoints.up("lg")]: {
                                            top: 53,
                                            left: 280,
                                            width: 115,
                                            height: 115
                                        }
                                    })
                                }), (0, i.tZ)(f.Z, {
                                    ref: u,
                                    sx: t => ({
                                        visibility: "dark" === e ? "visible" : "hidden",
                                        position: "absolute",
                                        top: 16,
                                        left: 87,
                                        width: 38,
                                        height: 38,
                                        background: "#121212",
                                        opacity: 1,
                                        borderRadius: "50%",
                                        zIndex: 2,
                                        [t.breakpoints.up("sm")]: {
                                            top: 22,
                                            left: 113,
                                            width: 47,
                                            height: 47
                                        },
                                        [t.breakpoints.up("md")]: {
                                            top: 46,
                                            left: 253,
                                            width: 108,
                                            height: 108
                                        },
                                        [t.breakpoints.up("lg")]: {
                                            top: 53,
                                            left: 280,
                                            width: 115,
                                            height: 115
                                        }
                                    })
                                })]
                            })]
                        })
                    })
                },
                y = [{
                    id: 1,
                    title: "THE INTERSECTION OF AI & INTENTS",
                    description: "Using chatbots to translate natural language into a novel domain specific language for Intents allows users to express their views without the constraints of standard UX."
                }, {
                    id: 2,
                    title: "GASLESS EXPERIENCE",
                    description: "Users can declare their Intents without needing to pay gas. Aperture Solvers will pay gas on the users behalf and deduct fees in tokens of the users choosing."
                }, {
                    id: 3,
                    title: "ROBUST SOLVER NETWORK",
                    description: "From Propeller Heads to Enso and beyond. Aperture has quotes from multiple solvers to ensure users get the best execution and pricing possible."
                }];
            var H = n(2195),
                I = n(850),
                P = n(1721);
            let V = () => {
                    let {
                        breakpoints: t
                    } = (0, d.Z)(), e = (0, I.Z)(t.up("md")), n = (0, r.useRef)(null), o = (0, r.useRef)(null), l = (0, r.useRef)(null), u = (0, r.useRef)(null), {
                        setZoomRef: m
                    } = (0, H.F3)();
                    return (0, r.useEffect)(() => {
                        (null == u ? void 0 : u.current) && m(u)
                    }, []), s(() => {
                        let t = a.ZP.context(() => {
                            a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    start: "-80% 50%",
                                    end: "50% 50%",
                                    trigger: n.current
                                }
                            }).to(l.current, {
                                y: -820,
                                duration: 60
                            });
                            let t = a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    start: "-20% 50%",
                                    end: "30% 50%",
                                    trigger: n.current
                                }
                            });
                            a.ZP.utils.toArray(Array.from(Array(46).keys())).forEach(e => {
                                t.to(o.current, {
                                    duration: 1
                                }), t.set(o.current, {
                                    attr: {
                                        src: "/images/highlights/laptop/01".concat(e, ".png")
                                    }
                                }, "<")
                            })
                        });
                        return () => t.revert()
                    }, []), (0, i.BX)(f.Z, {
                        sx: {
                            background: "#000",
                            position: "relative"
                        },
                        ref: n,
                        children: [(0, i.BX)(p.Z, {
                            sx: {
                                position: "relative",
                                zIndex: 2
                            },
                            children: [(0, i.BX)(c.Z, {
                                justifyContent: "center",
                                sx: {
                                    pb: {
                                        xs: 5,
                                        sm: 10
                                    },
                                    maxWidth: 720
                                },
                                ref: u,
                                children: [(0, i.tZ)(h.Z, {
                                    variant: "h1",
                                    component: "h2",
                                    color: "#fff",
                                    sx: t => ({
                                        textTransform: "uppercase",
                                        [t.breakpoints.down("sm")]: {
                                            fontSize: 40
                                        },
                                        [t.breakpoints.down("md")]: {
                                            fontSize: 46
                                        }
                                    }),
                                    children: "Aperture"
                                }), (0, i.tZ)(h.Z, {
                                    variant: "h1",
                                    component: "h2",
                                    color: "#F9C13D",
                                    sx: t => ({
                                        textTransform: "uppercase",
                                        lineHeight: 1.1,
                                        mb: {
                                            xs: 4,
                                            sm: 5
                                        },
                                        [t.breakpoints.down("sm")]: {
                                            fontSize: 40,
                                            mt: "6px"
                                        },
                                        [t.breakpoints.down("md")]: {
                                            fontSize: 46
                                        }
                                    }),
                                    children: "Highlights"
                                }), (0, i.tZ)(h.Z, {
                                    variant: "body3",
                                    color: "rgba(255,255,255, .7)",
                                    sx: {
                                        fontSize: {
                                            md: 20
                                        },
                                        maxWidth: 340,
                                        lineHeight: 1.1,
                                        letterSpacing: "0.1px"
                                    },
                                    children: "Engineered by Silicon Valley's finest, Aperture Finance offers seamless automation for both traditional finance (TradFi) funds and DeFi enthusiasts."
                                })]
                            }), (0, i.tZ)(f.Z, {
                                ref: l,
                                sx: {
                                    position: "absolute",
                                    willChange: "transform",
                                    top: {
                                        xs: 400,
                                        sm: 500
                                    },
                                    right: {
                                        xs: -100,
                                        sm: -70,
                                        lg: 0
                                    },
                                    width: {
                                        xs: "60%",
                                        lg: "70%"
                                    },
                                    minWidth: 400
                                },
                                children: (0, i.tZ)(f.Z, {
                                    ref: o,
                                    component: "img",
                                    src: "/images/highlights/laptop/010.png",
                                    alt: "laptop",
                                    sx: {
                                        width: "100%"
                                    }
                                })
                            })]
                        }), (0, i.tZ)(p.Z, {
                            sx: {
                                position: "relative",
                                zIndex: 1
                            },
                            children: (0, i.tZ)(c.Z, {
                                direction: {
                                    md: "row"
                                },
                                justifyContent: "space-between",
                                spacing: 4,
                                py: {
                                    md: 5
                                },
                                divider: (0, i.tZ)(P.Z, {
                                    orientation: e ? "vertical" : "horizontal",
                                    flexItem: !0,
                                    sx: {
                                        borderColor: "rgba(255,255,255,.3)"
                                    }
                                }),
                                sx: {
                                    borderTop: "1px solid rgba(255,255,255,.3)",
                                    borderBottom: "1px solid rgba(255,255,255,.3)"
                                },
                                children: y.map(t => {
                                    let {
                                        id: e,
                                        title: n,
                                        description: r
                                    } = t;
                                    return (0, i.BX)(c.Z, {
                                        justifyContent: "center",
                                        sx: t => ({
                                            position: "relative",
                                            minHeight: {
                                                xs: 148,
                                                sm: 120
                                            },
                                            [t.breakpoints.down("md")]: {
                                                py: 3
                                            },
                                            [t.breakpoints.up("md")]: {
                                                ".MuiTypography-root": {
                                                    transition: ".3s"
                                                },
                                                ":hover": {
                                                    ".MuiTypography-root": {
                                                        opacity: 0,
                                                        transform: "translate(0, -32px)",
                                                        "&+.MuiTypography-root": {
                                                            opacity: 1,
                                                            transform: "translate(0, 0)"
                                                        }
                                                    }
                                                }
                                            }
                                        }),
                                        children: [(0, i.tZ)(h.Z, {
                                            variant: "h4",
                                            color: "#fff",
                                            fontFamily: "var(--font-dunbar)",
                                            sx: t => ({
                                                [t.breakpoints.down("md")]: {
                                                    pb: 3
                                                },
                                                [t.breakpoints.up("md")]: {
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translate(0, 0px)",
                                                    maxWidth: 300
                                                }
                                            }),
                                            children: n
                                        }), (0, i.tZ)(h.Z, {
                                            variant: "body3",
                                            color: "rgba(255,255,255, .7)",
                                            sx: t => ({
                                                [t.breakpoints.up("md")]: {
                                                    opacity: 0,
                                                    transform: "translate(0, 32px)"
                                                }
                                            }),
                                            children: r
                                        })]
                                    }, e)
                                })
                            })
                        })]
                    })
                },
                A = () => {
                    let t = (0, r.useRef)(null),
                        e = (0, r.useRef)(null),
                        n = (0, r.useRef)(null),
                        o = (0, r.useRef)(null),
                        l = (0, r.useRef)(null),
                        d = (0, r.useRef)(null),
                        {
                            setZoomRef: u
                        } = (0, H.F3)();
                    return (0, r.useEffect)(() => {
                        (null == l ? void 0 : l.current) && u(l), (null == d ? void 0 : d.current) && u(d)
                    }, []), s(() => {
                        let i = a.ZP.context(() => {
                            a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    trigger: t.current,
                                    start: "-=20"
                                }
                            }).to(e.current, {
                                yPercent: -250,
                                duration: 1e3
                            }, 1), a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    trigger: n.current
                                }
                            }).to(o.current, {
                                scaleX: 1.5,
                                duration: .1
                            }, "+=20%"), a.ZP.timeline({
                                scrollTrigger: {
                                    pin: !0,
                                    trigger: t.current,
                                    start: "bottom bottom",
                                    scrub: !0
                                }
                            })
                        });
                        return () => i.revert()
                    }, []), (0, i.BX)(f.Z, {
                        ref: n,
                        sx: {
                            position: "relative",
                            background: "#000",
                            pt: {
                                xs: "80px",
                                md: "250px"
                            },
                            pb: {
                                xs: "450px",
                                sm: 0
                            }
                        },
                        children: [(0, i.tZ)(h.Z, {
                            variant: "h1",
                            color: "#000",
                            fontFamily: "var(--font-dunbar)",
                            ref: l,
                            sx: t => ({
                                position: "absolute",
                                top: "90vw",
                                left: 0,
                                width: "100%",
                                textAlign: "center",
                                zIndex: 3,
                                [t.breakpoints.up("sm")]: {
                                    top: "70vw"
                                },
                                [t.breakpoints.down("md")]: {
                                    fontSize: 46
                                }
                            }),
                            children: "INTRODUCING"
                        }), (0, i.tZ)(f.Z, {
                            ref: o,
                            component: "img",
                            src: "/images/intents-gpt/bg.svg",
                            alt: "Intents",
                            sx: {
                                width: "100vw",
                                height: "165.5vw",
                                transform: "translate(-50%, 0)",
                                position: "relative",
                                left: "50%",
                                zIndex: 2
                            }
                        }), (0, i.tZ)(f.Z, {
                            sx: {
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                zIndex: 1,
                                width: "100%",
                                height: 500,
                                background: "#F9C13D"
                            }
                        }), (0, i.BX)(c.Z, {
                            ref: t,
                            justifyContent: "center",
                            sx: t => ({
                                height: "100vh",
                                minHeight: 450,
                                position: "absolute",
                                left: 0,
                                bottom: 0,
                                zIndex: 3,
                                width: "100%",
                                [t.breakpoints.down("sm")]: {
                                    pt: "100px"
                                }
                            }),
                            children: [(0, i.tZ)(p.Z, {
                                children: (0, i.BX)(c.Z, {
                                    justifyContent: "center",
                                    ref: d,
                                    sx: t => ({
                                        width: "100%",
                                        height: "100%",
                                        [t.breakpoints.down("sm")]: {
                                            mt: "-40px"
                                        }
                                    }),
                                    children: [(0, i.tZ)(f.Z, {
                                        component: "img",
                                        src: "/images/intents-gpt/word-intents.svg",
                                        alt: "Intents",
                                        sx: {
                                            position: "relative",
                                            zIndex: 1,
                                            width: "100%",
                                            mb: "2vh"
                                        }
                                    }), (0, i.tZ)(f.Z, {
                                        component: "img",
                                        src: "/images/intents-gpt/word-gpt.svg",
                                        alt: "GPT",
                                        sx: {
                                            position: "relative",
                                            zIndex: 3,
                                            width: "50%",
                                            m: "0 auto"
                                        }
                                    })]
                                })
                            }), (0, i.tZ)(f.Z, {
                                ref: e,
                                component: "img",
                                src: "/images/intents-gpt/intents-gpt.png",
                                alt: "Phone GPT",
                                sx: {
                                    position: "absolute",
                                    zIndex: 2,
                                    bottom: "0",
                                    left: "50%",
                                    width: {
                                        xs: "90%",
                                        sm: "80%"
                                    },
                                    maxWidth: 960,
                                    height: 600,
                                    willChange: "transform",
                                    transform: "translate(-50%, 70%)",
                                    objectFit: "contain",
                                    fontFamily: '"object-fit: contain;"',
                                    objectPosition: "top center"
                                }
                            })]
                        })]
                    })
                },
                S = [{
                    id: 1,
                    title: "Aperture Finance Secures Series A Funding at a $250M Fully Diluted Valuation to Build Intent-based Architecture for DeFi",
                    description: "Aperture Finance, a decentralized finance (DeFi) platform pioneering AI-powered intents, has raised a Series A funding round, bringing the total across all rounds to $12 million and valuing the project at $250 million.",
                    img: "yahoo.png",
                    href: "https://finance.yahoo.com/news/aperture-finance-secures-series-funding-025500704.html?guccounter=2&guce_referrer=aHR0cHM6Ly9naXRodWIuY29tLw&guce_referrer_sig=AQAAAAHncdbpPIQukTo70yR0n1SiSyYRiM1BzXt8_Hc07DcxiNkndrNcpDVyEG2uXjgki-dhyYTK8uuP-bHpAUI5z5EdJlrMyd33ZJJZqhU_FAL5PfkRJ48TrfewYtgGyZ9L1eR2h7_Gx_xEWu0FBvFOn2xI8da4YwDl2iq-W84zhuD7",
                    objectPosition: "bottom"
                }, {
                    id: 2,
                    title: "What are Intent Based Architectures?",
                    description: "DeFi puts complex financial products into the hands of users and protocols, enabling them to execute simple transactions like a swap - to more complex strategies like a delta neutral stablecoin based on staking yield and funding rate arbitrage (as was recently done by the USDe developer Ethena).",
                    img: "img_1.png",
                    href: "https://www.theblock.co/post/278666/what-are-intent-based-architectures"
                }, {
                    id: 3,
                    title: "How Aperture Finance is Streamlining DeFi With Intents",
                    description: "The DeFi platform is simplifying the complexities of Web3 finance with a novel Intents-based architecture.",
                    img: "img_2.png",
                    href: "https://decrypt.co/217830/how-aperture-finance-is-streamlining-defi-with-intents"
                }, {
                    id: 4,
                    title: "The Convergence of Ai, DeFi and Intents with Aperture Finance",
                    description: "Exploring how Aperture Finance converges AI, DeFi and intents to optimize on the shortcomings of crypto UX today.",
                    img: "shoal.png",
                    href: "https://www.shoal.gg/p/the-convergence-of-ai-defi-and-intents"
                }, {
                    id: 5,
                    title: "The INTENTional Campaign (7%)",
                    description: "TGE is coming \uD83D\uDD1C and to kick things off the Aperture INTENTional campaign is starting on March 25th alongside a full brand refresh (new logo who dis!). At ETH Denver we released our Litepaper detailing our plan for AI Powered Intents.",
                    img: "img_3.png",
                    href: "https://medium.com/@aperturefinance/the-intentional-campaign-7-3307e91af884"
                }, {
                    id: 6,
                    title: "Aperture’s Litepaper",
                    description: "An Intent Based Infrastructure powered by a Chatbot UX that revolutionizes the user blockchain interaction",
                    img: "img_4.png",
                    href: "https://medium.com/@aperturefinance/apertures-litepaper-5c988ead5b78"
                }],
                R = () => {
                    let t = (0, r.useRef)(null),
                        e = (0, r.useRef)(null),
                        n = (0, r.useRef)(null);
                    return s(() => {
                        let i = a.ZP.context(() => {
                            let i = t.current.getBoundingClientRect(),
                                r = n.current.getBoundingClientRect(),
                                o = e.current.getBoundingClientRect();
                            a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    pin: !0,
                                    trigger: t.current
                                }
                            }).to(e.current, {
                                x: -(o.width - i.width),
                                duration: 1
                            }).to(n.current, {
                                x: -(r.width - i.width),
                                duration: 1
                            }, "<")
                        });
                        return () => i.revert()
                    }, []), (0, i.tZ)(f.Z, {
                        sx: {
                            background: "#000",
                            position: "relative",
                            zIndex: 5
                        },
                        children: (0, i.tZ)(p.Z, {
                            children: (0, i.tZ)(f.Z, {
                                ref: t,
                                sx: {
                                    overflow: "visible"
                                },
                                children: (0, i.BX)(c.Z, {
                                    justifyContent: "center",
                                    sx: {
                                        height: "100vh",
                                        pb: {
                                            xs: "20px",
                                            md: "120px"
                                        }
                                    },
                                    children: [(0, i.tZ)(f.Z, {
                                        sx: {
                                            height: "45%",
                                            fontSize: "calc(40vh - 60px)",
                                            position: "relative"
                                        },
                                        children: (0, i.tZ)(h.Z, {
                                            ref: e,
                                            fontSize: "1em",
                                            fontWeight: 500,
                                            color: "#fff",
                                            lineHeight: 1,
                                            fontFamily: "var(--font-dunbar)",
                                            sx: {
                                                textTransform: "uppercase",
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                willChange: "transform",
                                                transform: "translateX(100vw)"
                                            },
                                            children: "Insights"
                                        })
                                    }), (0, i.tZ)(f.Z, {
                                        sx: {
                                            height: "55%",
                                            maxHeight: 470,
                                            position: "relative"
                                        },
                                        children: (0, i.tZ)(c.Z, {
                                            ref: n,
                                            direction: "row",
                                            gap: "60px",
                                            sx: {
                                                height: "100%",
                                                position: "absolute",
                                                left: 0,
                                                top: 0,
                                                willChange: "transform",
                                                transform: "translateX(100vw)"
                                            },
                                            children: S.map(t => {
                                                let {
                                                    id: e,
                                                    title: n,
                                                    description: r,
                                                    img: o,
                                                    href: a,
                                                    objectPosition: s
                                                } = t;
                                                return (0, i.BX)(c.Z, {
                                                    component: "a",
                                                    href: a,
                                                    target: "_blank",
                                                    spacing: 0,
                                                    sx: {
                                                        height: "100%",
                                                        ":hover": {
                                                            img: {
                                                                transform: "scale(1.1)"
                                                            }
                                                        }
                                                    },
                                                    children: [(0, i.tZ)(f.Z, {
                                                        sx: {
                                                            width: {
                                                                xs: "calc(100vw - 50px)",
                                                                sm: 460
                                                            },
                                                            height: {
                                                                xs: "calc(100% - 200px)"
                                                            },
                                                            maxHeight: {
                                                                xs: 210,
                                                                sm: 260
                                                            },
                                                            borderRadius: "15px",
                                                            overflow: "hidden"
                                                        },
                                                        children: (0, i.tZ)(f.Z, {
                                                            component: "img",
                                                            src: "/images/insights/".concat(o),
                                                            alt: n,
                                                            sx: {
                                                                width: "100%",
                                                                height: "100%",
                                                                transition: ".4s",
                                                                objectFit: "cover",
                                                                objectPosition: s,
                                                                fontFamily: '"object-fit: cover;"'
                                                            }
                                                        })
                                                    }), (0, i.BX)(c.Z, {
                                                        gap: 4,
                                                        sx: {
                                                            height: {
                                                                xs: 140,
                                                                sm: 200
                                                            },
                                                            pt: 4
                                                        },
                                                        children: [(0, i.tZ)(h.Z, {
                                                            color: "#fff",
                                                            fontWeight: 500,
                                                            lineHeight: 1.17,
                                                            sx: t => ({
                                                                WebkitLineClamp: 2,
                                                                display: "-webkit-box",
                                                                WebkitBoxOrient: "vertical",
                                                                overflow: "hidden",
                                                                [t.breakpoints.down("sm")]: {
                                                                    fontSize: 24
                                                                }
                                                            }),
                                                            children: n
                                                        }), (0, i.tZ)(h.Z, {
                                                            color: "rgba(255,255,255,.5)",
                                                            variant: "body2",
                                                            lineHeight: 1.17,
                                                            sx: t => ({
                                                                WebkitLineClamp: {
                                                                    xs: 1,
                                                                    sm: 3
                                                                },
                                                                display: "-webkit-box",
                                                                WebkitBoxOrient: "vertical",
                                                                overflow: "hidden",
                                                                [t.breakpoints.down("sm")]: {
                                                                    fontSize: 14
                                                                }
                                                            }),
                                                            children: r
                                                        })]
                                                    })]
                                                }, e)
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                T = [{
                    id: 0,
                    image: "uniswap.svg"
                }, {
                    id: 1,
                    image: "pancakeswap.svg"
                }, {
                    id: 2,
                    image: "propellerhead.svg"
                }, {
                    id: 3,
                    image: "mantanetwork.svg"
                }, {
                    id: 4,
                    image: "polygon.svg"
                }, {
                    id: 5,
                    image: "optimism.svg"
                }, {
                    id: 6,
                    image: "arbitrum.svg"
                }, {
                    id: 7,
                    image: "binancesmartchain.svg"
                }, {
                    id: 8,
                    image: "binancelabs.svg"
                }];
            var M = n(3743);
            let B = t => {
                    let {
                        animate: e
                    } = t, n = (0, M.yg)(T), r = [...n, ...n, ...n, ...n, ...n, ...n];
                    return (0, i.tZ)(f.Z, {
                        sx: t => ({
                            position: "relative",
                            height: 113,
                            width: "100%",
                            [t.breakpoints.up("sm")]: {
                                height: 162
                            }
                        }),
                        children: (0, i.tZ)(c.Z, {
                            direction: "row",
                            gap: 3,
                            sx: {
                                position: "absolute",
                                animation: "".concat("left" === e ? "slide" : "slideReverse", " 300s linear infinite"),
                                "@keyframes slide": {
                                    "0%": {
                                        transform: "translate(0)"
                                    },
                                    "100%": {
                                        transform: "translate(calc(-100% + 100vw), 0px)"
                                    }
                                },
                                "@keyframes slideReverse": {
                                    "0%": {
                                        transform: "translate(calc(-100% + 100vw), 0px)"
                                    },
                                    "100%": {
                                        transform: "translate(0)"
                                    }
                                }
                            },
                            children: r.map((t, e) => (0, i.tZ)(c.Z, {
                                alignItems: "center",
                                justifyContent: "center",
                                sx: t => ({
                                    borderRadius: "15px",
                                    minWidth: 182,
                                    width: 182,
                                    height: 113,
                                    background: "rgba(255,255,255,.1)",
                                    [t.breakpoints.up("sm")]: {
                                        minWidth: 260,
                                        width: 260,
                                        height: 162
                                    }
                                }),
                                children: (0, i.tZ)(f.Z, {
                                    component: "img",
                                    src: "/images/partners/".concat(t.image),
                                    alt: "Partner logo",
                                    sx: t => ({
                                        width: 130,
                                        height: 35,
                                        objectFit: "contain",
                                        fontFamily: '"object-fit: contain;"',
                                        [t.breakpoints.up("sm")]: {
                                            width: 180,
                                            height: 70
                                        }
                                    })
                                })
                            }, e))
                        })
                    })
                },
                L = () => {
                    let t = (0, r.useRef)(null),
                        {
                            setZoomRef: e
                        } = (0, H.F3)();
                    return (0, r.useEffect)(() => {
                        (null == t ? void 0 : t.current) && e(t)
                    }, []), (0, i.BX)(f.Z, {
                        sx: {
                            background: "#000",
                            pt: {
                                xs: 7,
                                sm: 30
                            },
                            position: "relative",
                            zIndex: 2
                        },
                        children: [(0, i.tZ)(p.Z, {
                            children: (0, i.tZ)(h.Z, {
                                variant: "h1",
                                component: "h2",
                                color: "#fff",
                                mb: {
                                    xs: "42px",
                                    sm: "82px"
                                },
                                ref: t,
                                sx: t => ({
                                    letterSpacing: {
                                        xs: 0,
                                        sm: "2px"
                                    },
                                    [t.breakpoints.down("md")]: {
                                        fontSize: 46
                                    }
                                }),
                                children: "PARTNERS"
                            })
                        }), (0, i.BX)(c.Z, {
                            gap: {
                                xs: "18px",
                                sm: 3
                            },
                            children: [(0, i.tZ)(B, {
                                animate: "left"
                            }), (0, i.tZ)(B, {
                                animate: "right"
                            })]
                        })]
                    })
                },
                z = () => {
                    let t = (0, r.useRef)(null),
                        e = (0, r.useRef)(null),
                        n = (0, r.useRef)(null),
                        l = (0, r.useRef)(null),
                        d = (0, r.useRef)(null),
                        {
                            setZoomRef: u
                        } = (0, H.F3)();
                    return (0, r.useEffect)(() => {
                        (null == d ? void 0 : d.current) && u(d)
                    }, []), s(() => {
                        let i = a.ZP.context(() => {
                            a.ZP.timeline({
                                scrollTrigger: {
                                    scrub: !0,
                                    pin: !0,
                                    trigger: t.current
                                }
                            }).to(e.current, {
                                scale: 1,
                                duration: 1
                            }).to(n.current, {
                                y: "0",
                                opacity: 1,
                                duration: 1
                            }, "-=.7").to(l.current, {
                                y: "0",
                                opacity: 1,
                                duration: 1.2
                            }, "<")
                        });
                        return () => i.revert()
                    }, []), (0, i.BX)(c.Z, {
                        ref: t,
                        justifyContent: "center",
                        sx: {
                            background: "#000",
                            height: "100vh",
                            position: "relative",
                            zIndex: 1,
                            top: "-100px",
                            mb: "-200px",
                            overflow: "hidden",
                            minHeight: 500
                        },
                        children: [(0, i.tZ)(p.Z, {
                            sx: {
                                position: "relative",
                                zIndex: 2,
                                height: "100%"
                            },
                            children: (0, i.BX)(c.Z, {
                                justifyContent: "space-between",
                                height: "100%",
                                py: "18vh",
                                children: [(0, i.BX)(c.Z, {
                                    ref: n,
                                    direction: {
                                        lg: "row"
                                    },
                                    justifyContent: "space-between",
                                    sx: {
                                        opacity: 0,
                                        willChange: "transform",
                                        transform: "translateY(100px)"
                                    },
                                    children: [(0, i.tZ)(h.Z, {
                                        variant: "h1",
                                        color: "#fff",
                                        ref: d,
                                        sx: t => ({
                                            textTransform: "uppercase",
                                            lineHeight: 1.3,
                                            letterSpacing: "1px",
                                            [t.breakpoints.down("sm")]: {
                                                fontSize: 46
                                            }
                                        }),
                                        children: "Whales & Institutions"
                                    }), (0, i.tZ)(h.Z, {
                                        variant: "body3",
                                        color: "rgba(255,255,255,.7)",
                                        sx: t => ({
                                            maxWidth: 420,
                                            pt: "20px",
                                            lineHeight: 1.2,
                                            letterSpacing: "-0.4px",
                                            [t.breakpoints.up("sm")]: {
                                                fontSize: 20
                                            }
                                        }),
                                        children: "For asset managers and individuals planning to invest over $100,000 please reach out to our team for exclusive perks and resources."
                                    })]
                                }), (0, i.tZ)(c.Z, {
                                    ref: l,
                                    direction: "row",
                                    justifyContent: {
                                        sm: "flex-end"
                                    },
                                    sx: {
                                        opacity: 0,
                                        transform: "translateY(150px)"
                                    },
                                    children: (0, i.BX)(c.Z, {
                                        component: "a",
                                        direction: "row",
                                        alignItems: "center",
                                        gap: {
                                            xs: 1,
                                            sm: 2
                                        },
                                        p: 0,
                                        mr: 2,
                                        href: "#",
                                        sx: {
                                            color: "#fff",
                                            "&:hover": {
                                                textDecoration: "underline"
                                            }
                                        },
                                        children: [" ", (0, i.tZ)(o.J, {
                                            sx: t => ({
                                                width: 24,
                                                height: 24,
                                                color: "#fff",
                                                [t.breakpoints.up("sm")]: {
                                                    width: 30,
                                                    height: 30
                                                }
                                            }),
                                            name: "arrow-up-right"
                                        })]
                                    })
                                })]
                            })
                        }), (0, i.tZ)(f.Z, {
                            ref: e,
                            sx: {
                                position: "absolute",
                                zIndex: 1,
                                width: "250vmax",
                                height: "250vmax",
                                backgroundColor: "#6834D9",
                                left: "50%",
                                right: 0,
                                bottom: 0,
                                margin: "auto",
                                transform: "translate(-50%, 50%) scale(0)",
                                borderRadius: "50%"
                            }
                        })]
                    })
                },
                F = () => {
                    let t = (0, r.useRef)(null),
                        {
                            setZoomRef: e
                        } = (0, H.F3)(),
                        n = () => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            })
                        };
                    return (0, r.useEffect)(() => {
                        (null == t ? void 0 : t.current) && e(t)
                    }, []), (0, i.tZ)(f.Z, {
                        sx: {
                            background: "#000",
                            padding: {
                                xs: "90px 0 80px",
                                sm: "260px 0 80px"
                            }
                        },
                        children: (0, i.BX)(p.Z, {
                            children: [(0, i.tZ)(c.Z, {
                                direction: "row",
                                justifyContent: "center",
                                ref: t,
                                children: (0, i.BX)("svg", {
                                    width: "925",
                                    height: "285",
                                    viewBox: "0 0 925 285",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    ref: t,
                                    children: [(0, i.tZ)("path", {
                                        d: "M747.04 164.12L746.72 184.76C743.946 183.693 740.586 182.787 736.64 182.04C732.693 181.293 728.96 180.92 725.44 180.92C718.826 180.92 714.026 181.987 711.04 184.12C708.16 186.147 706.72 188.867 706.72 192.28C706.72 195.48 708.373 198.68 711.68 201.88C714.986 204.973 720.266 209.027 727.52 214.04C736.16 220.12 742.986 226.04 748 231.8C753.12 237.453 755.68 243.907 755.68 251.16C755.68 260.973 751.68 269.08 743.68 275.48C735.786 281.773 725.333 284.92 712.32 284.92C710.293 284.92 708 284.813 705.44 284.6C702.88 284.387 700.32 284.067 697.76 283.64C695.2 283.32 692.746 282.947 690.4 282.52C688.053 282.093 686.186 281.667 684.8 281.24L685.12 260.28C686.506 260.813 688.266 261.4 690.4 262.04C692.64 262.573 695.04 263.107 697.6 263.64C700.16 264.067 702.826 264.44 705.6 264.76C708.48 265.08 711.2 265.24 713.76 265.24C719.84 265.24 724.426 263.907 727.52 261.24C730.613 258.573 732.16 255.533 732.16 252.12C732.16 248.813 730.453 245.56 727.04 242.36C723.733 239.053 718.453 234.947 711.2 230.04C700.746 222.893 693.493 216.547 689.44 211C685.493 205.347 683.52 199.16 683.52 192.44C683.52 188.493 684.32 184.653 685.92 180.92C687.52 177.08 689.973 173.72 693.28 170.84C696.693 167.96 701.066 165.667 706.4 163.96C711.733 162.147 718.08 161.24 725.44 161.24C729.066 161.24 732.8 161.56 736.64 162.2C740.586 162.733 744.053 163.373 747.04 164.12Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M630.127 283V184.44H604.847V163.64H678.607V184.44H653.327V283H630.127Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M572.816 283L515.696 203.16V283H492.496V163.64H515.056L572.336 244.44V163.64H595.536V283H572.816Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M411.559 283V163.64H476.679V183.8H434.759V211.64H472.679V231.8H434.759V262.84H477.959V283H411.559Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M353.877 283V184.44H328.597V163.64H402.357V184.44H377.077V283H353.877Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M296.566 283L239.446 203.16V283H216.246V163.64H238.806L296.086 244.44V163.64H319.286V283H296.566Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M177.34 283V163.64H200.54V283H177.34Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M829.138 123V3.63989H862.738C870.738 3.63989 878.471 4.86656 885.938 7.31989C893.404 9.77323 899.964 13.4532 905.618 18.3599C911.378 23.2666 915.964 29.4532 919.378 36.9199C922.898 44.3866 924.658 53.1332 924.658 63.1599C924.658 73.2932 922.898 82.1466 919.378 89.7199C915.964 97.1866 911.378 103.373 905.618 108.28C899.964 113.187 893.404 116.867 885.938 119.32C878.471 121.773 870.738 123 862.738 123H829.138ZM852.338 24.5999V102.04H863.218C868.231 102.04 873.031 101.24 877.618 99.6399C882.204 97.9332 886.258 95.4799 889.778 92.2799C893.298 89.0799 896.071 85.0266 898.098 80.1199C900.231 75.2132 901.298 69.5599 901.298 63.1599C901.298 56.8666 900.231 51.3199 898.098 46.5199C896.071 41.6132 893.298 37.5599 889.778 34.3599C886.258 31.1599 882.204 28.7599 877.618 27.1599C873.031 25.4532 868.231 24.5999 863.218 24.5999H852.338Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M748.199 123V3.63989H813.319V23.7999H771.399V51.6399H809.319V71.7999H771.399V102.84H814.599V123H748.199Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M686.754 25.3999H678.274V62.5199H687.234C694.381 62.5199 700.247 60.7066 704.834 57.0799C709.528 53.4532 711.874 48.7066 711.874 42.8399C711.874 37.6132 709.848 33.3999 705.794 30.1999C701.848 26.9999 695.501 25.3999 686.754 25.3999ZM709.154 123L678.274 83.4799V123H655.074V3.63989H684.674C691.714 3.63989 698.274 4.38656 704.354 5.87989C710.541 7.37323 715.928 9.7199 720.514 12.9199C725.101 16.1199 728.674 20.2266 731.234 25.2399C733.901 30.1466 735.234 36.0132 735.234 42.8399C735.234 47.7466 734.434 52.2266 732.834 56.2799C731.234 60.2266 729.048 63.7466 726.274 66.8399C723.608 69.8266 720.354 72.4399 716.514 74.6799C712.781 76.9199 708.781 78.7332 704.514 80.1199L737.314 123H709.154Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M574.137 123V3.63989H639.257V23.7999H597.337V51.6399H635.257V71.7999H597.337V102.84H640.537V123H574.137Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M508.663 123L487.223 38.8399L465.143 123H440.183L408.023 3.63989H432.503L454.103 90.3599L475.543 3.63989H500.183L521.463 90.5199L543.223 3.63989H565.943L533.623 123H508.663Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M220.009 88.5999H212.649V123H189.449V3.63989H220.649C227.369 3.63989 233.716 4.4399 239.689 6.0399C245.769 7.6399 250.996 10.0932 255.369 13.3999C259.743 16.7066 263.209 20.9732 265.769 26.1999C268.329 31.4266 269.609 37.6666 269.609 44.9199C269.609 52.1732 268.169 58.5199 265.289 63.9599C262.409 69.3999 258.623 73.9332 253.929 77.5599C249.343 81.1866 244.063 83.9599 238.089 85.8799C232.116 87.6932 226.089 88.5999 220.009 88.5999ZM219.209 25.3999H212.649V66.8399H219.209C227.209 66.8399 233.609 64.8666 238.409 60.9199C243.316 56.9732 245.769 51.6399 245.769 44.9199C245.769 39.0532 243.689 34.3599 239.529 30.8399C235.476 27.2132 228.703 25.3999 219.209 25.3999Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M123.355 123V3.63989H146.555V123H123.355Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        d: "M75.8909 83.6399L57.4909 34.1999L39.0909 83.6399H75.8909ZM90.6109 123L83.091 103H31.8909L24.3709 123H0.210938L46.2909 3.63989H69.3309L115.251 123H90.6109Z",
                                        fill: "white"
                                    }), (0, i.tZ)("path", {
                                        className: "rotate-anim",
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        d: "M332.332 88.9896C332.745 89.1576 332.995 89.5837 332.917 90.0261L332.893 90.1695C332.815 90.6161 332.426 90.9438 331.971 90.9438H285.821C285.456 90.9438 285.125 90.7349 284.969 90.4071C281.139 82.2341 279 73.3278 279 63.4956C279 53.6634 281.237 44.3555 285.223 36.0473C295.461 14.7196 317.26 -0.00409508 342.5 8.5436e-07C344.589 8.5436e-07 346.654 0.106517 348.694 0.303161C349.993 0.430161 351.283 0.594031 352.561 0.794771C353.077 0.876707 353.422 1.37241 353.331 1.88451L347.461 35.2771C347.383 35.7237 346.994 36.0514 346.539 36.0514H342.5H342.41C327.293 36.1006 315.051 48.3663 315.051 63.4956C315.051 75.0607 322.208 84.9502 332.332 88.9896ZM352.621 36.0521H399.181H399.185C399.55 36.0521 399.882 36.261 400.037 36.5888C403.868 44.7618 406.006 53.6681 406.006 63.5003C406.006 73.3326 403.773 82.6404 399.783 90.9486C389.545 112.276 367.747 127 342.507 127C340.278 127 338.074 126.881 335.907 126.656C334.743 126.533 333.588 126.381 332.441 126.201C331.925 126.119 331.58 125.628 331.671 125.115L337.541 91.7229C337.619 91.2763 338.008 90.9486 338.463 90.9486H342.183V90.9404C342.289 90.9445 342.396 90.9486 342.502 90.9486C357.66 90.9486 369.951 78.6583 369.951 63.5003C369.951 51.7959 362.617 41.8121 352.298 37.867C351.876 37.7031 351.622 37.2729 351.7 36.8264C351.777 36.3798 352.167 36.0521 352.621 36.0521Z",
                                        fill: "white"
                                    })]
                                })
                            }), (0, i.BX)(c.Z, {
                                direction: {
                                    xs: "column-reverse",
                                    md: "row"
                                },
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-end"
                                },
                                mt: {
                                    xs: -2,
                                    sm: "146px"
                                },
                                alignItems: "center",
                                onClick: n,
                                children: [(0, i.tZ)(h.Z, {
                                    variant: "body3",
                                    fontFamily: "var(--font-dunbar)",
                                    sx: t => ({
                                        color: "rgba(255,255,255,.7)",
                                        letterSpacing: "0.2px",
                                        [t.breakpoints.up("md")]: {
                                            color: "#fff",
                                            pr: "20px",
                                            textTransform: "uppercase"
                                        },
                                        [t.breakpoints.down("md")]: {
                                            mt: "22px"
                                        }
                                    }),
                                    children: "Back to Top"
                                }), (0, i.tZ)(m.Z, {
                                    size: "large",
                                    variant: "outlinedReverse",
                                    sx: t => ({
                                        width: 60,
                                        height: 60,
                                        transform: "rotate(180deg)",
                                        [t.breakpoints.up("sm")]: {
                                            width: 100,
                                            height: 100
                                        }
                                    }),
                                    children: (0, i.tZ)(o.J, {
                                        name: "arrow",
                                        sx: t => ({
                                            width: 40,
                                            height: 40,
                                            [t.breakpoints.up("sm")]: {
                                                width: 48,
                                                height: 48
                                            }
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                E = () => (0, i.tZ)(c.Z, {
                    direction: "row",
                    gap: 3,
                    sx: {
                        position: "absolute",
                        animation: "topScroll 40s linear infinite",
                        "@keyframes topScroll": {
                            "0%": {
                                transform: "translate(0)"
                            },
                            "100%": {
                                transform: "translateY(-1000px)"
                            }
                        }
                    },
                    children: (0, i.tZ)("pre", {
                        children: "\nimport {\n  Action,\n  ActionTypeEnum,\n  AutomanFragment,\n  ApertureSupportedChainId,\n  IUniV3Automan__factory,\n  PermitInfo,\n  RebalanceAction,\n  UniV3Automan,\n  UniV3Automan__factory,\n  getAutomanDecreaseLiquidityCallInfo,\n  getAutomanRebalanceCallInfo,\n  getAutomanReinvestCallInfo,\n  getChainInfo,\n  normalizeTicks,\n  optimalRebalance,\n} from '@aperture_finance/uniswap-v3-automation-sdk';\nimport { BlockTag, JsonRpcProvider, Provider } from '@ethersproject/providers';\nimport { Percent } from '@uniswap/sdk-core';\nimport { Position } from '@uniswap/v3-sdk';\nimport Big from 'big.js';\nimport {\n  BigNumber,\n  BigNumberish,\n  PopulatedTransaction,\n  Signer,\n  ethers,\n} from 'ethers';\nimport JSBI from 'jsbi';\n\nimport { GAS_LIMIT_L2_MULTIPLIER, GAS_LIMIT_MULTIPLIER } from '../../constants';\nimport { getChainIdFromPrimaryKey, isRecurringAction } from '../../db_helper';\nimport { StateTableItem } from '../../interfaces/schema';\nimport { logger } from '../../logger';\n\nfunction isRebalanceAction(action: Action): boolean {\n  return (\n    action.type === ActionTypeEnum.enum.Rebalance || isRecurringAction(action)\n  );\n}\n\nexport async function populateTriggerActionTx(\n  task: StateTableItem,\n  position: Position,\n  positionRawEtherValue: Big,\n  permitInfo: PermitInfo | undefined,\n  signer: Signer,\n  provider: JsonRpcProvider | Provider,\n  blockNumber?: number,\n) {\n  const chainId = getChainIdFromPrimaryKey(task.primary_key);\n  const signerAddress = await signer.getAddress();\n  const automanContract = UniV3Automan__factory.connect(\n    getChainInfo(chainId).aperture_uniswap_v3_automan,\n    signer,\n  );\n\n  // Find the gas deduction ratio and compare with user-specified ceiling.\n  let gasUnits: BigNumber;\n  let gasDeductionPips: BigNumber;\n  let amount0Min: JSBI;\n  let amount1Min: JSBI;\n  let swapData: string | undefined;\n  if (isRebalanceAction(task.action)) {\n    // get swap data using 1inch\n    swapData = await get1inchSwapData(\n      position,\n      task,\n      /*feePips=*/ 0,\n      signerAddress,\n      provider,\n      blockNumber,\n    );\n    logger.info(`Using 1inch swap data: ${swapData}`);\n  }\n  if (swapData !== undefined) {\n    const [poolEstimate, routerEstimate] = await Promise.all([\n      estimateGasAndSimulate(\n        task,\n        position,\n        positionRawEtherValue,\n        automanContract,\n        signerAddress,\n        permitInfo,\n        /**swapData= */ undefined,\n        blockNumber,\n      ),\n      estimateGasAndSimulate(\n        task,\n        position,\n        positionRawEtherValue,\n        automanContract,\n        signerAddress,\n        permitInfo,\n        swapData,\n        blockNumber,\n      ),\n    ]);\n    logger.info(\n      `Pool estimate: ${poolEstimate.liquidity!.toString()}, gas: ${poolEstimate.gasUnits.toString()}`,\n    );\n    logger.info(\n      `Router estimate: ${routerEstimate.liquidity!.toString()}, gas: ${routerEstimate.gasUnits.toString()}`,\n    );\n    if (poolEstimate.liquidity!.gte(routerEstimate.liquidity!)) {\n      ({ gasUnits, gasDeductionPips, amount0Min, amount1Min } = poolEstimate);\n      // Clear swap data since we are using the pool to rebalance; otherwise, the populated tx would still use 1inch.\n      swapData = undefined;\n      logger.info(`Use the same pool to rebalance`);\n    } else {\n      ({ gasUnits, gasDeductionPips, amount0Min, amount1Min } = routerEstimate);\n      logger.info(`Use 1inch to rebalance`);\n    }\n  } else {\n    ({ gasUnits, gasDeductionPips, amount0Min, amount1Min } =\n      await estimateGasAndSimulate(\n        task,\n        position,\n        positionRawEtherValue,\n        automanContract,\n        signerAddress,\n        permitInfo,\n        /*swapData=*/ undefined,\n        blockNumber,\n      ));\n  }\n\n  // Execute action.\n  const populatedTx = await generateTxPromise(\n    position,\n    task,\n    permitInfo,\n    automanContract,\n    /*mode=*/ 'populate',\n    amount0Min.toString(),\n    amount1Min.toString(),\n    /*feePips=*/ gasDeductionPips,\n    signerAddress,\n    swapData,\n    blockNumber,\n  );\n  // Populating gas limit based on estimated gas units multiplied by a multiplier.\n  populatedTx.gasLimit = gasUnits.mul(GAS_LIMIT_MULTIPLIER).div(100);\n  return populatedTx;\n}\n\nasync function get1inchSwapData(\n  position: Position,\n  task: StateTableItem,\n  feePips: BigNumberish,\n  signerAddress: string,\n  provider: JsonRpcProvider | Provider,\n  blockNumber?: number,\n) {\n  const { tickLower, tickUpper } = normalizeTicks(task.action, position.pool);\n  try {\n    const { swapData } = await optimalRebalance(\n      position.pool.chainId,\n      task.nft_id,\n      tickLower,\n      tickUpper,\n      feePips,\n      false,\n      signerAddress,\n      (task.action as RebalanceAction).slippage,\n      provider,\n      blockNumber,\n    );\n    return swapData;\n  } catch (err) {\n    logger.error(`Failed to get 1inch swap data: ${err}`);\n  }\n}\n\nasync function estimateGasAndSimulate(\n  task: StateTableItem,\n  position: Position,\n  positionRawEtherValue: Big,\n  automanContract: UniV3Automan,\n  signerAddress: string,\n  permitInfo?: PermitInfo,\n  swapData = '0x',\n  blockTag: BlockTag = 'latest',\n) {\n  const { gasUnits, gasDeductionPips } = await estimateGasDeductionPips(\n    positionRawEtherValue,\n    position,\n    task,\n    permitInfo,\n    automanContract,\n    signerAddress,\n    getChainIdFromPrimaryKey(task.primary_key),\n    swapData,\n    blockTag,\n  );\n  const amounts = await getAmountsAfterSlippage(\n    position,\n    task,\n    permitInfo,\n    automanContract,\n    signerAddress,\n    gasDeductionPips,\n    swapData,\n    blockTag,\n  );\n  return {\n    ...amounts,\n    gasUnits,\n    gasDeductionPips,\n  };\n}\n\ntype Mode = {\n  estimateGas: BigNumber;\n  callStatic: { liquidity?: BigNumber; amount0: BigNumber; amount1: BigNumber };\n  populate: PopulatedTransaction;\n};\n\n// Generate tx that triggers `action`.\n// If `mode` is `estimateGas`, then a Promise<BigNumber> is returned representing the estimated tx cost.\n// If `mode` is `callStatic`, then a Promise<any> is returned with the return value of the invoked function.\n// Otherwise, a Promise<TransactionResponse> is returned with the response for the tx after it is sent to the network.\nasync function generateTxPromise<K extends keyof Mode>(\n  position: Position,\n  task: StateTableItem,\n  permitInfo: PermitInfo | undefined,\n  automanContract: UniV3Automan,\n  mode: K,\n  amount0Min: BigNumberish,\n  amount1Min: BigNumberish,\n  feePips: BigNumberish,\n  signerAddress: string,\n  swapData = '0x',\n  blockTag?: BlockTag,\n): Promise<Mode[K]> {\n  const deadline = Math.floor(Date.now() / 1000) + 20 * 60; // Twenty min from now.\n  let functionFragment: AutomanFragment;\n  let data: string;\n  switch (task.action.type) {\n    case 'Close':\n    case 'LimitOrderClose': {\n      ({ functionFragment, data } = getAutomanDecreaseLiquidityCallInfo(\n        task.nft_id,\n        position.liquidity.toString(),\n        deadline,\n        amount0Min,\n        amount1Min,\n        feePips,\n        permitInfo,\n      ));\n      break;\n    }\n    case 'Reinvest': {\n      ({ functionFragment, data } = getAutomanReinvestCallInfo(\n        task.nft_id,\n        deadline,\n        amount0Min,\n        amount1Min,\n        feePips,\n        permitInfo,\n      ));\n      break;\n    }\n    case 'Rebalance':\n    case 'RecurringPercentage':\n    case 'RecurringPrice':\n    case 'RecurringRatio': {\n      const pool = position.pool;\n      const { tickLower, tickUpper } = normalizeTicks(task.action, pool);\n      if (\n        tickLower === position.tickLower &&\n        tickUpper === position.tickUpper\n      ) {\n        throw new Error('No need to rebalance');\n      }\n\n      ({ functionFragment, data } = getAutomanRebalanceCallInfo(\n        {\n          token0: pool.token0.address,\n          token1: pool.token1.address,\n          fee: pool.fee,\n          tickLower,\n          tickUpper,\n          amount0Desired: 0, // Param value ignored by Automan.\n          amount1Desired: 0, // Param value ignored by Automan.\n          amount0Min: amount0Min,\n          amount1Min: amount1Min,\n          recipient: ethers.constants.AddressZero, // Param value ignored by Automan.\n          deadline: deadline,\n        },\n        task.nft_id,\n        feePips,\n        permitInfo,\n        swapData,\n      ));\n      break;\n    }\n    default:\n      throw new Error('Invalid action type');\n  }\n  switch (mode) {\n    case 'estimateGas':\n      // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n      // @ts-ignore\n      return automanContract.provider.estimateGas({\n        from: signerAddress,\n        to: automanContract.address,\n        data,\n      });\n    case 'callStatic':\n      const returnData = await automanContract.provider.call(\n        {\n          from: signerAddress,\n          to: automanContract.address,\n          data,\n        },\n        blockTag,\n      );\n      // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n      // @ts-ignore\n      return IUniV3Automan__factory.createInterface().decodeFunctionResult(\n        // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n        // @ts-ignore\n        functionFragment,\n        returnData,\n      );\n    default:\n      // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n      // @ts-ignore\n      return automanContract.signer.populateTransaction({\n        to: automanContract.address,\n        data,\n      });\n  }\n}\n      "
                    })
                });
            var D = n(1075),
                X = n(5992);
            let _ = () => {
                    let t = (0, r.useRef)(null),
                        {
                            setZoomRef: e
                        } = (0, l.F3)(),
                        {
                            palette: n
                        } = (0, d.Z)(),
                        {
                            mode: o
                        } = n;
                    return (0, r.useEffect)(() => {
                        (null == t ? void 0 : t.current) && e(t)
                    }, []), (0, i.BX)(i.HY, {
                        children: [(0, i.tZ)(p.Z, {
                            sx: {
                                height: {
                                    md: "100vh"
                                },
                                color: "primary.main"
                            },
                            children: (0, i.tZ)(D.ZP, {
                                container: !0,
                                sx: {
                                    height: "100%"
                                },
                                children: (0, i.tZ)(D.ZP, {
                                    item: !0,
                                    xs: 12,
                                    md: 6,
                                    children: (0, i.tZ)(c.Z, {
                                        justifyContent: "center",
                                        direction: "column",
                                        pb: {
                                            md: "10%"
                                        },
                                        height: "100%",
                                        children: (0, i.BX)(f.Z, {
                                            sx: {
                                                pt: {
                                                    xs: "150px",
                                                    md: 20
                                                },
                                                pb: {
                                                    md: 20
                                                }
                                            },
                                            children: [(0, i.BX)(h.Z, {
                                                ref: t,
                                                variant: "h1",
                                                sx: t => ({
                                                    textTransform: "uppercase",
                                                    [t.breakpoints.down("sm")]: {
                                                        fontSize: 46,
                                                        textAlign: "center"
                                                    }
                                                }),
                                                children: ["Aperture’s Intents", " ", (0, i.tZ)(h.Z, {
                                                    component: "span",
                                                    variant: "h1",
                                                    sx: t => ({
                                                        color: "#6834D9",
                                                        [t.breakpoints.down("sm")]: {
                                                            fontSize: 46
                                                        }
                                                    }),
                                                    children: "API"
                                                })]
                                            }), (0, i.tZ)(h.Z, {
                                                variant: "body2",
                                                color: "light" === o ? "rgba(0, 0, 0, 0.7)" : "white",
                                                mt: 4,
                                                sx: t => ({
                                                    letterSpacing: "0.01px",
                                                    [t.breakpoints.down("sm")]: {
                                                        fontSize: 14,
                                                        textAlign: "center"
                                                    }
                                                }),
                                                children: "Institutions and advanced users can go beyond Aperture’s front-end with our intents API for enhanced, declarative strategies that fit into your existing workflow."
                                            })]
                                        })
                                    })
                                })
                            })
                        }), (0, i.BX)(D.ZP, {
                            container: !0,
                            sx: {
                                position: {
                                    md: "absolute"
                                },
                                top: 0
                            },
                            children: [(0, i.tZ)(D.ZP, {
                                item: !0,
                                md: 7,
                                xs: 12
                            }), (0, i.tZ)(N, {
                                component: c.Z,
                                item: !0,
                                xs: 12,
                                md: 5,
                                sx: {
                                    height: {
                                        xs: 500,
                                        md: "100vh"
                                    },
                                    overflow: "hidden"
                                },
                                alignItems: "center",
                                children: (0, i.tZ)(E, {})
                            })]
                        })]
                    })
                },
                N = (0, X.ZP)(D.ZP)(t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        position: "relative",
                        overflowY: "hidden",
                        color: "light" === e.palette.mode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)",
                        fontSize: "14px",
                        [e.breakpoints.up("md")]: {
                            fontSize: "20px"
                        },
                        [e.breakpoints.down("md")]: {
                            margin: "0 24px"
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            background: "light" === e.palette.mode ? "linear-gradient(180deg, rgba(255,255,255,1) 10%, rgba(1,110,150,0) 32%, rgba(0,167,209,0) 68%, rgba(254,255,255,1) 90%)" : "linear-gradient(180deg, rgba(18,18,18,1) 5%, rgba(1,110,150,0) 32%, rgba(0,167,209,0) 68%, rgba(18,18,18,1) 90%)",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            zIndex: 2
                        }
                    }
                }),
                U = () => {
                    let {
                        palette: t
                    } = (0, d.Z)(), {
                        mode: e
                    } = t, n = (0, r.useRef)(null), {
                        setZoomRef: o
                    } = (0, l.F3)();
                    return (0, r.useEffect)(() => {
                        (null == n ? void 0 : n.current) && o(n)
                    }, []), (0, i.tZ)(p.Z, {
                        sx: {
                            color: "primary.main",
                            pt: {
                                md: 10
                            }
                        },
                        children: (0, i.BX)(c.Z, {
                            alignItems: "center",
                            sx: {
                                textAlign: "center"
                            },
                            pb: 12,
                            children: [(0, i.tZ)(h.Z, {
                                variant: "h3",
                                sx: t => ({
                                    mb: 3,
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    fontFamily: "var(--font-dunbar)",
                                    [t.breakpoints.down("md")]: {
                                        fontSize: 32,
                                        px: "6px",
                                        lineHeight: 1.25
                                    }
                                }),
                                ref: n,
                                children: "automated position rebalancing, closure & compounding"
                            }), (0, i.tZ)(h.Z, {
                                variant: "body2",
                                color: "light" === e ? "rgba(0, 0, 0, 0.7)" : "white",
                                sx: t => ({
                                    letterSpacing: "0.01px",
                                    [t.breakpoints.down("md")]: {
                                        fontSize: 14,
                                        lineHeight: 1.2
                                    }
                                }),
                                children: "We offer support on various DeFi strategies, including active liquidity management — automated position rebalancing, closure, and compounding. You can choose among JavaScript, Python, Rust, and other languages of your choice to leverage this arsenal of automation features."
                            }), (0, i.BX)(c.Z, {
                                direction: {
                                    md: "row"
                                },
                                justifyContent: "center",
                                gap: {
                                    xs: 2,
                                    md: 4
                                },
                                py: 4,
                                width: "100%",
                                children: [(0, i.tZ)(u.Z, {
                                    variant: "contained",
                                    sx: t => ({
                                        [t.breakpoints.down("md")]: {
                                            fontSize: 14
                                        }
                                    }),
                                    onClick: () => window.open("https://docs.aperture.finance/docs/technical-docs/api-documentation"),
                                    children: "Aperture API"
                                }), (0, i.tZ)(u.Z, {
                                    variant: "outlined",
                                    sx: t => ({
                                        [t.breakpoints.down("md")]: {
                                            fontSize: 14
                                        }
                                    }),
                                    onClick: () => window.open("mailto:contact@aperture.finance"),
                                    children: "Get Support"
                                })]
                            })]
                        })
                    })
                }
        },
        5687: function (t, e, n) {
            n.d(e, {
                Z: function () {
                    return E
                }
            });
            var i = n(2903),
                r = n(2784),
                o = n(5632),
                a = n(1736),
                s = n(7746),
                l = n(3411),
                d = n(5801);
            let c = {
                    telegram: "https://t.me/aperture_finance",
                    "x.com": "https://x.com/ApertureFinance",
                },
                p = t => {
                    let {
                        direction: e = "column",
                        size: n = "small",
                        sx: r,
                        sxElem: o,
                        spacing: p = 2
                    } = t, {
                        palette: h
                    } = (0, s.Z)(), {
                        mode: u
                    } = h, m = {
                        border: "none",
                        color: "dark" === u ? "#000" : "#fff",
                        backgroundColor: "dark" === u ? "#fff" : "#000",
                        width: "small" === n ? 24 : 40,
                        height: "small" === n ? 24 : 40,
                        ...o
                    };
                    return (0, i.BX)(l.Z, {
                        direction: e,
                        alignItems: "center",
                        spacing: p,
                        sx: r,
                        children: [(0, i.tZ)(d.Z, {
                            size: n,
                            variant: "contained",
                            sx: m,
                            onClick: () => window.open(c.telegram),
                            children: (0, i.tZ)(a.J, {
                                sx: ["small" === n && {
                                    width: 14,
                                    height: 12,
                                    left: "-1px",
                                    position: "relative"
                                }, "medium" === n && {
                                    width: 24,
                                    height: 20
                                }],
                                name: "telegram"
                            })
                        }), (0, i.tZ)(d.Z, {
                            size: n,
                            variant: "contained",
                            sx: m,
                            onClick: () => window.open(c["x.com"]),
                            children: (0, i.tZ)(a.J, {
                                sx: ["small" === n && {
                                    width: 12,
                                    height: 12
                                }, "medium" === n && {
                                    width: 20,
                                    height: 20
                                }],
                                name: "x.com"
                            })
                        })]
                    })
                };
            var h = n(4670),
                u = n(7639),
                m = n(1075),
                g = n(3597),
                f = n(2197),
                Z = n(5992);
            let x = () => {
                    let t = (0, o.useRouter)();
                    return (0, i.tZ)(b, {
                        sx: {
                            background: "#000",
                            color: "#fff"
                        },
                        children: (0, i.BX)(u.Z, {
                            sx: {
                                borderTop: t.pathname === h._T ? "none" : "1px solid rgba(255,255,255,0.2)",
                                pt: {
                                    xs: 1,
                                    sm: "54px"
                                },
                                pb: {
                                    xs: "30px",
                                    sm: "54px"
                                }
                            },
                            children: [(0, i.BX)(m.ZP, {
                                container: !0,
                                spacing: 2,
                                children: [(0, i.tZ)(m.ZP, {
                                    item: !0,
                                    xs: 12,
                                    md: 4,
                                    children: (0, i.tZ)(g.Z, {
                                        sx: {
                                            mt: 4,
                                            display: "block"
                                        },
                                        children: (0, i.tZ)(a.J, {
                                            name: "logo",
                                            sx: t => ({
                                                width: 132,
                                                height: 32,
                                                [t.breakpoints.up("sm")]: {
                                                    width: 164,
                                                    height: 40
                                                }
                                            })
                                        })
                                    })
                                })]
                            }), (0, i.BX)(g.Z, {
                                sx: {
                                    mt: {
                                        xs: 3,
                                        md: 0
                                    }
                                },
                                children: [(0, i.tZ)(p, {
                                    direction: "row",
                                    sxElem: {
                                        backgroundColor: "#fff",
                                        color: "#000"
                                    },
                                    spacing: {
                                        xs: 1.5,
                                        sm: 2
                                    }
                                }), (0, i.tZ)(g.Z, {
                                    sx: {
                                        textTransform: "uppercase",
                                        mt: {
                                            xs: "38px",
                                            sm: 3
                                        },
                                        fontSize: "16px",
                                        color: "rgba(255, 255, 255, 0.7)"
                                    },
                                    children: "\xa9 Aperture Finance 2024"
                                })]
                            })]
                        })
                    })
                },
                b = (0, Z.ZP)(g.Z)(t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        ul: {
                            a: {
                                fontSize: "16px",
                                textTransform: "uppercase",
                                color: "rgba(255, 255, 255, 0.7)",
                                display: "block",
                                "&:hover": {
                                    color: "#fff"
                                }
                            },
                            li: {
                                margin: "23px 0 10px",
                                [e.breakpoints.up("sm")]: {
                                    margin: "28px 0 10px"
                                }
                            }
                        },
                        ".title p": {
                            fontWeight: 500,
                            textTransform: "uppercase",
                            color: "#fff",
                            letterSpacing: 0
                        }
                    }
                });
            var w = n(7729),
                C = n.n(w);
            let v = () => {
                let {
                    palette: t
                } = (0, s.Z)(), {
                    mode: e
                } = t;
                return (0, i.BX)(C(), {
                    children: [(0, i.tZ)("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon.ico"
                    }), (0, i.tZ)("title", {
                        children: "Aperture - Intent based automation"
                    }), (0, i.tZ)("meta", {
                        name: "theme-color",
                        content: "dark" === e ? "#121212" : "#fff"
                    })]
                })
            };
            var k = n(9097),
                y = n.n(k),
                H = n(3150),
                I = n(9990),
                P = n(1721);
            let V = t => {
                    let {
                        open: e,
                        onToggle: n,
                        colorInvert: r = !1
                    } = t, {
                        palette: o
                    } = (0, s.Z)(), {
                        mode: a
                    } = o;
                    return (0, i.BX)(g.Z, {
                        onClick: () => n(!e),
                        sx: [{
                            width: 40,
                            height: 40,
                            borderRadius: "10px",
                            position: "relative",
                            cursor: "pointer",
                            span: {
                                display: "block",
                                position: "absolute",
                                height: 2,
                                width: 12,
                                left: 14,
                                transform: "rotate(0deg)",
                                transition: ".25s ease-in-out",
                                transformOrigin: "left center",
                                ":nth-child(1)": {
                                    top: 16
                                },
                                ":nth-child(2)": {
                                    top: 22
                                }
                            }
                        }, !r && {
                            background: "#000",
                            span: {
                                background: "#fff"
                            }
                        }, r && {
                            background: "dark" === a ? "#000" : "#fff",
                            span: {
                                background: "dark" === a ? "#fff" : "#000"
                            }
                        }, e && {
                            "span:nth-child(1)": {
                                transform: "rotate(45deg)",
                                top: "14.5px",
                                left: "15.5px"
                            },
                            "span:nth-child(2)": {
                                transform: "rotate(-45deg)",
                                top: "23px",
                                left: "15.5px"
                            }
                        }],
                        children: [(0, i.tZ)("span", {}), (0, i.tZ)("span", {})]
                    })
                },
                A = t => {
                    let {
                        open: e,
                        onToggleMenu: n
                    } = t, c = (0, o.useRouter)(), {
                        palette: u
                    } = (0, s.Z)(), {
                        mode: m
                    } = u, {
                        toggleColorMode: g
                    } = (0, r.useContext)(H.ColorModeContext), Z = t => {
                        n(!1), c.push(t)
                    };
                    return (0, i.BX)(I.ZP, {
                        open: e,
                        onClose: () => n(!1),
                        anchor: "top",
                        ModalProps: {
                            keepMounted: !0
                        },
                        sx: t => ({
                            ".MuiPaper-root": {
                                width: "100%",
                                height: "100%",
                                background: t.palette.primary.main,
                                p: {
                                    xs: 3,
                                    sm: 5
                                }
                            }
                        }),
                        children: [(0, i.BX)(l.Z, {
                            direction: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 7,
                            children: [(0, i.tZ)(y(), {
                                href: h.s6,
                                id: "opacity-logo",
                                children: (0, i.tZ)(a.J, {
                                    sx: {
                                        width: 131,
                                        height: 32,
                                        color: "light" === m ? "#fff" : "#000"
                                    },
                                    name: "logo"
                                })
                            }), (0, i.BX)(l.Z, {
                                direction: "row",
                                alignItems: "center",
                                spacing: {
                                    xs: "20px",
                                    sm: 4
                                },
                                children: [(0, i.tZ)(d.Z, {
                                    size: "medium",
                                    onClick: g,
                                    sx: {
                                        ":hover": {
                                            background: "transparent"
                                        }
                                    },
                                    children: (0, i.tZ)(a.J, {
                                        sx: {
                                            width: 24,
                                            height: 24,
                                            color: "light" === m ? "#fff" : "#000"
                                        },
                                        name: "light" === m ? "dark-mode" : "light-mode"
                                    })
                                }), (0, i.tZ)(V, {
                                    open: e,
                                    onToggle: n,
                                    colorInvert: !0
                                })]
                            })]
                        }), (0, i.BX)(l.Z, {
                            component: "ul",
                            spacing: 4,
                            mb: "35px",
                            children: [(0, i.tZ)(f.Z, {
                                component: "li",
                                fontSize: 26,
                                fontFamily: "var(--font-inter)",
                                color: "light" === m ? "#fff" : "#000",
                                onClick: () => Z(h.s6),
                                children: "HOME"
                            }), (0, i.BX)(l.Z, {
                                component: "li",
                                direction: "row",
                                alignItems: "center",
                                spacing: 1.5,
                                children: [(0, i.tZ)(f.Z, {
                                    fontSize: 26,
                                    fontFamily: "var(--font-inter)",
                                    color: "#F9C13D",
                                    letterSpacing: 0,
                                    onClick: () => window.open("https://aperture-finance-dapp.vercel.app/"),
                                    children: "Launch App"
                                }), (0, i.tZ)(a.J, {
                                    sx: {
                                        width: 14,
                                        height: 14,
                                        ml: 1,
                                        color: "#F9C13D"
                                    },
                                    name: "arrow-up-right"
                                })]
                            })]
                        }), (0, i.tZ)(P.Z, {
                            orientation: "horizontal",
                            sx: {
                                borderColor: "light" === m ? "rgba(255,255,255,.3)" : "#000",
                                mb: 5
                            }
                        }), (0, i.tZ)(p, {
                            direction: "row",
                            size: "medium",
                            spacing: 3
                        })]
                    })
                };
            var S = n(4682),
                R = n(850);
            let T = () => {
                    let {
                        palette: t,
                        breakpoints: e
                    } = (0, s.Z)(), {
                        mode: n
                    } = t, o = (0, R.Z)(e.down("md")), [d, c] = (0, r.useState)(!1);
                    (0, r.useEffect)(() => {
                        S.ZP.timeline({
                            scrollTrigger: {
                                scrub: !0,
                                start: "200",
                                end: "300"
                            }
                        }).to("#opacity-logo", {
                            opacity: 0,
                            duration: .3
                        })
                    }, []);
                    let p = t => {
                        c(t)
                    };
                    return (0, i.BX)(l.Z, {
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: {
                            xs: 3,
                            sm: 5
                        },
                        sx: {
                            position: "fixed",
                            width: "100%",
                            zIndex: 99
                        },
                        children: [(0, i.tZ)(y(), {
                            href: h.s6,
                            id: "opacity-logo",
                            children: (0, i.tZ)(a.J, {
                                sx: {
                                    width: 131,
                                    height: 32,
                                    color: "light" === n ? "#000" : "#fff"
                                },
                                name: "logo"
                            })
                        }), o && (0, i.BX)(i.HY, {
                            children: [(0, i.tZ)(V, {
                                open: d,
                                onToggle: p
                            }), (0, i.tZ)(A, {
                                open: d,
                                onToggleMenu: p
                            })]
                        })]
                    })
                },
                M = () => {
                    let t = (0, o.useRouter)(),
                        {
                            toggleColorMode: e
                        } = (0, r.useContext)(H.ColorModeContext),
                        {
                            palette: n
                        } = (0, s.Z)(),
                        {
                            mode: d
                        } = n,
                        [c, p] = (0, r.useState)({}),
                        [u, m] = (0, r.useState)(0),
                        [g, f] = (0, r.useState)(!1),
                        Z = (0, r.useRef)(null),
                        x = (0, r.useRef)(null),
                        b = (0, r.useRef)(null);
                    (0, r.useEffect)(() => {
                        f(!0), C(), S.ZP.timeline({
                            scrollTrigger: {
                                scrub: !0,
                                start: "200",
                                end: "300"
                            },
                            onUpdate: C
                        }).to("#float-nav", {
                            width: 120,
                            opacity: 1,
                            duration: .3,
                            padding: 4
                        })
                    }, []);
                    let w = (t, e) => {
                            var n, i, r;
                            if (m(e), "string" == typeof (null === (n = t.target) || void 0 === n ? void 0 : n.className) && (null === (i = t.target) || void 0 === i ? void 0 : null === (r = i.className) || void 0 === r ? void 0 : r.includes("hover-nav"))) {
                                let e = t.target,
                                    n = e.getBoundingClientRect(),
                                    i = Z.current.getBoundingClientRect();
                                p({
                                    top: "".concat(n.top - i.top, "px"),
                                    left: "".concat(n.left - i.left, "px"),
                                    width: "".concat(n.width, "px")
                                })
                            }
                        },
                        C = function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (x.current && b.current && Z.current) {
                                m(e);
                                let n = x.current.getBoundingClientRect(),
                                    i = b.current.getBoundingClientRect(),
                                    r = Z.current.getBoundingClientRect(),
                                    o = null;
                                t.route === h._T ? (o = i, m(1)) : o = n, p({
                                    top: "".concat(o.top - r.top, "px"),
                                    left: "".concat(o.left - r.left, "px"),
                                    width: "".concat(o.width, "px")
                                })
                            }
                        },
                        v = () => {
                            3 === u ? e() : 1 === u ? t.push(h._T) : 0 === u ? t.push(h.s6) : 2 === u && window.open("https://aperture-finance-dapp.vercel.app/")
                        },
                        k = t => 2 === t ? u === t ? "dark" === d ? "#fff" : "#000" : "rgba(249, 193, 61, 1)" : u === t ? "dark" === d ? "#fff" : "#000" : "#fff";
                    return (0, i.BX)(B, {
                        direction: "row",
                        onMouseLeave: () => C(0),
                        children: [(0, i.tZ)(L, {
                            sx: {
                                width: 0,
                                overflow: "hidden",
                                opacity: 0,
                                p: 0
                            },
                            id: "float-nav",
                            children: (0, i.tZ)(y(), {
                                href: h.s6,
                                id: "float-logo",
                                children: (0, i.tZ)(a.J, {
                                    sx: {
                                        width: 100,
                                        height: 32
                                    },
                                    name: "logo"
                                })
                            })
                        }), (0, i.BX)(l.Z, {
                            direction: "row",
                            ref: Z,
                            sx: {
                                position: "relative"
                            },
                            children: [(0, i.tZ)(L, {
                                onMouseMove: t => w(t, 0),
                                ref: x,
                                className: "hover-nav",
                                onClick: v,
                                sx: {
                                    color: k(0)
                                },
                                children: "HOME"
                            }), (0, i.BX)(L, {
                                direction: "row",
                                alignItems: "center",
                                onMouseMove: t => w(t, 2),
                                sx: {
                                    color: k(2),
                                    pr: 2,
                                    pt: "12px"
                                },
                                className: "hover-nav",
                                onClick: v,
                                children: ["LAUNCH APP ", (0, i.tZ)(a.J, {
                                    sx: {
                                        width: 14,
                                        height: 14,
                                        ml: 1
                                    },
                                    name: "arrow-up-right"
                                })]
                            }), (0, i.tZ)(L, {
                                onMouseMove: t => w(t, 3),
                                className: "hover-nav",
                                onClick: v,
                                children: (0, i.tZ)(a.J, {
                                    sx: {
                                        width: 24,
                                        height: 24,
                                        top: "-2px",
                                        position: "relative",
                                        color: k(3)
                                    },
                                    name: "light" === d ? "dark-mode" : "light-mode"
                                })
                            }), g && (0, i.tZ)(z, {
                                style: c
                            })]
                        })]
                    })
                },
                B = (0, Z.ZP)(l.Z)(t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        position: "fixed",
                        bottom: "40px",
                        height: "64px",
                        borderRadius: "100px",
                        background: "light" === e.palette.mode ? "#000" : "rgba(44, 44, 44, 1)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        color: "#fff",
                        padding: "12px",
                        listStyle: "none",
                        zIndex: 99,
                        transition: ".3s",
                        [e.breakpoints.down("md")]: {
                            visibility: "hidden",
                            opacity: 0,
                            bottom: 0
                        }
                    }
                }),
                L = (0, Z.ZP)(l.Z)(() => ({
                    padding: "10px 20px",
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "var(--font-roboto)",
                    fontWeight: 500,
                    fontSize: "14px",
                    transition: "all .4s"
                })),
                z = (0, Z.ZP)("div")(t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        position: "absolute",
                        transition: "top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease",
                        height: "40px",
                        borderRadius: 100,
                        background: "light" === e.palette.mode ? "#fff" : "rgba(18, 18, 18, 1)",
                        zIndex: 0,
                        cursor: "pointer"
                    }
                }),
                F = t => {
                    let {
                        children: e
                    } = t, {
                        palette: n
                    } = (0, s.Z)(), {
                        mode: r
                    } = n;
                    return (0, i.BX)(i.HY, {
                        children: [(0, i.tZ)(v, {}), (0, i.tZ)(T, {}), (0, i.tZ)(p, {
                            sx: t => ({
                                position: "fixed",
                                zIndex: 99,
                                left: "40px",
                                bottom: "40px",
                                [t.breakpoints.down("md")]: {
                                    display: "none"
                                }
                            }),
                            sxElem: {
                                "&:hover": {
                                    backgroundColor: "dark" === r ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
                                    color: "dark" === r ? "#000" : "#fff"
                                }
                            }
                        }), (0, i.tZ)(M, {}), (0, i.tZ)("main", {
                            className: "wrapper",
                            children: e
                        }), (0, i.tZ)(x, {})]
                    })
                };
            var E = F
        }
    }
]);