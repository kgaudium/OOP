(self.webpackChunk_quizlet_web_index = self.webpackChunk_quizlet_web_index || []).push([
    ["assistant_write"], {
        "./node_modules/@mapbox/geojson-area/index.js": (e, t, s) => {
            var n = s("./node_modules/wgs84/index.js");

            function a(e) {
                var t = 0;
                if (e && e.length > 0) {
                    t += Math.abs(o(e[0]));
                    for (var s = 1; s < e.length; s++) t -= Math.abs(o(e[s]))
                }
                return t
            }

            function o(e) {
                var t, s, a, o, i, l, d = 0,
                    u = e.length;
                if (u > 2) {
                    for (l = 0; l < u; l++) l === u - 2 ? (a = u - 2, o = u - 1, i = 0) : l === u - 1 ? (a = u - 1, o = 0, i = 1) : (a = l, o = l + 1, i = l + 2), t = e[a], s = e[o], d += (r(e[i][0]) - r(t[0])) * Math.sin(r(s[1]));
                    d = d * n.RADIUS * n.RADIUS / 2
                }
                return d
            }

            function r(e) {
                return e * Math.PI / 180
            }
            e.exports.Q = function e(t) {
                var s, n = 0;
                switch (t.type) {
                    case "Polygon":
                        return a(t.coordinates);
                    case "MultiPolygon":
                        for (s = 0; s < t.coordinates.length; s++) n += a(t.coordinates[s]);
                        return n;
                    case "Point":
                    case "MultiPoint":
                    case "LineString":
                    case "MultiLineString":
                        return 0;
                    case "GeometryCollection":
                        for (s = 0; s < t.geometries.length; s++) n += e(t.geometries[s]);
                        return n
                }
            }
        },
        "./node_modules/@quizlet/dependency-injection-core/quizlet-shared-kotlin-dependency-injection-core.js": function(e, t, s) {
            var n, a, o;
            a = [t, s("./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js"), s("./node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js")], void 0 === (o = "function" == typeof(n = function(e, t, s) {
                "use strict";
                var n, a, o = t.$_$.j,
                    r = s.$_$.o4,
                    i = s.$_$.lb,
                    l = s.$_$.q1,
                    d = s.$_$.gb,
                    u = t.$_$.e,
                    c = s.$_$.w6,
                    p = s.$_$.fb;

                function m(e, t) {
                    if (null != e.w12_1) throw new o("A Koin Application has already been started");
                    e.w12_1 = t.uz_1
                }

                function g(e, t) {
                    var s, n = e.w12_1;
                    null == n ? s = null : (n.tz(t), s = r());
                    var a = s;
                    null == a && e.x12(h(t))
                }

                function h(e) {
                    return function(t) {
                        return t.d10(!0), t.xz(e), r()
                    }
                }

                function _() {
                    n = this, this.w12_1 = null
                }

                function S() {
                    return null == n && new _, n
                }

                function E() {
                    return a
                }
                return s.$_$.of, (0, s.$_$.hb)(_, "KmpKoinContext", p), d(_).lt = function() {
                    var e = this.w12_1;
                    if (null == e) throw l(i("KmpKoinContext is null: have you called KmpKoinContext.startKoin yet?"));
                    return e
                }, d(_).y12 = function() {
                    return this.w12_1
                }, d(_).x12 = function(e) {
                    var t = u().wz();
                    return m(this, t), t.d10(!0), e(t), t
                }, d(_).z12 = function(e) {
                    g(this, c(e()))
                }, d(_).a13 = function(e) {
                    g(this, c(e))
                }, d(_).b13 = function(e) {
                    g(this, e)
                }, a = "QUIZLET_API_BASE_URL_OVERRIDE", e.$_$ = e.$_$ || {}, e.$_$.a = E, e.$_$.b = S, e
            }) ? n.apply(t, a) : n) || (e.exports = o)
        },
        "./node_modules/@quizlet/experiment-manager/quizlet-shared-kotlin-experiment-manager.js": function(e, t, s) {
            var n, a, o;
            a = [t, s("./node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js"), s("./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js"), s("./node_modules/@quizlet/dependency-injection-core/quizlet-shared-kotlin-dependency-injection-core.js")], void 0 === (o = "function" == typeof(n = function(e, t, s, n) {
                "use strict";
                var a, o = t.$_$.gb,
                    r = t.$_$.ka,
                    i = t.$_$.of,
                    l = t.$_$.hb,
                    d = t.$_$.z9,
                    u = s.$_$.d,
                    c = s.$_$.b,
                    p = t.$_$.d6,
                    m = t.$_$.e,
                    g = s.$_$.g,
                    h = t.$_$.o4,
                    _ = s.$_$.l,
                    S = s.$_$.h,
                    E = s.$_$.q,
                    y = n.$_$.b,
                    f = t.$_$.fb,
                    j = t.$_$.ba;

                function T() {}

                function A(e) {
                    return new b(w(e))
                }

                function b(e) {
                    this.o2v_1 = e
                }

                function x(e) {
                    return function(t, s) {
                        return A(e)
                    }
                }

                function I(e) {
                    return function(t) {
                        var s, n = x(e),
                            a = u().n10_1,
                            o = c(),
                            r = p();
                        s = new g(a, m(T), null, n, o, r);
                        var i = new _(s);
                        return t.p11(i), t.h11_1 && t.s11(i), new S(t, i), h()
                    }
                }

                function v(e) {
                    return function() {
                        return E(i, I(e))
                    }
                }

                function C() {
                    a = this
                }

                function N() {
                    return null == a && new C, a
                }

                function w(e) {
                    return new O(e)
                }

                function O(e) {
                    this.r2v_1 = e
                }

                function M(e) {
                    j(e, "ExperimentManagerProvider", N)
                }
                return l(T, "ExperimentManager", r), l(b, "WrappedRawExperimentManager", d, i, [T]), l(C, "ExperimentManagerProvider", f), l(O, i, d), o(b).n2v = function(e) {
                    return e.q2v(this.o2v_1.p2v(e))
                }, o(C).setPlatformRawExperimentManager = function(e) {
                    y().z12(v(e))
                }, o(O).p2v = function(e) {
                    return this.r2v_1.enrollAndGetVariantName(e.s2v())
                }, M(e), e.$jsExportAll$ = M, e.$_$ = e.$_$ || {}, e.$_$.a = T, e.$_$.b = N, e
            }) ? n.apply(t, a) : n) || (e.exports = o)
        },
        "./node_modules/@quizlet/persistence/quizlet-shared-kotlin-persistence.js": function(e, t, s) {
            var n, a, o;
            a = [t, s("./node_modules/@quizlet/kotlin-stdlib/kotlin-kotlin-stdlib-js-ir.js"), s("./node_modules/@quizlet/koin-core/core-koin-core-js-ir.js"), s("./node_modules/@quizlet/quizlet-api-models/quizlet-shared-kotlin-quizlet-api-models.js")], void 0 === (o = "function" == typeof(n = function(e, t, s, n) {
                "use strict";
                var a, o, r, i = t.$_$.o4,
                    l = t.$_$.of,
                    d = s.$_$.q,
                    u = t.$_$.ka,
                    c = t.$_$.hb,
                    p = t.$_$.gb,
                    m = t.$_$.le,
                    g = n.$_$.e1,
                    h = t.$_$.w4,
                    _ = t.$_$.ta,
                    S = t.$_$.fb,
                    E = s.$_$.d,
                    y = s.$_$.b,
                    f = t.$_$.d6,
                    j = t.$_$.e,
                    T = s.$_$.g,
                    A = s.$_$.l,
                    b = s.$_$.h,
                    x = s.$_$.p;

                function I() {
                    return C(), a
                }

                function v(e) {
                    return C(), e.o11([M()]), i()
                }

                function C() {
                    o || (o = !0, a = d(l, v))
                }

                function N() {}

                function w() {
                    r = this
                }

                function O() {
                    return null == r && new w, r
                }

                function M() {
                    return d(l, D)
                }

                function D(e) {
                    var t, s, n = L,
                        a = E().n10_1,
                        o = y(),
                        r = f();
                    s = new T(a, j(w), null, n, o, r);
                    var l = new A(s);
                    return e.p11(l), e.h11_1 && e.s11(l), t = new b(e, l), x(t, j(N)), i()
                }

                function L(e, t) {
                    return O()
                }
                return c(N, "StudiableMetadataPersistenceStore", u, l, l, l, l, [1, 2]), c(w, "NoOpStudiableMetadataPersistenceStore", S, l, [N], l, l, [1, 2]), p(w).u2q = function(e, t) {
                    return null
                }, p(w).v2q = function(e, t) {
                    return this.u2q(e instanceof g ? e : m(), t)
                }, p(w).w2q = function(e, t, s) {
                    return t
                }, p(w).x2q = function(e, t, s) {
                    var n = e instanceof g ? e : m();
                    return this.w2q(n, null != t && _(t, h) ? t : m(), s)
                }, e.$_$ = e.$_$ || {}, e.$_$.a = I, e.$_$.b = N, e
            }) ? n.apply(t, a) : n) || (e.exports = o)
        },
        "./node_modules/abort-controller/browser.js": e => {
            "use strict";
            const {
                AbortController: t,
                AbortSignal: s
            } = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0;
            e.exports = t, e.exports.AbortSignal = s, e.exports.default = t
        },
        "./app/j/ads/AdsHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                vx: () => w,
                LN: () => h,
                TL: () => _,
                tI: () => l,
                aV: () => d,
                e9: () => u,
                ZP: () => j,
                bN: () => S,
                Lg: () => c,
                Mk: () => p,
                EQ: () => y,
                RK: () => C,
                Rk: () => E,
                Yh: () => b,
                Ck: () => x,
                G2: () => I,
                OE: () => v,
                t_: () => N,
                dF: () => m,
                iS: () => i
            });
            s("./node_modules/core-js/modules/es.array.includes.js"), s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/core-js/modules/es.array.sort.js");
            const n = JSON.parse('{"14713723":"Google","15486883":"AdCouncil","237153163":"Quizlet","256704883":"ValueClick","351199483":"Advertising.com","574667923":"IAC","5156921270":"1trn","5153912340":"4Info","5157310290":"8proof","5156922461":"AGrant","4895097256":"AI Media Group","5157277647":"Aarki","5157574285":"Active Agent","5156923394":"Acuity Ads","5157524098":"Ad Generation","5157285753":"Ad2iction","5157286212":"Ad360","5157563653":"Ad4mat","5156924822":"AdChina","5157260085":"AdElement","5157276642":"AdFalcon","5157287256":"AdGear","5157580075":"AdHood","5156925047":"AdKernel","5156925539":"AdMaxim","5156949488":"AdNear","5156936804":"AdPilot","5157581251":"AdPlay","5156927669":"AdRiver","5157260124":"AdSniper","5157302568":"AdTarget","5157579496":"AdTheorent","5157534163":"AdXcel","5156911421":"Adblade","5156953664":"Addictive Mobility","5156926319":"Adello","5157288666":"Adelphic","5156917649":"Adform","5157295413":"Admatrix","5157285519":"Admicro","5156926784":"Admixer","5157531307":"Adnetic","4932394745":"Adobe","5156919005":"Adobe","5156927882":"Adot","5156919812":"Adroll.com","5157529354":"Adspend","5157532273":"Adtelligent","5157532705":"Advenue","4557079433":"AerServ","5157290325":"Affle","4851858228":"Agora","5297466672":"AllCampus","5157278082":"Amazon","4617621758":"Amazon/A9","5231893330":"American Student Association","5156913272":"Amobee","5156928230":"AntVoice","5156928659":"AppGrowth","4722692552":"AppNexus","5157533269":"Appier","5224136545":"Apple","4877017358":"Appnexus_ASC","5157533512":"Appreciate","5157292224":"Arbigo","5157292551":"Arpeely","5156930045":"Art of Click","4876877708":"Ascendeum\'s Test Advertiser","5157303825":"Ask Locala","5157292023":"Astromotion","5156930774":"AudienceFuel","5157534907":"Audiencevalue","5157293244":"Auditorius ","5157293733":"Axonix","5169692826":"Barbizon","4863967377":"Barnes & Noble","5156947118":"Beeline","5157283815":"Beeswax.io","5046026066":"Best Buy","5338880071":"BetterHelp Inc.","5157535912":"BidMotion","5156943275":"BiddingX","5156931809":"Bidease","5156932283":"Bidtellect","5157293001":"Bidtheatre","5157538072":"Bigabid","5157294384":"Blis","5190746836":"Blockthrough","5157538504":"Blue","4935315778":"Bose","5156933219":"Boston Consulting Group","5157288159":"Bridgewell","4844164007":"Brightcom","5279853787":"British Army","5157539416":"Bucksense","5156934131":"Buzzoola","5157294906":"C1X","5157561988":"C8 Network","5346699004":"CA Department of Health","5348705675":"CA Dept of Public Health","5216489183":"Capital One Financial","5203549606":"Capital One Shopping","5157539509":"CapitalData","4855813606":"Carambola","4475883738":"Carat Redefining Media","4818995422":"CashApp","5156934881":"Cauly","5336791402":"Celsius","4700425364":"Cengage","5153912316":"Centro","5156935346":"Chalk Digital","5156914301":"Chartboost","5157295827":"Cheetah Mobile","4689983036":"Chegg","5157296322":"Cinarra","4688059370":"Circa Interactive","5157541102":"ClickCertain","5157296622":"Clickagy","5157297243":"Clickkwala Media","5156921750":"Clickonometrics","5157537115":"Cognitiv","5157297780":"Cogo Labs","5199073826":"College Board","5158684983":"College of Charleston","5162814842":"College of DuPage","5156948102":"Compulse","4937245347":"Connatix","5157541399":"ConvertMedia","5157541648":"Crimtan","5157275709":"Criteo","5296034791":"Crosby Marketing Communications","5157542110":"CrossInstall","5186761356":"Cuyahoga","5156937737":"CyberAgent","5157542557":"Cyberplex","5157339507":"DHgate","5157298473":"DU Ad Platform","5157298767":"Dable","5157571816":"DataMind","5157283365":"DataXu","5157299250":"Dataseat","5156938793":"DeepIntent","5156917094":"Delta Projects","5335693592":"Department for Education","5157324237":"Deqwas","4725720479":"Deserve","5157299661":"Dianping","5157543526":"Digital Hub Hannover","4951864029":"Discover","5156936117":"Discover-Tech","5263217477":"Disney","4884261047":"DistrictmDMX_ASC","4884172275":"Districtm_ASC","4636140425":"Division D","4725726851":"Do Something","5157525295":"DoMob","5157540205":"Dochase","4992966956":"Duolingo","4860254862":"Duration Media","5157338625":"DynAd","5156938016":"DynAdmic","5157544249":"E-Contenta","5047955400":"EAB","5170244384":"EMX","5207155331":"East Tennessee State University","5325265629":"Education Affiliates (EA)","5156939987":"Emar","5157301665":"Emerse","5157543067":"Emodo","5156954129":"Enliple","5157300909":"EnvisionX","5156940893":"Epom","5156941388":"Epsilon","5156922938":"Eskimi","5157545887":"Essens","5157546214":"Exebid","4869158042":"Explore HQ","5157303012":"Exponential","5157303486":"Exposebox","4835480096":"Facebook","5156955068":"Fancy Digital","5156942135":"Fiksu","5156940605":"Flywheel","4958613567":"Food and Drug Administration","5157305001":"Fractional Media","5156941853":"FreakOut","4810351134":"Fyber","5157304455":"GMO AD Marketing","5157305220":"GO.PL","5349370008":"General Assembly","5157548536":"GetIntent","5157549046":"Go Mobile","5157306462":"Go2mobi","5157549358":"Goldfish Media","4626241581":"Google AdSense","4867155012":"Grammarly","5157305688":"GroovinAds","5156942783":"Groundhog","4718182788":"Grubhub","5292429824":"H&L Partners","5292512818":"H&L Partners","4740943415":"HP","5156943776":"HQ Professional Services","5281644467":"HUM Nutrition","5169334242":"Harper Collins UK","4629833166":"Headspace","5157308283":"HockeyCurve","5282724671":"Hoopla Digital","4640807164":"Hopper","5157549760":"Housing.com","5157562792":"Hybrid","5157550234":"IGAWorks","5157550504":"IQM","4875297484":"IXL","5156944244":"IgnitionOne","5157526465":"Improve Digital","5176197489":"InMarket","5157269022":"InMobi","4665201045":"Index Exchange","4878037081":"IndexExchange_ASC","4977753265":"Innovid","5157309786":"Inspiritum","5157551494":"Integral Marketing","5156945015":"Intent.ai","5266641721":"Intuit","5091262957":"Invesco","5157309075":"Iponweb","5157310719":"Jampp","5157532003":"KPI Solutions","5157552139":"Kadam","4561633607":"Kaplan","5157552475":"Kavanga","5157311694":"Kayzen","5157312141":"Kika Tech","4716299718":"Kiley\'s Testing","5157311205":"Kiosked","5157313116":"Knorex","5157553114":"Kubient","5156945987":"Kwanza","5273064850":"LEVI STRAUSS and COMPANY","5116124097":"Lemonade","5045564284":"Lenovo","5156911868":"LifeStreet Media","5156915672":"Liftoff","5156946623":"Line","5157495019":"LinkedIn RTB","5157277182":"LiquidM","5156947586":"Lively Impact","4696616760":"Livenation","5157314067":"Localsensor","4847729018":"Lockerdome","5156932715":"Logicad","5157314559":"LoopMe","5156967101":"LotLinx","4973005909":"M&C Saatchi Performance","5233572203":"MCGRAW HILL","5157314865":"MGID","5316105494":"MUBI","5123840630":"Magnite","5157315723":"MainAd","4981962894":"Massachusetts DHCD","5157555979":"MaxPoint Interactive","5241993347":"McDonald\'s HACER","4936867625":"McDonalds","4943158797":"McGraw-Hill","5157316557":"Meazy","5157556261":"Media Force","5156919314":"MediaMath","5084866985":"MediaMint","5157556753":"MediaPal","4696616580":"Mediamath","5157554053":"Mediasmart","5157554596":"Melvad","5157317265":"MetUp","5157556963":"Meteora","5157276204":"MicroAd","5062643954":"Minute Media","5156950694":"MobPro","5157318198":"Mobitrans","5157554134":"Mobsuccess","5156951186":"Mobvista","5157281190":"Moloco Ads","5156948537":"MyTarget","5164019403":"NOVA (Northern Virginia Community College)","5225396381":"NYC HH","5157318600":"Native Ads","5157557899":"Native Touch","4979078062":"Navy","5156961518":"Near","5157555343":"Neo Career","5156951759":"Net Info","5277002363":"Net Natives","5277006371":"NetNatives","5157558130":"NetSuccess","4892674229":"NexGenT","4877517083":"Nobid_ASC","5157566560":"Noddus","5156951519":"Nurofy","5157558616":"Nuviad","5157320136":"OMNIscienta","5156952845":"OTM Worldwide","5201226371":"Old Dominion University","5157321054":"OneDash","5157321501":"OneDigitalAd","5156918078":"OneTag","4461227218":"OpenX","4607648585":"OpenX Network","4877461320":"Openx_ASC","5157319404":"Opt Out Advertising","5157527944":"Outbrain","4907650708":"Outschool","5157559198":"OwnerIQ","4740943379":"PHD U.S.","5286111796":"POPEYE LOUISIANA KIT(PLK)","5157535561":"PageChoice","4947736546":"Panasonic","5130316456":"Panera","5157580993":"Pangle","5157557452":"PayPerSale","5267909969":"PennWest","5209557019":"Perlego","5157559807":"Permodo","5157322230":"Persona.ly","5157560569":"Pi-rate","5157561040":"PocketMath","5156955500":"PowerLinks","5351227841":"Prebid","5196544211":"Preply","5309378086":"Primis","5157561508":"ProData Media","4858181186":"Programmatic Preferred PMP","4817388876":"PubMatic","5006259355":"PubMatic SDK Yld grp Test Network","4623761902":"Pubmatic Web","4877650514":"Pubmatic_ASC","5157274740":"PulsePoint","5157282183":"Quantcast","5156955974":"Quiet Media","5343614779":"Quizlet House Ads Campaigns","4936722195":"Quizlet RevOps","5157555025":"Qvant","5156916170":"RTB House","5157560062":"RTBiQ","5157544726":"RTBlab","5157322551":"Reactive","5157563191":"Read Peak","5157337812":"Recruit","5349828156":"Red Bull","4475882862":"Red Bull North America","5157323028":"Remerge","5157323649":"Ritorno","5223848295":"RocketBlocks","5156957498":"Rontar","5157564442":"RuTarget","5001742496":"SMART","5300764453":"STABILO","5157565174":"SUNT Content","5157338136":"Sape","5157565423":"ScaleMonk","5157325353":"ShareThis","5128471321":"Sharethrough","5130313423":"Sharethrough OB","5157565900":"Sift Media","5157282900":"Simpli.fi","4733500276":"Sling International","5156958362":"Smadex","5157324690":"Smart Bid","4915282024":"Smartadserver_ASC","5156956532":"Smartstream","5156968022":"SmartyAds","5156918564":"Snap","4951832580":"SoFi","5157567001":"SoLocal Group","5010974827":"Sovrn","4623978195":"Sovrn Network","4878301396":"Sovrn_ASC","5157326541":"Spicy Mobile","5157567358":"Splicky","5157327291":"Spotad","4786630719":"Springboard","4913205289":"Squarespace","5157567838":"StackAdapt","5163845899":"Starface","5157325914":"StartApp","5157568705":"Storygize","5157569011":"Stream","5341644440":"Subs BTS","5156960399":"SundaySky","5157327585":"Supership","4800238783":"Surgent","5324986258":"TPMN","5157570427":"TabMo","5157328704":"Taobao","5156960309":"Tapklik","5156961014":"Taptap","4808882554":"Teads","5157571342":"Telecoming","5156962202":"TenMax","4687978553":"Test","5156916608":"The Trade Desk","5157301383":"Think RealTime","4933717192":"Top Hat","5156961587":"Touch Ads","5157289110":"Trademob","5157329991":"Trafmag","5156959130":"Travel Audience","5156962685":"Travel Data Collective","4877710205":"Triplelift_ASC","5157330375":"TrueWave","5124595403":"Truth","5157300438":"Twiago","4692580508":"USF","5156963249":"Ubex","5157331341":"Ubimo","4877557591":"Udemy","5157330885":"Unicorn","5157572773":"Unister","5157572851":"United","4997774845":"United States Marines Corps","5157279054":"UnityAds","4615235894":"University of San Francisco","5222037809":"Urban Outfitters","5157332373":"Usemax","5157573805":"VIP","5157332331":"VRTCAL","5157333003":"Vectuary","4951675821":"Verizon","4715291434":"Verizon Media","4902200854":"Verizon Media - App & Display","4901491430":"Verizon Media - Video","4876896381":"Verizon_ASC","5157333525":"Vertoz","5157526975":"Verve Group","5157524851":"Videology","5157334002":"Vidstart","5211397895":"VoteAmerica","5156913995":"Vpon","5156963924":"Vuble","5157574987":"WaardeX","5157575446":"WapStart","4978234283":"Wave Maker","4979083636":"WaveMaker","4979084041":"WaveMaker","5157575941":"Wavenet","5157334758":"Way2traffic","5157576631":"Web IT","5157335460":"Webmoblink","4676354136":"West7Media","5156964617":"Whisla","5019709565":"WhiteHat Education","5157576919":"Wider Planet","5156965169":"WiseMedia","5157577804":"Wish","4914216234":"Wunderkind","5156912828":"Xandr","5156966135":"YSO Corp","5156965823":"Yabbi","5157578302":"Yandex","4877484904":"YieldBird","5157335958":"YouAppi","5157336624":"Zamplus","5157578869":"Zapr","5157337098":"Zeta Global","5156922149":"Zhiziyun","5157279534":"Zucks","5157274254":"engage:BDR","5309239817":"ex.co","5157525784":"i-mobile","5156934428":"iClick","5156929112":"iPinYou","5047901979":"media.net","5156920784":"smartology","5157307101":"xAd"}');
            s("./app/j/ads/enums/AdsNames.ts");
            var a = s("./app/j/ads/types.ts"),
                o = s("./app/j/utils/log-pageload-events.ts"),
                r = s("./app/j/utils/tamperProofNow.ts");

            function i(e) {
                return !1
            }

            function l(e) {
                return "dfp-" + e
            }

            function d(e) {
                return e + "-heading"
            }

            function u(e) {
                return e.includes("dfp-") ? e.split("dfp-")[1] : e.startsWith("div-gpt-ad-") ? e.split("div-gpt-ad-")[1] : e
            }

            function c(e) {
                return n[e]
            }

            function p(e, t) {
                var s, n;
                void 0 === t && (t = !0);
                const a = null == (s = window) || null == (s = s.PWT) ? void 0 : s.bidMap;
                if (!a || !(e in a)) return [];
                const o = a[e],
                    r = Object.values(null != (n = o.adapters) ? n : []).reduce(((e, t) => Object.assign(e, t.bids)), {}),
                    i = Object.values(r);
                return t && i.sort(((e, t) => t.netEcpm - e.netEcpm)), i
            }
            const m = e => "none" === e.style.display || 0 === e.clientHeight,
                g = e => {
                    const t = document.getElementsByTagName("script")[0];
                    null != t && t.parentNode && t.parentNode.insertBefore(e, t)
                },
                h = e => {
                    const t = document.createElement("script");
                    t.src = e;
                    const s = document.createElement("link");
                    s.as = "script", s.href = e, s.importance = "high", s.rel = "preload", g(s), g(t)
                },
                _ = e => {
                    const t = document.createElement("script");
                    t.src = e, t.defer = !0, t.async = !0, document.head.append(t)
                },
                S = e => e <= 0 ? null : e <= 1 ? "1" : e <= 2 ? "2" : e <= 3 ? "3" : null,
                E = (e, t) => {
                    const s = 60 * t;
                    return ((0, r.Z)() - e) / 1e3 >= s
                },
                y = () => {
                    var e, t, s, n;
                    const a = (null == (e = window) ? void 0 : e.innerHeight) || (null == (t = window) || null == (t = t.document) || null == (t = t.documentElement) ? void 0 : t.clientHeight) || 0;
                    return [(null == (s = window) ? void 0 : s.innerWidth) || (null == (n = window) || null == (n = n.document) || null == (n = n.documentElement) ? void 0 : n.clientWidth) || 0, a]
                },
                f = e => (t, s) => {
                    e("ad_event_timing", null, {
                        timingData: {
                            eventName: t,
                            duration: s
                        }
                    })
                };

            function j(e, t, s, n) {
                void 0 === n && (n = f(e));
                const a = (0, r.Z)();
                return () => n(t, (0, r.Z)() - a, s)
            }

            function T(e) {
                var t;
                null == (t = window) || null == (t = t.performance) || null == t.mark || t.mark(e)
            }

            function A(e, t, s) {
                var n;
                null == (n = window) || null == (n = n.performance) || null == n.measure || n.measure(e, t, s)
            }

            function b() {
                T(o.qc.AD_CONSTRUCTOR_RAN)
            }

            function x() {
                T(o.qc.AD_INIT_RAN), A(o.GD.AD_CONSTRUCTOR_TO_INIT_TIME, o.qc.AD_CONSTRUCTOR_RAN, o.qc.AD_INIT_RAN)
            }

            function I() {
                T(o.qc.SET_RECTANGLE_AD_RENDERED), A(o.GD.AD_REQUEST_TO_SET_RECT_RENDER_TIME, o.qc.AD_INIT_RAN, o.qc.SET_RECTANGLE_AD_RENDERED)
            }

            function v() {
                T(o.qc.FIRST_AD_RENDERED), A(o.GD.AD_FIRST_RENDER_TIME, o.qc.AD_INIT_RAN, o.qc.FIRST_AD_RENDERED)
            }
            const C = (e, t, s) => {
                    let n = (e[t] || []).length;
                    return s === a.HS.PreAuction && n++, Math.max(n, 1)
                },
                N = e => (Object.keys(e).forEach((t => (null === e[t] || void 0 === e[t]) && delete e[t])), e),
                w = e => null !== e && (null == e ? void 0 : e.numTotalItems) - (null == e ? void 0 : e.numItemsCompleted)
        },
        "./app/j/ads/components/ActionBasedAutoRefreshAd.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/ads/compatibility/useQAdManager.ts"),
                a = s("./app/j/ads/components/Ad.tsx"),
                o = s("./app/j/ads/constants/adConstants.ts"),
                r = s("./app/j/ads/enums/RefreshReason.ts"),
                i = s("./node_modules/react/index.js"),
                l = s("./app/j/utils/isAdBlockerEnabled.ts"),
                d = s("./app/j/utils/tamperProofNow.ts"),
                u = s("./node_modules/react/jsx-runtime.js");
            const c = function(e) {
                let {
                    headingAlignment: t = "block",
                    id: s,
                    lastActionTimestamp: c = 0,
                    maxRefreshCount: p,
                    minActionsForRefresh: m = 1,
                    refreshInterval: g = o.If
                } = e;
                const h = (0, n.Z)(),
                    [_, S] = (0, i.useState)(!(null != h && h.config.areAdsDisabled)),
                    E = (0, i.useRef)(-1);
                (0, i.useEffect)((() => {
                    E.current += 1
                }), [c]);
                const [y, f] = (0, i.useState)((0, d.Z)()), [j, T] = (0, i.useState)(0), A = (0, i.useCallback)((() => {
                    h && (E.current = 0, f((0, d.Z)()), T(j + 1), (0, l.ZP)() || h.enqueueAdsForRefresh([s], r.q.ACTION_REFRESH))
                }), [h, j, s]), b = (0, i.useCallback)((e => {
                    E.current >= m && e - y >= 1e3 * g && A()
                }), [y, A, m, g]);
                (0, i.useEffect)((() => {
                    !_ || (0, l.ZP)() || p && j >= p || b(c)
                }), [c, g, _, j, p, b]);
                const x = (0, i.useCallback)((() => {
                        if ((0, l.ZP)()) return;
                        if (!h) return;
                        const e = h.isShowing(s);
                        e && f((0, d.Z)()), S(e)
                    }), [h, s]),
                    I = (0, i.useCallback)((() => {
                        if ((0, l.ZP)()) return;
                        if (!h) return;
                        const e = h.isShowing(s);
                        S(e)
                    }), [h, s]);
                return (0, u.jsx)(a.Z, {
                    headingAlignment: t,
                    id: s,
                    onDisplayCallback: x,
                    onEmptyAdCallback: I
                })
            }
        },
        "./app/j/ads/components/Ad.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => U
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/@linaria/react/lib/index.js"),
                o = s("./app/j/ads/AdsHelper.ts"),
                r = s("./app/j/ads/compatibility/useQAdManager.ts"),
                i = s("./app/j/assembly/AssemblyLink.tsx"),
                l = s("./node_modules/classnames/index.js"),
                d = s.n(l),
                u = s("./app/j/compatibility/logger/useLogger.ts"),
                c = s("./app/j/config/enums.ts"),
                p = s("./app/j/i18n/useTranslation.ts"),
                m = s("./node_modules/react/jsx-runtime.js");
            const g = e => {
                let {
                    annualPrice: t,
                    containerId: s,
                    headingAlignment: n
                } = e;
                const {
                    logSubscriptionEvent: a
                } = (0, u.wL)(), {
                    t: o
                } = (0, p.ZP)(), r = d()("AdHeading", {
                    "AdHeading--block": "block" === n,
                    "AdHeading--inline": "inline" === n,
                    "AdHeading--rightAlign": "rightAlign" === n,
                    "AdHeading--centerAlign": "centerAlign" === n
                });
                return (0, m.jsxs)("div", {
                    className: r,
                    id: s,
                    children: [(0, m.jsx)("div", {
                        className: "AdHeading-removeLink",
                        children: (0, m.jsx)(i.ZP, {
                            onClick: () => {
                                a({
                                    action: c.Mpk.CLICK,
                                    fullActionName: "upgrade_remove_ads_clicked"
                                }), window.open("/upgrade?source=go_remove_ads", "_blank")
                            },
                            size: "xsmall",
                            text: o("advertisements.remove_ads_link"),
                            variant: i.U_.Secondary
                        })
                    }), (0, m.jsx)("div", {
                        className: "AdHeading-upgradePrice",
                        children: o("advertisements.upgrade_price", {
                            annualPrice: t
                        })
                    })]
                })
            };
            s("./.linaria-cache/app/j/ads/components/AdHeading.linaria.css");
            var h = s("./app/j/ads/enums/AdsTypes.ts"),
                _ = s("./node_modules/polished/dist/polished.cjs.js");
            (0, _.hO)(160), (0, _.hO)(300), (0, _.hO)(728), (0, _.hO)(468), (0, _.hO)(320);
            const S = "an3u1mz",
                E = "c1sftxg5",
                y = {
                    AdInFlashcardAd: "c1mcxzuw",
                    ClassDashboardEmbedded01: S,
                    ClassDashboardEmbedded02: S,
                    ClassDashboardSidebar: E,
                    CreateSetHeader: "c17rhi9m",
                    disabled: "c1xj2a2z",
                    FlashcardsNative: "c1ltn9pe",
                    FolderSidebar: E,
                    HomepageSidebar: E,
                    ProfileSidebar: E,
                    SearchPageFooter: "c1r21e1s",
                    SetPageEmbeddedVideoAd: "c134r5k8",
                    SetPageFlashcardNative: "cgchb4d",
                    SetPageFooter: "cn6vrzj",
                    SpellMWebFooterFlexi: "cwu34xg",
                    TestMWeb: S,
                    WriteMWeb: S
                },
                f = {
                    [h.D.BANNER]: "cwmffqe",
                    [h.D.NATIVE]: "cm8bzuc",
                    [h.D.SIDEBAR]: "cjjerek"
                },
                j = {
                    centerAlign: "cvmidb1",
                    rightAlign: "cgsgtle"
                };
            s("./.linaria-cache/app/j/ads/components/styles/AdTypeStyle.linaria.css");
            var T = s("./app/j/ads_core/utils/logToConsole.ts"),
                A = s("./app/j/context/UserContext.ts"),
                b = s("./app/j/global/Rollbar.ts"),
                x = s("./node_modules/react/index.js");
            const I = e => e && !e.isAdmin && (e.type === c.XsQ.PLUS || (null == e ? void 0 : e.type) === c.XsQ.TEACHER || (null == e ? void 0 : e.type) === c.XsQ.GO);
            var v = s("./app/j/ads/utils/AdEventEmitter.ts"),
                C = s("./app/j/components/T.tsx"),
                N = s("./app/j/context/SubscriptionsContext.tsx"),
                w = s("./app/j/utils/ScrollHelper.ts"),
                O = s("./app/j/utils/isAdBlockerEnabled.ts");
            const M = (0, a.z)("div")({
                    name: "AdWrapper",
                    class: "a1g86l20"
                }),
                D = (0, a.z)("div")({
                    name: "AdContainer",
                    class: "agk2jqb"
                }),
                L = (0, a.z)("div")({
                    name: "AdAttribution",
                    class: "a1ismu4o"
                }),
                P = e => {
                    let {
                        id: t,
                        clearAdViewable: s,
                        displayOnFirstScroll: n,
                        onAdViewableCallback: a,
                        onDisplayCallback: o,
                        onEmptyAdCallback: i,
                        onNativeAd: l,
                        onWinningEvent: d
                    } = e;
                    const [u, c] = (0, x.useState)(!1), [p, m] = (0, x.useState)(""), g = (0, r.Z)(), _ = (e, t) => {
                        (0, T.Xq)(e, "Ad", t)
                    };
                    return function() {
                        const e = (0, r.Z)(),
                            t = (0, x.useContext)(A.Z);
                        (0, x.useEffect)((() => {
                            var s;
                            const n = null == t ? void 0 : t.id;
                            null == e || null == (s = e._adEventLogger) || s.addOnAdRequestedCallback((e => {
                                n === (null == t ? void 0 : t.id) && I(t) && b.Z.error(new Error("Premium users should not have ads requested"), e, {
                                    adLogs: (0, T.co)(1e3, ["Flooring"])
                                })
                            })), I(t) && b.Z.warn(new Error("Premium users should not have ads components mounted"), {
                                adLogs: (0, T.co)(1e3, ["Flooring"])
                            })
                        }), [t])
                    }(), (0, x.useEffect)((() => {
                        if ((0, O.ZP)() || void 0 === g) return;
                        const e = g.getAdType(t) || "";
                        return i && g.registerOnEmptyAdCallback(t, (() => i(t))), o && g.registerEventCallback(t, v.T.AdLoaded, o), a && g.registerEventCallback(t, v.T.AdIsViewable, a), _("Ad component has mounted", {
                            id: t,
                            displayOnFirstScroll: n
                        }), n ? (async () => {
                            await w.Z.onFirstScroll(), g.displayAd(t)
                        })() : g.displayAd(t), e === h.D.NATIVE && l && g.registerOnNativeAdCallback(t, l), d && g.registerOnWinningEvent(t, d), m(e), c(g.getShowAdHeading(t)), () => {
                            (0, O.ZP)() || (i && g.clearOnEmptyAdCallback(t), d && g.clearOnWinningEventCallback(t), null == s || s(), g.destroySlot(t), _("Ad component has unmounted", {
                                id: t
                            }))
                        }
                    }), [g, t]), [p, u]
                },
                R = (e, t) => {
                    let {
                        clearAdViewable: s,
                        displayOnFirstScroll: a,
                        headingAlignment: r,
                        id: i,
                        hideAdTimeout: l = 0,
                        onAdViewableCallback: d,
                        onDisplayCallback: u,
                        onEmptyAdCallback: c,
                        onNativeAd: p,
                        showAdAttribution: h
                    } = e;
                    const _ = (0, x.useContext)(N.Z),
                        [S, E] = P({
                            id: i,
                            clearAdViewable: s,
                            displayOnFirstScroll: a,
                            onAdViewableCallback: d,
                            onDisplayCallback: u,
                            onEmptyAdCallback: c,
                            onNativeAd: p
                        }),
                        T = (0, n.cx)("SiteAd", r && j[r], S && f[S], y[i]),
                        A = ((e, t, s) => {
                            const n = (0, x.useRef)(void 0);
                            return (0, x.useCallback)((a => {
                                clearTimeout(n.current), n.current = window.setTimeout((() => {
                                    (0, o.dF)(a) && (null == s || s(e))
                                }), t)
                            }), [])
                        })(i, l, c),
                        b = (0, o.tI)(i);
                    return (0, m.jsxs)(M, {
                        className: T,
                        ref: e => {
                            c && l > 0 && e && A(e)
                        },
                        children: [h ? (0, m.jsx)(L, {
                            children: (0, m.jsx)(C.Z, {
                                id: "advertisements.ad_attribution"
                            })
                        }) : null, (0, o.iS)(i) ? (0, m.jsx)(D, {
                            className: "SiteAd-adContainer",
                            id: b
                        }, "adContainer") : (0, m.jsx)(D, {
                            className: "SiteAd-adContainer",
                            id: b,
                            ref: t
                        }, "adContainer"), E ? (0, m.jsx)(g, {
                            annualPrice: (null == _ ? void 0 : _.upsellPrice) || "",
                            containerId: (0, o.aV)(b),
                            headingAlignment: r
                        }) : null]
                    })
                },
                k = x.forwardRef(R);
            k.displayName = "Ad";
            const U = k;
            s("./.linaria-cache/app/j/ads/components/Ad.linaria.css")
        },
        "./app/j/ads/components/studyModes/AdModal.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => b
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/ads/components/Ad.tsx"),
                o = s("./app/j/ads/components/studyModes/ContinueButton.tsx"),
                r = s("./app/j/ads/enums/AdsNames.ts"),
                i = s("./app/j/ads/utils/isVideoAd.ts"),
                l = s("./app/j/assembly/buttons/index.ts"),
                d = s("./node_modules/classnames/index.js"),
                u = s.n(d),
                c = s("./app/j/components/T.tsx"),
                p = s("./app/j/i18n/useTranslation.ts"),
                m = s("./node_modules/polished/dist/polished.cjs.js"),
                g = s("./node_modules/react/index.js"),
                h = s("./node_modules/react-transition-group/cjs/index.js"),
                _ = s("./node_modules/react/jsx-runtime.js");
            (0, m.hO)(12), (0, m.hO)(70), (0, m.hO)(45);
            const S = "ads-modal-fade-appear",
                E = (0, n.z)("div")({
                    name: "StudyModesAdsModal",
                    class: "s1ytao72"
                }),
                y = (0, n.z)("div")({
                    name: "TextContainer",
                    class: "tc7vqun"
                }),
                f = (0, n.z)("div")({
                    name: "AdsModalText",
                    class: "a1ehhxrb"
                }),
                j = (0, n.z)("a")({
                    name: "UpsellLink",
                    class: "uwy5kzm"
                }),
                T = e => {
                    let {
                        animationStep: t,
                        order: s,
                        onEntered: n,
                        children: a
                    } = e;
                    return (0, _.jsx)(h.Kv, {
                        appear: !0,
                        classNames: "ads-modal-fade",
                        in: t >= s,
                        onEntered: n,
                        timeout: 600,
                        children: a
                    })
                },
                A = [(0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_1"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_2"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_3"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_4"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_5"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_6"
                }), (0, _.jsx)(c.Z, {
                    id: "study_ads_modal.messages.message_7"
                })],
                b = e => {
                    const [t, s] = (() => {
                        const [e, t] = (0, g.useState)(0);
                        return [e, (0, g.useCallback)((() => t((e => e + 1))), [])]
                    })(), [n, d] = (0, g.useState)(!1), [m, h] = (0, g.useState)(!1), [b, x] = (0, g.useState)(!1), [I, v] = (0, g.useState)(!1), [C, N] = (0, g.useState)(!1), [w, O] = (0, g.useState)(!1), [M, D] = (0, g.useState)(!0), [L, P] = (0, g.useState)(0), [R] = (0, g.useState)(Math.floor(Math.random() * A.length)), k = (0, g.useRef)(null), U = (0, g.useRef)(null), W = !C && !I;
                    (0, g.useEffect)((() => (k.current = setTimeout(e.onSkip, 3e3), () => clearTimeout(k.current))), [e.onSkip]), (0, g.useEffect)((() => {
                        let e;
                        return L >= 0 && (e = setTimeout((() => {
                            P(L - 1)
                        }), 1e3)), () => {
                            clearTimeout(e)
                        }
                    }), [L]);
                    const B = (0, g.useCallback)((() => {
                            v(!0), D(!1)
                        }), []),
                        F = (0, g.useCallback)((e => {
                            clearTimeout(k.current);
                            const {
                                isVideo: t,
                                isVertical: n,
                                isVerticalFullScreen: a,
                                isVideoWithContent: o
                            } = (0, i.Z)(e);
                            h(!0), N(t), d(n), x(a), O(o), (t || I) && (setTimeout((() => {
                                P(5)
                            }), 600), D(!1)), s()
                        }), [I, s]),
                        {
                            t: Z
                        } = (0, p.ZP)(),
                        G = u()("a1gsqf69", S, {
                            "StudyModesAdsModal-NativeContainer": I
                        }),
                        H = C && I && !w && !n,
                        V = u()("a1p47xn5", {
                            cfn0jmj: b,
                            "StudyModesAdModal-contentVerticalVideo": n,
                            "StudyModesAdModal-contentNative": I,
                            "StudyModesAdModal-contentVideo": C,
                            a1akpkzf: W,
                            "StudyModesAdModal-hasAdMessage": H
                        });
                    return (0, _.jsx)(E, {
                        children: (0, _.jsxs)("div", {
                            className: V,
                            children: [(0, _.jsx)(T, {
                                animationStep: t,
                                onEntered: () => {
                                    s()
                                },
                                order: 3,
                                children: m ? (() => {
                                    const s = u()("s1i2wjtg", S, {
                                        "StudyModesAdsModal-SkipAdButtonVerticalVideo": n
                                    });
                                    return (0, _.jsx)("div", {
                                        className: s,
                                        children: L >= 0 ? (0, _.jsx)("div", {
                                            className: "StudyModesAdsModal-SkipAdCounter",
                                            children: (0, _.jsx)(l.B0, {
                                                disabled: !0,
                                                size: "small",
                                                text: Z("study_ads_modal.skip_ad", {
                                                    adTimeLeft: L + 1
                                                })
                                            })
                                        }) : (0, _.jsx)(o.Z, {
                                            buttonSize: "small",
                                            onClick: t > 3 ? e.onSkip : void 0
                                        })
                                    })
                                })() : (0, _.jsx)(_.Fragment, {})
                            }), (0, _.jsx)(T, {
                                animationStep: t,
                                onEntered: s,
                                order: 1,
                                children: (0, _.jsx)("div", {
                                    className: G,
                                    children: (0, _.jsx)(a.Z, {
                                        id: r.h.STUDY_MODE_AD,
                                        onDisplayCallback: F,
                                        onEmptyAdCallback: e.onSkip,
                                        onNativeAd: B,
                                        ref: U,
                                        showAdAttribution: !W
                                    })
                                })
                            }), (0, _.jsx)(T, {
                                animationStep: t,
                                onEntered: s,
                                order: 2,
                                children: (H || W) && m ? (0, _.jsx)(y, {
                                    className: S,
                                    children: (0, _.jsxs)(f, {
                                        children: [H ? A[R] : (0, _.jsx)(c.Z, {
                                            id: "study_ads_modal.message"
                                        }), M ? (0, _.jsxs)(_.Fragment, {
                                            children: [" ", (0, _.jsx)(j, {
                                                href: "https://quizlet.com/upgrade?source=go_remove_ads",
                                                target: "upgrade",
                                                children: (0, _.jsx)(c.Z, {
                                                    id: "study_ads_modal.upsell_link"
                                                })
                                            })]
                                        }) : null]
                                    })
                                }) : (0, _.jsx)(_.Fragment, {})
                            })]
                        })
                    })
                };
            s("./.linaria-cache/app/j/ads/components/studyModes/AdModal.linaria.css")
        },
        "./app/j/ads/components/studyModes/ContinueButton.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var n = s("./app/j/assembly/buttons/index.ts"),
                a = s("./app/j/hocs/keydownDecorator.tsx"),
                o = s("./app/j/i18n/useTranslation.ts"),
                r = s("./node_modules/react/index.js"),
                i = s("./node_modules/react/jsx-runtime.js");
            const l = (0, a.Z)()((e => {
                let {
                    keydownEvent: t,
                    onClick: s,
                    buttonSize: a,
                    isFullWidth: l
                } = e;
                (0, r.useEffect)((() => {
                    t && s && (t.preventDefault(), t.stopPropagation(), s())
                }), [s, t]);
                const {
                    t: d
                } = (0, o.ZP)();
                return (0, i.jsx)(n.wI, {
                    isFullWidth: l,
                    onClick: s,
                    size: a,
                    text: d("study_ads_modal.continue")
                })
            }))
        },
        "./app/j/ads/constants/adConstants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                If: () => n,
                O8: () => a,
                Vj: () => o,
                lw: () => l,
                mW: () => r,
                sV: () => i
            });
            const n = 30,
                a = 7,
                o = "ads-page-depth",
                r = 3,
                i = 5,
                l = 5e3
        },
        "./app/j/ads/context/StudyModeAdsContext.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Jt: () => i,
                Uw: () => r
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/react/index.js"),
                a = s("./node_modules/react/jsx-runtime.js");
            const o = (0, n.createContext)({
                    isVideoAd: !1
                }),
                r = e => {
                    let {
                        children: t
                    } = e;
                    const [s, r] = (0, n.useState)(!1), [i, l] = (0, n.useState)(!1), [d, u] = (0, n.useState)(!1);
                    return (0, a.jsx)(o.Provider, {
                        value: {
                            isAdLoaded: i,
                            isEmptyAd: d,
                            isVideoAd: s,
                            setIsAdLoaded: l,
                            setIsEmptyAd: u,
                            setIsVideoAd: r
                        },
                        children: t
                    })
                },
                i = () => (0, n.useContext)(o)
        },
        "./app/j/ads/enums/AdsNames.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                h: () => n
            });
            let n = function(e) {
                return e.CLASS_DASHBOARD_EMBEDDED_01 = "ClassDashboardEmbedded01", e.CLASS_DASHBOARD_EMBEDDED_02 = "ClassDashboardEmbedded02", e.CLASS_DASHBOARD_EMBEDDED_MWEB_01 = "ClassDashboardEmbeddedMWeb01", e.CLASS_DASHBOARD_EMBEDDED_MWEB_02 = "ClassDashboardEmbeddedMWeb02", e.CLASS_DASHBOARD_SIDEBAR = "ClassDashboardSidebar", e.CREATE_SET_HEADER = "CreateSetHeader", e.EXPLANATIONS_VIDEO_AD = "Explanations_Video", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_01 = "ExplanationsTextbookEmbedDesktop01", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_02 = "ExplanationsTextbookEmbedDesktop02", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_03 = "ExplanationsTextbookEmbedDesktop03", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_04 = "ExplanationsTextbookEmbedDesktop04", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_05 = "ExplanationsTextbookEmbedDesktop05", e.EXPLANATIONS_TEXTBOOK_EMBED_DESKTOP_06 = "ExplanationsTextbookEmbedDesktop06", e.EXPLANATIONS_TEXTBOOK_EMBED_MWEB_01 = "ExplanationsTextbookEmbedMWeb01", e.EXPLANATIONS_TEXTBOOK_EMBED_MWEB_02 = "ExplanationsTextbookEmbedMWeb02", e.EXPLANATIONS_TEXTBOOK_EMBED_MWEB_03 = "ExplanationsTextbookEmbedMWeb03", e.EXPLANATIONS_TEXTBOOK_EMBED_MWEB_04 = "ExplanationsTextbookEmbedMWeb04", e.EXPLANATIONS_TEXTBOOK_EMBED_MWEB_05 = "ExplanationsTextbookEmbedMWeb05", e.EXPLANATIONS_EXERCISE_EMBED_DESKTOP_01 = "ExplanationsExerciseEmbedDesktop01", e.EXPLANATIONS_EXERCISE_EMBED_MWEB_01 = "ExplanationsExerciseEmbedMWeb01", e.EXPLANATIONS_EXERCISE_SIDEBAR = "ExplanationsExerciseSidebar", e.EXPLANATIONS_QUESTION_SIDEBAR = "ExplanationsQuestionSidebar", e.EXPLANATIONS_QUESTION_EMBED_MWEB_01 = "ExplanationsQuestionEmbedMWeb01", e.EXPLANATIONS_QUESTION_EMBED_DESKTOP_01 = "ExplanationsQuestionEmbedDesktop01", e.EXPLANATIONS_TEXTBOOK_SIDEBAR = "ExplanationsTextbookSidebar", e.FLASHCARDS_SIDEBAR = "FlashcardsSidebar", e.FLASHCARDS_NATIVE = "FlashcardsNative", e.FOLDER_SIDEBAR = "FolderSidebar", e.HOMEPAGE_MWEB_EMBEDDED = "MWebHomepageEmbedded", e.HOMEPAGE_SIDEBAR = "HomepageSidebar", e.MATCH_MWEB = "MatchMweb", e.LEADERBOARD_MWEB = "LeaderboardMWeb", e.LEARN_REWARDED_VIDEO = "Learn_Rewarded_Video", e.MINI_FC_REWARDED_VIDEO = "MiniModeRVA", e.OUT_OF_PAGE_1 = "outOfPage1", e.OUT_OF_PAGE_2 = "outOfPage2", e.OUT_OF_PAGE_3 = "outOfPage3", e.PROFILE_SIDEBAR = "ProfileSidebar", e.SEARCH_EMBED_DESKTOP_01 = "SearchEmbedDesktop01", e.SEARCH_EMBED_MWEB_01 = "SearchEmbedMweb01", e.SET_MWEB_STRIP_V3 = "SetMWebStripV3", e.SET_PAGE_EMBED_DESKTOP_MULTI_01 = "SetPageEmbedDesktopMulti01", e.SET_PAGE_EMBED_DESKTOP_MULTI_02 = "SetPageEmbedDesktopMulti02", e.SET_PAGE_EMBED_DESKTOP_MULTI_03 = "SetPageEmbedDesktopMulti03", e.SET_PAGE_EMBED_DESKTOP_MULTI_04 = "SetPageEmbedDesktopMulti04", e.SET_PAGE_EMBED_DESKTOP_MULTI_05 = "SetPageEmbedDesktopMulti05", e.SET_PAGE_EMBED_DESKTOP_MULTI_06 = "SetPageEmbedDesktopMulti06", e.SET_PAGE_EMBED_DESKTOP_MULTI_07 = "SetPageEmbedDesktopMulti07", e.SET_PAGE_EMBED_DESKTOP_MULTI_08 = "SetPageEmbedDesktopMulti08", e.SET_PAGE_EMBED_DESKTOP_MULTI_09 = "SetPageEmbedDesktopMulti09", e.SET_PAGE_EMBED_DESKTOP_MULTI_10 = "SetPageEmbedDesktopMulti10", e.SET_PAGE_EMBED_MWEB_MULTI_01 = "SetPageEmbedMWebMulti01", e.SET_PAGE_EMBED_MWEB_MULTI_02 = "SetPageEmbedMWebMulti02", e.SET_PAGE_EMBED_MWEB_MULTI_03 = "SetPageEmbedMWebMulti03", e.SET_PAGE_EMBED_MWEB_MULTI_04 = "SetPageEmbedMWebMulti04", e.SET_PAGE_EMBED_MWEB_MULTI_05 = "SetPageEmbedMWebMulti05", e.SET_PAGE_EMBED_MWEB_MULTI_06 = "SetPageEmbedMWebMulti06", e.SET_PAGE_EMBED_MWEB_MULTI_07 = "SetPageEmbedMWebMulti07", e.SET_PAGE_EMBED_MWEB_MULTI_08 = "SetPageEmbedMWebMulti08", e.SET_PAGE_EMBED_MWEB_MULTI_09 = "SetPageEmbedMWebMulti09", e.SET_PAGE_EMBED_MWEB_MULTI_10 = "SetPageEmbedMWebMulti10", e.SET_PAGE_FLASHCARD_NATIVE = "SetPageFlashcardNative", e.SET_PAGE_FOOTER = "SetPageFooter", e.SET_PAGE_STICKY_AD_MWEB = "SetPageStickyAdMWeb", e.SET_RECTANGLE_HEADER = "SetRectangleHeader", e.SET_SIDEBAR_V4 = "SetSidebarV4", e.SPELL_MWEB_FOOTER = "SpellMWebFooterFlexi", e.STUDY_MODE_AD = "StudyModeAd", e.STUDY_MODE_AD_MINI_FC = "StudyModeAdMiniFC", e.TEST_MWEB = "TestMWeb", e.TEST_STUDY_MODE_AD = "TestStudyModeAd", e.TEST_VIDEO_TAG = "TestVideoTag", e.TEST_NATIVE = "TestNative", e.WRITE_MWEB = "WriteMWeb", e.MOCK_BANNER_AD = "MockBannerAd", e.MOCK_SIDEBAR_AD = "MockSidebarAd", e.MOCK_RECTANGLE_AD = "MockRectangleAd", e
            }({})
        },
        "./app/j/ads/enums/AdsTypes.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                D: () => n
            });
            let n = function(e) {
                return e.BANNER = "BANNER", e.FOOTER = "FOOTER", e.MOBILE_HORIZONTAL_STRIP = "MOBILE_HORIZONTAL_STRIP", e.MOBILE_RECTANGLE = "MOBILE_RECTANGLE", e.NATIVE = "NATIVE", e.OUT_OF_PAGE = "OUT_OF_PAGE", e.RECTANGLE = "RECTANGLE", e.SIDEBAR = "SIDEBAR", e.VIDEO = "VIDEO", e.REWARDED = "REWARDED", e
            }({})
        },
        "./app/j/ads/enums/RefreshReason.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => n
            });
            let n = function(e) {
                return e[e.ACTION_REFRESH = 0] = "ACTION_REFRESH", e[e.MOUNT_REFRESH = 1] = "MOUNT_REFRESH", e[e.RESIZE_REFRESH = 2] = "RESIZE_REFRESH", e[e.TIME_REFRESH = 3] = "TIME_REFRESH", e
            }({})
        },
        "./app/j/ads/sizes/video.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                x: () => n
            });
            const n = {
                ad300x250v: [300, 250],
                ad300x600v: [300, 600],
                ad400x300v: [400, 300],
                ad480x270v: [480, 270],
                ad640x360v: [640, 360]
            }
        },
        "./app/j/ads/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                BH: () => d,
                G9: () => r,
                GO: () => o,
                HS: () => n,
                Kl: () => i,
                Si: () => c,
                X_: () => u,
                hn: () => l,
                yl: () => a
            });
            let n = function(e) {
                    return e[e.PreAuction = 0] = "PreAuction", e[e.PostAuction = 1] = "PostAuction", e
                }({}),
                a = function(e) {
                    return e.WithBids = "0", e.WithoutApstagBid = "1", e.WithoutPWTBid = "2", e.WithoutApstagAndPWTBids = "3", e
                }({}),
                o = function(e) {
                    return e[e.EXACT = 0] = "EXACT", e[e.ESTIMATED = 1] = "ESTIMATED", e
                }({}),
                r = function(e) {
                    return e[e.FILLED = 0] = "FILLED", e[e.UNFILLED = 1] = "UNFILLED", e
                }({}),
                i = function(e) {
                    return e[e.Unknown = 0] = "Unknown", e.NotApplicable = "0", e.ApplicableWaitingForConsent = "1", e.ApplicableConsentGiven = "2", e.ApplicableConsentNotGiven = "3", e
                }({}),
                l = function(e) {
                    return e.TCLOADED = "tcloaded", e.CPUISSHOWN = "cmpuishown", e.USEACTIONCOMPLETE = "useractioncomplete", e
                }({}),
                d = function(e) {
                    return e.ADD_EVENT_LISTENER = "addEventListener", e.REMOVE_EVENT_LISTENER = "removeEventListener", e.GET_TC_DATA = "getTCData", e
                }({}),
                u = function(e) {
                    return e[e.STORE_ACCESS_INFO_DEVICE = 1] = "STORE_ACCESS_INFO_DEVICE", e[e.SELECT_BASIC_ADS = 2] = "SELECT_BASIC_ADS", e[e.CREATE_ADS_PROFILE = 3] = "CREATE_ADS_PROFILE", e[e.SELECT_PERSONALIZED_ADS = 4] = "SELECT_PERSONALIZED_ADS", e[e.CREATE_CONTENT_PROFILE = 5] = "CREATE_CONTENT_PROFILE", e[e.SELECT_CONTENT = 6] = "SELECT_CONTENT", e[e.MEASURE_AD_PERFORMANCE = 7] = "MEASURE_AD_PERFORMANCE", e[e.MEASURE_CONTENT_PERFORMANCE = 8] = "MEASURE_CONTENT_PERFORMANCE", e[e.AUDIENCE_INSIGHTS = 9] = "AUDIENCE_INSIGHTS", e[e.IMPROVE_PRODUCTS = 10] = "IMPROVE_PRODUCTS", e
                }({}),
                c = function(e) {
                    return e.APSTAG = "apstag.js", e.GPT = "gpt.js", e.PWT = "pwt.js", e.PREBID = "prebid.js", e
                }({})
        },
        "./app/j/ads/utils/AdEventEmitter.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                T: () => n,
                Z: () => a
            });
            let n = function(e) {
                return e[e.AdIsViewable = 0] = "AdIsViewable", e[e.AdLoaded = 1] = "AdLoaded", e[e.WinningEvent = 2] = "WinningEvent", e[e.EmptyAdReceived = 3] = "EmptyAdReceived", e[e.NativeAdReceived = 4] = "NativeAdReceived", e
            }({});
            class a {
                constructor() {
                    this._listeners = {}, this.on = (e, t, s) => {
                        this._listeners[e + t] = s
                    }, this.off = (e, t) => {
                        delete this._listeners[e + t]
                    }, this.emit = (e, t, s) => {
                        this._listeners[e + t] && this._listeners[e + t](s)
                    }
                }
            }
        },
        "./app/j/ads/utils/isVideoAd.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./app/j/ads/sizes/video.ts");
            const a = e => {
                var t;
                let s = !1;
                if (e.size instanceof Array) {
                    const [t, a] = e.size;
                    s = Object.values(n.x).some((e => e instanceof Array && t === e[0] && a === e[1]))
                }
                const a = null != (t = null == e.slot.getHtml ? void 0 : e.slot.getHtml()) ? t : "",
                    o = a.includes("NativeAd-vertical-video"),
                    r = a.includes("NativeAd-vertical-video-fullscreen"),
                    i = a.includes("NativeAd-video") || s && a.includes("video");
                return {
                    isVideo: i,
                    isVertical: o,
                    isVerticalFullScreen: r,
                    isVideoWithContent: i && a.includes("NativeAd-content")
                }
            }
        },
        "./app/j/ads/utils/screenSizes.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                r: () => a
            });
            var n = s("./app/j/assembly/adaptivity/BreakpointQueries.ts");
            const a = {
                veryLarge: [n.u3.xl + 1, 0],
                largeAndVeryTall: [n.u3.l + 1, 910],
                largeAndTall: [n.u3.l + 1, 750],
                large: [n.u3.l + 1, 0],
                mediumAndVeryTall: [n.u3.m + 1, 910],
                medium: [n.u3.m + 1, 0],
                small: [n.u3.s + 1, 0],
                verySmall: [n.u3.xs + 1, 0],
                tiny: [n.u3.xxs + 1, 300],
                remaining: [0, 0]
            }
        },
        "./app/j/ads_core/utils/logToConsole.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ev: () => i,
                Xq: () => d,
                co: () => u,
                ut: () => l,
                yN: () => r
            });
            let n = [],
                a = !1;
            const o = e => {
                    var t;
                    const s = ["%c " + (e.src ? "QADS [" + e.src + "]" : "QADS") + ": %c " + e.message + " %c " + e.timeElapsed + "ms", "background: blue; color: #bada55", "color: #6758db", "color: #cc5555"];
                    e.extraInfo && Object.keys(e.extraInfo).length > 0 && s.push(e.extraInfo), null == (t = window) || t.console.log.apply(window.console, s)
                },
                r = () => {
                    a = !0
                },
                i = () => {
                    a = !1
                },
                l = () => {
                    "undefined" != typeof window && n.forEach((e => o(e)))
                },
                d = (e, t, s) => {
                    var r;
                    const i = {
                        message: e,
                        timeElapsed: Math.round(null == (r = window) || null == (r = r.performance) ? void 0 : r.now()) || 0,
                        src: t,
                        extraInfo: s
                    };
                    var l;
                    a && o(i), l = i, n.push(l), n.length > 256 && (n = n.splice(-256))
                },
                u = function(e, t) {
                    void 0 === e && (e = 100), void 0 === t && (t = []);
                    const s = e < 0 ? 100 : e;
                    return n.filter((e => -1 === t.indexOf(e.src || ""))).slice(-s)
                }
        },
        "./app/j/assembly/AssemblyToggleSwitch.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                J: () => l,
                Z: () => u
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./app/j/components/UIBaseControl.tsx"),
                r = s("./node_modules/react/index.js"),
                i = s("./node_modules/react/jsx-runtime.js");
            let l = function(e) {
                return e.DEFAULT = "default", e.LIGHT_GREEN = "light_green", e
            }({});

            function d(e) {
                return (0, i.jsx)(o.Z, {
                    ...e,
                    baseClassName: "AssemblyToggleSwitch",
                    extraClassNames: a()({
                        AssemblyToggleSwitchLightGreen: e.variant === l.LIGHT_GREEN
                    }),
                    type: "checkbox"
                })
            }
            const u = r.memo(d);
            s("./.linaria-cache/app/j/assembly/AssemblyToggleSwitch.linaria.css")
        },
        "./app/j/audio_playback/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                JF: () => l,
                XZ: () => d,
                ZP: () => p,
                iW: () => c
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js"),
                a = s("./app/j/audio_playback/types.ts"),
                o = s("./app/j/core/default_store/DefaultStore.ts");
            const r = (0, n.createSlice)({
                    name: a.Q,
                    initialState: {
                        playingAudioId: null,
                        lastPlayedQueue: [],
                        playQueue: [],
                        preloadQueue: []
                    },
                    reducers: {
                        addToPreloadQueue(e, t) {
                            let {
                                payload: s
                            } = t;
                            const n = s.audioItems.filter((t => {
                                let {
                                    audioId: s
                                } = t;
                                return !e.preloadQueue.find((e => e.audioId === s))
                            }));
                            e.preloadQueue = [...e.preloadQueue, ...n]
                        },
                        setPlayQueue(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.playQueue = s.audioItems, e.lastPlayedQueue = s.audioItems
                        },
                        clearPlayQueue(e) {
                            e.playingAudioId = null, e.playQueue = []
                        },
                        popNextPreloadQueue(e) {
                            e.preloadQueue.length > 0 && (e.preloadQueue = e.preloadQueue.slice(1))
                        },
                        popNextPlayQueue(e) {
                            if (e.playQueue.length > 0) {
                                const t = e.playQueue[0];
                                e.playingAudioId = t.audioId, e.playQueue = e.playQueue.slice(1)
                            }
                        }
                    }
                }),
                {
                    addToPreloadQueue: i,
                    setPlayQueue: l,
                    clearPlayQueue: d,
                    popNextPreloadQueue: u,
                    popNextPlayQueue: c
                } = r.actions;
            r.reducer;

            function p() {
                (0, o.bh)().registerReducer(a.Q, r.reducer)
            }
        },
        "./app/j/audio_playback/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                B6: () => p,
                gA: () => c,
                jZ: () => m,
                oq: () => g
            });
            var n = s("./node_modules/lodash/last.js"),
                a = s.n(n),
                o = s("./app/j/audio_playback/types.ts"),
                r = s("./app/j/core/default_store/DefaultStore.ts"),
                i = s("./node_modules/reselect/lib/index.js");
            const l = (0, r.iu)(o.Q),
                d = (0, i.createSelector)(l, (e => e.preloadQueue)),
                u = ((0, i.createSelector)(d, (e => (null == e ? void 0 : e.length) > 0 ? e[0] : null)), (0, i.createSelector)(l, (e => e.playQueue))),
                c = (0, i.createSelector)(u, (e => (null == e ? void 0 : e.length) > 0 ? e[0] : null)),
                p = (0, i.createSelector)(u, (e => (null == e ? void 0 : e.length) > 0 ? a()(e) : null)),
                m = (0, i.createSelector)(l, (e => e.playingAudioId)),
                g = (0, i.createSelector)(l, (e => e.lastPlayedQueue))
        },
        "./app/j/audio_playback/thunks.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                DQ: () => d,
                fM: () => u,
                p0: () => i
            });
            s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/audio_playback/index.ts"),
                a = s("./app/j/audio_playback/selectors.ts");
            let o;
            async function r() {
                const {
                    default: e
                } = await s.e("app_j_utils_AudioPlayer_ts").then(s.bind(s, "./app/j/utils/AudioPlayer.ts"));
                return o = o || new e, o
            }
            const i = () => async e => ((await r()).stopAll(), e((0, n.XZ)()), Promise.resolve()), l = e => async (t, s) => {
                const o = (0, a.gA)(s()),
                    d = (0, a.B6)(s());
                return o && o.audioId === (0, a.jZ)(s()) ? t(i()) : (o ? (t((0, n.iW)()), (await r()).play(o.url, {
                    onFinish: () => {
                        o === d ? (e && e(), t(i())) : t(l(e))
                    },
                    onError: () => t(l(e))
                })) : (e && e(), t(i())), Promise.resolve())
            }, d = e => {
                let {
                    audioItems: t,
                    onEnd: s
                } = e;
                return async e => ((await r()).stopAll(), e((0, n.JF)({
                    audioItems: t
                })), e(l(s)), Promise.resolve())
            }, u = () => async (e, t) => {
                const s = (0, a.oq)(t());
                return await e(d({
                    audioItems: s
                })), Promise.resolve()
            }
        },
        "./app/j/audio_playback/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Q: () => n
            });
            const n = "audioPlayback"
        },
        "./app/j/audio_playback/utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $g: () => u,
                AF: () => l,
                kW: () => c,
                os: () => d,
                v2: () => m
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/global/Rollbar.ts"),
                o = s("./app/j/study-engine/types.ts"),
                r = s("./app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts");

            function i(e, t) {
                return e + "-" + ("string" == typeof t ? function(e) {
                    switch (e) {
                        case n.dU_.WORD:
                            return n.TermSide.WORD;
                        case n.dU_.DEFINITION:
                            return n.TermSide.DEFINITION;
                        case n.dU_.LOCATION:
                            return n.TermSide.LOCATION;
                        default:
                            throw new Error("Invalid StudiableCardSideLabel " + e)
                    }
                }(t) : t)
            }

            function l(e, t) {
                const s = t === n.TermSide.WORD ? e._wordAudioUrl : e._definitionAudioUrl;
                return s ? {
                    audioId: i(e.id, t),
                    url: s
                } : null
            }

            function d(e) {
                return {
                    audioItems: [{
                        audioId: e,
                        url: e
                    }]
                }
            }

            function u(e) {
                return e.map((e => ({
                    audioId: e.url,
                    url: e.url
                })))
            }

            function c(e) {
                var t, s;
                let n, {
                    question: i,
                    advancedAudioSettings: l
                } = e;
                switch (i.type) {
                    case o.mw.WRITTEN_QUESTION:
                    case o.mw.MULTIPLE_CHOICE_QUESTION:
                    case o.mw.FILL_IN_THE_BLANK_QUESTION:
                        n = i.prompt;
                        break;
                    case o.mw.REVEAL_SELF_ASSESSMENT_QUESTION:
                        n = i.front;
                        break;
                    default:
                        return void a.Z.error("Unable to find audio url elements for question type " + i.type, {
                            advancedAudioSettings: l,
                            question: i
                        })
                }
                const u = null != l && l.slowDefinitionEnabled ? null == (t = (0, r.Sg)(n).audio) ? void 0 : t.slowUrl : null == (s = (0, r.Sg)(n).audio) ? void 0 : s.url;
                return u ? d(u) : void 0
            }

            function p(e) {
                return e.sideId + "-" + e.label
            }

            function m(e, t) {
                return {
                    audioId: p(e),
                    url: t
                }
            }
        },
        "./app/j/compatibility/getLocalizedLanguage.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r,
                w: () => o
            });
            var n = s("./app/j/global/Rollbar.ts");

            function a(e) {
                e ? n.Z.warning("Unknown language code", {
                    language: e
                }) : n.Z.error("Empty language param", {
                    language: e
                })
            }

            function o(e, t) {
                switch (t) {
                    case "??":
                        return e("languages_uppercase.unknown");
                    case "af":
                        return e("languages_uppercase.af");
                    case "ak":
                        return e("languages_uppercase.ak");
                    case "akk":
                        return e("languages_uppercase.akk");
                    case "am":
                        return e("languages_uppercase.am");
                    case "ang":
                        return e("languages_uppercase.ang");
                    case "ar":
                        return e("languages_uppercase.ar");
                    case "ase":
                        return e("languages_uppercase.ase");
                    case "az":
                        return e("languages_uppercase.az");
                    case "be":
                        return e("languages_uppercase.be");
                    case "bg":
                        return e("languages_uppercase.bg");
                    case "bh":
                        return e("languages_uppercase.bh");
                    case "bn":
                        return e("languages_uppercase.bn");
                    case "bo":
                        return e("languages_uppercase.bo");
                    case "br":
                        return e("languages_uppercase.br");
                    case "bs":
                        return e("languages_uppercase.bs");
                    case "ca":
                        return e("languages_uppercase.ca");
                    case "ceb":
                        return e("languages_uppercase.ceb");
                    case "ch":
                        return e("languages_uppercase.ch");
                    case "chem":
                        return e("languages_uppercase.chem");
                    case "cho":
                        return e("languages_uppercase.cho");
                    case "chr":
                        return e("languages_uppercase.chr");
                    case "co":
                        return e("languages_uppercase.co");
                    case "cop":
                        return e("languages_uppercase.cop");
                    case "cs":
                        return e("languages_uppercase.cs");
                    case "cy":
                        return e("languages_uppercase.cy");
                    case "da":
                        return e("languages_uppercase.da");
                    case "de":
                        return e("languages_uppercase.de");
                    case "den":
                        return e("languages_uppercase.den");
                    case "dv":
                        return e("languages_uppercase.dv");
                    case "dyo":
                        return e("languages_uppercase.dyo");
                    case "el":
                        return e("languages_uppercase.el");
                    case "en":
                        return e("languages_uppercase.en");
                    case "eo":
                        return e("languages_uppercase.eo");
                    case "es":
                        return e("languages_uppercase.es");
                    case "et":
                        return e("languages_uppercase.et");
                    case "eu":
                        return e("languages_uppercase.eu");
                    case "fa":
                        return e("languages_uppercase.fa");
                    case "ff":
                        return e("languages_uppercase.ff");
                    case "fi":
                        return e("languages_uppercase.fi");
                    case "fil":
                        return e("languages_uppercase.fil");
                    case "fo":
                        return e("languages_uppercase.fo");
                    case "fr":
                        return e("languages_uppercase.fr");
                    case "fy":
                        return e("languages_uppercase.fy");
                    case "ga":
                        return e("languages_uppercase.ga");
                    case "gd":
                        return e("languages_uppercase.gd");
                    case "gl":
                        return e("languages_uppercase.gl");
                    case "gn":
                        return e("languages_uppercase.gn");
                    case "got":
                        return e("languages_uppercase.got");
                    case "gu":
                        return e("languages_uppercase.gu");
                    case "ha":
                        return e("languages_uppercase.ha");
                    case "hai":
                        return e("languages_uppercase.hai");
                    case "haw":
                        return e("languages_uppercase.haw");
                    case "hi":
                        return e("languages_uppercase.hi");
                    case "hil":
                        return e("languages_uppercase.hil");
                    case "hmv":
                        return e("languages_uppercase.hmv");
                    case "hr":
                        return e("languages_uppercase.hr");
                    case "ht":
                        return e("languages_uppercase.ht");
                    case "hu":
                        return e("languages_uppercase.hu");
                    case "hy":
                        return e("languages_uppercase.hy");
                    case "id":
                        return e("languages_uppercase.id");
                    case "ig":
                        return e("languages_uppercase.ig");
                    case "ipa":
                        return e("languages_uppercase.ipa");
                    case "is":
                        return e("languages_uppercase.is");
                    case "it":
                        return e("languages_uppercase.it");
                    case "iu":
                        return e("languages_uppercase.iu");
                    case "iw":
                        return e("languages_uppercase.iw");
                    case "ja":
                        return e("languages_uppercase.ja");
                    case "ja-ka":
                        return e("languages_uppercase.ja_ka");
                    case "ja-ro":
                        return e("languages_uppercase.ja_ro");
                    case "jv":
                        return e("languages_uppercase.jv");
                    case "ka":
                        return e("languages_uppercase.ka");
                    case "kg":
                        return e("languages_uppercase.kg");
                    case "kin":
                        return e("languages_uppercase.kin");
                    case "kio":
                        return e("languages_uppercase.kio");
                    case "kk":
                        return e("languages_uppercase.kk");
                    case "km":
                        return e("languages_uppercase.km");
                    case "kn":
                        return e("languages_uppercase.kn");
                    case "ko":
                        return e("languages_uppercase.ko");
                    case "ksw":
                        return e("languages_uppercase.ksw");
                    case "ku":
                        return e("languages_uppercase.ku");
                    case "ky":
                        return e("languages_uppercase.ky");
                    case "la":
                        return e("languages_uppercase.la");
                    case "lb":
                        return e("languages_uppercase.lb");
                    case "lkt":
                        return e("languages_uppercase.lkt");
                    case "ln":
                        return e("languages_uppercase.ln");
                    case "lo":
                        return e("languages_uppercase.lo");
                    case "lt":
                        return e("languages_uppercase.lt");
                    case "lua":
                        return e("languages_uppercase.lua");
                    case "luo":
                        return e("languages_uppercase.luo");
                    case "lv":
                        return e("languages_uppercase.lv");
                    case "math":
                        return e("languages_uppercase.math");
                    case "mg":
                        return e("languages_uppercase.mg");
                    case "mh":
                        return e("languages_uppercase.mh");
                    case "mi":
                        return e("languages_uppercase.mi");
                    case "mjd":
                        return e("languages_uppercase.mjd");
                    case "mk":
                        return e("languages_uppercase.mk");
                    case "ml":
                        return e("languages_uppercase.ml");
                    case "mn":
                        return e("languages_uppercase.mn");
                    case "mnk":
                        return e("languages_uppercase.mnk");
                    case "moh":
                        return e("languages_uppercase.moh");
                    case "mr":
                        return e("languages_uppercase.mr");
                    case "ms":
                        return e("languages_uppercase.ms");
                    case "mt":
                        return e("languages_uppercase.mt");
                    case "my":
                        return e("languages_uppercase.my");
                    case "nah":
                        return e("languages_uppercase.nah");
                    case "ne":
                        return e("languages_uppercase.ne");
                    case "nl":
                        return e("languages_uppercase.nl");
                    case "no":
                        return e("languages_uppercase.no");
                    case "nv":
                        return e("languages_uppercase.nv");
                    case "oc":
                        return e("languages_uppercase.oc");
                    case "oj":
                        return e("languages_uppercase.oj");
                    case "om":
                        return e("languages_uppercase.om");
                    case "ood":
                        return e("languages_uppercase.ood");
                    case "or":
                        return e("languages_uppercase.or");
                    case "pa":
                        return e("languages_uppercase.pa");
                    case "photo":
                        return e("languages_uppercase.photo");
                    case "pi":
                        return e("languages_uppercase.pi");
                    case "pl":
                        return e("languages_uppercase.pl");
                    case "ps":
                        return e("languages_uppercase.ps");
                    case "pt":
                        return e("languages_uppercase.pt");
                    case "qu":
                        return e("languages_uppercase.qu");
                    case "rar":
                        return e("languages_uppercase.rar");
                    case "rm":
                        return e("languages_uppercase.rm");
                    case "ro":
                        return e("languages_uppercase.ro");
                    case "ru":
                        return e("languages_uppercase.ru");
                    case "sa":
                        return e("languages_uppercase.sa");
                    case "sd":
                        return e("languages_uppercase.sd");
                    case "see":
                        return e("languages_uppercase.see");
                    case "shn":
                        return e("languages_uppercase.shn");
                    case "si":
                        return e("languages_uppercase.si");
                    case "sk":
                        return e("languages_uppercase.sk");
                    case "sl":
                        return e("languages_uppercase.sl");
                    case "sm":
                        return e("languages_uppercase.sm");
                    case "so":
                        return e("languages_uppercase.so");
                    case "sq":
                        return e("languages_uppercase.sq");
                    case "sr":
                        return e("languages_uppercase.sr");
                    case "su":
                        return e("languages_uppercase.su");
                    case "sv":
                        return e("languages_uppercase.sv");
                    case "sw":
                        return e("languages_uppercase.sw");
                    case "syc":
                        return e("languages_uppercase.syc");
                    case "ta":
                        return e("languages_uppercase.ta");
                    case "te":
                        return e("languages_uppercase.te");
                    case "tet":
                        return e("languages_uppercase.tet");
                    case "tg":
                        return e("languages_uppercase.tg");
                    case "th":
                        return e("languages_uppercase.th");
                    case "ti":
                        return e("languages_uppercase.ti");
                    case "tl":
                        return e("languages_uppercase.tl");
                    case "to":
                        return e("languages_uppercase.to");
                    case "tr":
                        return e("languages_uppercase.tr");
                    case "trc":
                        return e("languages_uppercase.trc");
                    case "tt":
                        return e("languages_uppercase.tt");
                    case "tyv":
                        return e("languages_uppercase.tyv");
                    case "ug":
                        return e("languages_uppercase.ug");
                    case "uk":
                        return e("languages_uppercase.uk");
                    case "unm":
                        return e("languages_uppercase.unm");
                    case "ur":
                        return e("languages_uppercase.ur");
                    case "uz":
                        return e("languages_uppercase.uz");
                    case "vi":
                        return e("languages_uppercase.vi");
                    case "win":
                        return e("languages_uppercase.win");
                    case "wo":
                        return e("languages_uppercase.wo");
                    case "xh":
                        return e("languages_uppercase.xh");
                    case "yi":
                        return e("languages_uppercase.yi");
                    case "yo":
                        return e("languages_uppercase.yo");
                    case "zh-CN":
                        return e("languages_uppercase.zh_cn");
                    case "zh-pi":
                        return e("languages_uppercase.zh_pi");
                    case "zh-TW":
                        return e("languages_uppercase.zh_tw");
                    case "zu":
                        return e("languages_uppercase.zu");
                    default:
                        return a(t), t
                }
            }

            function r(e, t) {
                switch (t) {
                    case "??":
                        return e("languages.unknown");
                    case "af":
                        return e("languages.af");
                    case "ak":
                        return e("languages.ak");
                    case "akk":
                        return e("languages.akk");
                    case "am":
                        return e("languages.am");
                    case "ang":
                        return e("languages.ang");
                    case "ar":
                        return e("languages.ar");
                    case "ase":
                        return e("languages.ase");
                    case "az":
                        return e("languages.az");
                    case "be":
                        return e("languages.be");
                    case "bg":
                        return e("languages.bg");
                    case "bh":
                        return e("languages.bh");
                    case "bn":
                        return e("languages.bn");
                    case "bo":
                        return e("languages.bo");
                    case "br":
                        return e("languages.br");
                    case "bs":
                        return e("languages.bs");
                    case "ca":
                        return e("languages.ca");
                    case "ceb":
                        return e("languages.ceb");
                    case "ch":
                        return e("languages.ch");
                    case "chem":
                        return e("languages.chem");
                    case "cho":
                        return e("languages.cho");
                    case "chr":
                        return e("languages.chr");
                    case "co":
                        return e("languages.co");
                    case "cop":
                        return e("languages.cop");
                    case "cs":
                        return e("languages.cs");
                    case "cy":
                        return e("languages.cy");
                    case "da":
                        return e("languages.da");
                    case "de":
                        return e("languages.de");
                    case "den":
                        return e("languages.den");
                    case "dv":
                        return e("languages.dv");
                    case "dyo":
                        return e("languages.dyo");
                    case "el":
                        return e("languages.el");
                    case "en":
                        return e("languages.en");
                    case "eo":
                        return e("languages.eo");
                    case "es":
                        return e("languages.es");
                    case "et":
                        return e("languages.et");
                    case "eu":
                        return e("languages.eu");
                    case "fa":
                        return e("languages.fa");
                    case "ff":
                        return e("languages.ff");
                    case "fi":
                        return e("languages.fi");
                    case "fil":
                        return e("languages.fil");
                    case "fo":
                        return e("languages.fo");
                    case "fr":
                        return e("languages.fr");
                    case "fy":
                        return e("languages.fy");
                    case "ga":
                        return e("languages.ga");
                    case "gd":
                        return e("languages.gd");
                    case "gl":
                        return e("languages.gl");
                    case "gn":
                        return e("languages.gn");
                    case "got":
                        return e("languages.got");
                    case "gu":
                        return e("languages.gu");
                    case "ha":
                        return e("languages.ha");
                    case "hai":
                        return e("languages.hai");
                    case "haw":
                        return e("languages.haw");
                    case "hi":
                        return e("languages.hi");
                    case "hil":
                        return e("languages.hil");
                    case "hmv":
                        return e("languages.hmv");
                    case "hr":
                        return e("languages.hr");
                    case "ht":
                        return e("languages.ht");
                    case "hu":
                        return e("languages.hu");
                    case "hy":
                        return e("languages.hy");
                    case "id":
                        return e("languages.id");
                    case "ig":
                        return e("languages.ig");
                    case "ipa":
                        return e("languages.ipa");
                    case "is":
                        return e("languages.is");
                    case "it":
                        return e("languages.it");
                    case "iu":
                        return e("languages.iu");
                    case "iw":
                        return e("languages.iw");
                    case "ja":
                        return e("languages.ja");
                    case "ja-ka":
                        return e("languages.ja_ka");
                    case "ja-ro":
                        return e("languages.ja_ro");
                    case "jv":
                        return e("languages.jv");
                    case "ka":
                        return e("languages.ka");
                    case "kg":
                        return e("languages.kg");
                    case "kin":
                        return e("languages.kin");
                    case "kio":
                        return e("languages.kio");
                    case "kk":
                        return e("languages.kk");
                    case "km":
                        return e("languages.km");
                    case "kn":
                        return e("languages.kn");
                    case "ko":
                        return e("languages.ko");
                    case "ksw":
                        return e("languages.ksw");
                    case "ku":
                        return e("languages.ku");
                    case "ky":
                        return e("languages.ky");
                    case "la":
                        return e("languages.la");
                    case "lb":
                        return e("languages.lb");
                    case "lkt":
                        return e("languages.lkt");
                    case "ln":
                        return e("languages.ln");
                    case "lo":
                        return e("languages.lo");
                    case "lt":
                        return e("languages.lt");
                    case "lua":
                        return e("languages.lua");
                    case "luo":
                        return e("languages.luo");
                    case "lv":
                        return e("languages.lv");
                    case "math":
                        return e("languages.math");
                    case "mg":
                        return e("languages.mg");
                    case "mh":
                        return e("languages.mh");
                    case "mi":
                        return e("languages.mi");
                    case "mjd":
                        return e("languages.mjd");
                    case "mk":
                        return e("languages.mk");
                    case "ml":
                        return e("languages.ml");
                    case "mn":
                        return e("languages.mn");
                    case "mnk":
                        return e("languages.mnk");
                    case "moh":
                        return e("languages.moh");
                    case "mr":
                        return e("languages.mr");
                    case "ms":
                        return e("languages.ms");
                    case "mt":
                        return e("languages.mt");
                    case "my":
                        return e("languages.my");
                    case "nah":
                        return e("languages.nah");
                    case "ne":
                        return e("languages.ne");
                    case "nl":
                        return e("languages.nl");
                    case "no":
                        return e("languages.no");
                    case "nv":
                        return e("languages.nv");
                    case "oc":
                        return e("languages.oc");
                    case "oj":
                        return e("languages.oj");
                    case "om":
                        return e("languages.om");
                    case "ood":
                        return e("languages.ood");
                    case "or":
                        return e("languages.or");
                    case "pa":
                        return e("languages.pa");
                    case "photo":
                        return e("languages.photo");
                    case "pi":
                        return e("languages.pi");
                    case "pl":
                        return e("languages.pl");
                    case "ps":
                        return e("languages.ps");
                    case "pt":
                        return e("languages.pt");
                    case "qu":
                        return e("languages.qu");
                    case "rar":
                        return e("languages.rar");
                    case "rm":
                        return e("languages.rm");
                    case "ro":
                        return e("languages.ro");
                    case "ru":
                        return e("languages.ru");
                    case "sa":
                        return e("languages.sa");
                    case "sd":
                        return e("languages.sd");
                    case "see":
                        return e("languages.see");
                    case "shn":
                        return e("languages.shn");
                    case "si":
                        return e("languages.si");
                    case "sk":
                        return e("languages.sk");
                    case "sl":
                        return e("languages.sl");
                    case "sm":
                        return e("languages.sm");
                    case "so":
                        return e("languages.so");
                    case "sq":
                        return e("languages.sq");
                    case "sr":
                        return e("languages.sr");
                    case "su":
                        return e("languages.su");
                    case "sv":
                        return e("languages.sv");
                    case "sw":
                        return e("languages.sw");
                    case "syc":
                        return e("languages.syc");
                    case "ta":
                        return e("languages.ta");
                    case "te":
                        return e("languages.te");
                    case "tet":
                        return e("languages.tet");
                    case "tg":
                        return e("languages.tg");
                    case "th":
                        return e("languages.th");
                    case "ti":
                        return e("languages.ti");
                    case "tl":
                        return e("languages.tl");
                    case "to":
                        return e("languages.to");
                    case "tr":
                        return e("languages.tr");
                    case "trc":
                        return e("languages.trc");
                    case "tt":
                        return e("languages.tt");
                    case "tyv":
                        return e("languages.tyv");
                    case "ug":
                        return e("languages.ug");
                    case "uk":
                        return e("languages.uk");
                    case "unm":
                        return e("languages.unm");
                    case "ur":
                        return e("languages.ur");
                    case "uz":
                        return e("languages.uz");
                    case "vi":
                        return e("languages.vi");
                    case "win":
                        return e("languages.win");
                    case "wo":
                        return e("languages.wo");
                    case "xh":
                        return e("languages.xh");
                    case "yi":
                        return e("languages.yi");
                    case "yo":
                        return e("languages.yo");
                    case "zh-CN":
                        return e("languages.zh_cn");
                    case "zh-pi":
                        return e("languages.zh_pi");
                    case "zh-TW":
                        return e("languages.zh_tw");
                    case "zu":
                        return e("languages.zu");
                    default:
                        return a(t), t
                }
            }
        },
        "./app/j/compatibility/localeCompare.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Y: () => n,
                Z: () => a
            });
            const n = function() {
                try {
                    "foo".localeCompare("bar", "i")
                } catch (e) {
                    return "RangeError" === e.name
                }
                return !1
            }();

            function a(e, t, s) {
                return n ? e.localeCompare(t, [s, "en-US"], {
                    numeric: !0
                }) : e.localeCompare(t)
            }
        },
        "./app/j/components/AutoExpandTextarea.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c,
                b: () => p
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./app/j/components/TrackedCursorTextarea.tsx"),
                r = s("./node_modules/invariant/browser.js"),
                i = s.n(r),
                l = s("./node_modules/keycode-js/dist/keycode.cjs.js"),
                d = s("./node_modules/react/index.js"),
                u = s("./node_modules/react/jsx-runtime.js");
            class c extends d.PureComponent {
                constructor(e) {
                    super(e), this.onBlur = e => {
                        this.setState({
                            isFocused: !1
                        }), this.props.onBlur && this.props.onBlur(e)
                    }, this.onKeyDown = e => {
                        this.props.onKeyDown && this.props.onKeyDown(e), e.keyCode === l.AC && (this.props.singleLine || e.metaKey) && this.blur()
                    }, this.onChange = e => {
                        this.props.onChange && this.props.onChange(e), this.isControlledComponent(this.props) || this.setState({
                            content: e.target.value
                        })
                    }, this.onFocus = e => {
                        this.setState({
                            isFocused: !0
                        }), this.props.onFocus && this.props.onFocus(e)
                    }, this.state = {
                        content: e.value || e.defaultValue,
                        isFocused: !1
                    }
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.isControlledComponent(e) && this.setState({
                        content: e.value
                    })
                }
                getTrackedArea() {
                    return i()(this.trackedAreaRef, "AutoExpandTextarea missing trackedAreaRef in getTrackedArea"), this.trackedAreaRef
                }
                getSelectionEnd() {
                    return this.getTrackedArea().getSelectionEnd()
                }
                getSelectionStart() {
                    return this.getTrackedArea().getSelectionStart()
                }
                render() {
                    const e = this.state.content || "",
                        t = a()("AutoExpandTextarea", this.props.className, {
                            "is-focused": this.state.isFocused,
                            "is-nonEmpty": e
                        }),
                        s = {
                            ...this.props
                        };
                    delete s.singleLine, delete s.defaultValue, delete s.value;
                    const n = s.lang ? "lang-" + s.lang : null;
                    return (0, u.jsxs)("div", {
                        className: t,
                        children: [(0, u.jsx)("div", {
                            className: a()("AutoExpandTextarea-sizer", n),
                            children: e + "\n"
                        }), (0, u.jsx)("div", {
                            className: a()("AutoExpandTextarea-wrapper", n),
                            children: (0, u.jsx)(o.Z, {
                                ...s,
                                className: "AutoExpandTextarea-textarea",
                                onBlur: this.onBlur,
                                onChange: this.onChange,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                ref: e => {
                                    this.trackedAreaRef = e
                                },
                                value: e
                            })
                        })]
                    })
                }
                focus(e) {
                    this.getTrackedArea().focus(e)
                }
                blur() {
                    this.getTrackedArea().blur()
                }
                select() {
                    this.getTrackedArea().select()
                }
                setCaretPosition(e) {
                    this.getTrackedArea().setCaretPosition(e)
                }
                setSelectionRange(e, t) {
                    this.getTrackedArea().setSelectionRange(e, t)
                }
                isControlledComponent(e) {
                    return void 0 !== e.value && null !== e.value
                }
            }
            c.FOCUS_END = o.Z.FOCUS_END, c.defaultProps = {
                singleLine: !1
            };
            const {
                FOCUS_END: p
            } = c
        },
        "./app/j/components/DeprecatedFormattedTextWithImage.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/components/FormattedText.tsx"),
                o = s("./app/j/components/Image.tsx"),
                r = s("./app/j/lazy/QuestionHintContainerLazy.ts"),
                i = s("./node_modules/react/index.js"),
                l = s("./node_modules/react/jsx-runtime.js");
            const d = (0, n.z)("div")({
                name: "TermTextClicKWrapper",
                class: "tpo8fik"
            });
            class u extends i.Component {
                constructor() {
                    super(...arguments), this.renderFormattedText = () => {
                        const {
                            imageUrl: e,
                            lang: t,
                            text: s
                        } = this.props;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [void 0 !== s && t ? (0, l.jsx)(a.Z, {
                                lang: t,
                                maxLength: this.props.maxLength,
                                richText: this.props.richText,
                                text: s,
                                ...this.props
                            }) : null, e ? (0, l.jsx)("div", {
                                className: "FormattedTextWithImage-image",
                                children: (0, l.jsx)(o.Z, {
                                    alt: this.props.text,
                                    clickToZoom: this.props.clickToZoom,
                                    shape: this.props.imageShape,
                                    size: this.props.imageSize,
                                    src: e
                                })
                            }) : null]
                        })
                    }, this.renderFormattedTextWithQuestionHint = () => {
                        const {
                            handleTermTextClick: e,
                            questionHint: t
                        } = this.props;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(d, {
                                onClick: e,
                                children: this.renderFormattedText()
                            }), (0, l.jsx)(r.Z, {
                                hint: null != t ? t : null
                            })]
                        })
                    }
                }
                render() {
                    const {
                        handleTermTextClick: e,
                        questionHint: t
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: "FormattedTextWithImage",
                        onClick: t ? () => {} : e,
                        children: t ? this.renderFormattedTextWithQuestionHint() : this.renderFormattedText()
                    })
                }
            }
            s("./.linaria-cache/app/j/components/DeprecatedFormattedTextWithImage.linaria.css")
        },
        "./app/j/components/DeprecatedModeLayout.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => y
            });
            var n = s("./app/j/ads/components/studyModes/AdModal.tsx"),
                a = s("./node_modules/classnames/index.js"),
                o = s.n(a),
                r = s("./app/j/components/EmbedFooter.tsx"),
                i = s("./app/j/components/MobileHeaderBreakpoint.tsx"),
                l = s("./app/j/components/ModePortal.tsx"),
                d = s("./app/j/components/UIContainer.tsx"),
                u = s("./app/j/header/constants.ts"),
                c = s("./node_modules/matchmedia/index.js"),
                p = s.n(c),
                m = s("./node_modules/react/index.js"),
                g = s("./app/j/utils/EventListener.ts"),
                h = s("./app/j/utils/ScrollInfo.ts"),
                _ = s("./app/j/utils/UserAgentHelper.ts"),
                S = s("./node_modules/react/jsx-runtime.js");
            const E = e => (0, S.jsx)(i.Z, {
                above: e.aboveMediumBreakpoint,
                children: (0, S.jsx)("div", {
                    className: "ModeLayout-ad",
                    children: e.unit
                })
            });
            class y extends m.Component {
                constructor(e) {
                    super(e), this.state = {
                        appSmartBannerIsShown: !1,
                        scrollTop: 0
                    }, this.handleScroll = () => {
                        const e = h.Z.getScrollTop();
                        (e <= u.Pp || this.state.scrollTop <= u.Pp) && this.setState({
                            scrollTop: e
                        })
                    }, this.handleResize = () => {
                        this.checkForSmartBannerApp()
                    }, this.handleAdSkip = () => {
                        const {
                            onCloseAdModal: e
                        } = this.props;
                        void 0 !== e && e()
                    }, this.renderControls = e => {
                        const t = e ? {} : {
                            top: this.props.isEmbedding ? 0 : Math.max(0, u.Pp - this.state.scrollTop)
                        };
                        return this.props.showAdModal && (t.display = "none"), (0, S.jsx)("div", {
                            className: "ModeLayout-controls",
                            style: t,
                            children: this.props.controls
                        })
                    }, e.isEmbedding || (this._scrollListener = g.Z.listen(window, "scroll", (() => window.requestAnimationFrame(this.handleScroll))), this._resizeListener = g.Z.listen(window, "resize", (() => window.requestAnimationFrame(this.handleResize))))
                }
                UNSAFE_componentWillMount() {
                    this._timeout = window.setTimeout((() => {
                        this.checkForSmartBannerApp()
                    }), 200)
                }
                componentWillUnmount() {
                    this._scrollListener && this._scrollListener.remove(), this._resizeListener && this._resizeListener.remove(), this._timeout && clearTimeout(this._timeout)
                }
                renderPortal() {
                    return (0, S.jsx)(l.Z, {
                        onMount: this.props.onMount,
                        children: this.props.children
                    })
                }
                renderContent(e) {
                    return (0, S.jsxs)(S.Fragment, {
                        children: [(0, S.jsx)(i.Z, {
                            children: e => this.renderControls(e)
                        }), (0, S.jsx)("div", {
                            className: e,
                            children: this.props.shouldUsePortal ? this.renderPortal() : this.props.children
                        }), this.props.mWebAdUnit ? (0, S.jsx)(E, {
                            aboveMediumBreakpoint: !1,
                            unit: this.props.mWebAdUnit
                        }) : null, this.props.adUnit ? (0, S.jsx)(E, {
                            aboveMediumBreakpoint: !0,
                            unit: this.props.adUnit
                        }) : null]
                    })
                }
                render() {
                    const e = o()("ModeLayout", {
                            "is-fullWidth": this.props.shouldBeFullWidth || this.props.showAdModal,
                            "is-fullHeight": this.props.shouldBeFullHeight,
                            "is-showingAdz": !!this.props.adUnit,
                            "is-showingSmartBanner": this.state.appSmartBannerIsShown,
                            "is-usingDarkBackground": this.props.shouldUseDarkBackground,
                            "is-showingTasks": this.props.shouldHaveNoPadding
                        }),
                        t = o()("ModeLayout-content", {
                            "is-fullHorizontalBleed": this.props.isFullHorizontalBleed,
                            "is-showingTasks": this.props.shouldHaveNoPadding
                        });
                    return (0, S.jsxs)("div", {
                        className: e,
                        children: [(0, S.jsx)(d.Z, {
                            children: this.props.showAdModal ? (0, S.jsx)(n.Z, {
                                onSkip: this.handleAdSkip
                            }) : this.renderContent(t)
                        }), this.props.isEmbedding ? (0, S.jsx)(r.Z, {
                            studyableId: this.props.studyableId,
                            studyablePath: this.props.studyablePath
                        }) : null]
                    })
                }
                checkForSmartBannerApp() {
                    const e = window.innerHeight !== window.document.documentElement.clientHeight && (0, _.au)() && p()("all and (orientation:portrait)").matches;
                    this.setState({
                        appSmartBannerIsShown: e
                    })
                }
            }
            y.defaultProps = {
                isEmbedding: !1,
                isFullHorizontalBleed: !1,
                onMount: () => {},
                shouldBeFullHeight: !1,
                shouldBeFullWidth: !1,
                shouldHaveNoPadding: !1,
                shouldUseDarkBackground: !1,
                shouldUsePortal: !0,
                showAdModal: !1
            }
        },
        "./app/j/components/DeprecatedSpecialCharacterTextarea.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => S
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./app/j/assembly/AssemblyBreakpoint.tsx"),
                o = s("./node_modules/classnames/index.js"),
                r = s.n(o),
                i = s("./app/j/components/UITextarea.tsx"),
                l = s("./node_modules/nullthrows/nullthrows.js"),
                d = s.n(l),
                u = s("./node_modules/react/index.js"),
                c = s("./app/j/rich_text/components/SpecialCharactersToolbar.tsx"),
                p = s("./app/j/study-modes/legacy-common/components/SpecialCharacterButtonGroup.tsx"),
                m = s("./app/j/utils/AccentHelper.ts");
            s("./node_modules/core-js/modules/es.array.sort.js");
            var g = s("./app/j/utils/EventListener.ts"),
                h = s("./app/j/utils/shallow-equal.ts"),
                _ = s("./node_modules/react/jsx-runtime.js");
            class S extends u.Component {
                constructor() {
                    super(...arguments), this.state = {
                        isClicking: !1,
                        isComponentFocused: !1
                    }, this.handleBlur = e => {
                        this.state.isClicking || this.setState({
                            isComponentFocused: !1
                        }), this.props.onBlur && this.props.onBlur(e)
                    }, this.handleComponentFocus = e => {
                        this.setState({
                            isComponentFocused: !0
                        }), this.props.onFocus && this.props.onFocus(e)
                    }, this.handleMouseUp = e => {
                        this.setState({
                            isClicking: !1
                        }), this.props.onMouseUp && this.props.onMouseUp(e)
                    }, this.handleMouseDown = e => {
                        this.setState({
                            isClicking: !0
                        }), this.props.onNativeMouseDown && this.props.onNativeMouseDown(e)
                    }, this.handleAccent = e => {
                        const t = d()(this.textareaRef.current, "Could not find text area component"),
                            s = this.getSelectionStart(),
                            n = this.getSelectionEnd();
                        if (-1 === n) return;
                        const a = this.getTextarea();
                        if (!a) return;
                        const o = a.value || "",
                            r = o.slice(0, s) + e + o.slice(n),
                            i = window.document.createEvent("Event");
                        i.initEvent("input", !0, !0);
                        const l = a,
                            u = Object.getOwnPropertyDescriptor(l.constructor.prototype, "value");
                        null != u && u.set ? u.set.call(l, r) : l.value = r, l.dispatchEvent(i), this.setState({}, (() => t.setCaretPosition(s + e.length)))
                    }, this.wrapperRef = u.createRef(), this.textareaRef = u.createRef()
                }
                componentDidMount() {
                    this.wrapperRef.current && (this.wrapperMouseDownListener = g.Z.listen(this.wrapperRef.current, "mousedown", this.handleMouseDown))
                }
                shouldComponentUpdate(e, t) {
                    return !(0, h.Z)(this.props, e, ["languageCodes"]) || (!(0, h.Z)(this.state, t) || ! function(e, t) {
                        if (null == e || null == t) return e === t;
                        if (e.length !== t.length) return !1;
                        e.sort(), t.sort();
                        for (let s = 0; s < e.length; ++s)
                            if (e[s] !== t[s]) return !1;
                        return !0
                    }(this.props.languageCodes, e.languageCodes))
                }
                componentWillUnmount() {
                    this.wrapperMouseDownListener && (this.wrapperMouseDownListener.remove(), this.wrapperMouseDownListener = null)
                }
                getCharactersByLang() {
                    const e = m.Z.getCharactersByLangForLangs(this.props.languageCodes);
                    if (this.props.specificAccents.length > 0 && this.props.languageCodes.length > 0) {
                        e[this.props.languageCodes[0]] = this.props.specificAccents
                    }
                    return e
                }
                getSelectionStart() {
                    return this.textareaRef.current ? this.textareaRef.current.getSelectionStart() : -1
                }
                getSelectionEnd() {
                    return this.textareaRef.current ? this.textareaRef.current.getSelectionEnd() : -1
                }
                getTextarea() {
                    return this.textareaRef.current ? this.textareaRef.current.getTextarea() : null
                }
                renderAccentsBar() {
                    const e = (0, n.cx)("SpecialCharacterTextarea-accentsBar", c.i, this.props.textAreaVariant && "default" !== this.props.textAreaVariant && "SpecialCharacterTextarea-accentsBar--" + this.props.textAreaVariant);
                    return (0, _.jsx)("div", {
                        className: e,
                        children: (0, _.jsx)("div", {
                            className: "SpecialCharacterTextarea-accentsBarInner",
                            children: (0, _.jsx)("div", {
                                className: "SpecialCharacterTextarea-accentBarWrap",
                                children: (0, _.jsx)(p.Z, {
                                    buttonSize: "small",
                                    charactersByLang: this.getCharactersByLang(),
                                    onClickButton: this.handleAccent
                                })
                            })
                        })
                    })
                }
                renderAccentButtonsInline() {
                    return (0, _.jsx)(p.Z, {
                        buttonSize: "small",
                        charactersByLang: this.getCharactersByLang(),
                        compact: !0,
                        onClickButton: this.handleAccent
                    })
                }
                renderAccentsDropdown() {
                    return this.state.isComponentFocused && this.containsAccentLanguage() ? (0, _.jsx)("div", {
                        className: "amdwqu",
                        children: this.renderAccentsBar()
                    }) : null
                }
                render() {
                    const {
                        languageCodes: e,
                        onFocus: t,
                        specificAccents: s,
                        variant: n,
                        textAreaVariant: o,
                        ...l
                    } = this.props, d = r()("SpecialCharacterTextarea", {
                        "is-focused": this.state.isComponentFocused
                    });
                    return (0, _.jsxs)("div", {
                        className: d,
                        onMouseUp: this.handleMouseUp,
                        ref: this.wrapperRef,
                        children: [(0, _.jsx)(i.Z, {
                            ...l,
                            onBlur: this.handleBlur,
                            onFocus: this.handleComponentFocus,
                            ref: this.textareaRef,
                            variant: o
                        }), (0, _.jsx)(a.ZP, {
                            lowerBound: "s",
                            children: "inline" === this.props.variant ? this.renderAccentButtonsInline() : this.renderAccentsDropdown()
                        })]
                    })
                }
                focus(e) {
                    const t = d()(this.textareaRef.current, "Missing textareaRef in focus(number)");
                    this.setState({
                        isComponentFocused: !0
                    }), t.focus(e)
                }
                blur() {
                    const e = d()(this.textareaRef.current, "Missing textareaRef in blur()");
                    this.setState({
                        isComponentFocused: !1
                    }), e.blur()
                }
                select() {
                    d()(this.textareaRef.current, "Missing textareaRef in select()").select()
                }
                setCaretPosition(e) {
                    d()(this.textareaRef.current, "Missing textareaRef in setCaretPosition(number)").setCaretPosition(e)
                }
                setSelectionRange(e, t) {
                    d()(this.textareaRef.current, "Missing textarea in setSelectionRange(start, end)").setSelectionRange(e, t)
                }
                containsAccentLanguage() {
                    return m.Z.containsAccentLanguage(this.props.languageCodes)
                }
            }
            S.defaultProps = {
                ...i.Z.defaultProps,
                languageCodes: [],
                specificAccents: [],
                type: "autoExpand",
                variant: "dropdown"
            }, s("./.linaria-cache/app/j/components/DeprecatedSpecialCharacterTextarea.linaria.css")
        },
        "./app/j/components/EmbedFooter.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => _
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/AssemblyBreakpoint.tsx"),
                o = s("./app/j/components/SiteLogo.tsx"),
                r = s("./app/j/config/enums.ts"),
                i = s("./app/j/i18n/useTranslation.ts"),
                l = s("./app/j/utils/ModeHelper.ts"),
                d = s("./app/j/utils/redirect.ts"),
                u = s("./node_modules/react/jsx-runtime.js");
            const c = (0, n.z)("div")({
                    name: "Wrapper",
                    class: "w1o70emd"
                }),
                p = (0, n.z)("select")({
                    name: "Dropdown",
                    class: "d1tdrq3f"
                }),
                m = (0, n.z)("div")({
                    name: "Branding",
                    class: "bdd69rs"
                }),
                g = (0, n.z)("span")({
                    name: "CallToAction",
                    class: "ciwdi05"
                }),
                h = "f1k0xbqf";

            function _(e) {
                const {
                    t
                } = (0, i.ZP)(), s = "undefined" == typeof window || e.studyablePath.startsWith("https://") ? e.studyablePath : window.location.origin + e.studyablePath;
                return (0, u.jsxs)(c, {
                    children: [(0, u.jsxs)(p, {
                        "aria-label": t("embed_footer.choose_a_study_mode"),
                        onChange: s => {
                            if (s.target.value === t("embed_footer.choose_a_study_mode")) return;
                            const n = (0, l.$2)(e.studyableId, parseInt(s.target.value, 10));
                            (0, d.ZP)(n + "/embed")
                        },
                        children: [(0, u.jsx)("option", {
                            children: t("embed_footer.choose_a_study_mode")
                        }), (0, u.jsx)("option", {
                            value: r.StudyModeType.SCATTER,
                            children: t("study_mode.name.scatter")
                        }), (0, u.jsx)("option", {
                            value: r.StudyModeType.LEARNING_ASSISTANT,
                            children: t("study_mode.name.learning_assistant")
                        }), (0, u.jsx)("option", {
                            value: r.StudyModeType.TEST,
                            children: t("study_mode.name.test")
                        }), (0, u.jsx)("option", {
                            value: r.StudyModeType.FLASHCARDS,
                            children: t("study_mode.name.flashcards")
                        }), (0, u.jsx)("option", {
                            value: r.StudyModeType.SPELLER,
                            children: t("study_mode.name.speller")
                        })]
                    }), (0, u.jsxs)(m, {
                        children: [(0, u.jsx)("a", {
                            href: "/",
                            target: "_top",
                            children: (0, u.jsx)(o.Z, {
                                className: h
                            })
                        }), (0, u.jsxs)("a", {
                            href: s,
                            target: "_top",
                            children: [(0, u.jsx)(a.ZP, {
                                lowerBound: "xs",
                                children: (0, u.jsx)(g, {
                                    children: t("embed_footer.view_this_study_set_long")
                                })
                            }), (0, u.jsx)(a.ZP, {
                                upperBound: "xs",
                                children: (0, u.jsx)(g, {
                                    children: t("embed_footer.view_this_study_set_short")
                                })
                            })]
                        })]
                    })]
                })
            }
            s("./.linaria-cache/app/j/components/EmbedFooter.linaria.css")
        },
        "./app/j/components/FormattedText.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = (s("./node_modules/react/index.js"), s("./node_modules/react-textfit/lib/index.js")),
                r = s("./app/j/rich_text/components/PMDocument.tsx"),
                i = s("./app/j/utils/ellipsis.ts"),
                l = s("./node_modules/react/jsx-runtime.js");
            const d = /\*([^*\n\r]+)\*/g,
                u = /\*[^*\n\r]+\*/g,
                c = /(\r\n|\n\r|\r|\n)/;

            function p(e) {
                let {
                    text: t,
                    maxLength: s,
                    lang: n
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: t ? function(e) {
                        let t = e;
                        s && (t = (0, i.Z)(t, s));
                        let a = 0;
                        return t.split(c).map((e => e.match(c) ? (0, l.jsx)("br", {}, "key-" + a++) : "math" !== n && "chem" !== n ? function(e) {
                            const t = e.split(u),
                                s = [];
                            let n = 0;
                            t[n] && s.push(t[n]), n += 1;
                            let a = d.exec(e);
                            for (; a;) s.push((0, l.jsx)("b", {
                                children: a[1]
                            }, "md-" + n)), t[n] && s.push(t[n]), n++, a = d.exec(e);
                            return s
                        }(e) : e))
                    }(t) : "..."
                })
            }

            function m(e) {
                let {
                    className: t,
                    lang: s,
                    maxLength: n,
                    onClick: i,
                    richText: d,
                    text: u,
                    textfit: c
                } = e;
                const m = a()("FormattedText", "notranslate", t, "lang-" + s),
                    g = "undefined" != typeof window && d ? (0, l.jsx)(r.Z, {
                        pmJson: d
                    }) : (0, l.jsx)(p, {
                        lang: s,
                        maxLength: n,
                        text: u
                    });
                if (c) {
                    const e = "boolean" == typeof c ? {} : c;
                    return (0, l.jsx)(o.ZP, {
                        "aria-label": u,
                        className: m,
                        onClick: i,
                        ...e,
                        children: g
                    })
                }
                return (0, l.jsx)("div", {
                    "aria-label": u,
                    className: m,
                    onClick: i,
                    children: g
                })
            }
        },
        "./app/j/components/MobileHeaderBreakpoint.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i,
                z: () => r
            });
            var n = s("./app/j/components/UIBreakpoint.tsx"),
                a = s("./node_modules/react/index.js"),
                o = s("./node_modules/react/jsx-runtime.js");
            const r = "s";
            class i extends a.PureComponent {
                render() {
                    return (0, o.jsx)(n.Z, {
                        above: this.props.above ? r : void 0,
                        below: this.props.above ? void 0 : r,
                        children: this.props.children
                    })
                }
            }
        },
        "./app/j/components/ModeControls.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => T
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./app/j/assembly/AssemblyIcon.tsx"),
                a = s("./node_modules/classnames/index.js"),
                o = s.n(a),
                r = s("./app/j/components/MobileHeaderBreakpoint.tsx"),
                i = s("./app/j/components/T.tsx"),
                l = s("./app/j/components/UIButton.tsx"),
                d = s("./app/j/components/UIIcon.tsx"),
                u = s("./app/j/components/UILink.tsx"),
                c = s("./app/j/components/UIModeIcon.tsx"),
                p = s("./app/j/components/UIOverlayTrigger.tsx"),
                m = s("./app/j/global/Quizlet.ts"),
                g = s("./app/j/i18n/$t.ts"),
                h = s("./node_modules/react/index.js"),
                _ = s("./app/j/signup/components/AuthPromptModal.tsx"),
                S = s("./app/j/signup/types/auth.ts"),
                E = s("./app/j/utils/is-element-active.ts"),
                y = s("./app/j/utils/log-page-action.ts"),
                f = s("./app/j/utils/ModeHelper.ts"),
                j = s("./node_modules/react/jsx-runtime.js");
            class T extends h.Component {
                constructor() {
                    super(...arguments), this.state = {
                        isSignupModalOpen: !1,
                        signupModalHasBeenSeen: !1
                    }, this.handleClickOptions = e => {
                        const t = e.currentTarget;
                        (0, E.Z)(t) && t.blur(), this.props.onClickOptions && this.props.onClickOptions()
                    }, this.handleSignupCurtainModalClose = () => {
                        this.setState({
                            isSignupModalOpen: !1
                        })
                    }, this.onBackClick = e => {
                        this.state.signupModalHasBeenSeen || m.default.user || !f.J.includes(this.props.modeType) ? this.props.onClickBack && this.props.onClickBack(e) : (e.preventDefault(), this.setState({
                            isSignupModalOpen: !0
                        }), this.setState({
                            signupModalHasBeenSeen: !0
                        })), (0, y.Z)("study_mode_back_button_clicked")
                    }
                }
                renderCustomHeaderActions(e) {
                    return (0, j.jsx)("div", {
                        className: "ModeControls-modeHeaderOptions",
                        children: e.map(((e, t) => (0, j.jsx)("span", {
                            className: "ModeControls-modeHeaderOption",
                            children: e
                        }, t)))
                    })
                }
                renderHeaderOptionsAction() {
                    const e = (0, j.jsx)(u.Z, {
                        onClick: this.handleClickOptions,
                        variant: "inverted",
                        children: (0, j.jsx)(d.Z, {
                            className: "ModeControls-modeHeaderIcon",
                            icon: "options"
                        })
                    });
                    return (0, j.jsx)("div", {
                        className: "ModeControls-modeHeaderOptions",
                        children: this.props.optionsOverlay ? (0, j.jsx)(p.Z, {
                            className: "ModeControls-optionsOverlay",
                            overlay: this.props.optionsOverlay,
                            position: "bottom right",
                            triggerAction: "click",
                            children: e
                        }) : e
                    })
                }
                renderHeaderActions() {
                    return this.props.customHeaderActions ? this.renderCustomHeaderActions(this.props.customHeaderActions) : this.props.shouldShowOptionsButton ? this.renderHeaderOptionsAction() : null
                }
                renderHeader() {
                    const {
                        shouldCombineActionsAndProgress: e
                    } = this.props;
                    return (0, j.jsxs)("div", {
                        className: "ModeControls-header",
                        children: [(0, j.jsxs)("div", {
                            className: o()("ModeControls-modeHeader", {
                                "ModeControls-actionsAndProgressCombined": e
                            }),
                            children: [(0, j.jsx)("div", {
                                className: "ModeControls-modeHeaderBack",
                                children: (0, j.jsx)(u.Z, {
                                    onClick: this.onBackClick,
                                    to: this.props.studyablePath,
                                    variant: "inverted",
                                    children: (0, j.jsx)(n.ZP, {
                                        icon: "arrow-back-ios"
                                    })
                                })
                            }), e && this.props.progress ? this.renderProgress() : null, this.renderHeaderActions()]
                        }), !e && this.props.progress ? this.renderProgress() : null]
                    })
                }
                renderSidebar() {
                    const e = (0, j.jsx)("div", {
                            className: "ModeControls-back",
                            children: (0, j.jsxs)(u.Z, {
                                onClick: this.onBackClick,
                                to: this.props.studyablePath,
                                children: [(0, j.jsx)(n.ZP, {
                                    icon: "arrow-back-ios",
                                    size: n.i.Small
                                }), (0, j.jsx)("span", {
                                    className: "ModeControls-backText",
                                    children: this.props.backText || (0, j.jsx)(i.Z, {
                                        id: "modes.mode_controls.back_button"
                                    })
                                })]
                            })
                        }),
                        t = (0, j.jsxs)("div", {
                            "aria-labelledby": "modeControls-modeLabel-" + this.props.modeName,
                            className: "ModeControls-modeName",
                            children: [(0, j.jsx)(c.ZP, {
                                mode: this.props.modeType,
                                variant: "small"
                            }), (0, j.jsx)("span", {
                                id: "modeControls-modeLabel-" + this.props.modeName,
                                children: this.props.modeName
                            }), this.props.shouldBlurTopAndBottom ? (0, j.jsx)("div", {
                                className: "ModeControls-blurTop"
                            }) : null]
                        });
                    return (0, j.jsxs)("aside", {
                        className: "ModeControls-sidebar",
                        children: [e, (0, j.jsxs)("div", {
                            className: "ModeControls-main",
                            children: [t, this.props.progress ? this.renderProgress() : null, this.renderSidebarActions()]
                        })]
                    })
                }
                renderAuthPromptModal() {
                    return m.default.user ? null : (0, j.jsx)(_.q, {
                        barrierType: "curtain",
                        includeSubtitle: !1,
                        isOpen: this.state.isSignupModalOpen,
                        onClose: this.handleSignupCurtainModalClose,
                        placement: S.V.STUDY_MODE_BACK_BUTTON,
                        redirectPath: this.props.studyablePath || "/latest",
                        signupOrigin: this.props.signupOrigin,
                        titleOverride: (0, g.Z)("study_modes_signup_curtain_modal.back_button.title")
                    })
                }
                renderProgress() {
                    return (0, j.jsx)("div", {
                        className: "ModeControls-progress",
                        children: h.Children.map(this.props.progress, ((e, t) => (0, j.jsx)("div", {
                            className: "ModeControls-progressSection",
                            children: e
                        }, "progress-" + t)))
                    })
                }
                renderSidebarOptionsAction() {
                    const e = (0, j.jsxs)(l.Z, {
                        "aria-label": (0, g.Z)("modes.mode_controls.options_button"),
                        onClick: this.handleClickOptions,
                        variant: "whiteBorder",
                        width: "fill",
                        children: [(0, j.jsx)(d.Z, {
                            icon: "options"
                        }), (0, j.jsx)(i.Z, {
                            id: "modes.mode_controls.options_button"
                        })]
                    });
                    return (0, j.jsx)("div", {
                        className: "ModeControls-action",
                        children: this.props.optionsOverlay ? (0, j.jsx)(p.Z, {
                            className: "ModeControls-optionsOverlay",
                            overlay: this.props.optionsOverlay,
                            position: "top left",
                            triggerAction: "click",
                            children: e
                        }) : e
                    }, "action-options")
                }
                renderSidebarActions() {
                    return (0, j.jsxs)("div", {
                        className: "ModeControls-actions",
                        children: [this.props.shouldBlurTopAndBottom ? (0, j.jsx)("div", {
                            className: "ModeControls-blurBottom"
                        }) : null, h.Children.map(this.props.actions, ((e, t) => (0, j.jsx)("div", {
                            className: "ModeControls-action",
                            children: e
                        }, "action-" + t))), this.props.shouldShowOptionsButton ? this.renderSidebarOptionsAction() : null]
                    })
                }
                render() {
                    return (0, j.jsxs)("div", {
                        className: "ModeControls",
                        children: [(0, j.jsx)(r.Z, {
                            children: e => e ? this.renderHeader() : this.renderSidebar()
                        }), this.renderAuthPromptModal()]
                    })
                }
            }
            T.defaultProps = {
                shouldBlurTopAndBottom: !1,
                shouldCombineActionsAndProgress: !1,
                shouldShowOptionsButton: !0
            }
        },
        "./app/j/components/ModeLayout.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => I
            });
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/@linaria/react/lib/index.js"),
                o = s("./app/j/ads/components/studyModes/AdModal.tsx"),
                r = s("./app/j/assembly/foundations/Spacing.ts"),
                i = s("./app/j/components/EmbedFooter.tsx"),
                l = s("./app/j/components/MobileHeaderBreakpoint.tsx"),
                d = s("./app/j/components/ModePortal.tsx"),
                u = s("./app/j/config/enums.ts"),
                c = s("./app/j/header/constants.ts"),
                p = s("./node_modules/matchmedia/index.js"),
                m = s.n(p),
                g = s("./node_modules/polished/dist/polished.cjs.js"),
                h = s("./node_modules/react/index.js"),
                _ = s("./app/j/utils/EventListener.ts"),
                S = s("./app/j/utils/ScrollInfo.ts"),
                E = s("./app/j/utils/UserAgentHelper.ts"),
                y = s("./node_modules/react/jsx-runtime.js");
            const f = (0, a.z)("div")({
                    name: "PageContainer",
                    class: "ptc18zm"
                }),
                j = (0, a.z)("div")({
                    name: "Controls",
                    class: "c8mixic"
                }),
                T = (0, a.z)("div")({
                    name: "ContentContainer",
                    class: "cz3cbvv",
                    vars: {
                        "cz3cbvv-0": [e => e.height]
                    }
                }),
                A = (0, a.z)("div")({
                    name: "Content",
                    class: "clarv1u",
                    vars: {
                        "clarv1u-0": [e => {
                            let {
                                studyModeType: t
                            } = e;
                            return t === u.StudyModeType.FLASHCARDS ? 3 : 1
                        }],
                        "clarv1u-1": [e => {
                            let {
                                shouldHaveNoPadding: t
                            } = e;
                            return t ? 0 : r.Ki.Large + " " + r.Ki.Medium + " " + r.Ki.Medium
                        }],
                        "clarv1u-3": [e => {
                            let {
                                shouldShowNewStudyBreak: t,
                                shouldHaveNoPadding: s
                            } = e;
                            return t || s ? 0 : r.Ki.Medium
                        }]
                    }
                }),
                b = (0, a.z)("div")({
                    name: "AdWrapper",
                    class: "a1ijmfr8",
                    vars: {
                        "a1ijmfr8-0": [e => e.studyModeType === u.StudyModeType.FLASHCARDS ? 1 : "auto"],
                        "a1ijmfr8-4": [e => e.studyModeType === u.StudyModeType.FLASHCARDS ? "auto" : "" + (0, g.hO)(170)]
                    }
                }),
                x = e => (0, y.jsx)(l.Z, {
                    above: e.aboveMediumBreakpoint,
                    children: (0, y.jsx)(b, {
                        studyModeType: e.studyModeType,
                        children: e.unit
                    })
                });
            class I extends h.Component {
                constructor(e) {
                    super(e), this.state = {
                        appSmartBannerIsShown: !1,
                        scrollTop: 0
                    }, this.handleScroll = () => {
                        const e = S.Z.getScrollTop();
                        (e <= c.Pp || this.state.scrollTop <= c.Pp) && this.setState({
                            scrollTop: e
                        })
                    }, this.handleResize = () => {
                        this.checkForSmartBannerApp()
                    }, this.handleAdSkip = () => {
                        const {
                            onCloseAdModal: e
                        } = this.props;
                        void 0 !== e && e()
                    }, this.renderControls = () => {
                        const e = (0, n.cx)(this.props.showAdModal ? "iwow2le" : null);
                        return (0, y.jsx)(j, {
                            className: e,
                            children: this.props.controls
                        })
                    }, e.isEmbedding || (this._scrollListener = _.Z.listen(window, "scroll", (() => window.requestAnimationFrame(this.handleScroll))), this._resizeListener = _.Z.listen(window, "resize", (() => window.requestAnimationFrame(this.handleResize))))
                }
                UNSAFE_componentWillMount() {
                    this._timeout = window.setTimeout((() => {
                        this.checkForSmartBannerApp()
                    }), 200)
                }
                componentWillUnmount() {
                    this._scrollListener && this._scrollListener.remove(), this._resizeListener && this._resizeListener.remove(), this._timeout && clearTimeout(this._timeout)
                }
                getViewportHeight() {
                    return window.visualViewport ? (0, g.hO)(window.visualViewport.height) : "100vh"
                }
                getContentHeight() {
                    const {
                        shouldShowNewStudyBreak: e,
                        studyModeType: t
                    } = this.props, s = this.getViewportHeight();
                    return e ? "calc(" + s + " - " + r.Ki.Xxlarge + ")" : t === u.StudyModeType.FLASHCARDS ? "calc(" + s + " - " + r.Ki.Xxlarge + " - " + r.Ki.Xxsmall + ")" : "100%"
                }
                renderPortal() {
                    return (0, y.jsx)(d.Z, {
                        onMount: this.props.onMount,
                        children: this.props.children
                    })
                }
                renderContent() {
                    return (0, y.jsxs)(T, {
                        height: this.getContentHeight(),
                        children: [(0, y.jsx)(A, {
                            shouldHaveNoPadding: this.props.shouldHaveNoPadding || !!this.props.shouldHideEmbedControl,
                            shouldShowNewStudyBreak: this.props.shouldShowNewStudyBreak,
                            studyModeType: this.props.studyModeType,
                            children: this.props.shouldUsePortal ? this.renderPortal() : this.props.children
                        }), this.props.mWebAdUnit ? (0, y.jsx)(x, {
                            aboveMediumBreakpoint: !1,
                            unit: this.props.mWebAdUnit
                        }) : null, this.props.adUnit ? (0, y.jsx)(x, {
                            aboveMediumBreakpoint: !0,
                            studyModeType: this.props.studyModeType,
                            unit: this.props.adUnit
                        }) : null]
                    })
                }
                render() {
                    const e = (0, n.cx)(this.props.showAdModal || this.props.shouldShowNewStudyBreak ? "i1u5o241" : null, this.props.isTaskCardScreen ? "iloaf9o" : null, this.props.adUnit && !this.props.isTaskCardScreen ? "i16pip9e" : null, this.state.appSmartBannerIsShown ? "i1fm3tn7" : null);
                    return (0, y.jsxs)(f, {
                        className: e,
                        children: [this.props.shouldHideEmbedControl ? null : this.renderControls(), this.props.showAdModal ? (0, y.jsx)(o.Z, {
                            onSkip: this.handleAdSkip
                        }) : this.renderContent(), this.props.isEmbedding && !this.props.shouldHideEmbedControl ? (0, y.jsx)(i.Z, {
                            studyableId: this.props.studyableId,
                            studyablePath: this.props.studyablePath
                        }) : null]
                    })
                }
                checkForSmartBannerApp() {
                    const e = window.innerHeight !== window.document.documentElement.clientHeight && (0, E.au)() && m()("all and (orientation:portrait)").matches;
                    this.setState({
                        appSmartBannerIsShown: e
                    })
                }
            }
            I.defaultProps = {
                isEmbedding: !1,
                isTaskCardScreen: !1,
                isTaskRoundCheckpointScreen: !1,
                onMount: () => {},
                shouldBeFullHeight: !1,
                shouldHaveNoPadding: !1,
                shouldShowNewStudyBreak: !1,
                shouldUseDarkBackground: !1,
                shouldUsePortal: !0,
                showAdModal: !1
            }, s("./.linaria-cache/app/j/components/ModeLayout.linaria.css")
        },
        "./app/j/components/ModePortal.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var n = s("./node_modules/react/index.js");
            class a extends n.Component {
                componentDidMount() {
                    this.props.onMount.call()
                }
                shouldComponentUpdate() {
                    return !1
                }
                render() {
                    return this.props.children
                }
            }
        },
        "./app/j/components/SiteLogo.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = s("./app/j/assembly/AssemblyIcon.tsx"),
                a = s("./node_modules/classnames/index.js"),
                o = s.n(a),
                r = s("./app/j/components/PremiumLogo/PremiumLogoColor.ts"),
                i = s("./app/j/components/PremiumLogo/PremiumLogoPlus.tsx"),
                l = s("./node_modules/react/jsx-runtime.js");

            function d() {
                return (0, l.jsxs)("svg", {
                    "data-testid": "FullLogo",
                    fill: "currentColor",
                    viewBox: "0 0 86 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M33.6222 6.16613H30.1458C30.0757 6.16613 30.0088 6.19385 29.9592 6.24402C29.9096 6.29352 29.8818 6.36085 29.8818 6.43148V13.777C29.8818 15.6035 28.7446 16.2431 27.4255 16.2431C26.1064 16.2431 24.9693 15.5586 24.9693 13.777V6.43082C24.9693 6.36085 24.9415 6.29286 24.8919 6.24336C24.8422 6.19385 24.7754 6.16547 24.7053 6.16547H21.2289C21.1588 6.16547 21.092 6.19319 21.0424 6.24336C20.9927 6.29286 20.965 6.36019 20.965 6.43082V14.1024C20.965 18.0287 24.0133 19.8545 27.4222 19.8545C30.8311 19.8545 33.8795 18.028 33.8795 14.1024V6.43082C33.8795 6.36151 33.8524 6.29484 33.8041 6.24534C33.7565 6.19583 33.691 6.16745 33.6222 6.16613Z"
                    }), (0, l.jsx)("path", {
                        d: "M60.7795 1.42407H57.3495C57.2039 1.42407 57.0862 1.54289 57.0862 1.68877V19.1456C57.0862 19.2921 57.2039 19.4103 57.3495 19.4103H60.7795C60.9251 19.4103 61.0428 19.2915 61.0428 19.1456V1.68943C61.0428 1.54289 60.9251 1.42407 60.7795 1.42407Z"
                    }), (0, l.jsx)("path", {
                        d: "M55.1723 6.16595H43.1165C43.0463 6.16595 42.9795 6.19368 42.9299 6.24384C42.8803 6.29335 42.8525 6.36068 42.8525 6.43131V9.34496C42.8525 9.41493 42.8803 9.48292 42.9299 9.53243C42.9795 9.58193 43.0463 9.61032 43.1165 9.61032H48.9545L41.8648 18.9817C41.8351 19.0206 41.8172 19.0675 41.8126 19.117C41.8079 19.1658 41.8172 19.2153 41.839 19.2596C41.8609 19.3038 41.8946 19.3407 41.9363 19.3672C41.9779 19.3936 42.0262 19.4068 42.0752 19.4068H54.7145C54.7847 19.4068 54.8515 19.379 54.9011 19.3295C54.9507 19.28 54.9785 19.2127 54.9785 19.1421V16.2284C54.9785 16.1584 54.9507 16.0911 54.9011 16.0409C54.8515 15.9914 54.7847 15.9631 54.7145 15.9631H48.4127L55.3827 6.58841C55.4118 6.54881 55.429 6.5026 55.4336 6.45375C55.4376 6.40491 55.4283 6.35606 55.4065 6.31249C55.3847 6.26893 55.3509 6.23196 55.3099 6.20622C55.2689 6.17981 55.2206 6.16595 55.1723 6.16595Z"
                    }), (0, l.jsx)("path", {
                        d: "M85.7401 6.20447H83.7926V1.68943C83.7926 1.61946 83.7648 1.55147 83.7152 1.50196C83.6655 1.45246 83.5987 1.42407 83.5286 1.42407H80.1025C80.0324 1.42407 79.9656 1.4518 79.9159 1.50196C79.8663 1.55147 79.8385 1.6188 79.8385 1.68943V6.20447H77.9042C77.8341 6.20447 77.7673 6.23219 77.7177 6.28236C77.668 6.33187 77.6403 6.3992 77.6403 6.46983V9.38348C77.6403 9.45345 77.668 9.52078 77.7177 9.57094C77.7673 9.62045 77.8341 9.64817 77.9042 9.64817H79.8346V19.1436C79.8346 19.2136 79.8624 19.2809 79.912 19.3311C79.9616 19.3806 80.0284 19.409 80.0985 19.409H83.5246C83.5948 19.409 83.6616 19.3812 83.7112 19.3311C83.7608 19.2816 83.7886 19.2142 83.7886 19.1436V9.65081H85.7362C85.8063 9.65081 85.8731 9.62309 85.9227 9.57358C85.9723 9.52408 86.0001 9.45675 86.0001 9.38612V6.47181C86.0008 6.40184 85.9736 6.33451 85.9254 6.28434C85.8764 6.23417 85.8102 6.20579 85.7401 6.20447Z"
                    }), (0, l.jsx)("path", {
                        d: "M39.9663 6.16595H36.5614C36.4158 6.16595 36.2981 6.28477 36.2981 6.43065V19.146C36.2981 19.2926 36.4158 19.4107 36.5614 19.4107H39.9663C40.1119 19.4107 40.2296 19.2919 40.2296 19.146V6.43065C40.2296 6.28477 40.1119 6.16595 39.9663 6.16595Z"
                    }), (0, l.jsx)("path", {
                        d: "M38.2634 0.000134583C37.8123 0.00607542 37.3723 0.146015 36.9992 0.402131C36.6261 0.658247 36.337 1.01932 36.1677 1.4398C35.9983 1.86028 35.9553 2.32168 36.046 2.76658C36.1359 3.21149 36.3549 3.61942 36.6744 3.93957C36.9939 4.25972 37.4008 4.47821 37.844 4.56732C38.2866 4.65643 38.7457 4.6122 39.1638 4.43992C39.5819 4.26764 39.9398 3.97587 40.1931 3.60028C40.4465 3.22469 40.5841 2.78243 40.5887 2.32828C40.5914 2.02134 40.5325 1.71638 40.4167 1.43254C40.301 1.1487 40.1296 0.8906 39.9133 0.673429C39.697 0.456919 39.4396 0.285295 39.1565 0.169778C38.872 0.0542622 38.5691 -0.00316588 38.2634 0.000134583Z"
                    }), (0, l.jsx)("path", {
                        d: "M10.0515 0.887961C8.59746 0.792248 7.14142 1.03648 5.79651 1.60152C4.45227 2.16656 3.25621 3.03656 2.30293 4.1442C1.34966 5.25184 0.662983 6.56542 0.299137 7.9833C-0.0647083 9.40118 -0.0971237 10.8851 0.204537 12.3175C0.506198 13.7505 1.13466 15.0932 2.03898 16.2411C2.94396 17.389 4.10033 18.3111 5.41944 18.9342C6.73788 19.558 8.18202 19.8656 9.63872 19.8346C11.0954 19.8029 12.525 19.4333 13.8163 18.7534C13.8573 18.7323 13.9037 18.7224 13.95 18.725C13.9963 18.7276 14.0413 18.7422 14.0796 18.7679C14.3535 18.9514 14.6393 19.1158 14.935 19.2603C15.9597 19.7587 17.085 20.0115 18.2228 19.9996C18.293 19.9996 18.3598 19.9719 18.4094 19.9224C18.459 19.8729 18.4868 19.8056 18.4868 19.7349V16.5163C18.4874 16.453 18.4663 16.3922 18.4259 16.3434C18.3856 16.2945 18.33 16.2622 18.2678 16.2516C17.9648 16.2034 17.6685 16.1183 17.386 15.9975C17.3509 15.9816 17.3198 15.9592 17.2947 15.9302C17.2696 15.9011 17.251 15.8675 17.2404 15.8305C17.2299 15.7935 17.2272 15.7552 17.2325 15.717C17.2378 15.6793 17.2517 15.643 17.2722 15.6107C18.1924 14.2265 18.7342 12.6231 18.842 10.9623C18.9505 9.30151 18.6211 7.64071 17.8881 6.14758C17.1551 4.65445 16.0444 3.38245 14.6664 2.45766C13.2891 1.53353 11.6935 0.989616 10.0409 0.88202L10.0515 0.887961ZM3.7259 10.353C3.72458 9.21702 4.05865 8.10542 4.68579 7.16016C5.31293 6.21491 6.20534 5.47759 7.24925 5.04193C8.29316 4.60626 9.44291 4.49207 10.5516 4.7132C11.6604 4.93433 12.6791 5.48155 13.4789 6.28422C14.2787 7.08755 14.8232 8.11136 15.0435 9.2256C15.2644 10.3398 15.1507 11.495 14.718 12.5452C14.2854 13.5948 13.5524 14.4918 12.6117 15.1229C11.6716 15.7539 10.5662 16.0899 9.43563 16.0892C7.92137 16.0892 6.46863 15.4853 5.39761 14.4093C4.32658 13.3334 3.72326 11.8745 3.72193 10.3524L3.7259 10.353Z"
                    }), (0, l.jsx)("path", {
                        d: "M69.4721 5.62565C68.3078 5.71476 67.1832 6.09102 66.1988 6.72207C65.2145 7.35311 64.4001 8.21916 63.8285 9.2423C63.257 10.2661 62.946 11.4153 62.9236 12.589C62.9011 13.7626 63.167 14.9231 63.6982 15.968C64.2294 17.0129 65.01 17.91 65.9693 18.5787C66.9292 19.2473 68.0379 19.6678 69.1982 19.8018C70.3586 19.9358 71.5335 19.78 72.619 19.3477C73.7046 18.9153 74.6672 18.2202 75.4207 17.3232C75.4438 17.2961 75.4617 17.2651 75.4729 17.2307C75.4842 17.1971 75.4881 17.1608 75.4848 17.1251C75.4815 17.0895 75.4716 17.0545 75.4551 17.0235C75.4385 16.9918 75.4154 16.9641 75.3876 16.9416L73.3302 15.2808C73.2773 15.2386 73.2098 15.2181 73.1423 15.2241C73.0748 15.23 73.012 15.2623 72.9677 15.3138C72.5231 15.8287 71.9535 16.2188 71.3145 16.4459C70.6755 16.673 69.9881 16.7291 69.3206 16.6089C68.6531 16.4888 68.028 16.1964 67.5067 15.7601C66.9854 15.3237 66.5858 14.7594 66.347 14.121H76.7457C76.8079 14.1224 76.8688 14.1006 76.9171 14.061C76.9654 14.0214 76.9978 13.9653 77.009 13.9039C77.0745 13.5164 77.1069 13.1236 77.1063 12.7302C77.1063 11.748 76.9038 10.777 76.5129 9.87731C76.1219 8.9776 75.5497 8.16899 74.8326 7.50164C74.1154 6.83428 73.2693 6.32337 72.3465 6.00058C71.425 5.67846 70.4459 5.5504 69.4721 5.62565ZM66.347 11.3355C66.6275 10.5856 67.1296 9.93936 67.7852 9.48323C68.4408 9.02711 69.2194 8.78288 70.0166 8.78288C70.8137 8.78288 71.5923 9.02711 72.2479 9.48323C72.9035 9.93936 73.405 10.5856 73.6861 11.3355H66.347Z"
                    })]
                })
            }

            function u() {
                return (0, l.jsx)(n.ZP, {
                    icon: "q-logo",
                    size: n.i.Medium
                })
            }

            function c(e) {
                const {
                    className: t,
                    inverted: s,
                    isQMark: n,
                    isPremium: a,
                    isLarger: c
                } = e, p = o()("SiteLogo", t, {
                    "SiteLogo--inverted": !!s,
                    "SiteLogo--premium": !!a,
                    "is-qMark": !!n,
                    "SiteLogo--largerSize": !!c
                });
                return (0, l.jsx)("div", {
                    "aria-label": "Quizlet",
                    className: p,
                    role: "img",
                    title: "Quizlet",
                    children: a ? (0, l.jsx)(i.default, {
                        fill: s ? r.K.INVERTED : r.K.DEFAULT
                    }) : n ? (0, l.jsx)(u, {}) : (0, l.jsx)(d, {})
                })
            }
            s("./.linaria-cache/app/j/components/SiteLogo.linaria.css")
        },
        "./app/j/components/SocialButton.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                IN: () => m,
                MC: () => p,
                ZP: () => g
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/assembly/AssemblyBreakpoint.tsx"),
                a = s("./app/j/assembly/buttons/components/AssemblySecondaryButton.tsx"),
                o = s("./app/j/compatibility/logger/useLogger.ts"),
                r = s("./app/j/compatibility/router.ts"),
                i = s("./app/j/i18n/useTranslation.ts"),
                l = s("./node_modules/react/index.js"),
                d = s("./app/j/signup/utils.ts"),
                u = s("./app/j/utils/LoginHelper.ts"),
                c = s("./node_modules/react/jsx-runtime.js");
            let p = function(e) {
                    return e.FACEBOOK = "facebook", e.GOOGLE = "google", e.APPLE = "apple", e
                }({}),
                m = function(e) {
                    return e.DEFAULT = "default", e.SMALL = "small", e.LOGIN = "login", e
                }({});

            function g(e) {
                const {
                    t
                } = (0, i.ZP)(), s = (0, r.wK)(), {
                    logPageAction: g
                } = (0, o.wL)(), {
                    shouldFacebookFallbackToMagicLinkLogin: h
                } = (0, d.t9)(), _ = {
                    ...e.urlParams,
                    pageSource: s
                }, S = (0, u.Bq)(_), E = (0, u.SL)(_), [y, f] = (0, l.useState)(!1), j = {
                    [p.FACEBOOK]: {
                        labelLong: t("global.social_button.facebook.long"),
                        labelShort: t("global.social_button.facebook.short"),
                        labelLogin: t("global.social_button.facebook.login"),
                        icon: "facebook-round"
                    },
                    [p.GOOGLE]: {
                        labelLong: t("global.social_button.google.long"),
                        labelShort: t("global.social_button.google.short"),
                        labelLogin: t("global.social_button.google.login"),
                        icon: "google-color"
                    },
                    [p.APPLE]: {
                        labelLong: t("global.social_button.apple.long"),
                        labelShort: t("global.social_button.apple.short"),
                        labelLogin: t("global.social_button.apple.login"),
                        icon: "apple-black"
                    }
                };
                (0, l.useEffect)((() => {
                    e.provider === p.FACEBOOK && (h() ? f(!0) : f(!1))
                }), []);
                const T = () => {
                        null == e.onClick || e.onClick(), e.provider === p.APPLE && (0, u.Bk)({
                            ...e.urlParams,
                            pageSource: s
                        }, g)
                    },
                    A = () => {
                        switch (e.provider) {
                            case p.FACEBOOK:
                                if (y) return;
                                return S;
                            case p.GOOGLE:
                                return E;
                            case p.APPLE:
                            default:
                                return
                        }
                    },
                    b = t => {
                        var s, n;
                        const o = {
                            filled: !0,
                            isFullWidth: !0,
                            linkTo: A(),
                            onClick: T,
                            size: e.size || t
                        };
                        var r;
                        return e.variant === m.LOGIN ? (0, c.jsx)(a.Z, {
                            ...o,
                            leftIcon: j[e.provider].icon,
                            text: null != (r = e.text) ? r : j[e.provider].labelLogin
                        }) : e.variant === m.SMALL ? (0, c.jsx)(a.Z, {
                            ...o,
                            text: null != (s = e.text) ? s : j[e.provider].labelShort,
                            topIcon: j[e.provider].icon
                        }) : (0, c.jsx)(a.Z, {
                            ...o,
                            leftIcon: j[e.provider].icon,
                            text: null != (n = e.text) ? n : j[e.provider].labelLong
                        })
                    };
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(n.ZP, {
                        isFullWidth: e.isFullWidth,
                        upperBound: "s",
                        children: b("large")
                    }), (0, c.jsx)(n.ZP, {
                        isFullWidth: e.isFullWidth,
                        lowerBound: "s",
                        children: b("xlarge")
                    })]
                })
            }
        },
        "./app/j/components/StudyModeLogoDropdown.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                I: () => S,
                Z: () => E
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/AssemblyIcon.tsx"),
                o = s("./app/j/assembly/buttons/index.ts"),
                r = s("./app/j/assembly/buttons/types.ts"),
                i = s("./app/j/assembly/menus/index.ts"),
                l = s("./app/j/compatibility/logger/useLogger.ts"),
                d = s("./app/j/compatibility/router.ts"),
                u = s("./app/j/config/enums.ts"),
                c = s("./app/j/i18n/useTranslation.ts"),
                p = s("./node_modules/nullthrows/nullthrows.js"),
                m = s.n(p),
                g = s("./app/j/utils/ModeHelper.ts"),
                h = s("./node_modules/react/jsx-runtime.js");
            const _ = (0, n.z)("div")({
                    name: "ModeDropdown",
                    class: "miqwopc",
                    vars: {
                        "miqwopc-0": [e => e.shouldFlex ? 1 : "initial"]
                    }
                }),
                S = {
                    assistant: "learn",
                    cards: "cards",
                    checkpoint: "checkpoint",
                    flashcards: "flashcards",
                    gravity: "gravity",
                    group: "group",
                    learn: "learn",
                    live: "live",
                    locate: "locate",
                    match: "match",
                    micromatch: "match",
                    microscatter: "match",
                    people: "live",
                    qchat: "qchat",
                    scatter: "match",
                    spell: "spell",
                    speller: "spell",
                    test: "test",
                    write: "write"
                };

            function E(e) {
                let {
                    actions: t,
                    authModalType: s,
                    isEmbedding: n,
                    isInTestToLearn: p,
                    isLearnPaywalled: E,
                    modeName: y,
                    modeType: f,
                    screenName: j,
                    setOpenExitModal: T,
                    setStudyModeSelection: A,
                    shouldFlex: b = !0,
                    shouldShowQChatLink: x,
                    studiableContainerId: I,
                    studiableContainerType: v
                } = e;
                const {
                    t: C
                } = (0, c.ZP)(), {
                    logPageAction: N
                } = (0, l.wL)(), w = (0, d.E3)(), O = () => {
                    t.logStudyNavigationEvent({
                        clickName: "new_top_nav_clicked_mode_icon",
                        screenName: j
                    })
                }, M = (e, s) => {
                    if (t.logStudyNavigationEvent({
                            clickName: e,
                            screenName: j
                        }), p && !E) return ((e, t) => {
                        A && T && (A({
                            selected: !0,
                            action: e,
                            link: t
                        }), T(!0))
                    })(e, s);
                    t.onNavigate ? t.onNavigate(s) : w(s)
                }, D = e => {
                    const t = m()((0, g.n5)(e)),
                        s = (0, g.ZP)(C, t),
                        n = (0, g.tc)(t);
                    if (!I || f === n || e === u.StudyModeType.QCHAT && !x || v === u.MG.FOLDER && e === u.StudyModeType.LEARNING_ASSISTANT) return null;
                    const a = (0, g.$2)(I, t);
                    return (0, h.jsx)(i.jJ, {
                        elementType: "a",
                        leftIcon: "study-" + S[n] + "-twilight",
                        onAction: () => {
                            M("click_" + n + "_menu", a)
                        },
                        text: s
                    })
                }, L = [D(u.StudyModeType.LEARNING_ASSISTANT), D(u.StudyModeType.FLASHCARDS), D(u.StudyModeType.TEST), D(u.StudyModeType.SCATTER), D(u.StudyModeType.QCHAT)].filter(Boolean), P = (() => {
                    const e = [
                        [(0, h.jsx)(i.jJ, {
                            elementType: "a",
                            onAction: () => {
                                M("click_home_menu", "/latest")
                            },
                            text: C("dashboard.side_nav.home_link")
                        }), (0, h.jsx)(i.jJ, {
                            elementType: "a",
                            onAction: () => {
                                M("click_search_menu", "/search")
                            },
                            text: C("dashboard.side_nav.search_link")
                        })]
                    ];
                    return I && e.unshift(L), (0, h.jsx)(i.sD, {
                        "aria-label": y,
                        onOpen: O,
                        children: e
                    })
                })();
                return (0, h.jsx)(_, {
                    onClick: () => {
                        N("new_top_nav_clicked_logo")
                    },
                    shouldFlex: b,
                    children: null !== s || n ? (0, h.jsx)(o.GV, {
                        includePadding: !1,
                        rightIcon: n ? void 0 : "caret-down",
                        size: "xlarge",
                        tabIndex: 0,
                        text: y,
                        variant: r.vT.SECONDARY
                    }) : (0, h.jsx)(o.fj, {
                        includePadding: !1,
                        leftIcon: "study-" + S[f] + "-twilight",
                        leftIconSize: a.i.Large,
                        menu: P,
                        size: "xlarge",
                        tabIndex: 0,
                        text: y,
                        variant: r.vT.SECONDARY
                    })
                })
            }
            s("./.linaria-cache/app/j/components/StudyModeLogoDropdown.linaria.css")
        },
        "./app/j/components/UIDelimiter.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./node_modules/react/index.js"),
                r = s("./node_modules/react/jsx-runtime.js");
            class i extends o.PureComponent {
                render() {
                    const e = a()("UIDelimiter", {
                            "is-inline": this.props.inline
                        }),
                        t = o.Children.toArray(this.props.children),
                        s = [];
                    return s.push(t.shift()), t.forEach(((e, t) => {
                        s.push("string" == typeof this.props.separator ? this.props.separator : o.cloneElement(this.props.separator, {
                            key: "sep-" + t
                        })), s.push(e)
                    })), (0, r.jsx)("div", {
                        className: e,
                        children: s
                    })
                }
            }
            i.defaultProps = {
                inline: !1
            }
        },
        "./app/j/components/UIHr.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = s("./node_modules/react/index.js"),
                a = s("./node_modules/react/jsx-runtime.js");
            class o extends n.PureComponent {
                render() {
                    return (0, a.jsx)("hr", {
                        className: "UIHorizontalRule"
                    })
                }
            }
        },
        "./app/j/components/UIModalBodySeparator.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var n = s("./app/j/components/UIDiv.tsx"),
                a = s("./app/j/components/UIHr.tsx"),
                o = s("./node_modules/react/index.js"),
                r = s("./node_modules/react/jsx-runtime.js");
            class i extends o.PureComponent {
                render() {
                    return (0, r.jsx)(n.Z, {
                        className: "UIModalBodySeparator",
                        children: (0, r.jsx)(a.Z, {})
                    })
                }
            }
        },
        "./app/j/components/UIModeIcon.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                ZP: () => c,
                bD: () => d,
                bn: () => u
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./app/j/components/StudyModeLogoDropdown.tsx"),
                r = s("./app/j/components/UIIcon.tsx"),
                i = s("./node_modules/react/index.js"),
                l = s("./node_modules/react/jsx-runtime.js");
            const d = "started",
                u = "finished";
            class c extends i.PureComponent {
                render() {
                    const {
                        colored: e,
                        disabled: t,
                        mode: s,
                        progress: n,
                        variant: i,
                        inverted: c,
                        iconSize: p = "default"
                    } = this.props, m = function(e) {
                        return o.I[e]
                    }(s), g = a()("UIModeIcon", {
                        "UIModeIcon--disabled": t,
                        ["UIModeIcon--" + s]: !0,
                        ["UIModeIcon--" + i]: !0,
                        "UIModeIcon--inverted": c,
                        "UIModeIcon--started": n === d,
                        "UIModeIcon--finished": n === u
                    });
                    return (0, l.jsxs)("div", {
                        className: g,
                        children: [(0, l.jsx)(r.Z, {
                            className: "UIModeIcon-modeIcon",
                            icon: function(e, t, s, n) {
                                if (void 0 === n && (n = !0), !n) return "study-" + e + "-twilight";
                                return t ? "mode-" + e + "-" + t : "mode-" + e + "-" + s
                            }(m, e, i, !1),
                            role: "presentation",
                            size: p
                        }), this.shouldShowCheckmark() ? (0, l.jsx)("span", {
                            className: "UIModeIcon-checkmark",
                            children: (0, l.jsx)(r.Z, {
                                icon: "check"
                            })
                        }) : null, this.props.studiedCount ? (0, l.jsx)("span", {
                            className: "UIModeIcon-studiedCount",
                            children: this.props.studiedCount
                        }) : null]
                    })
                }
                shouldShowCheckmark() {
                    return this.props.progress === u && !this.props.studiedCount
                }
            }
            c.defaultProps = {
                disabled: !1,
                inverted: !1
            }
        },
        "./app/j/components/UIProgressBar.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./node_modules/react/index.js"),
                r = s("./node_modules/react/jsx-runtime.js");
            class i extends o.PureComponent {
                render() {
                    const {
                        max: e,
                        value: t,
                        variant: s,
                        vertical: n
                    } = this.props, o = Math.abs(t) / Math.abs(e || 1) * 100, i = a()("UIProgressBar", {
                        ["UIProgressBar--" + s]: s,
                        "UIProgressBar--vertical": n
                    });
                    return (0, r.jsx)("div", {
                        "aria-valuemax": e,
                        "aria-valuemin": 0,
                        "aria-valuenow": t,
                        className: i,
                        role: "progressbar",
                        children: (0, r.jsx)("span", {
                            className: "UIProgressBar-fill",
                            style: n ? {
                                height: o + "%"
                            } : {
                                width: o + "%"
                            }
                        })
                    })
                }
            }
            i.defaultProps = {
                max: 1,
                value: 0,
                vertical: !1
            }
        },
        "./app/j/components/UITextarea.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./app/j/components/AutoExpandTextarea.tsx"),
                r = s("./node_modules/invariant/browser.js"),
                i = s.n(r),
                l = s("./node_modules/nullthrows/nullthrows.js"),
                d = s.n(l),
                u = s("./node_modules/react/index.js"),
                c = s("./app/j/utils/elementMatches.ts"),
                p = s("./node_modules/react/jsx-runtime.js");
            class m extends u.PureComponent {
                constructor() {
                    super(...arguments), this.handleClickAddOnContent = e => {
                        (0, c.Z)(e.currentTarget, ".UITextarea-addOnContent") || (e.preventDefault(), e.stopPropagation())
                    }
                }
                getTextarea() {
                    return i()(this.textareaish, "Missing textareaish in getTextarea"), "autoExpand" === this.props.type ? this.getAutoExpandArea().getTrackedArea().getTextarea() : (i()(this.textareaish instanceof HTMLTextAreaElement, "Invalid state in UITextarea"), this.textareaish)
                }
                getAutoExpandArea() {
                    return i()(this.textareaish, "Missing textareaish in getTextarea"), i()("autoExpand" === this.props.type, "Invalid call to getAutoExpandArea"), i()(!(this.textareaish instanceof HTMLTextAreaElement), "Invalid state in UITextarea"), this.textareaish
                }
                getSelectionStart() {
                    return this.getAutoExpandArea().getSelectionStart()
                }
                getSelectionEnd() {
                    return this.getAutoExpandArea().getSelectionEnd()
                }
                renderAddOnContent(e) {
                    return this.props.forceAddOnContentOntoNewLine ? (0, p.jsx)("div", {
                        className: "UITextarea-addOnContentInner",
                        children: e
                    }) : e
                }
                render() {
                    const {
                        addOnContent: e,
                        forceAddOnContentOntoNewLine: t,
                        invalid: s,
                        label: n,
                        labelAddOnContent: r,
                        type: i,
                        ...l
                    } = this.props, d = !!u.Children.count(e), c = a()("UITextarea", {
                        ["UITextarea--" + this.props.variant]: "default" !== this.props.variant,
                        "has-addOnContent": d,
                        "has-addOnContentOnNewLine": d && t
                    }), m = {
                        ...l,
                        defaultValue: this.props.onChange ? void 0 : this.props.value,
                        value: this.props.onChange ? this.props.value : void 0
                    }, g = m.lang ? "lang-" + m.lang : null, h = "autoExpand" === i ? (0, p.jsx)(o.Z, {
                        ...m,
                        className: "UITextarea-textarea UITextarea-autoExpandTextarea",
                        ref: e => {
                            this.textareaish = e
                        }
                    }) : (0, p.jsx)("textarea", {
                        rows: 1,
                        ...m,
                        className: a()("UITextarea-textarea", g),
                        ref: e => {
                            this.textareaish = e
                        }
                    });
                    return (0, p.jsxs)("label", {
                        "aria-disabled": this.props.disabled || void 0,
                        "aria-invalid": s || void 0,
                        "aria-readonly": this.props.readOnly || void 0,
                        "aria-required": this.props.required || void 0,
                        className: c,
                        htmlFor: this.props.id,
                        children: [(0, p.jsxs)("div", {
                            className: "UITextarea-content",
                            children: [h, d ? (0, p.jsx)("div", {
                                className: "UITextarea-addOnContent",
                                onClick: this.handleClickAddOnContent,
                                children: this.renderAddOnContent(e)
                            }) : null, this.shouldRenderBorder() ? (0, p.jsx)("span", {
                                className: "UITextarea-border"
                            }) : null]
                        }), n || r ? (0, p.jsxs)("span", {
                            className: "UITextarea-label",
                            children: [n, r]
                        }) : null]
                    })
                }
                shouldRenderBorder() {
                    return "default" === this.props.variant
                }
                focus(e) {
                    i()(this.textareaish, "Missing textareaish in focus"), this.textareaish instanceof HTMLTextAreaElement ? this.textareaish.focus() : d()(this.textareaish).focus(e)
                }
                blur() {
                    i()(this.textareaish, "Missing textareaish in blur"), d()(this.textareaish).blur()
                }
                select() {
                    i()(this.textareaish, "Missing textareaish in select"), d()(this.textareaish).select()
                }
                setCaretPosition(e) {
                    this.getAutoExpandArea().setCaretPosition(e)
                }
                setSelectionRange(e, t) {
                    this.getAutoExpandArea().setSelectionRange(e, t)
                }
            }
            m.defaultProps = {
                disabled: !1,
                forceAddOnContentOntoNewLine: !1,
                readOnly: !1,
                required: !1,
                type: "normal",
                variant: "default"
            }
        },
        "./app/j/config/languages.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                GK: () => c,
                YN: () => o,
                ZP: () => n,
                _1: () => r,
                cQ: () => i,
                go: () => d,
                o7: () => a,
                sZ: () => l,
                xK: () => u
            });
            const n = {
                    allLanguages: {
                        af: "Afrikaans",
                        ak: "Akan",
                        akk: "Akkadian",
                        sq: "Albanian",
                        ase: "American Sign Language",
                        am: "Amharic",
                        ang: "Anglo-Saxon",
                        ar: "Arabic",
                        hy: "Armenian",
                        az: "Azerbaijani",
                        eu: "Basque",
                        be: "Belarusian",
                        bn: "Bengali",
                        bh: "Bihari",
                        bs: "Bosnian",
                        bg: "Bulgarian",
                        br: "Breton",
                        my: "Burmese",
                        ca: "Catalan",
                        ceb: "Cebuano",
                        ch: "Chamorro",
                        chem: "Chemistry",
                        chr: "Cherokee",
                        "zh-CN": "Chinese (Simplified)",
                        "zh-pi": "Chinese (Pinyin)",
                        "zh-TW": "Chinese (Traditional)",
                        co: "Corsican",
                        cho: "Choctaw",
                        cop: "Coptic",
                        hr: "Croatian",
                        cs: "Czech",
                        da: "Danish",
                        den: "Dene",
                        dv: "Dhivehi",
                        luo: "Dholuo",
                        nl: "Dutch",
                        en: "English",
                        eo: "Esperanto",
                        et: "Estonian",
                        fo: "Faroese",
                        fi: "Finnish",
                        dyo: "Jola-Fonyi",
                        fr: "French",
                        ff: "Fula",
                        gd: "Gaelic",
                        gl: "Galician",
                        ka: "Georgian",
                        de: "German",
                        got: "Gothic",
                        el: "Greek",
                        gn: "Guarani",
                        gu: "Gujarati",
                        hai: "Haida",
                        ht: "Haitian Creole",
                        ha: "Hausa",
                        haw: "Hawaiian",
                        iw: "Hebrew",
                        hi: "Hindi",
                        hmv: "Hmong",
                        hu: "Hungarian",
                        is: "Icelandic",
                        ig: "Igbo",
                        hil: "Ilonggo",
                        id: "Indonesian",
                        ipa: "International Phonetic Alphabet (IPA)",
                        iu: "Inuktitut",
                        ga: "Irish",
                        it: "Italian",
                        ja: "Japanese",
                        "ja-ro": "Japanese (Romaji)",
                        "ja-ka": "Japanese (Kana)",
                        jv: "Javanese",
                        kg: "KiKongo",
                        kin: "Kinyarwanda",
                        kio: "Kiowa",
                        kn: "Kannada",
                        kk: "Kazakh",
                        km: "Khmer",
                        mjd: "Konkow",
                        ko: "Korean",
                        ksw: "Sgaw Karen",
                        ku: "Kurdish",
                        ky: "Kyrgyz",
                        lkt: "Lakota",
                        lo: "Lao",
                        la: "Latin",
                        lv: "Latvian",
                        unm: "Lenape",
                        ln: "Lingala",
                        lt: "Lithuanian",
                        lua: "Luba-Kasai",
                        lb: "Luxembourgish",
                        mk: "Macedonian",
                        ms: "Malay",
                        mg: "Malagasy",
                        ml: "Malayalam",
                        mt: "Maltese",
                        mnk: "Mandinka",
                        mi: "Maori",
                        rar: "Maori (Cook Islands)",
                        mr: "Marathi",
                        mh: "Marshallese",
                        math: "Math / Symbols",
                        moh: "Mohawk",
                        mn: "Mongolian",
                        nah: "Nahuatl",
                        nv: "Navajo",
                        ne: "Nepali",
                        no: "Norwegian",
                        oc: "Occitan",
                        or: "Oriya",
                        om: "Oromo",
                        oj: "Ojibwe",
                        pi: "PДЃli",
                        ps: "Pashto",
                        fa: "Persian",
                        photo: "Photos",
                        fil: "Filipino",
                        pl: "Polish",
                        pt: "Portuguese",
                        pa: "Punjabi",
                        qu: "Quechua",
                        ro: "Romanian",
                        rm: "Romansh",
                        ru: "Russian",
                        sm: "Samoan",
                        sa: "Sanskrit",
                        see: "Seneca",
                        sr: "Serbian",
                        shn: "Shan",
                        sd: "Sindhi",
                        si: "Sinhalese",
                        sk: "Slovak",
                        sl: "Slovenian",
                        so: "Somali",
                        es: "Spanish",
                        su: "Sundanese",
                        sw: "Swahili",
                        sv: "Swedish",
                        syc: "Syriac",
                        tl: "Tagalog",
                        tg: "Tajik",
                        ta: "Tamil",
                        tt: "Tatar",
                        te: "Telugu",
                        tet: "Tetum",
                        th: "Thai",
                        bo: "Tibetan",
                        ti: "Tigrinya",
                        to: "Tonga",
                        ood: "Tohono O'odham",
                        trc: "Triki",
                        tr: "Turkish",
                        tyv: "Tuvan",
                        uk: "Ukrainian",
                        ur: "Urdu",
                        uz: "Uzbek",
                        ug: "Uighur",
                        vi: "Vietnamese",
                        cy: "Welsh",
                        fy: "Western Frisian",
                        win: "Winnebago",
                        wo: "Wolof",
                        xh: "Xhosa",
                        yi: "Yiddish",
                        yo: "Yoruba",
                        zu: "Zulu",
                        "??": "Other / Unknown"
                    },
                    customLanguages: ["zh-pi", "ja-ka", "ja-ro", "ase", "chem", "math", "photo", "??"],
                    invisibleLanguages: ["photo", "ja-ka"],
                    frequentLanguages: ["en", "es", "fr", "it", "de", "ru", "ja", "ja-ro", "zh-CN", "zh-TW", "zh-pi", "ko", "math", "chem", "la"],
                    ttsLanguages: ["pt", "fr", "it", "de", "nl", "sv", "fi", "pl", "el", "tr", "ru", "ar", "ro", "en", "es", "ja", "ko", "zh-CN", "zh-TW", "zh-pi"],
                    rightToLeftLanguages: ["ar", "dv", "fa", "iw", "ku", "ps", "sd", "ug", "ur", "yi"],
                    caseSensitiveLanguages: ["de", "chem", "math"],
                    notActualLanguages: ["chem", "math", "photo", "??"],
                    chineseLanguages: ["zh-CN", "zh-TW", "zh-pi"],
                    hardLanguages: ["zh-CN", "zh-TW", "ja", "ko"],
                    strictlyGradedLanguages: ["akk", "chem", "ja", "ja-ka", "math", "photo", "zh-CN", "zh-TW", "??"]
                },
                a = {
                    af: "Afrikaans",
                    ak: "Akan",
                    akk: "Akkadian",
                    sq: "Albanian",
                    ase: "American Sign Language",
                    am: "Amharic",
                    ang: "Anglo-Saxon",
                    ar: "Arabic",
                    hy: "Armenian",
                    az: "Azerbaijani",
                    eu: "Basque",
                    be: "Belarusian",
                    bn: "Bengali",
                    bh: "Bihari",
                    bs: "Bosnian",
                    bg: "Bulgarian",
                    br: "Breton",
                    my: "Burmese",
                    ca: "Catalan",
                    ceb: "Cebuano",
                    ch: "Chamorro",
                    chem: "Chemistry",
                    chr: "Cherokee",
                    "zh-CN": "Chinese (Simplified)",
                    "zh-pi": "Chinese (Pinyin)",
                    "zh-TW": "Chinese (Traditional)",
                    co: "Corsican",
                    cho: "Choctaw",
                    cop: "Coptic",
                    hr: "Croatian",
                    cs: "Czech",
                    da: "Danish",
                    den: "Dene",
                    dv: "Dhivehi",
                    luo: "Dholuo",
                    nl: "Dutch",
                    en: "English",
                    eo: "Esperanto",
                    et: "Estonian",
                    fo: "Faroese",
                    fi: "Finnish",
                    dyo: "Jola-Fonyi",
                    fr: "French",
                    ff: "Fula",
                    gd: "Gaelic",
                    gl: "Galician",
                    ka: "Georgian",
                    de: "German",
                    got: "Gothic",
                    el: "Greek",
                    gn: "Guarani",
                    gu: "Gujarati",
                    hai: "Haida",
                    ht: "Haitian Creole",
                    ha: "Hausa",
                    haw: "Hawaiian",
                    iw: "Hebrew",
                    hi: "Hindi",
                    hmv: "Hmong",
                    hu: "Hungarian",
                    is: "Icelandic",
                    ig: "Igbo",
                    hil: "Ilonggo",
                    id: "Indonesian",
                    ipa: "International Phonetic Alphabet (IPA)",
                    iu: "Inuktitut",
                    ga: "Irish",
                    it: "Italian",
                    ja: "Japanese",
                    "ja-ro": "Japanese (Romaji)",
                    "ja-ka": "Japanese (Kana)",
                    jv: "Javanese",
                    kg: "KiKongo",
                    kin: "Kinyarwanda",
                    kio: "Kiowa",
                    kn: "Kannada",
                    kk: "Kazakh",
                    km: "Khmer",
                    mjd: "Konkow",
                    ko: "Korean",
                    ksw: "Sgaw Karen",
                    ku: "Kurdish",
                    ky: "Kyrgyz",
                    lkt: "Lakota",
                    lo: "Lao",
                    la: "Latin",
                    lv: "Latvian",
                    unm: "Lenape",
                    ln: "Lingala",
                    lt: "Lithuanian",
                    lua: "Luba-Kasai",
                    lb: "Luxembourgish",
                    mk: "Macedonian",
                    ms: "Malay",
                    mg: "Malagasy",
                    ml: "Malayalam",
                    mt: "Maltese",
                    mnk: "Mandinka",
                    mi: "Maori",
                    rar: "Maori (Cook Islands)",
                    mr: "Marathi",
                    mh: "Marshallese",
                    math: "Math / Symbols",
                    moh: "Mohawk",
                    mn: "Mongolian",
                    nah: "Nahuatl",
                    nv: "Navajo",
                    ne: "Nepali",
                    no: "Norwegian",
                    oc: "Occitan",
                    or: "Oriya",
                    om: "Oromo",
                    oj: "Ojibwe",
                    pi: "PДЃli",
                    ps: "Pashto",
                    fa: "Persian",
                    photo: "Photos",
                    fil: "Filipino",
                    pl: "Polish",
                    pt: "Portuguese",
                    pa: "Punjabi",
                    qu: "Quechua",
                    ro: "Romanian",
                    rm: "Romansh",
                    ru: "Russian",
                    sm: "Samoan",
                    sa: "Sanskrit",
                    see: "Seneca",
                    sr: "Serbian",
                    shn: "Shan",
                    sd: "Sindhi",
                    si: "Sinhalese",
                    sk: "Slovak",
                    sl: "Slovenian",
                    so: "Somali",
                    es: "Spanish",
                    su: "Sundanese",
                    sw: "Swahili",
                    sv: "Swedish",
                    syc: "Syriac",
                    tl: "Tagalog",
                    tg: "Tajik",
                    ta: "Tamil",
                    tt: "Tatar",
                    te: "Telugu",
                    tet: "Tetum",
                    th: "Thai",
                    bo: "Tibetan",
                    ti: "Tigrinya",
                    to: "Tonga",
                    ood: "Tohono O'odham",
                    trc: "Triki",
                    tr: "Turkish",
                    tyv: "Tuvan",
                    uk: "Ukrainian",
                    ur: "Urdu",
                    uz: "Uzbek",
                    ug: "Uighur",
                    vi: "Vietnamese",
                    cy: "Welsh",
                    fy: "Western Frisian",
                    win: "Winnebago",
                    wo: "Wolof",
                    xh: "Xhosa",
                    yi: "Yiddish",
                    yo: "Yoruba",
                    zu: "Zulu",
                    "??": "Other / Unknown"
                },
                o = ["photo", "ja-ka"],
                r = ["en", "es", "fr", "it", "de", "ru", "ja", "ja-ro", "zh-CN", "zh-TW", "zh-pi", "ko", "math", "chem", "la"],
                i = ["ar", "dv", "fa", "iw", "ku", "ps", "sd", "ug", "ur", "yi"],
                l = ["de", "chem", "math"],
                d = ["chem", "math", "photo", "??"],
                u = ["zh-CN", "zh-TW", "zh-pi"],
                c = ["zh-CN", "zh-TW", "ja", "ko"]
        },
        "./app/j/config/study-setting-metadata.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                ASSISTANT_MODE_QUESTION_TYPES: () => o,
                TEST_QUESTION_TYPES: () => a,
                default: () => n
            });
            const n = {
                    INSTANT_FEEDBACK: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    TAP_TO_PLAY_AUDIO: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    TERM_SIDE: {
                        dataType: "enum",
                        enumValues: {
                            Unknown: 0,
                            Word: 1,
                            Definition: 2,
                            Category: 3,
                            Location: 4
                        },
                        defaultValue: 2
                    },
                    TEST_QUESTION_TYPES: {
                        dataType: "bitmask",
                        defaultValue: 15,
                        bitValues: {
                            written: 1,
                            matching: 2,
                            multipleChoice: 4,
                            trueFalse: 8
                        }
                    },
                    TEST_QUESTION_COUNT: {
                        dataType: "int",
                        defaultValue: 20
                    },
                    SHUFFLE: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    TEST_SELECTED_ONLY_QUESTION_COUNT: {
                        dataType: "int",
                        defaultValue: 0
                    },
                    ASSISTANT_MODE_QUESTION_TYPES: {
                        dataType: "bitmask",
                        defaultValue: 85,
                        bitValues: {
                            written: 1,
                            matching: 2,
                            multipleChoice: 4,
                            trueFalse: 8,
                            revealSelfAssessment: 16,
                            multipleChoiceWithNoneOption: 32,
                            copyAnswer: 64,
                            spelling: 128,
                            flashcardWithoutResponse: 256,
                            mixedOptionMatching: 512,
                            fillInTheBlank: 1024
                        }
                    },
                    ASSISTANT_MODE_WORD_SIDE: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_DEFINITION_SIDE: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_WRITTEN_WORD_SIDE: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_WRITTEN_DEFINITION_SIDE: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    PROMPT_TERM_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 22,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    ANSWER_TERM_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 22,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    MATCH_MODE_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 22,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    TEST_PROMPT_TERM_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 22,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    TEST_ANSWER_TERM_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 22,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    TEST_SHOW_IMAGES: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    LIVE_PLAY_MUSIC: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    ASSISTANT_SPELL_MODE_AUDIO_ENABLED: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_WORD_AUDIO_ENABLED: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_DEFINITION_AUDIO_ENABLED: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    ASSISTANT_MODE_SLOW_WORD_AUDIO: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    ASSISTANT_MODE_SLOW_DEFINITION_AUDIO: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    SPELL_ANSWER_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 2,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    CARDS_ANSWER_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 2,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    CARDS_PROMPT_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 4,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    WRITE_PROMPT_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 6,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    WRITE_ANSWER_SIDES: {
                        dataType: "bitmask",
                        defaultValue: 6,
                        bitValues: {
                            word: 2,
                            definition: 4,
                            location: 16
                        }
                    },
                    SMART_GRADING: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    STUDY_PATH: {
                        dataType: "int",
                        defaultValue: 0
                    },
                    STUDY_PATH_GOAL: {
                        dataType: "int",
                        defaultValue: 2
                    },
                    STUDY_PATH_KNOWLEDGE_LEVEL: {
                        dataType: "int",
                        defaultValue: 0
                    },
                    TASKS_ENABLED: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    CHECKPOINT_PLAY_MUSIC: {
                        dataType: "boolean",
                        defaultValue: 1
                    },
                    LIVE_VOLUME: {
                        dataType: "int",
                        defaultValue: 1
                    },
                    GUIDANCE_DISABLED: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    CARDS_SHUFFLE_RANDOM_SEED: {
                        dataType: "int",
                        defaultValue: 0
                    },
                    CARDS_SELECTED_ONLY: {
                        dataType: "boolean",
                        defaultValue: 0
                    },
                    CARDS_SORTING_ON: {
                        dataType: "boolean",
                        defaultValue: 1
                    }
                },
                a = {
                    dataType: "bitmask",
                    defaultValue: 15,
                    bitValues: {
                        written: 1,
                        matching: 2,
                        multipleChoice: 4,
                        trueFalse: 8
                    }
                },
                o = {
                    dataType: "bitmask",
                    defaultValue: 85,
                    bitValues: {
                        written: 1,
                        matching: 2,
                        multipleChoice: 4,
                        trueFalse: 8,
                        revealSelfAssessment: 16,
                        multipleChoiceWithNoneOption: 32,
                        copyAnswer: 64,
                        spelling: 128,
                        flashcardWithoutResponse: 256,
                        mixedOptionMatching: 512,
                        fillInTheBlank: 1024
                    }
                }
        },
        "./app/j/core/getGenericErrorWithToastCallback.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r
            });
            var n = s("./app/j/assembly/toasts/index.ts"),
                a = s("./app/j/global/Rollbar.ts"),
                o = s("./app/j/notifications/Constants.ts");

            function r(e, t) {
                return void 0 === t && (t = !0), s => {
                    console.error("generic error callback for '" + e + "' received error " + s.name + ": " + s.message, {
                        shouldDisplayNotification: t
                    }), a.Z.error(e, s), t && (0, n.fz)({
                        duration: o.th.DEFAULT,
                        includeDismiss: !0,
                        includeEllipsis: !1
                    })
                }
            }
        },
        "./app/j/core/legacy_store/LegacyStore.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Q: () => i,
                Z: () => r
            });
            var n = s("./app/j/core/configureStore.ts"),
                a = s("./node_modules/immutable/dist/immutable.js"),
                o = s("./node_modules/redux-immutable/dist/index.js");
            const r = (0, n.Z)({
                buildCustomRootReducer: function(e) {
                    return (t, s) => {
                        let a = t;
                        return s.type, n.d.SET_STATE_FOR_TESTS, s.type === n.d.CLEAR_STATE && s.payload.stateSlices.forEach((e => {
                            a = a.delete(e)
                        })), e(a, s)
                    }
                },
                combineReducers: o.U,
                initialState: (0, a.fromJS)({}),
                name: "LegacyQStore"
            });

            function i(e, t, s) {
                const n = {
                    ...e,
                    ...t,
                    ...s
                };
                if ("actions" in t && "actions" in s) {
                    const e = {
                        ...s.actions,
                        ...t.actions
                    };
                    return {
                        ...n,
                        actions: e
                    }
                }
                return n
            }
        },
        "./app/j/core/legacy_store/LegacyStoreProvider.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                I0: () => l,
                ZP: () => u,
                tC: () => i,
                v9: () => d
            });
            var n = s("./app/j/core/legacy_store/LegacyStore.ts"),
                a = s("./node_modules/react/index.js"),
                o = s("./node_modules/react-redux/lib/index.js"),
                r = s("./node_modules/react/jsx-runtime.js");
            const i = a.createContext({
                    store: n.Z,
                    storeState: {}
                }),
                l = (0, o.createDispatchHook)(i),
                d = (0, o.createSelectorHook)(i);

            function u(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(o.Provider, {
                    context: i,
                    store: n.Z,
                    children: t
                })
            }
        },
        "./app/j/diagrams/DiagramConstants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                C: () => o,
                Dp: () => n,
                Lg: () => i,
                Qt: () => l,
                iR: () => c,
                kA: () => a,
                m6: () => r,
                wB: () => p,
                wZ: () => d,
                x3: () => u
            });
            const n = s("./app/j/assembly/foundations/Color.ts").HA.$500;
            let a = function(e) {
                return e[e.ACTIVE = 0] = "ACTIVE", e[e.CORRECT = 1] = "CORRECT", e[e.INCORRECT = 2] = "INCORRECT", e
            }({});
            const o = 32,
                r = 0,
                i = .4,
                l = 12,
                d = 120,
                u = 10,
                c = 1e3,
                p = .3
        },
        "./app/j/diagrams/LeafletConstants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => n
            });
            const n = s("./app/j/diagrams/QLeaflet.ts").Z.CRS.Simple
        },
        "./app/j/diagrams/QLeaflet.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => d
            });
            var n = s("./node_modules/leaflet/dist/leaflet-src.js"),
                a = s.n(n);

            function o(e) {
                e.stopPropagation()
            }
            window.L = window.L || a();
            const r = a().Control.Zoom.prototype._createButton;
            a().Control.Zoom = a().Control.Zoom.extend({
                _createButton() {
                    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
                    const n = r.apply(this, t);
                    return a().DomEvent.on(n, "mouseup", o), a().DomEvent.on(n, "touchstart", o), n
                }
            });
            const i = a().Popup.prototype._initLayout,
                l = a().Popup.prototype._updatePosition;
            a().Popup = a().Popup.extend({
                _getPopupDirectionSuffix() {
                    const e = this._map.latLngToContainerPoint(this._latlng),
                        t = this._map.getBounds(),
                        s = this._map.latLngToContainerPoint(t.getNorthEast()),
                        n = this._map.latLngToContainerPoint(t.getNorthWest()),
                        a = this._map.latLngToContainerPoint(t.getSouthEast()),
                        o = this._map.latLngToContainerPoint(t.getSouthWest()),
                        r = t.getNorth(),
                        i = t.getEast(),
                        l = t.getSouth(),
                        d = t.getWest(),
                        u = Math.floor(e.distanceTo(s)),
                        c = Math.floor(e.distanceTo(n)),
                        p = Math.floor(e.distanceTo(a)),
                        m = Math.floor(e.distanceTo(o)),
                        g = Math.abs(this._latlng.lng - i),
                        h = Math.abs(this._latlng.lat - r),
                        _ = Math.abs(this._latlng.lat - l),
                        S = Math.abs(this._latlng.lng - d),
                        E = h / Math.abs(r - l),
                        y = S / Math.abs(i - d);
                    if (E > .333 && E < .666) return g > S ? "middleright" : "middleleft";
                    if (y > .333 && y < .666) return h > _ ? "" : "bottom";
                    const f = Math.max(u, c, p, m);
                    let j = "bottomleft";
                    return f === u && (j = "bottomleft"), f === c && (j = "bottomright"), f === p && (j = "topleft"), f === m && (j = "topright"), j
                },
                _getCoordsWithMouseOffset(e) {
                    const t = this._getPopupDirectionSuffix(),
                        s = this._map.latLngToContainerPoint(e);
                    let n = s.x,
                        o = s.y;
                    "bottom" === t && (o += 15), "middleright" === t && (n += 5), "middleleft" === t && (n -= 5);
                    const r = a().point(n, o);
                    return this._map.containerPointToLatLng(r)
                },
                _setDirectionClassName() {
                    const e = this._getPopupDirectionSuffix();
                    this._directionClassName = "leaflet-popup-" + e, a().DomUtil.addClass(this._container, this._directionClassName)
                },
                _updatePosition() {
                    a().DomUtil.removeClass(this._container, this._directionClassName), this._setDirectionClassName(), l.apply(this)
                },
                _initLayout() {
                    i.apply(this), this._setDirectionClassName()
                }
            }), a().Marker = a().Marker.extend({
                setIcon(e) {
                    if (this._icon.innerHTML !== e.options.html) {
                        const t = e.options.props.className.split(/\s+/),
                            s = this._icon.children[0],
                            n = s.classList,
                            a = [];
                        Array.prototype.forEach.call(n, (e => {
                            -1 === t.indexOf(e) && a.push(e)
                        })), a.forEach((e => n.remove(e))), t.forEach((e => {
                            e && n.add(e)
                        }));
                        const {
                            color: o,
                            backgroundColor: r,
                            borderColor: i
                        } = e.options.props.style;
                        [s, s.children[0]].forEach((e => {
                            e.style.setProperty("background-color", r), e.style.setProperty("border-color", i), e.style.setProperty("color", o)
                        }))
                    }
                }
            });
            const d = a()
        },
        "./app/j/diagrams/cache.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                H: () => u,
                O: () => l
            });
            var n = s("./node_modules/@mapbox/geojson-area/index.js"),
                a = s("./app/j/utils/MemoizedCache.ts");
            const o = new a.Z,
                r = new a.Z;

            function i(e) {
                return JSON.parse(e)
            }

            function l(e) {
                return r.memoize(e, i, e)
            }

            function d(e) {
                return (0, n.Q)(l(e).geometry)
            }

            function u(e) {
                return o.memoize(e, d, e)
            }
        },
        "./app/j/diagrams/components/Diagram.tsx": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => x
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/es.array.sort.js");
            var n = s("./app/j/assembly/AssemblyBreakpoint.tsx"),
                a = s("./app/j/compatibility/userAgentHelper.ts"),
                o = s("./app/j/diagrams/cache.ts"),
                r = s("./app/j/diagrams/DiagramConstants.ts"),
                i = s("./app/j/diagrams/helpers.ts"),
                l = s("./app/j/diagrams/LeafletConstants.ts"),
                d = s("./app/j/diagrams/QLeaflet.ts"),
                u = s("./app/j/diagrams/types.ts"),
                c = s("./app/j/global/Rollbar.ts"),
                p = s("./node_modules/lodash/debounce.js"),
                m = s.n(p),
                g = s("./node_modules/react/index.js"),
                h = s("./node_modules/react-leaflet/lib/index.js"),
                _ = s("./app/j/utils/EventListener.ts"),
                S = s("./app/j/utils/ImmutableCompatibilityHelpers.ts"),
                E = s("./app/j/utils/Leaflet.ts"),
                y = s("./node_modules/react/jsx-runtime.js");
            const f = 10,
                j = 5,
                T = -5,
                A = .7,
                b = 0;

            function x(e) {
                var t;
                let {
                    alt: s = "",
                    children: p,
                    closePopupOnClick: x = !1,
                    diagramShapes: I,
                    dragging: v = !0,
                    image: C,
                    onClick: N,
                    onMouseOut: w,
                    onMouseOver: O,
                    overrideBounds: M,
                    overrideMapRef: D,
                    overrideSrc: L,
                    variant: P,
                    zoomControl: R = !0
                } = e;
                const k = (0, a.YQ)(),
                    U = (0, g.useMemo)((() => d.Z.svg({
                        padding: f
                    })), []),
                    W = (0, g.useRef)({
                        map: null
                    }),
                    B = null != D ? D : W,
                    F = (0, g.useMemo)((() => (0, i.XV)(C)), [C]),
                    Z = (0, g.useMemo)((() => F.pad(b)), [F]),
                    [G, H] = (0, g.useState)(T),
                    [V, z] = (0, g.useState)(F),
                    Q = g.Children.toArray(M || I).reduce(((e, t) => {
                        let s, {
                            props: n
                        } = t;
                        if (n.bounds) s = d.Z.latLngBounds(n.bounds);
                        else if (n.shape) {
                            const e = (0, o.O)(n.shape);
                            s = d.Z.geoJSON(e).getBounds()
                        }
                        return s ? e.extend(s) : e
                    }), d.Z.latLngBounds([]));

                function K() {
                    const e = B.current.map;
                    if (!e) return;
                    const t = e.leafletElement.getContainer();
                    0 !== t.clientWidth && z((s => {
                        let n = s;
                        if (Q.isValid()) {
                            const s = e.leafletElement.getBoundsZoom(F);
                            if (P === u.U.ZOOM_TO_POINTS) {
                                const e = t.clientHeight / t.clientWidth;
                                try {
                                    n = (0, E.Ep)(Q, e, F, s)
                                } catch (a) {
                                    c.Z.error("Error in <Diagram> fitDiagramBounds", {
                                        containerAspectRatio: e,
                                        diagramBounds: F,
                                        error: a,
                                        initZoomLevel: s,
                                        minBoundsOfDiagramShapes: Q
                                    })
                                }
                            }(P !== u.U.ZOOM_TO_POINTS || (0, E.$g)(n) / (0, E.$g)(F) >= A) && (n = (0, E.H4)(Q, s, F))
                        }
                        return H(e.leafletElement.getBoundsZoom(d.Z.latLngBounds([]).extend(F).extend(n))), n
                    }))
                }
                const q = Array.isArray(I) ? I.filter((e => null !== e)) : [I],
                    Y = null == (t = q[0]) ? void 0 : t.props.shape;
                (0, g.useEffect)((() => {
                    K()
                }), [P, M, Y]), (0, g.useEffect)((() => {
                    const e = _.Z.listen(window, "resize", m()(K, 50));
                    return () => e.remove()
                })), (0, g.useEffect)((() => {
                    const e = B.current.map;
                    e && e.leafletElement.invalidateSize(!1).fitBounds(V, {
                        animate: !1
                    }).setMinZoom(G).fire("zoomend")
                }), [B, G, V]);
                const $ = [(0, y.jsx)(h.vZ, {
                    alt: null != s ? s : "",
                    bounds: F,
                    crossOrigin: !0,
                    interactive: !0,
                    onMouseOut: function(e) {
                        const {
                            relatedTarget: t
                        } = e.originalEvent;
                        null != t && t.classList && (t.classList.contains("leaflet-draw-tooltip") || t.classList.contains("leaflet-draw-guide-dash") || t.classList.contains("leaflet-editing-icon")) || w && w(e)
                    },
                    onMouseOver: function(e) {
                        var t;
                        const {
                            relatedTarget: s
                        } = e.originalEvent;
                        null != s && null != (t = s.classList) && t.contains("leaflet-draw-tooltip") || O && O(e)
                    },
                    url: L || (0, S.D)(C, "url") || (0, S.D)(C, "_secureLegacyUrlLarge") || (0, S.D)(C, "_secureLegacyUrl")
                }, "image"), p].concat(q.sort(((e, t) => {
                    if (!e.props.shape) return -1;
                    if (!t.props.shape) return 1;
                    const s = e.props.shape,
                        n = t.props.shape,
                        a = (0, o.H)(s);
                    return (0, o.H)(n) - a
                }))).filter((e => e)).map(((e, t) => (0, y.jsx)(g.Fragment, {
                    children: e
                }, e.key || t)));
                return (0, y.jsxs)(h.D5, {
                    attributionControl: !1,
                    center: [0, 0],
                    className: "Diagram",
                    closePopupOnClick: x,
                    crs: l.k,
                    doubleClickZoom: !1,
                    dragging: v,
                    maxBounds: Z,
                    maxBoundsViscosity: .6,
                    maxZoom: j,
                    minZoom: G,
                    onClick: function(e) {
                        N && e.latlng && (0, i.Jk)(e.latlng, F) && N(e)
                    },
                    ref: e => {
                        B.current.map = e
                    },
                    renderer: U,
                    scrollWheelZoom: !1,
                    zoom: r.m6,
                    zoomControl: !1,
                    zoomSnap: 0,
                    children: [$, R && !k && (0, y.jsx)(n.ZP, {
                        lowerBound: "s",
                        children: (0, y.jsx)(h.Ly, {
                            position: "bottomright"
                        })
                    })]
                })
            }
        },
        "./app/j/diagrams/components/DiagramShape.tsx": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => E,
                updateGeoJSONData: () => _
            });
            s("./node_modules/core-js/modules/es.array.reverse.js");
            var n = s("./app/j/assembly/foundations/Color.ts"),
                a = s("./app/j/diagrams/cache.ts"),
                o = s("./app/j/diagrams/components/DiagramShapePoint.tsx"),
                r = s("./node_modules/@linaria/core/lib/index.js"),
                i = s("./app/j/diagrams/components/DiagramShapePopup.tsx"),
                l = s("./app/j/diagrams/DiagramConstants.ts"),
                d = s("./node_modules/react/index.js"),
                u = s("./node_modules/react-leaflet/lib/index.js"),
                c = s("./node_modules/react/jsx-runtime.js");
            const p = "p1hmjz8i",
                m = "d1338do4";

            function g(e) {
                let {
                    color: t = l.Dp,
                    geoJson: s,
                    innerRef: n,
                    ...a
                } = e;
                const o = (0, r.cx)(a.disabled && m, a.pulse && p);
                return (0, d.createElement)(u.QZ, {
                    ...a,
                    className: o,
                    color: t,
                    data: s,
                    fillOpacity: l.wB,
                    key: o,
                    onClick: a.disabled ? void 0 : a.onClick,
                    ref: n,
                    weight: 4
                }, a.children ? (0, c.jsx)(i.Z, {
                    children: a.children
                }) : null)
            }
            s("./.linaria-cache/app/j/diagrams/components/DiagramShapePolygon.linaria.css");
            var h = s("./app/j/utils/Leaflet.ts");
            const _ = (e, t) => window.setTimeout((() => {
                e.clearLayers(), e.addData(t)
            }), 0);

            function S(e, t) {
                let {
                    children: s,
                    disabled: r,
                    pulse: i,
                    onAdd: u,
                    onClick: p,
                    onMouseMove: m,
                    onMouseOut: S,
                    onMouseOver: E,
                    onPopupClose: y,
                    onPopupOpen: f,
                    onShapeUpdate: j,
                    shape: T,
                    state: A
                } = e;
                const b = (0, d.useRef)((0, a.O)(T)),
                    x = (0, d.useRef)(null),
                    I = null != t ? t : x;
                (0, d.useEffect)((() => {
                    if (null == j || j(T), !T) return () => null;
                    b.current = (0, a.O)(T);
                    let e = null;
                    if (!(0, h.AK)(b.current)) {
                        const t = I.current;
                        t && (e = _(t, b.current))
                    }
                    return () => {
                        e && clearTimeout(e)
                    }
                }), [T]);
                let v = l.Dp;
                switch (A) {
                    case l.kA.ACTIVE:
                        v = n.dl.$400;
                        break;
                    case l.kA.CORRECT:
                        v = n.y1.$400;
                        break;
                    case l.kA.INCORRECT:
                        v = n.jj.$200;
                        break;
                    default:
                        v = l.Dp
                }
                const C = {
                    children: s,
                    color: v,
                    disabled: r,
                    onAdd: u,
                    onClick: p,
                    onMouseOut: S,
                    onMouseOver: E,
                    onPopupClose: y,
                    onPopupOpen: f,
                    pulse: i
                };
                if ((0, h.AK)(b.current)) {
                    const e = b.current.geometry.coordinates.slice(0).reverse();
                    return (0, c.jsx)(o.Z, {
                        ...C,
                        innerRef: e => {
                            e && (I.current = e.leafletElement)
                        },
                        position: e
                    })
                }
                return (0, c.jsx)(g, {
                    ...C,
                    geoJson: b.current,
                    innerRef: e => {
                        e && (I.current = e.leafletElement)
                    },
                    onMouseMove: m
                })
            }
            const E = d.forwardRef(S)
        },
        "./app/j/diagrams/components/DiagramShapePoint.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                b: () => p,
                Z: () => m
            });
            var n = s("./node_modules/classnames/index.js"),
                a = s.n(n),
                o = s("./app/j/diagrams/components/DiagramShapePopup.tsx"),
                r = s("./app/j/diagrams/DiagramConstants.ts"),
                i = s("./app/j/diagrams/QLeaflet.ts"),
                l = (s("./node_modules/react/index.js"), s("./node_modules/react-leaflet/lib/index.js")),
                d = s("./app/j/utils/hexToRgba.ts"),
                u = s("./node_modules/react-dom/server.browser.js"),
                c = s("./node_modules/react/jsx-runtime.js");
            const p = e => {
                const t = e.className;
                return e.className = a()("DiagramShapePoint", e.className), i.Z.divIcon({
                    className: t,
                    html: (0, u.renderToStaticMarkup)((0, c.jsx)("div", {
                        ...e,
                        children: (0, c.jsx)("span", {
                            className: "DiagramShapePoint-inner",
                            style: e.style
                        })
                    })),
                    iconSize: [r.C, r.C],
                    props: e
                })
            };

            function m(e) {
                let {
                    color: t = r.Dp,
                    innerRef: s,
                    ...n
                } = e;
                const i = a()({
                        "is-disabled": n.disabled,
                        "is-pulsing": n.pulse
                    }),
                    u = {
                        backgroundColor: (0, d.Z)(t, r.wB / 2),
                        borderColor: t,
                        color: t
                    };
                return (0, c.jsx)(l.Jx, {
                    ...n,
                    icon: p({
                        className: i,
                        style: u
                    }),
                    onclick: n.disabled ? void 0 : n.onClick,
                    ref: s,
                    children: n.children ? (0, c.jsx)(o.Z, {
                        children: n.children
                    }) : null
                })
            }
        },
        "./app/j/diagrams/components/DiagramShapePopup.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/core/legacy_store/LegacyStoreProvider.tsx"),
                o = s("./node_modules/react-leaflet/lib/index.js"),
                r = s("./node_modules/react/jsx-runtime.js");
            const i = (0, n.z)("div")({
                name: "PopupDiv",
                class: "p1063vsu"
            });

            function l(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(o.GI, {
                    autoClose: !0,
                    autoPan: !1,
                    closeButton: !1,
                    closeOnClick: !0,
                    children: (0, r.jsx)(a.ZP, {
                        children: (0, r.jsx)(i, {
                            children: t
                        })
                    })
                })
            }
            s("./.linaria-cache/app/j/diagrams/components/DiagramShapePopup.linaria.css")
        },
        "./app/j/diagrams/helpers.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Jk: () => l,
                LY: () => d,
                XV: () => i
            });
            var n = s("./app/j/diagrams/DiagramConstants.ts"),
                a = s("./app/j/diagrams/QLeaflet.ts"),
                o = s("./app/j/utils/ImmutableCompatibilityHelpers.ts"),
                r = s("./app/j/utils/Leaflet.ts");

            function i(e) {
                const t = (0, o.D)(e, "height") / (0, o.D)(e, "width"),
                    s = (0, r.os)(a.Z.point(0, n.iR * t)),
                    i = (0, r.os)(a.Z.point(n.iR, 0));
                return a.Z.latLngBounds([s, i])
            }

            function l(e, t) {
                return t.contains(e)
            }
            const d = e => {
                e.target.openPopup()
            }
        },
        "./app/j/diagrams/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                U: () => n
            });
            let n = function(e) {
                return e.NO_ZOOM = "NO_ZOOM", e.ZOOM_TO_POINTS = "ZOOM_TO_POINTS", e
            }({})
        },
        "./app/j/header/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ax: () => r,
                P7: () => a,
                Pp: () => n,
                nU: () => o
            });
            const n = 64,
                a = "m",
                o = "l";
            let r = function(e) {
                return e.Home = "home", e.Subjects = "subjects", e.Explanations = "explanations", e.Library = "your-library", e.Create = "create", e.WhatsNew = "whats-new", e
            }({})
        },
        "./app/j/hocs/keydownDecorator.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l,
                a: () => i
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/react/index.js"),
                a = s("./app/j/utils/HOCs.ts"),
                o = s("./node_modules/react/jsx-runtime.js");
            let r = 1;
            const i = ["CapsLock", "Tab"];

            function l(e) {
                const t = Array.isArray(e) ? e.join(", ") : e;
                return (0, a.r)((function(e) {
                    return class extends n.Component {
                        constructor() {
                            super(...arguments), this.state = {
                                keydownEvent: null
                            }, this.handleKeydown = e => {
                                !t && this.isModifierKey(e) || e.repeat || this.setState({
                                    keydownEvent: e
                                }, (() => {
                                    this.setState({
                                        keydownEvent: null
                                    })
                                }))
                            }, this.isModifierKey = e => {
                                const {
                                    altKey: t,
                                    ctrlKey: s,
                                    metaKey: n,
                                    shiftKey: a
                                } = e;
                                return t || s || n || a
                            }, this.scope = "keydownDecorator#" + r++
                        }
                        componentDidMount() {
                            const e = s("./node_modules/keymaster/keymaster.js");
                            t ? (e.pushScope(this.scope), e(t, this.scope, this.handleKeydown)) : window.document.addEventListener("keydown", this.handleKeydown, !0)
                        }
                        componentWillUnmount() {
                            const e = s("./node_modules/keymaster/keymaster.js");
                            t ? (e.deleteScope(this.scope), e.unbind(t, this.scope)) : window.document.removeEventListener("keydown", this.handleKeydown, !0)
                        }
                        render() {
                            return (0, o.jsx)(e, {
                                ...this.props,
                                keydownEvent: this.state.keydownEvent
                            })
                        }
                    }
                }))
            }
        },
        "./app/j/hooks/useClickAway.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var n = s("./node_modules/react/index.js");

            function a(e, t) {
                (0, n.useEffect)((() => {
                    if (null === e.current) return;
                    const s = s => {
                        e.current && (e.current.contains(s.target) || t(s))
                    };
                    return document.addEventListener("click", s, !0), document.addEventListener("touchstart", s, !0), () => {
                        document.removeEventListener("click", s), document.removeEventListener("touchstart", s)
                    }
                }), [e, t])
            }
        },
        "./app/j/i18n/getLocalizedLanguage.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r,
                w: () => o
            });
            var n = s("./app/j/compatibility/getLocalizedLanguage.ts"),
                a = s("./app/j/i18n/$t.ts");

            function o(e) {
                return (0, n.w)(a.Z, e)
            }

            function r(e) {
                return (0, n.Z)(a.Z, e)
            }
        },
        "./app/j/kmp/ExperimentManager.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                _: () => n
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            class n {
                constructor(e) {
                    this.qMeasure = e, this.variantOverrides = new Map([])
                }
                enrollAndGetVariantName(e) {
                    const t = this.getOverriddenVariant(e);
                    if (void 0 !== t) return t;
                    const s = e;
                    if (this.qMeasure.getTest(s)) {
                        return this.qMeasure.getVariationAndEnroll(s)
                    }
                    return null
                }
                overrideVariant(e, t) {
                    this.variantOverrides.set(e, t)
                }
                getOverriddenVariant(e) {
                    return this.variantOverrides.get(e)
                }
            }
        },
        "./app/j/kmp/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                eN: () => d
            });
            s("./node_modules/core-js/modules/es.string.replace.js"), s("./node_modules/core-js/modules/es.json.stringify.js");
            var n = s("./node_modules/@status/codes/build/http.js"),
                a = s("./node_modules/abort-controller/browser.js"),
                o = s.n(a),
                r = s("./app/j/compatibility/fetch/browserFetch.ts"),
                i = s("./node_modules/invariant/browser.js"),
                l = s.n(i);
            class d {
                submit(e, t, s) {
                    let {
                        url: a,
                        queryParameters: i,
                        body: d,
                        method: u
                    } = e;
                    const c = new(o());
                    let p = !0;
                    return (0, r.t5)(function(e) {
                        const t = "undefined" == typeof window ? "https://quizlet.com" : window.location.origin;
                        return e.replace("https://api.quizlet.com/", t + "/webapi/")
                    }(a), function(e) {
                        const t = e.toUpperCase();
                        return l()("GET" === t || "DELETE" === t || "POST" === t, "Cannot make %s HTTP calls", t), t
                    }(u), i, void 0, d || void 0, {
                        signal: c.signal
                    }).then((e => {
                        p = !1;
                        const s = {
                            body: e.body ? JSON.stringify(e.body) : null,
                            code: e.status,
                            message: n.eV[e.status]
                        };
                        t(s)
                    })).catch((e => {
                        p = !1, s(e)
                    })), {
                        cancel: () => !!p && (c.abort(), !0)
                    }
                }
                submitMultipart(e, t, s) {
                    throw new Error("Unimplemented")
                }
            }
        },
        "./app/j/lazy/LoginPromptModalContainerLazy.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            const n = (0, s("./app/j/hocs/lazilyLoadComponent.tsx").Z)((() => Promise.all([s.e("react"), s.e("redux"), s.e("common"), s.e("login_signup_lazy")]).then(s.bind(s, "./app/j/containers/LoginPromptModalContainer.ts"))))
        },
        "./app/j/lazy/QuestionHintContainerLazy.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            const n = (0, s("./app/j/hocs/lazilyLoadComponent.tsx").Z)((() => Promise.all([s.e("progress"), s.e("question_hint_container_lazy")]).then(s.bind(s, "./app/j/study-modes/learn/containers/QuestionHintContainer.ts"))))
        },
        "./app/j/lazy/SignupPromptModalNewLazy.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            const n = (0, s("./app/j/hocs/lazilyLoadComponent.tsx").Z)((() => Promise.all([s.e("react"), s.e("redux"), s.e("common"), s.e("login_signup_lazy")]).then(s.bind(s, "./app/j/components/SignupPromptModalNew.tsx"))))
        },
        "./app/j/legacyAssistant/types/QAssistantModeTypes.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Q: () => o
            });
            var n = s("./app/j/config/study-setting-metadata.ts");
            const {
                bitValues: a
            } = n.default.ASSISTANT_MODE_QUESTION_TYPES;

            function o() {
                return a
            }
        },
        "./app/j/login/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                MF: () => l,
                VO: () => r,
                Vv: () => o,
                e: () => i,
                g4: () => a,
                vu: () => n
            });
            const n = "generic",
                a = 250,
                o = "login_multiple_accounts_found",
                r = "login",
                i = {
                    PASSWORD: "password",
                    USERNAME: "username"
                };
            let l = function(e) {
                return e.CHANGE_INPUT = "LOGIN.CHANGE_INPUT", e.CHANGE_LOGIN_PARAMS = "LOGIN.CHANGE_LOGIN_PARAMS", e.RESET_SUBMISSION = "LOGIN.RESET_SUBMISSION", e.SUBMIT_FORM = "LOGIN.SUBMIT_FORM", e.SUBMIT_FORM_ASYNC_FAILURE = "LOGIN.SUBMIT_FORM_ASYNC_FAILURE", e.OPEN_AUTH_MODAL = "LOGIN.OPEN_AUTH_MODAL", e.CLOSE_AUTH_MODAL = "LOGIN.CLOSE_AUTH_MODAL", e.REQUEST_USERNAME = "LOGIN.REQUEST_USERNAME", e
            }({})
        },
        "./app/j/login/index.ts": (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                default: () => u,
                loginReducer: () => d
            });
            var n = s("./app/j/core/default_store/DefaultStore.ts"),
                a = s("./app/j/login/constants.ts"),
                o = (s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/immer/dist/immer.esm.mjs"));
            const r = {
                [a.MF.CHANGE_INPUT]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, o.ZP)(e, (e => {
                        const {
                            name: t,
                            value: n,
                            type: a
                        } = s, o = "checkbox" === a ? s.checked : n;
                        e.form[t] = o, e.validationErrorsByInputName[t] = null
                    }))
                },
                [a.MF.CHANGE_LOGIN_PARAMS]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, o.ZP)(e, (e => {
                        e.form[a.e.USERNAME] = s.username, e.magicLinkUsername = s.username, e.redir = s.redir
                    }))
                },
                [a.MF.RESET_SUBMISSION]: e => (0, o.ZP)(e, (e => {
                    e.wasSubmitted = !1
                })),
                [a.MF.SUBMIT_FORM]: e => (0, o.ZP)(e, (e => {
                    e.wasSubmitted = !0, e.validationErrorsByInputName = {
                        [a.vu]: []
                    }
                })),
                [a.MF.SUBMIT_FORM_ASYNC_FAILURE]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, o.ZP)(e, (e => {
                        e.validationErrorsByInputName = s.reduce(((e, t) => (-1 !== t.type.indexOf(a.e.USERNAME) ? e[a.e.USERNAME] = t.message : -1 !== t.type.indexOf(a.e.PASSWORD) ? e[a.e.PASSWORD] = t.message : e[a.vu].push(t), e)), e.validationErrorsByInputName), e.numFailedAttempts += 1
                    }))
                },
                [a.MF.REQUEST_USERNAME]: e => (0, o.ZP)(e, (e => {
                    e.hasMultipleAccounts = !0
                }))
            };
            var i = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
            const l = {
                    form: {
                        [a.e.PASSWORD]: "",
                        [a.e.USERNAME]: ""
                    },
                    hasMultipleAccounts: !1,
                    numFailedAttempts: 0,
                    openedAuthModal: null,
                    validationErrorsByInputName: {
                        [a.vu]: []
                    },
                    wasSubmitted: !1,
                    magicLinkUsername: "",
                    redir: ""
                },
                d = (0, i.createReducer)(l, r);

            function u(e) {
                void 0 === e && (e = (0, n.bh)()), e.registerReducer(a.VO, d)
            }
        },
        "./app/j/models/QSession.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => d
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/core/superagent-with-csrf.ts"),
                a = s("./node_modules/invariant/browser.js"),
                o = s.n(a),
                r = s("./app/j/models/helpers/extractModelsAndIncludedAssociationsFromFirstResponse.ts"),
                i = s("./app/j/models/helpers/prepQueryParams.ts"),
                l = s("./app/j/models/QModel.ts");
            class d extends l.Z {
                static getHighscores(e, t, s, a, l, d) {
                    void 0 === a && (a = !1), void 0 === l && (l = !1), void 0 === d && (d = this.REQUEST_TIMEOUT_LIMIT_MS);
                    const u = (0, i.Z)({
                            filters: {
                                itemId: e,
                                itemType: t,
                                type: s
                            }
                        }),
                        c = (0, i.Z)({
                            include: {
                                session: "user"
                            }
                        });
                    return new Promise(((e, t) => {
                        const s = n.Z.get(this._getBaseUrl("highscores")).timeout(d).credentials().query(u);
                        return a && s.query(c), l && s.query((0, i.Z)({
                            selectedOnly: !0
                        })), s.end(((s, n) => {
                            if (s) return t(s);
                            if (null === n) return t();
                            if (n.error) return t(n.error);
                            const a = (0, r.Z)(this.MODEL_NAME, n, [{
                                model: "user",
                                isRelated: (e, t) => e.personId === t.id
                            }]);
                            return o()(a, "Unable to extract model in getHighScores"), e({
                                highscores: this.fromJson(a)
                            })
                        }))
                    }))
                }
            }
            d.REQUEST_TIMEOUT_LIMIT_MS = 6e4, d.URL_BASE = "sessions", d.MODEL_NAME = "session"
        },
        "./app/j/models/QStudiableAnswer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var n = s("./app/j/models/QModel.ts");
            class a extends n.Z {}
            a.URL_BASE = "studiable-answers", a.MODEL_NAME = "studiableAnswer", a.ALLOW_SOFT_DELETE = !1, a.API_VERSION = "3.4"
        },
        "./app/j/models/helpers/extractModelsAndIncludedAssociationsFromFirstResponse.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = s("./node_modules/invariant/browser.js"),
                a = s.n(n);

            function o(e, t, s) {
                a()(t.body && Array.isArray(t.body.responses), "Invalid data param in extractModelsAndIncludedAssociationsFromFirstResponse");
                const {
                    models: n
                } = t.body.responses[0];
                return s.forEach((t => {
                    const s = n[t.model],
                        a = t.isRelated;
                    ! function(e, t, s, n) {
                        t.forEach((t => {
                            e.forEach((e => {
                                n(e, t) && (e[s] = t)
                            }))
                        }))
                    }(n[e], s, t.model, a)
                })), n[e]
            }
        },
        "./app/j/notifications/addNotification.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r
            });
            var n = s("./app/j/global/Quizlet.ts"),
                a = s("./node_modules/invariant/browser.js"),
                o = s.n(a);

            function r(e) {
                QWait("Quizlet.NotificationContainer", (() => {
                    o()(n.default.NotificationContainer, "Missing Quizlet.NotificationContainer"), n.default.NotificationContainer.addNotification(e)
                }))
            }
        },
        "./app/j/rich_text/EditorModelHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Eg: () => i,
                N_: () => d,
                Xd: () => m,
                ZL: () => c,
                j3: () => g,
                z1: () => p
            });
            s("./node_modules/core-js/modules/es.array.includes.js"), s("./node_modules/core-js/modules/web.url.to-json.js");
            var n = s("./node_modules/prosemirror-model/dist/index.js"),
                a = s("./app/j/rich_text/constants.ts"),
                o = s("./app/j/rich_text/marks.ts"),
                r = s("./app/j/rich_text/schema.ts");
            const i = e => r.Z.text(e),
                l = (e, t) => r.Z.node(e, void 0, t),
                d = e => e.split("\n").map((e => "" !== e && "string" == typeof e ? l(a.Hq.PARAGRAPH, [i(e)]) : l(a.Hq.PARAGRAPH))),
                u = e => e ? e.map((e => {
                    const t = {
                        ...e
                    };
                    return e.marks && (t.marks = e.marks.filter((e => Object.keys(o.Z).includes(e.type)))), e.content && (t.content = u(e.content)), t
                })) : null,
                c = e => {
                    if (e.type !== a.Hq.DOCUMENT) throw new Error("Invalid document provided!");
                    return {
                        ...e,
                        content: u(e.content)
                    }
                },
                p = e => {
                    return t = (e => n.Node.fromJSON(r.Z, e))(c(e)), n.DOMSerializer.fromSchema(r.Z).serializeFragment(t, {}, document.createElement("div"));
                    var t
                },
                m = e => {
                    if (!e) return l(a.Hq.DOCUMENT, [l(a.Hq.PARAGRAPH)]).toJSON();
                    const t = d(e);
                    return l(a.Hq.DOCUMENT, t).toJSON()
                },
                g = e => {
                    const t = [];
                    return e.textContent && e.forEach((e => {
                        t.push(e.textContent)
                    })), t.join("\n")
                }
        },
        "./app/j/rich_text/components/PMDocument.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/@linaria/react/lib/index.js"),
                o = s("./app/j/config/languages.ts"),
                r = s("./app/j/rich_text/EditorModelHelper.ts"),
                i = s("./node_modules/react/jsx-runtime.js");
            const l = (0, a.z)("div")({
                    name: "Document",
                    class: "dxv8pid"
                }),
                d = "r8aglf5";

            function u(e) {
                let {
                    allowRtl: t,
                    pmJson: s,
                    lang: a
                } = e;
                const u = "string" == typeof s ? JSON.parse(s) : s,
                    c = {
                        __html: (0, r.z1)(u).innerHTML
                    },
                    p = t && o.cQ.includes(a);
                return (0, i.jsx)(l, {
                    className: (0, n.cx)(p && d),
                    dangerouslySetInnerHTML: c
                })
            }
            s("./.linaria-cache/app/j/rich_text/components/PMDocument.linaria.css")
        },
        "./app/j/rich_text/components/SpecialCharactersToolbar.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m,
                i: () => u
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./node_modules/react/index.js"),
                o = s("./app/j/study-modes/legacy-common/components/SpecialCharacterButtonGroup.tsx"),
                r = s("./app/j/utils/AccentHelper.ts"),
                i = s("./app/j/utils/EventListener.ts"),
                l = s("./node_modules/react/jsx-runtime.js");
            const d = (0, n.z)("div")({
                    name: "Toolbar",
                    class: "t19duczn"
                }),
                u = "h187ohc0",
                c = (0, n.z)("div")({
                    name: "AccentsBar",
                    class: "aixuzoy"
                }),
                p = (0, n.z)("div")({
                    name: "AccentsBarInner",
                    class: "a1ifv3gl"
                });

            function m(e) {
                let {
                    editorView: t,
                    languageCodes: s,
                    specificAccents: n
                } = e;
                const m = (0, a.useRef)(null),
                    g = (0, a.useRef)(null),
                    h = e => {
                        e.preventDefault()
                    };
                (0, a.useEffect)((() => (m.current && (g.current = i.Z.listen(m.current, "mousedown", h)), () => {
                    g.current && (g.current.remove(), g.current = null)
                })));
                const _ = r.Z.getCharactersByLangForLangs(s);
                if (n.length > 0 && s.length > 0) {
                    _[s[0]] = n
                }
                const S = _ && s && s[0] && _[s[0]].length > 0;
                return (0, l.jsx)(d, {
                    "data-testid": "SpecialCharactersToolbar",
                    ref: m,
                    children: S ? (0, l.jsx)(c, {
                        className: u,
                        children: (0, l.jsx)(p, {
                            children: (0, l.jsx)(o.Z, {
                                buttonSize: "small",
                                charactersByLang: _,
                                compact: !0,
                                onClickButton: e => {
                                    const {
                                        view: s
                                    } = t, {
                                        state: n,
                                        dispatch: a
                                    } = s;
                                    (e => (t, s) => {
                                        s(t.tr.insertText(e))
                                    })(e)(n, a), s.focus()
                                }
                            })
                        })
                    }) : null
                })
            }
            s("./.linaria-cache/app/j/rich_text/components/SpecialCharactersToolbar.linaria.css")
        },
        "./app/j/rich_text/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Hq: () => l,
                Kg: () => r,
                P8: () => a,
                QK: () => u,
                dm: () => p,
                fI: () => d,
                oG: () => o,
                oN: () => i,
                wu: () => c
            });
            var n = s("./app/j/assembly/foundations/Color.ts");
            const a = {
                    BLOCK: "block+",
                    INLINE: "inline*",
                    TEXT: "text*"
                },
                o = {
                    BLOCK: "block",
                    INLINE: "inline"
                },
                r = {
                    BOLD: "b",
                    EMPHASIS: "em",
                    ITALIC: "i",
                    PARAGRAPH: "p",
                    SPAN: "span",
                    STRONG: "strong",
                    SUBSCRIPT: "sub",
                    SUPERSCRIPT: "sup",
                    UNDERLINE: "u"
                },
                i = {
                    BOLD: "b",
                    BG_BLUE: "bgB",
                    BG_PINK: "bgP",
                    BG_YELLOW: "bgY",
                    ITALIC: "i",
                    UNDERLINE: "u"
                },
                l = {
                    DOCUMENT: "doc",
                    PARAGRAPH: "paragraph",
                    TEXT: "text"
                },
                d = {
                    [i.BOLD]: "bold",
                    [i.ITALIC]: "italic",
                    [i.UNDERLINE]: "underline"
                },
                u = (n.dl.$400, {
                    [i.BG_PINK]: "m98tlmg",
                    [i.BG_YELLOW]: "mscfyq7",
                    [i.BG_BLUE]: "mkenrva"
                }),
                c = {
                    BLUE: "bgB",
                    PINK: "bgP",
                    YELLOW: "bgY"
                },
                p = {
                    INLINE: "inline",
                    PLACEHOLDER: "placeholder"
                };
            s("./.linaria-cache/app/j/rich_text/constants.linaria.css")
        },
        "./app/j/rich_text/marks.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = s("./app/j/rich_text/constants.ts");
            const a = (e, t) => e && e.classList && e.classList.contains(t),
                o = {
                    parseDOM: [{
                        tag: n.Kg.ITALIC
                    }, {
                        tag: n.Kg.EMPHASIS
                    }, {
                        style: "font-style=italic"
                    }],
                    toDOM: () => [n.Kg.EMPHASIS, 0]
                },
                r = {
                    parseDOM: [{
                        tag: n.Kg.STRONG
                    }, {
                        tag: n.Kg.BOLD,
                        getAttrs: e => "normal" !== e.style.fontWeight && null
                    }, {
                        style: "font-weight",
                        getAttrs: e => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
                    }],
                    toDOM: () => [n.Kg.STRONG, 0]
                },
                i = {
                    parseDOM: [{
                        tag: n.Kg.UNDERLINE
                    }, {
                        style: "text-decoration=underline"
                    }],
                    toDOM: () => [n.Kg.SPAN, {
                        style: "text-decoration:underline"
                    }]
                },
                l = {
                    attrs: {
                        class: {
                            default: "" + n.wu.YELLOW
                        }
                    },
                    excludes: n.oN.BG_PINK + " " + n.oN.BG_BLUE,
                    parseDOM: [{
                        tag: n.Kg.SPAN,
                        getAttrs: e => !!a(e, n.wu.YELLOW) && {
                            class: n.wu.YELLOW
                        }
                    }],
                    toDOM: () => [n.Kg.SPAN, {
                        class: "" + n.wu.YELLOW
                    }, 0]
                },
                d = {
                    attrs: {
                        class: {
                            default: "" + n.wu.PINK
                        }
                    },
                    excludes: n.oN.BG_YELLOW + " " + n.oN.BG_BLUE,
                    parseDOM: [{
                        tag: n.Kg.SPAN,
                        getAttrs: e => !!a(e, n.wu.PINK) && {
                            class: n.wu.PINK
                        }
                    }],
                    toDOM: () => [n.Kg.SPAN, {
                        class: "" + n.wu.PINK
                    }, 0]
                },
                u = {
                    attrs: {
                        class: {
                            default: "" + n.wu.BLUE
                        }
                    },
                    excludes: n.oN.BG_PINK + " " + n.oN.BG_YELLOW,
                    parseDOM: [{
                        tag: n.Kg.SPAN,
                        getAttrs: e => !!a(e, n.wu.BLUE) && {
                            class: n.wu.BLUE
                        }
                    }],
                    toDOM: () => [n.Kg.SPAN, {
                        class: "" + n.wu.BLUE
                    }, 0]
                },
                c = {
                    [n.oN.BOLD]: r,
                    [n.oN.ITALIC]: o,
                    [n.oN.UNDERLINE]: i,
                    [n.oN.BG_YELLOW]: l,
                    [n.oN.BG_PINK]: d,
                    [n.oN.BG_BLUE]: u
                }
        },
        "./app/j/rich_text/schema.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l,
                c: () => d
            });
            var n = s("./node_modules/prosemirror-model/dist/index.js"),
                a = s("./app/j/rich_text/marks.ts"),
                o = s("./app/j/rich_text/constants.ts");
            const r = {
                    content: o.P8.BLOCK,
                    group: o.oG.BLOCK
                },
                i = {
                    paragraph: {
                        content: o.P8.INLINE,
                        group: o.oG.BLOCK,
                        parseDOM: [{
                            tag: o.Kg.PARAGRAPH
                        }],
                        toDOM: () => [o.Kg.PARAGRAPH, 0]
                    },
                    doc: r,
                    text: {
                        group: o.oG.INLINE
                    }
                },
                l = new n.Schema({
                    marks: a.Z,
                    nodes: i
                }),
                d = new n.Schema({
                    marks: {},
                    nodes: i
                })
        },
        "./app/j/set/enums.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Dl: () => a,
                GO: () => n,
                qu: () => o
            });
            let n = function(e) {
                    return e.HOUR = "HOUR", e.DAY = "DAY", e
                }({}),
                a = function(e) {
                    return e.CLASSIC = "classic", e.CHECKPOINT = "checkpoint", e
                }({}),
                o = function(e) {
                    return e.ALL_TOASTS = "all_toasts", e.ONE_TOAST = "one_toast", e
                }({})
        },
        "./app/j/signup/components/AuthPromptModal.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => M
            });
            var n = s("./node_modules/lodash/noop.js"),
                a = s.n(n),
                o = (s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./app/j/assembly/AssemblyLink.tsx")),
                r = s("./app/j/assembly/modals/index.ts"),
                i = s("./app/j/compatibility/logger/useLogger.ts"),
                l = s("./app/j/compatibility/router.ts"),
                d = s("./app/j/config/enums.ts"),
                u = s("./app/j/i18n/useTranslation.ts"),
                c = s("./node_modules/react/index.js"),
                p = s("./node_modules/@linaria/react/lib/index.js"),
                m = s("./app/j/assembly/AssemblyBreakpoint.tsx"),
                g = s("./app/j/assembly/buttons/index.ts"),
                h = s("./app/j/components/SocialButton.tsx"),
                _ = s("./app/j/context/RouteContext.tsx"),
                S = s("./app/j/signup/components/TosLegend.tsx"),
                E = s("./app/j/signup/types/auth.ts"),
                y = s("./app/j/signup/utils.ts"),
                f = s("./app/j/utils/LoginHelper.ts"),
                j = s("./node_modules/react/jsx-runtime.js");
            const T = (0, p.z)("div")({
                    name: "BodyWrapper",
                    class: "b6nch9j"
                }),
                A = (0, p.z)("div")({
                    name: "TosWrapper",
                    class: "t1vzruvv"
                }),
                b = (0, p.z)("div")({
                    name: "SignupOptions",
                    class: "sfkrc64"
                });

            function x(e) {
                let {
                    authOrigin: t,
                    escapeHatch: s,
                    loggingData: n,
                    onClickEmailSignup: a
                } = e;
                const [o, r] = (0, c.useState)(!0), {
                    t: l
                } = (0, u.ZP)(), d = (0, f.GG)((0, c.useContext)(_.jj).actionString), {
                    logPageAction: p
                } = (0, i.wL)(), {
                    isFacebookSignupDisabled: x
                } = (0, y.t9)();

                function I(e) {
                    p(E.o.SOCIAL_AUTH_CLICKED, {
                        ...n,
                        provider: e
                    }, {
                        isTabClosing: !0
                    })
                }

                function v(e) {
                    const s = {
                        customParams: {
                            signupOrigin: t,
                            screenName: d
                        }
                    };
                    return (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(m.ZP, {
                            lowerBound: "s",
                            children: (0, j.jsx)(h.ZP, {
                                onClick: () => I(e),
                                provider: e,
                                size: "xlarge",
                                urlParams: s,
                                variant: h.IN.SMALL
                            })
                        }), (0, j.jsx)(m.ZP, {
                            upperBound: "s",
                            children: (0, j.jsx)(h.ZP, {
                                onClick: () => I(e),
                                provider: e,
                                size: "large",
                                urlParams: s,
                                variant: h.IN.DEFAULT
                            })
                        })]
                    })
                }(0, c.useEffect)((() => {
                    x() ? r(!1) : r(!0)
                }), []);
                const C = (0, j.jsxs)(j.Fragment, {
                    children: [(0, j.jsx)(m.ZP, {
                        lowerBound: "s",
                        children: (0, j.jsx)(g.B0, {
                            isFullWidth: !0,
                            onClick: a,
                            size: "xlarge",
                            text: l("global.sign_up_modal.email"),
                            topIcon: "mail"
                        })
                    }), (0, j.jsx)(m.ZP, {
                        upperBound: "s",
                        children: (0, j.jsx)(g.B0, {
                            isFullWidth: !0,
                            leftIcon: "mail",
                            onClick: a,
                            size: "large",
                            text: l("signup_wall_inline.cta")
                        })
                    })]
                });
                return (0, j.jsxs)(j.Fragment, {
                    children: [(0, j.jsx)(A, {
                        children: (0, j.jsx)(S.Z, {
                            authType: "signup"
                        })
                    }), (0, j.jsxs)(T, {
                        children: [(0, j.jsxs)(b, {
                            children: [v(h.MC.GOOGLE), o && v(h.MC.FACEBOOK), C]
                        }), s]
                    })]
                })
            }
            s("./.linaria-cache/app/j/signup/components/AuthPromptOptions.linaria.css");
            var I = s("./app/j/lazy/LoginPromptModalContainerLazy.ts"),
                v = s("./app/j/lazy/SignupPromptModalNewLazy.ts"),
                C = s("./app/j/site_nav/types.ts");

            function N(e) {
                let {
                    authOrigin: t,
                    loggingData: s,
                    onCloseAuthModal: n,
                    onEmailLoginModalOpen: a,
                    onEmailSignupModalOpen: o,
                    openedAuthModal: r,
                    redirectPath: d
                } = e;
                const u = (0, l.wK)(),
                    {
                        logPageAction: c
                    } = (0, i.wL)();
                const p = (0, j.jsx)(v.Z, {
                        actions: {
                            onClose: function() {
                                c(E.o.EMAIL_SIGNUP_MODAL_CLOSED, {
                                    ...s
                                }), n()
                            },
                            onOpenLogin: a
                        },
                        includeCloseButton: !0,
                        isOpen: r === C.L.SIGN_UP,
                        redir: d || u,
                        signupOrigin: t
                    }),
                    m = (0, j.jsx)(I.Z, {
                        isOpen: r === C.L.LOGIN,
                        onClose: function() {
                            c(E.o.EMAIL_LOGIN_MODAL_CLOSED, {
                                ...s
                            }), n()
                        },
                        onOpenSignup: o,
                        redir: d || u
                    });
                return (0, j.jsxs)(j.Fragment, {
                    children: [p, m]
                })
            }
            const w = (0, p.z)("div")({
                    name: "LoginTextWrapper",
                    class: "lefre96"
                }),
                O = (0, p.z)("div")({
                    name: "SubtextWrapper",
                    class: "s15jni46"
                });

            function M(e) {
                let {
                    additionalLogData: t = {},
                    barrierType: s,
                    escapePath: n,
                    includeSubtitle: p = !0,
                    isOpen: m,
                    onClose: g,
                    onOpen: h = a(),
                    placement: _,
                    redirectPath: S,
                    signupOrigin: y,
                    titleOverride: f
                } = e;
                const [T, A] = (0, c.useState)(null), {
                    t: b
                } = (0, u.ZP)(), I = (0, l.wK)(), {
                    logPageAction: v,
                    logAuthEvent: M
                } = (0, i.wL)(), D = y || function(e) {
                    switch (e) {
                        case E.V.STUDY_MODE_BACK_BUTTON:
                            return "study-mode-back-button";
                        case E.V.SET_PAGE_CURTAIN:
                            return "study-mode-signup-curtain";
                        case E.V.SET_PAGE_LEARN:
                            return d.qkQ.LEARN_MODE_ENTER_BUTTON;
                        case E.V.SET_PAGE_TEST:
                            return d.qkQ.TEST_MODE_ENTER_BUTTON;
                        case E.V.SET_PAGE_MINI_FLASHCARDS:
                            return "set-page-signup-wall-mini-flashcards";
                        case E.V.TEST:
                        case E.V.LEARN:
                        default:
                            return "study-mode-signup-wall-modal"
                    }
                }(_), L = {
                    barrierType: s,
                    placement: _,
                    ...t
                };

                function P() {
                    v(E.o.EMAIL_SIGNUP_MODAL_OPENED, {
                        ...L
                    }), M(d.g4I.SIGNUP_FORM_OPENED, {
                        auth_origin: D
                    }), "curtain" === s && g(), A(C.L.SIGN_UP)
                }
                const R = "escapableWall" === s ? (0, j.jsxs)(O, {
                        children: [(0, j.jsx)(w, {
                            children: b("global.sign_up_modal.wall.escape_hatch")
                        }), (0, j.jsx)(o.ZP, {
                            linkTo: n,
                            onClick: function() {
                                v(E.o.ESCAPE_HATCH_CLICKED, {
                                    ...L
                                })
                            },
                            size: "small",
                            text: b("global.sign_up_modal.wall.escape_hatch_option"),
                            variant: o.U_.Secondary
                        })]
                    }) : void 0,
                    k = (0, j.jsx)(x, {
                        authOrigin: D,
                        escapeHatch: R,
                        loggingData: L,
                        onClickEmailSignup: P
                    }),
                    U = f ? {
                        title: f,
                        subtitle: b("global.sign_up_modal.wall.subtitle")
                    } : {
                        title: b("global.sign_up_modal.wall_default.title"),
                        subtitle: b("global.sign_up_modal.wall_default.subtitle")
                    };
                return (0, j.jsxs)(j.Fragment, {
                    children: [(0, j.jsx)(N, {
                        authOrigin: D,
                        loggingData: L,
                        onCloseAuthModal: () => A(null),
                        onEmailLoginModalOpen: function() {
                            v(E.o.EMAIL_LOGIN_MODAL_OPENED, {
                                ...L
                            }), M(d.g4I.LOGIN_FORM_OPENED, {
                                auth_origin: D
                            }), "curtain" === s && g(), A(C.L.LOGIN)
                        },
                        onEmailSignupModalOpen: P,
                        openedAuthModal: T,
                        redirectPath: S || I
                    }), (0, j.jsx)(r.g, {
                        body: k,
                        includeCloseButton: "escapableWall" !== s,
                        isOpen: m,
                        justifyCenter: !0,
                        mobileVariant: "bottomSheet",
                        onClose: function() {
                            "escapableWall" !== s && (v(E.o.CLOSED, {
                                ...L
                            }), g())
                        },
                        onOpen: function() {
                            v(E.o.OPENED, {
                                ...L
                            }), h()
                        },
                        shouldCloseOnOverlayClick: "escapableWall" !== s,
                        subtitle: p ? U.subtitle : void 0,
                        title: U.title
                    })]
                })
            }
            s("./.linaria-cache/app/j/signup/components/AuthPromptStyling.linaria.css")
        },
        "./app/j/signup/components/TosLegend.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/@linaria/react/lib/index.js"),
                o = s("./app/j/assembly/AssemblyLink.tsx"),
                r = s("./app/j/compatibility/userAgentHelper.ts"),
                i = s("./app/j/i18n/Trans.tsx"),
                l = s("./app/j/i18n/useTranslation.ts"),
                d = s("./node_modules/react/jsx-runtime.js");
            const u = (0, a.z)("div")({
                name: "Wrapper",
                class: "w1v5qxro"
            });

            function c(e) {
                let {
                    authType: t,
                    alignLeft: s,
                    variant: a = "normal",
                    size: c = "default",
                    shouldHaveDifferentStyle: p = !1
                } = e;
                const m = (0, r.YQ)(),
                    {
                        t: g
                    } = (0, l.ZP)(),
                    h = (0, d.jsx)(o.ZP, {
                        linkTo: "/privacy",
                        shouldOpenInNewTab: !0,
                        size: "default" === c ? "xsmall" : "medium",
                        text: g("global.sign_up_modal.policy_agreement_privacy_policy_link"),
                        variant: "inverted" === a ? o.U_.SecondaryInverted : o.U_.Secondary
                    }),
                    _ = (0, d.jsx)(o.ZP, {
                        linkTo: "/tos",
                        shouldOpenInNewTab: !0,
                        size: "default" === c ? "xsmall" : "medium",
                        text: g("global.sign_up_modal.policy_agreement_tos_link"),
                        variant: "inverted" === a ? o.U_.SecondaryInverted : o.U_.Secondary
                    }),
                    S = "signup" === t ? (0, d.jsx)(i.Z, {
                        id: "global.sign_up_modal.policy_agreement_passive",
                        reactComponents: {
                            TosLink: _,
                            PrivacyPolicyLink: h
                        }
                    }) : "login" === t ? m ? (0, d.jsx)(i.Z, {
                        id: "global.login_modal.policy_agreement_mobile_cta",
                        reactComponents: {
                            TosLink: _,
                            PrivacyPolicyLink: h
                        }
                    }) : (0, d.jsx)(i.Z, {
                        id: "global.login_modal.policy_agreement_desktop_cta",
                        reactComponents: {
                            TosLink: _,
                            PrivacyPolicyLink: h
                        }
                    }) : void 0,
                    E = ["TosLegend", "TosLegend--" + a, c];
                return (0, d.jsx)(u, {
                    className: (0, n.cx)(...E, s && "is-left-aligned", p ? "updateTosLegendStyle" : void 0),
                    "data-testid": "TosLegend",
                    children: S
                })
            }
            s("./.linaria-cache/app/j/signup/components/TosLegend.linaria.css")
        },
        "./app/j/signup/types/auth.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                V: () => n,
                o: () => a
            });
            let n = function(e) {
                    return e.STUDY_MODE_BACK_BUTTON = "study_mode_back_button", e.SET_PAGE_CURTAIN = "set_page_curtain", e.SET_PAGE_LEARN = "set_page_learn", e.SET_PAGE_MINI_FLASHCARDS = "set_page_mini_flashcards", e.SET_PAGE_TEST = "set_page_test", e.LEARN = "learn", e.TEST = "test", e.MATCH = "match", e
                }({}),
                a = function(e) {
                    return e.OPENED = "auth_prompt_modal_opened", e.CLOSED = "auth_prompt_modal_closed", e.SOCIAL_AUTH_CLICKED = "auth_prompt_modal_social_auth_clicked", e.ESCAPE_HATCH_CLICKED = "auth_prompt_modal_escape_hatch_clicked", e.EMAIL_LOGIN_MODAL_OPENED = "auth_prompt_modal_email_login_modal_opened", e.EMAIL_SIGNUP_MODAL_OPENED = "auth_prompt_modal_email_signup_modal_opened", e.EMAIL_LOGIN_MODAL_CLOSED = "auth_prompt_modal_email_login_modal_closed", e.EMAIL_SIGNUP_MODAL_CLOSED = "auth_prompt_modal_email_signup_modal_closed", e
                }({})
        },
        "./app/j/signup/types/formTypes.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                f: () => n
            });
            let n = function(e) {
                return e.BIRTH_DATE = "birth_date", e.BIRTH_DAY = "birth_day", e.BIRTH_MONTH = "birth_month", e.BIRTH_YEAR = "birth_year", e.EMAIL = "email", e.PASSWORD = "password1", e.SELF_IDENTIFIED_USER_TYPE = "is_free_teacher", e.IS_PARENT = "is_parent", e.IS_STUDENT = "is_student", e.IS_TEACHER = "is_teacher", e.TERMS_OF_SERVICE = "TOS", e.USERNAME = "username", e.MARKETING_OPT_OUT = "marketing_opt_out", e.PARENT_EMAIL = "parent_email", e.PARENT_PASSWORD = "parent_password", e
            }({})
        },
        "./app/j/signup/utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ay: () => E,
                Cl: () => h,
                F_: () => c,
                NC: () => S,
                dB: () => I,
                dd: () => v,
                eA: () => C,
                hN: () => p,
                mP: () => y,
                sN: () => m,
                t9: () => N,
                vu: () => g,
                wj: () => _,
                yR: () => u
            });
            s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/config/i18n.ts"),
                o = s("./app/j/context/RequestContext.ts"),
                r = s("./app/j/hooks/useQMeasure.ts"),
                i = s("./node_modules/react/index.js"),
                l = s("./app/j/signup/types/formTypes.ts"),
                d = s("./app/j/utils/parseAge.ts");
            const u = "-1",
                c = 500,
                p = ["ep", "gb", "nl", "za", "jp", "no", "tr", "cn", "kr", "au", "nz", "fr", "at", "it", "be", "bg", "hr", "cz", "dk", "ee", "fi", "gr", "hu", "ie", "lv", "lt", "lu", "mt", "pl", "pt", "ro", "sk", "si", "se"],
                m = ["ca", "de", "ch"],
                g = "generic",
                h = e => e.reduce(((e, t) => (t.field ? e[(e => {
                    switch (e) {
                        case "birthDay":
                            return l.f.BIRTH_DAY;
                        case "birthMonth":
                            return l.f.BIRTH_MONTH;
                        case "birthYear":
                            return l.f.BIRTH_YEAR;
                        default:
                            return e
                    }
                })(t.field)] = t.message : e[g].push(t), e)), {
                    [g]: []
                }),
                _ = (e, t) => {
                    if (l.f.TERMS_OF_SERVICE === e || l.f.IS_PARENT === e) return t;
                    if (l.f.MARKETING_OPT_OUT === e) return !t;
                    if (e === l.f.SELF_IDENTIFIED_USER_TYPE) return t ? n.IXc.TEACHER : n.IXc.UNKNOWN;
                    throw new TypeError("Invalid checkbox name: " + e)
                },
                S = e => a.RP[e] || 13,
                E = e => {
                    let {
                        birthDay: t,
                        birthMonth: s,
                        birthYear: n
                    } = e;
                    const a = parseInt(t, 10),
                        o = parseInt(s, 10),
                        r = parseInt(n, 10);
                    return {
                        age: (0, d.Z)(r, o, a),
                        parsedBirthYear: r,
                        parsedBirthMonth: o,
                        parsedBirthDay: a
                    }
                },
                y = (e, t) => {
                    const {
                        age: s
                    } = E(e);
                    return s < S(t)
                },
                f = "checkout-modal",
                j = "partner-login-prompt-banner",
                T = "purchasable-content-folder-signup-modal",
                A = "purchasable-content-sets-signup-modal",
                b = "top-nav",
                x = {
                    NO_REDIRECT_TO_UPSELL: [n.qkQ.UPGRADE_STUDENT_ABOVE_THE_FOLD_GET_PLUS, n.qkQ.UPGRADE_STUDENT_ABOVE_THE_FOLD_START_TRIAL, n.qkQ.UPGRADE_STUDENT_BELOW_THE_FOLD_GET_PLUS, n.qkQ.UPGRADE_STUDENT_BELOW_THE_FOLD_START_TRIAL, n.qkQ.UPGRADE_TEACHER_ABOVE_THE_FOLD_START_TRIAL, n.qkQ.UPGRADE_TEACHER_BELOW_THE_FOLD_START_TRIAL, f, j, T, A]
                },
                I = (e, t) => {
                    const s = x.NO_REDIRECT_TO_UPSELL;
                    return s.push(b), !(null == t || !t.willUpgradeThroughPartner) || !!e && s.includes(e)
                };

            function v() {
                return "us" === (0, i.useContext)(o.Z).countryCode
            }

            function C(e) {
                const t = (0, i.useContext)(o.Z);
                return !(!e || "us" !== t.countryCode)
            }

            function N() {
                const e = (0, r.Z)();
                return {
                    isFacebookSignupDisabled: () => "experiment" === e.getFeatureFlagOrTestVariantWithoutEnrolling("DisableFacebookSignup"),
                    shouldFacebookFallbackToMagicLinkLogin: () => "experiment" === e.getFeatureFlagOrTestVariantWithoutEnrolling("FallbackFacebookToMagicLinkLogin")
                }
            }
        },
        "./app/j/studiable-data/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                N: () => n
            });
            let n = function(e) {
                return e.N_SIDED_CARD_ANSWER = "NSidedCardAnswer", e.MCQ_ANSWER = "McqAnswer", e
            }({})
        },
        "./app/j/studiable-data/utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ai: () => p,
                CC: () => d,
                F_: () => i,
                KN: () => h,
                c4: () => g,
                cD: () => l,
                lt: () => r,
                p: () => u,
                rn: () => m,
                vQ: () => _,
                xy: () => c
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/studiable-data/types.ts");

            function o(e) {
                const t = {
                    correctness: e.correctness,
                    round: e.round,
                    studiableItemId: e.itemId,
                    studyModeType: e.studyMode,
                    timestamp: e.timestamp
                };
                return "selectedOptionIds" in e ? {
                    type: a.N.MCQ_ANSWER,
                    selectedOptionIds: e.selectedOptionIds,
                    ...t
                } : {
                    type: a.N.N_SIDED_CARD_ANSWER,
                    promptSideIds: e.promptSideIds,
                    answerSideIds: e.answerSideIds,
                    ...t
                }
            }

            function r(e) {
                return o(e)
            }

            function i(e) {
                return e.type === n.zqd.N_SIDED_CARD
            }

            function l(e) {
                return e.type === n.zqd.MULTIPLE_CHOICE_QUESTION
            }

            function d(e) {
                return 1 === e.options.filter((e => e.isCorrect)).length
            }

            function u(e) {
                const t = e.media.find((e => e.type === n.DDH.IMAGE));
                return void 0 !== t && "width" in t ? t : null
            }

            function c(e) {
                const t = e.media.find((e => e.type === n.DDH.TEXT));
                return void 0 !== t && "plainText" in t ? t : null
            }

            function p(e) {
                const t = e.media.find((e => e.type === n.DDH.AUDIO));
                return void 0 === t || !("url" in t) || "width" in t ? null : t
            }

            function m(e) {
                const t = e.media.find((e => e.type === n.DDH.DIAGRAM_SHAPE));
                return void 0 !== t && "shape" in t ? t.shape : null
            }

            function* g(e, t) {
                for (const s of e)
                    for (const e of s.cardSides) e.label === t && (yield e)
            }

            function h(e, t) {
                const s = e.cardSides.find((e => e.label === t));
                return void 0 === s ? null : s
            }

            function _(e, t, s) {
                if (!e) return null;
                if (t === n.dU_.WORD && !s.wordEnabled || t === n.dU_.DEFINITION && !s.definitionEnabled) return null;
                const {
                    slowUrl: a,
                    url: o
                } = e;
                let r;
                switch (t) {
                    case n.dU_.WORD:
                        r = s.slowWordEnabled ? a : o;
                        break;
                    case n.dU_.DEFINITION:
                        r = s.slowDefinitionEnabled ? a : o;
                        break;
                    default:
                        throw new Error("Audio items can only be generated for words and definitions")
                }
                return {
                    audioId: r,
                    url: r
                }
            }
        },
        "./app/j/study-engine/factory.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = s("./node_modules/@quizlet/assistant-generator/quizlet-shared-kotlin-assistant-generator.js"),
                a = s("./node_modules/@quizlet/http-client/quizlet-shared-kotlin-http-client.js"),
                o = s("./app/j/ab_tests/QMeasure.ts"),
                r = s("./app/j/kmp/index.ts"),
                i = s("./app/j/kmp/ExperimentManager.ts");
            const l = new r.eN;
            a.com.quizlet.shared.httpclient.HttpClientProvider.setPlatformHttpClient(l);
            const d = new i._(o.Z);
            d.overrideVariant("GranularStudyDirectionV2[default,subscriptions,ads]", "v2");
            const u = n.StudyEngineFactoryJs;
            u.loadKmpKoinModules(l, d, null);
            const c = u
        },
        "./app/j/study-engine/utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                KX: () => o,
                Vq: () => c,
                Vr: () => d,
                bJ: () => u,
                hB: () => i,
                jk: () => r,
                zn: () => a,
                zo: () => l
            });
            s("./node_modules/core-js/modules/es.array.includes.js"), s("./app/j/config/enums.ts");
            var n = s("./app/j/study-engine/types.ts");
            const a = e => e,
                o = e => Object.values(n.mw).includes(e.type),
                r = e => Object.values(n.ju).includes(e.type),
                i = e => Object.values(n.F9).includes(e.type),
                l = e => ({
                    type: n.xh.STRING_ANSWER,
                    value: e
                }),
                d = e => ({
                    type: n.xh.BOOLEAN_ANSWER,
                    value: e
                }),
                u = e => ({
                    type: n.xh.OPTION_INDEX_ANSWER,
                    value: e
                }),
                c = e => ({
                    type: n.xh.REVEAL_SELF_ASSESSMENT_ANSWER,
                    value: e
                })
        },
        "./app/j/study-modes/cards/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                S: () => n
            });
            let n = function(e) {
                return e[e.AD_MODAL = 0] = "AD_MODAL", e[e.CARDS_VIEW = 1] = "CARDS_VIEW", e[e.FINISHED_VIEW = 2] = "FINISHED_VIEW", e[e.LEARN_UPSELL_VIEW = 3] = "LEARN_UPSELL_VIEW", e[e.SIGNUP_WALL = 4] = "SIGNUP_WALL", e
            }({})
        },
        "./app/j/study-modes/cards/utils/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $A: () => r,
                X_: () => o,
                tN: () => a
            });
            var n = s("./app/j/config/enums.ts");

            function a(e, t) {
                if (t && e.location) return n.dU_.LOCATION;
                if (e.term) return n.dU_.WORD;
                if (e.definition) return n.dU_.DEFINITION;
                throw new Error("Unsupported settings configuration for cards")
            }

            function o(e, t) {
                return {
                    ...t,
                    answerWith: {
                        definition: !1,
                        term: !1,
                        location: !1,
                        ...e
                    }
                }
            }

            function r(e, t) {
                return {
                    ...t,
                    promptWith: {
                        definition: !1,
                        term: !1,
                        location: !1,
                        ...e
                    }
                }
            }
        },
        "./app/j/study-modes/common/components/FeedbackItem.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/foundations/Color.ts"),
                o = (s("./node_modules/react/index.js"), s("./node_modules/react/jsx-runtime.js"));
            const r = (0, n.z)("div")({
                    name: "Wrapper",
                    class: "wcz5gby"
                }),
                i = (0, n.z)("div")({
                    name: "Label",
                    class: "l1ko1hv",
                    vars: {
                        "l1ko1hv-0": [e => (e => {
                            switch (e) {
                                case "success":
                                    return a.y1.$400;
                                case "error":
                                    return a.jj.$200;
                                default:
                                    return a.fY.Gray500Gray400
                            }
                        })(e.variant)]
                    }
                }),
                l = (0, n.z)("h6")({
                    name: "Title",
                    class: "t1c24qx4"
                }),
                d = (0, n.z)("div")({
                    name: "Content",
                    class: "c6v17xr"
                });

            function u(e) {
                return (0, o.jsxs)(r, {
                    "data-testid": "feedback-item",
                    children: [(0, o.jsx)(i, {
                        "aria-hidden": !0,
                        className: "FeedbackItem-label",
                        variant: e.variant,
                        children: (0, o.jsx)(l, {
                            children: e.label
                        })
                    }), (0, o.jsx)(d, {
                        "aria-label": e.label + " " + e.text,
                        "data-testid": "feedback-term",
                        children: e.children
                    })]
                })
            }
            s("./.linaria-cache/app/j/study-modes/common/components/FeedbackItem.linaria.css")
        },
        "./app/j/study-modes/data/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                D: () => u,
                Dg: () => a,
                JS: () => o,
                Oj: () => i,
                _$: () => n,
                jY: () => d,
                rl: () => l,
                t9: () => r
            });
            const n = "studyModesCommon",
                a = n + "/gradings",
                o = n + "/gradings",
                r = n + "/logging",
                i = n + "/settings",
                l = n + "/studiable-data",
                d = n + "/sessions",
                u = n + "/metering"
        },
        "./app/j/study-modes/data/engine/selectors/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                C1: () => g,
                C9: () => j,
                WJ: () => A,
                zt: () => f
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/core/default_store/DefaultStore.ts"),
                o = s("./node_modules/nullthrows/nullthrows.js"),
                r = s.n(o),
                i = s("./node_modules/reselect/lib/index.js"),
                l = s("./app/j/study-engine/types.ts"),
                d = s("./app/j/study-engine/utils.ts"),
                u = s("./app/j/study-modes/data/constants.ts"),
                c = s("./app/j/study-modes/data/settings/types.ts"),
                p = s("./app/j/study-modes/legacy-common/grading/utils/isAnswerGradedAsCorrectWithLevenshteinPlus.ts");
            const m = (0, i.createSelector)((0, a.iu)(u._$), (e => e.engine)),
                g = ((0, i.createSelector)(m, (e => e.instance)), (0, i.createSelector)(m, (e => r()(e.instance, "You must initialize the study engine before selecting it.")))),
                h = (0, i.createSelector)(m, (e => r()(e.studyStep, "You must generate the study step before selecting it."))),
                _ = (0, i.createSelector)(m, (e => r()(e.answerHistory, "You must set the answer history before selecting it."))),
                S = (0, i.createSelector)(h, (e => (0, d.KX)(e) ? e : null)),
                E = ((0, i.createSelector)(h, (e => {
                    if (!(0, d.KX)(e)) throw new Error("You cannot select a question if the current study step is not a question. The current study step type is: " + e.type + ".");
                    return e
                })), (0, i.createSelector)(h, (e => (0, d.hB)(e) && e.checkpoint ? e.checkpoint : (0, d.jk)(e) ? e : null))),
                y = ((0, i.createSelector)(E, (e => {
                    if (null === e) throw new Error("You cannot select a checkpoint if the current study step is not a checkpoint.");
                    return e
                })), (0, i.createSelector)(E, (e => null === e ? null : e.nextTaskLabel)), (0, i.createSelector)([S, _], ((e, t) => {
                    if (null === e) return !1;
                    for (let s = t.length - 1; s >= 0; s--) {
                        const a = t[s];
                        if (a.studiableItemId === e.metadata.studiableItemId && (a.round === (0, c.Q)().multipleChoice && e.type === l.mw.MULTIPLE_CHOICE_QUESTION || a.round === (0, c.Q)().written && e.type === l.mw.WRITTEN_QUESTION)) return a.correctness === n.p7P.INCORRECT || a.correctness === n.p7P.INCORRECT_WITH_HINT
                    }
                    return !1
                })), (0, i.createSelector)(h, (e => {
                    if (!(0, d.hB)(e)) throw new Error("You cannot select a paywall if the current study step is not a paywall.");
                    return e
                }))),
                f = ((0, i.createSelector)(h, (e => {
                    var t;
                    if (!(0, d.hB)(e) && !(0, d.jk)(e)) throw new Error("You cannot select study step metering data when the step is not a checkpoint or paywall, this is to prevent too many calls to the metering endpoint");
                    return null != (t = e.metadata.meteringData) ? t : null
                })), (0, i.createSelector)(y, (e => {
                    var t;
                    const {
                        checkpoint: s
                    } = e;
                    return (null != (t = null == s ? void 0 : s.roundResults) ? t : []).length > 0
                })), (0, i.createSelector)(h, (e => {
                    if ((0, d.hB)(e)) {
                        var t, s;
                        return null != (t = null == (s = e.checkpoint) ? void 0 : s.roundResults) ? t : []
                    }
                    return (0, d.jk)(e) && e.roundResults ? e.roundResults : []
                })), (0, i.createSelector)(m, (e => r()(e.totalProgress, "You must compute the total progress before selecting it.")))),
                j = ((0, i.createSelector)(m, (e => r()(e.taskProgress, "You must compute the total progress before selecting it."))), (0, i.createSelector)(m, (e => r()(e.roundProgress, "You must compute the round progress before selecting it."))), (0, i.createSelector)(h, (e => !!(0, d.jk)(e) && e.progressState === l.xA.POST_COMPLETION_CHECKPOINT)), (0, i.createSelector)(m, (e => e.taskProgress)), (0, i.createSelector)(m, (e => r()(e.taskRoundProgress, "You must compute task round progress before selecting it."))), (0, i.createSelector)(m, (e => r()(e.taskSequenceProgress, "You must compute task sequence progress before selecting it.")))),
                T = (0, i.createSelector)(m, (e => e.gradedAnswer)),
                A = ((0, i.createSelector)(T, (e => r()(e, "You must compute the graded answer before selecting it."))), (0, i.createSelector)(T, (e => {
                    var t;
                    return (0, p.q)(null != (t = null == e ? void 0 : e.gradingSettingsSuggestion) ? t : null)
                })))
        },
        "./app/j/study-modes/data/gradings/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Em: () => u,
                lc: () => d
            });
            var n = s("./app/j/core/default_store/DefaultStore.ts"),
                a = s("./node_modules/reselect/lib/index.js"),
                o = s("./app/j/study-modes/data/constants.ts"),
                r = s("./app/j/study-modes/data/engine/selectors/index.ts");
            const i = (0, a.createSelector)((0, n.iu)(o._$), (e => e.gradings)),
                l = (0, a.createSelector)(i, (e => e.answerGradedByLongtextGradingService)),
                d = ((0, a.createSelector)([l, r.WJ], ((e, t) => e || t)), (0, a.createSelector)(i, (e => e.isEligibleForSmartGrading))),
                u = ((0, a.createSelector)(i, (e => e.overrideCorrectnessCounter)), (0, a.createSelector)(i, (e => e.shouldShowSmartGradingUpsell)), (0, a.createSelector)(i, (e => e.isGrading)))
        },
        "./app/j/study-modes/data/settings/selectors/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => r
            });
            var n = s("./app/j/core/default_store/DefaultStore.ts"),
                a = s("./node_modules/reselect/lib/index.js"),
                o = s("./app/j/study-modes/data/constants.ts");
            const r = (0, a.createSelector)((0, n.iu)(o._$), (e => e.settings))
        },
        "./app/j/study-modes/data/settings/selectors/preference.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                J1: () => S,
                Oz: () => r,
                R9: () => i,
                e: () => p,
                mm: () => c,
                o3: () => l,
                pE: () => d,
                qg: () => m,
                rE: () => g,
                zK: () => u,
                zg: () => h
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/data/gradings/selectors.ts"),
                o = s("./app/j/study-modes/data/settings/selectors/index.ts");
            const r = (0, n.createSelector)([o.G], (e => e.preference)),
                i = (0, n.createSelector)(r, (e => e.acceptsPartialAnswer)),
                l = (0, n.createSelector)(r, (e => e.advancedAudioSettings)),
                d = (0, n.createSelector)(r, (e => {
                    const {
                        answerWith: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended answerWith setting");
                    return e.answerWith
                })),
                u = ((0, n.createSelector)(i, (e => null !== e)), (0, n.createSelector)(r, (e => e.isAudioOn))),
                c = (0, n.createSelector)(r, (e => e.cardsShuffleSeed)),
                p = ((0, n.createSelector)(r, (e => e.guidanceDisabled)), (0, n.createSelector)([r, a.lc], ((e, t) => e.smartGrading && t || e.typoHelpGradingSetting)), (0, n.createSelector)(r, (e => e.locationQuestionTypes)), (0, n.createSelector)(r, (e => {
                    const {
                        promptWith: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended promptWith setting");
                    return e.promptWith
                }))),
                m = ((0, n.createSelector)(r, (e => {
                    const {
                        questionTypes: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended questionTypes setting");
                    return e.questionTypes
                })), (0, n.createSelector)([r, a.lc], ((e, t) => e.smartGrading && t))),
                g = (0, n.createSelector)(r, (e => e.sortingOn)),
                h = (0, n.createSelector)(r, (e => e.studyStarredOnly)),
                _ = ((0, n.createSelector)(r, (e => e.studyPath)), (0, n.createSelector)(r, (e => e.studyPathGoal)), (0, n.createSelector)(r, (e => e.studyPathKnowledgeLevel)), (0, n.createSelector)(r, (e => e.typoHelpGradingSetting))),
                S = ((0, n.createSelector)(r, (e => {
                    const {
                        writtenTypes: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended writtenTypes setting");
                    return e.writtenTypes
                })), (0, n.createSelector)([i, _, m], ((e, t, s) => ({
                    acceptsPartialAnswer: null != e && e,
                    acceptsAnswersWithTypos: t,
                    acceptsSmartGrading: null != s && s
                }))))
        },
        "./app/j/study-modes/data/settings/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Q: () => o
            });
            var n = s("./app/j/config/study-setting-metadata.ts");
            const {
                bitValues: a
            } = n.default.ASSISTANT_MODE_QUESTION_TYPES;

            function o() {
                return a
            }
        },
        "./app/j/study-modes/data/studiable-data/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Cv: () => _,
                Jh: () => E,
                KH: () => v,
                Sd: () => j,
                TQ: () => p,
                Th: () => W,
                UC: () => N,
                UR: () => L,
                Uv: () => I,
                VZ: () => S,
                XQ: () => x,
                ZM: () => A,
                aW: () => D,
                bs: () => R,
                f3: () => b,
                h1: () => h,
                hy: () => w,
                kI: () => U,
                ke: () => g,
                kx: () => P,
                lb: () => k,
                mW: () => B,
                mb: () => m,
                r9: () => C,
                si: () => T,
                uf: () => f
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.reduce.js");
            var n = s("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js"),
                a = s("./app/j/config/enums.ts"),
                o = s("./app/j/core/default_store/DefaultStore.ts"),
                r = s("./app/j/studiable-data/utils.ts"),
                i = s("./app/j/study-modes/data/constants.ts"),
                l = s("./app/j/study-modes/data/settings/selectors/preference.ts"),
                d = s("./app/j/study-modes/data/studiable-data/utils/filterStudiableData.ts");

            function u(e, t) {
                for (const s of (0, r.c4)(e.filter(r.F_), t)) {
                    const e = (0, r.xy)(s);
                    if (e) return e.languageCode
                }
                return null
            }

            function c(e) {
                return e.reduce(((e, t) => (e[t.id] = t, e)), {})
            }
            const p = (0, n.createSelector)((0, o.iu)(i._$), (e => e.studiableData)),
                m = (0, n.createSelector)(p, (e => e.studiableItems)),
                g = ((0, n.createSelector)(p, (e => e.studiableItems.map((e => e.id)))), (0, n.createSelector)(m, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.length) ? t : 0
                }))),
                h = (0, n.createSelector)(m, c),
                _ = (0, n.createSelector)(p, h, ((e, t) => {
                    let s = e.starredStudiableItemIds;
                    return s.length > 0 && (s = s.filter((e => e in t))), new Set(s)
                })),
                S = (0, n.createSelector)(_, (e => e.size)),
                E = (0, n.createSelector)(p, (e => e.selectedTerms)),
                y = (0, n.createSelector)(p, (e => e.studiableContainer)),
                f = (0, n.createSelector)(y, (e => e.id)),
                j = (0, n.createSelector)(p, (e => e.studiableContainerType)),
                T = (0, n.createSelector)(y, (e => "magicNoteUuid" in e ? e.magicNoteUuid : null)),
                A = (0, n.createSelector)(y, (e => "title" in e ? e.title : e.name)),
                b = (0, n.createSelector)(y, (e => e._webUrl)),
                x = (0, n.createSelector)(p, (e => {
                    var t;
                    return Object.keys(null != (t = e.setIdToDiagramImage) ? t : {}).length > 0
                })),
                I = (0, n.createSelector)(p, (e => e.accents)),
                v = (0, n.createSelector)(p, (e => new Set(e.editableStudiableItemIds))),
                C = (0, n.createSelector)([p, l.zg, _], ((e, t, s) => {
                    const {
                        studiableItems: n,
                        studiableMetadataByType: a,
                        setIdToDiagramImage: o,
                        exampleSentenceByStudiableItemId: r
                    } = e, i = {
                        studiableItems: n,
                        setIdToDiagramImage: o,
                        exampleSentenceByStudiableItemId: r,
                        studiableMetadataByType: a
                    }, l = t ? s : new Set;
                    return 0 === l.size ? i : (0, d.o)(i, l)
                })),
                N = (0, n.createSelector)(C, (e => {
                    let {
                        studiableItems: t
                    } = e;
                    return c(t)
                })),
                w = (0, n.createSelector)(p, (e => {
                    const t = e.studiableItems.filter(r.F_);
                    for (const s of (0, r.c4)(t, a.dU_.DEFINITION)) {
                        if (!s.media.some((e => {
                                if (e.type !== a.DDH.TEXT) return !1;
                                const t = e,
                                    s = "" === t.plainText && !t.richText;
                                return t.languageCode !== a.spR.PHOTOS && !s
                            }))) return !1
                    }
                    return !0
                })),
                O = (0, n.createSelector)(p, (e => !1 === (0, r.c4)(e.studiableItems.filter(r.F_), a.dU_.WORD).next().done)),
                M = (0, n.createSelector)(p, (e => !1 === (0, r.c4)(e.studiableItems.filter(r.F_), a.dU_.DEFINITION).next().done)),
                D = (0, n.createSelector)(p, (e => u(e.studiableItems, a.dU_.DEFINITION))),
                L = (0, n.createSelector)(O, M, x, ((e, t, s) => ({
                    definition: t,
                    location: s,
                    term: e
                }))),
                P = (0, n.createSelector)(C, (e => {
                    var t;
                    return (null == e ? void 0 : e.studiableMetadataByType) && !(null == (t = e.studiableMetadataByType[a._KG.FILL_IN_THE_BLANK_KEYPHRASES]) || !t.length)
                })),
                R = (0, n.createSelector)(C, (e => e.studiableItems.some((e => !!(0, r.F_)(e) && e.cardSides.some(r.p))))),
                k = (0, n.createSelector)(p, (e => u(e.studiableItems, a.dU_.WORD))),
                U = (0, n.createSelector)(_, (e => e.size > 0)),
                W = ((0, n.createSelector)(_, (e => e.size > 5)), (0, n.createSelector)(p, (e => e.diagramImages ? e.diagramImages[0] : null)), (0, n.createSelector)(m, (e => e.some((e => e.type === a.zqd.MULTIPLE_CHOICE_QUESTION))))),
                B = ((0, n.createSelector)(p, (e => e.exampleSentenceByStudiableItemId)), (0, n.createSelector)([p, R], ((e, t) => {
                    if (!t) return !1;
                    for (const n of (0, r.c4)(e.studiableItems.filter(r.F_), a.dU_.DEFINITION)) {
                        var s;
                        const e = (0, r.p)(n),
                            t = (0, r.xy)(n);
                        if (e && "" === (null != (s = null == t ? void 0 : t.plainText) ? s : "")) return !1
                    }
                    return !0
                })));
            (0, n.createSelector)(m, (e => e.filter(r.F_).some((e => e.cardSides.some((e => e.distractors.length > 0))))))
        },
        "./app/j/study-modes/data/studiable-data/utils/filterStudiableData.ts": (e, t, s) => {
            "use strict";

            function n(e, t) {
                const {
                    studiableItems: s
                } = e, n = s.filter((e => t.has(e.id)));
                return {
                    ...e,
                    studiableItems: n
                }
            }
            s.d(t, {
                o: () => n
            })
        },
        "./app/j/study-modes/learn/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Af: () => l,
                G4: () => o,
                Lm: () => d,
                TX: () => i,
                s$: () => r,
                wk: () => a
            });
            var n = s("./app/j/config/enums.ts");
            const a = 125,
                o = "HasSeenAlternativeQuestionCoachmark";
            let r = function(e) {
                return e.CLOSE_OPTIONS_MODAL_FROM_LEARN = "closing_setting_screen_back_to_learn", e
            }({});
            const i = n.JbB.STANDARD,
                l = n.StudyPathGoal.CHALLENGE,
                d = n.StudyPathKnowledgeLevel.LOW
        },
        "./app/j/study-modes/learn/selectors/base.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                r: () => n
            });
            const n = e => e.get("learnMode")
        },
        "./app/j/study-modes/learn/selectors/view.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                KL: () => u,
                O8: () => d,
                R5: () => l
            });
            s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/learn/selectors/base.ts"),
                o = s("./app/j/study-modes/learn/types.ts"),
                r = s("./app/j/study-modes/spell/types.ts"),
                i = s("./app/j/study-modes/write/types.ts");
            const l = (0, n.createSelector)(a.r, (e => null == e ? void 0 : e.view)),
                d = (0, n.createSelector)([l], (e => {
                    const {
                        TASK_ROUND_CHECKPOINT: t,
                        TASK_COMPLETION_CHECKPOINT: s
                    } = o.LearnModeView;
                    return [t, s].includes(e)
                })),
                u = (0, n.createSelector)((e => e), (e => {
                    var t, s, n;
                    return (null == (t = e.get("learnMode")) ? void 0 : t.view) === o.LearnModeView.AD_MODAL || (null == (s = e.get("write")) ? void 0 : s.currentView) === i.i9.AD_MODAL || (null == (n = e.get("spellMode")) ? void 0 : n.currentView) === r.f.AD_MODAL
                }))
        },
        "./app/j/study-modes/learn/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                LearnModeView: () => a,
                MF: () => i,
                Qr: () => r,
                qk: () => o
            });
            var n = s("./app/j/study-engine/types.ts");
            let a = function(e) {
                    return e[e.AD_MODAL = 0] = "AD_MODAL", e[e.LOADING = 1] = "LOADING", e[e.VIDEO_AD = 2] = "VIDEO_AD", e[e.QUESTION = 3] = "QUESTION", e[e.ACHIEVEMENTS_ANIMATION_ACTIVE_LEARNER = 4] = "ACHIEVEMENTS_ANIMATION_ACTIVE_LEARNER", e[e.ACHIEVEMENTS_ANIMATION_END_OF_LEARN = 5] = "ACHIEVEMENTS_ANIMATION_END_OF_LEARN", e[e.TASK_ROUND_CHECKPOINT = 6] = "TASK_ROUND_CHECKPOINT", e[e.TASK_COMPLETION_CHECKPOINT = 7] = "TASK_COMPLETION_CHECKPOINT", e[e.TASK_SEQUENCE_COMPLETION_CHECKPOINT = 8] = "TASK_SEQUENCE_COMPLETION_CHECKPOINT", e[e.PAYWALL = 9] = "PAYWALL", e
                }({}),
                o = function(e) {
                    return e[e.FILL_IN_THE_BLANK_QUESTION = n.mw.FILL_IN_THE_BLANK_QUESTION] = "FILL_IN_THE_BLANK_QUESTION", e[e.MULTIPLE_CHOICE_QUESTION = n.mw.MULTIPLE_CHOICE_QUESTION] = "MULTIPLE_CHOICE_QUESTION", e[e.REVEAL_SELF_ASSESSMENT_QUESTION = n.mw.REVEAL_SELF_ASSESSMENT_QUESTION] = "REVEAL_SELF_ASSESSMENT_QUESTION", e[e.WRITTEN_QUESTION = n.mw.WRITTEN_QUESTION] = "WRITTEN_QUESTION", e
                }({});
            const r = 800;
            let i = function(e) {
                return e.ACHIEVEMENTS_ANIMATION_COMPLETE = "ACHIEVEMENTS_ANIMATION_COMPLETE", e.END_OF_LEARN_ANIMATION_COMPLETE = "END_OF_LEARN_ANIMATION_COMPLETE", e.HIDE_FLASHCARD_SHORTCUTS = "LEARN_MODE.HIDE_FLASHCARD_SHORTCUTS", e.INCREMENT_CHECKPOINT_COUNTER = "INCREMENT_CHECKPOINT_COUNTER", e.SET_SEEN_CONFIDENCE_CHECK_IN_SETS = "SET_SEEN_CONFIDENCE_CHECK_IN_SETS", e.SET_SEEN_CONFIDENCE_CHECK_IN_MODAL_SETS = "SET_SEEN_CONFIDENCE_CHECK_IN_MODAL_SETS", e.SET_LEARN_VIEW = "LEARN_MODE.SET_LEARN_VIEW", e.SET_IS_SETTINGS_MERGED = "LEARN_MODE.IS_SETTINGS_MERGED", e.SET_IS_ADVANCING = "LEARN_MODE.IS_ADVANCING", e.SET_SHOULD_SEE_SPELL_WRITE_COACHMARK = "SET_SHOULD_SEE_SPELL_WRITE_COACHMARK", e.UPDATE_STUDY_MODE_AD_TIMESTAMP = "UPDATE_STUDY_MODE_AD_TIMESTAMP.IS_SKIPPING_FEEDBACK", e.UPDATE_SHOULD_SHOW_ALTERNATIVE_QUESTION_COACHMARK = "UPDATE_SHOULD_SHOW_ALTERNATIVE_QUESTION_COACHMARK", e.SET_INCORRECTLY_ANSWERED_STUDIABLE_ITEMS = "SET_INCORRECTLY_ANSWERED_STUDIABLE_ITEMS", e.SET_SEEN_INTERVENTION_POINTS = "SET_SEEN_INTERVENTION_POINTS", e.VIDEO_AD_COUNTDOWN_SECONDS = "VIDEO_AD_COUNTDOWN_SECONDS", e.UPDATE_RVA_PRELOAD_STATUS = "UPDATE_RVA_PRELOAD_STATUS", e
            }({})
        },
        "./app/j/study-modes/legacy-common/components/SpecialCharacterButtonGroup.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => h
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.sort.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/@linaria/react/lib/index.js"),
                o = s("./app/j/assembly/buttons/index.ts"),
                r = s("./app/j/assembly/buttons/types.ts"),
                i = s("./app/j/compatibility/localeCompare.ts"),
                l = s("./app/j/i18n/useTranslation.ts"),
                d = s("./node_modules/react/index.js"),
                u = s("./node_modules/react/jsx-runtime.js");
            const c = (0, a.z)("div")({
                    name: "UppercaseSwitch",
                    class: "u16ubbx1"
                }),
                p = (0, a.z)("div")({
                    name: "ButtonBar",
                    class: "b1frzbz9"
                }),
                m = "bo0tljo",
                g = (0, a.z)("span")({
                    name: "Button",
                    class: "bmm43df"
                });

            function h(e) {
                let {
                    buttonSize: t = "medium",
                    charactersByLang: s,
                    compact: a = !1,
                    onClickButton: h
                } = e;
                const {
                    t: _,
                    i18n: S
                } = (0, l.ZP)(), [E, y] = (0, d.useState)(!1);

                function f(e, t) {
                    return (0, i.Z)(e.character, t.character, S.language)
                }
                const j = () => {
                    y(!E)
                };
                return (0, u.jsxs)(p, {
                    className: (0, n.cx)(!a && m),
                    children: [(() => {
                        const e = [],
                            t = [];
                        return Object.keys(s).forEach((n => {
                            s[n].forEach((s => {
                                const a = E ? s.toUpperCase() : s; - 1 !== e.indexOf(a) || (e.push(a), t.push({
                                    character: a,
                                    lang: n
                                }))
                            }))
                        })), t.sort(f)
                    })().map((e => {
                        let {
                            character: s,
                            lang: n
                        } = e;
                        return (0, u.jsx)(g, {
                            children: (0, u.jsx)(o.B0, {
                                lang: n,
                                onClick: () => h(s),
                                size: t,
                                text: s
                            })
                        }, s)
                    })), Object.keys(s).some((e => s[e].some((e => e !== e.toUpperCase())))) ? (0, u.jsx)(c, {
                        children: (0, u.jsx)(o.JZ, {
                            alt: _("global.icon.uppercase"),
                            icon: "caps-lock",
                            onClick: j,
                            variant: E ? r.IQ.SECONDARY : r.IQ.TERTIARY
                        })
                    }) : null]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/SpecialCharacterButtonGroup.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/OptionsModal.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => ne
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/buttons/index.ts"),
                o = s("./app/j/assembly/modals/index.ts"),
                r = s("./app/j/compatibility/getLocalizedLanguage.ts"),
                i = s("./app/j/compatibility/logger/useLogger.ts"),
                l = s("./app/j/compatibility/userAgentHelper.ts"),
                d = s("./app/j/components/UIDelimiter.tsx"),
                u = s("./app/j/components/UIModalBodySeparator.tsx"),
                c = s("./app/j/components/UIRow.tsx"),
                p = s("./app/j/config/enums.ts"),
                m = s("./app/j/context/UserContext.ts"),
                g = s("./app/j/global/Rollbar.ts"),
                h = s("./app/j/i18n/useTranslation.ts"),
                _ = s("./node_modules/immer/dist/immer.esm.mjs"),
                S = s("./node_modules/react/index.js"),
                E = s("./app/j/study-modes/learn/constants.ts"),
                y = s("./app/j/assembly/AssemblyLink.tsx"),
                f = s("./app/j/assembly/AssemblyToggleSwitch.tsx"),
                j = s("./app/j/assembly/menus/index.ts"),
                T = s("./app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.tsx"),
                A = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx"),
                b = s("./node_modules/react/jsx-runtime.js");
            const x = "f1mzbuvg",
                I = (0, n.z)("div")({
                    name: "AdvancedAudioOptions",
                    class: "ahyitmo"
                });

            function v(e) {
                let {
                    advancedAudioSettings: t,
                    definitionLabel: s,
                    shouldShowSlowDefinitionAudio: n,
                    shouldShowSlowWordAudio: o,
                    updateAdvancedAudio: r,
                    wordLabel: i
                } = e;
                const {
                    t: l
                } = (0, h.ZP)(), {
                    onToggle: d,
                    isExpanded: u,
                    menuClasses: c
                } = (0, T.Z)(), p = () => {
                    r((0, _.ZP)(t, (e => {
                        e.wordEnabled = !t.wordEnabled
                    })))
                }, m = () => {
                    r((0, _.ZP)(t, (e => {
                        e.definitionEnabled = !t.definitionEnabled
                    })))
                }, g = e => {
                    const n = "word" === e,
                        a = n ? t.wordEnabled : t.definitionEnabled;
                    return (0, b.jsxs)(A.Y7, {
                        children: [(0, b.jsx)(A.zp, {
                            label: l("study_modes.options.advanced_audio.audio_side_toggle_label", {
                                side: n ? i : s
                            })
                        }), (0, b.jsx)(f.Z, {
                            checked: a,
                            label: l(a ? "study_modes.options.enable_audio" : "study_modes.options.disable_audio"),
                            name: n ? "termAudio" : "definitionAudio",
                            onChange: n ? p : m
                        })]
                    })
                }, S = e => {
                    const n = "word" === e,
                        o = n ? t.slowWordEnabled : t.slowDefinitionEnabled,
                        d = n ? "slowWordEnabled" : "slowDefinitionEnabled",
                        u = l("study_modes.options.advanced_audio.audio_speed_toggle_label", {
                            side: n ? i : s
                        }),
                        c = e => {
                            r((0, _.ZP)(t, (t => {
                                t[d] = e
                            })))
                        };
                    return (0, b.jsxs)(A.Y7, {
                        children: [(0, b.jsx)(A.zp, {
                            label: u
                        }), (0, b.jsx)(a.PP, {
                            menu: (0, b.jsxs)(j.sD, {
                                "aria-label": u,
                                children: [(0, b.jsx)(j.jJ, {
                                    elementType: "button",
                                    onAction: () => c(!0),
                                    text: l("study_modes.options.advanced_audio.slow_audio_speed")
                                }, "slow"), (0, b.jsx)(j.jJ, {
                                    elementType: "button",
                                    onAction: () => c(!1),
                                    text: l("study_modes.options.advanced_audio.normal_audio_speed")
                                }, "normal")]
                            }),
                            menuPlacement: "bottom right",
                            text: l(o ? "study_modes.options.advanced_audio.slow_audio_speed" : "study_modes.options.advanced_audio.normal_audio_speed")
                        })]
                    })
                }, E = g("word"), v = g("definition"), C = S("word"), N = S("definition"), w = l(u ? "study_modes.options.hide" : "study_modes.options.view");
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsxs)(A.Y7, {
                        className: x,
                        "data-testid": "advancedAudio",
                        children: [(0, b.jsx)(A.zp, {
                            label: l("study_modes.options.advanced_audio.label")
                        }), (0, b.jsx)(y.ZP, {
                            ariaLabel: w,
                            onClick: d,
                            rightIcon: u ? "caret-up" : "caret-down",
                            text: w
                        })]
                    }), (0, b.jsxs)(I, {
                        className: c,
                        "data-testid": "advancedAudioOptions",
                        children: [E, o ? C : null, v, n ? N : null]
                    })]
                })
            }

            function C(e) {
                let {
                    isAudioOn: t,
                    onToggleAudio: s
                } = e;
                const {
                    t: n
                } = (0, h.ZP)();
                return (0, b.jsxs)(A.Y7, {
                    children: [(0, b.jsx)(A.zp, {
                        label: n("study_modes.options.audio")
                    }), (0, b.jsx)(f.Z, {
                        checked: t,
                        label: n(t ? "study_modes.options.enable_audio" : "study_modes.options.disable_audio"),
                        name: "audio",
                        onChange: s
                    })]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalAdvancedAudio.linaria.css");
            var N = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalGradingOptions.tsx"),
                w = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalPrivacyPolicy.tsx"),
                O = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionFormat.tsx"),
                M = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionTypeToggles.tsx");
            const D = (0, n.z)("div")({
                name: "ResetProgress",
                class: "r4um64x"
            });

            function L(e) {
                let {
                    resetProgress: t,
                    studyMode: s
                } = e;
                const {
                    t: n
                } = (0, h.ZP)(), a = (() => {
                    switch (s) {
                        case p.StudyModeType.FLASHCARDS:
                            return n("study_modes.options.restart.flashcards");
                        case p.StudyModeType.LEARNING_ASSISTANT:
                            return n("study_modes.options.restart.learn");
                        case p.StudyModeType.SPELLER:
                            return n("study_modes.options.restart.spell");
                        case p.StudyModeType.WRITE:
                            return n("study_modes.options.restart.write");
                        default:
                            throw new Error("Study mode: " + s + " does not support progress reset.")
                    }
                })();
                return (0, b.jsx)(A.Y7, {
                    children: (0, b.jsx)(D, {
                        children: (0, b.jsx)(y.ZP, {
                            ariaLabel: a,
                            onClick: t,
                            size: "medium",
                            text: a
                        })
                    })
                }, "resetProgress")
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalResetProgress.linaria.css");
            var P = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalStarredOnly.tsx"),
                R = s("./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalTwoSides.tsx"),
                k = s("./app/j/study-modes/legacy-common/options/types.ts");

            function U(e) {
                let {
                    sortingOn: t,
                    handleSortingToggle: s
                } = e;
                const {
                    t: n
                } = (0, h.ZP)();
                return (0, b.jsx)(A.Y7, {
                    children: (0, b.jsx)(A.zp, {
                        description: n("study_modes.options.sorting.description"),
                        label: (0, b.jsxs)(b.Fragment, {
                            children: [n("study_modes.options.sorting.label"), (0, b.jsx)(f.Z, {
                                checked: t,
                                label: n(t ? "study_modes.options.sorting.on" : "study_modes.options.sorting.off"),
                                name: k.$.SORTING_ON,
                                onChange: s
                            })]
                        })
                    })
                })
            }
            var W = s("./app/j/assembly/AssemblyIcon.tsx"),
                B = s("./app/j/compatibility/router.ts");
            const F = (0, n.z)("div")({
                    name: "StudyModeButtonsLayout",
                    class: "s1er27n1"
                }),
                Z = (0, n.z)("div")({
                    name: "StudyMode",
                    class: "s11ldjnx"
                }),
                G = (0, n.z)("div")({
                    name: "StudyModeLabel",
                    class: "s4p8h9f"
                });

            function H(e) {
                let {
                    linkToSpell: t,
                    linkToWrite: s
                } = e;
                const {
                    t: n
                } = (0, h.ZP)(), a = (0, S.useContext)(m.Z), o = (0, B.E3)(), r = (0, i.qL)(), l = [{
                    icon: "study-write-twilight",
                    label: n("study_modes.options.write_mode"),
                    onClick: () => {
                        s && (r("study_mode_button_clicked", {
                            study_mode_type: p.StudyModeType.WRITE,
                            country_code: null == a ? void 0 : a.countryCode,
                            screen_name: "learn_options_modal"
                        }), o(s))
                    }
                }, {
                    icon: "study-spell-twilight",
                    label: n("study_modes.options.spell_mode"),
                    onClick: () => {
                        t && (r("study_mode_button_clicked", {
                            study_mode_type: p.StudyModeType.SPELLER,
                            country_code: null == a ? void 0 : a.countryCode,
                            screen_name: "learn_options_modal"
                        }), o(t))
                    }
                }];
                return (0, b.jsx)(A.Y7, {
                    children: (0, b.jsx)(F, {
                        children: l.map((e => {
                            const {
                                icon: t,
                                label: s,
                                onClick: a
                            } = e;
                            return (0, b.jsxs)(Z, {
                                children: [(0, b.jsx)(A.zp, {
                                    label: (0, b.jsxs)(G, {
                                        children: [(0, b.jsx)(W.ZP, {
                                            icon: t,
                                            size: W.i.Medium
                                        }), s]
                                    })
                                }), (0, b.jsx)(y.ZP, {
                                    ariaLabel: s,
                                    onClick: a,
                                    rightIcon: "caret-right",
                                    text: n("study_modes.options.start")
                                })]
                            }, s)
                        }))
                    })
                })
            }

            function V(e) {
                let {
                    shuffle: t,
                    toggleShuffle: s
                } = e;
                const {
                    t: n
                } = (0, h.ZP)();
                return (0, b.jsxs)(A.Y7, {
                    children: [(0, b.jsx)(A.zp, {
                        label: n("study_modes.options.shuffle_terms")
                    }), (0, b.jsx)(f.Z, {
                        checked: t,
                        label: n(t ? "study_modes.options.sorting.on" : "study_modes.options.sorting.off"),
                        name: "shuffle",
                        onChange: s
                    })]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/learn/OptionsModalOtherStudyModes.linaria.css");
            var z = function(e) {
                return e.WORD = "term", e.DEFINITION = "definition", e.LOCATION = "location", e
            }(z || {});

            function Q(e, t, s, n) {
                const a = function(e) {
                    return e.definition ? z.DEFINITION : e.term ? z.WORD : e.location ? z.LOCATION : null
                }(e);
                switch (a) {
                    case z.WORD:
                        return t;
                    case z.DEFINITION:
                        return s;
                    case z.LOCATION:
                        return n;
                    default:
                        throw new Error("Unsupported side: " + a)
                }
            }
            const K = {
                definition: !1,
                term: !1,
                location: !1
            };

            function q(e) {
                let {
                    allDefinitionsHaveText: t,
                    definitionLabel: s,
                    hasDiagram: n,
                    initAnswerWith: o,
                    initPromptWith: r,
                    updateAnswerWith: i,
                    updatePromptWith: l,
                    wordLabel: d
                } = e;
                const {
                    t: u
                } = (0, h.ZP)(), [c, p] = (0, S.useState)(o), [m, g] = (0, S.useState)(r), _ = function(e) {
                    return {
                        definition: e,
                        location: !1,
                        term: !0
                    }
                }(t), E = function(e, t) {
                    return {
                        definition: !0,
                        location: t,
                        term: e
                    }
                }(t, n), y = u("study_modes.options.study_with_label_location"), f = {
                    option: z.WORD,
                    label: d
                }, T = {
                    option: z.DEFINITION,
                    label: s
                }, x = {
                    option: z.LOCATION,
                    label: y
                }, I = [m.term || c.term ? void 0 : f, m.definition || c.definition || !_.definition ? void 0 : T, c.location || m.location || !E.location ? void 0 : x].filter((e => void 0 !== e)), v = [c.term || m.term || !E.term ? void 0 : f, c.definition || m.definition ? void 0 : T, m.location || c.location || !E.location ? void 0 : x].filter((e => void 0 !== e)), C = (e, t) => s => {
                    const n = function(e) {
                            switch (e) {
                                case z.DEFINITION:
                                    return "definition";
                                case z.WORD:
                                    return "term";
                                case z.LOCATION:
                                    return "location";
                                default:
                                    throw new Error("Unsupported side: " + e)
                            }
                        }(s),
                        a = {
                            ...K,
                            [n]: !0
                        };
                    e({
                        ...a
                    }), t({
                        ...a
                    })
                }, N = u("study_modes.options.answer_with"), w = u("study_modes.options.prompt_with"), O = (e, t, s) => (0, b.jsx)(j.sD, {
                    "aria-label": e,
                    children: t.map((e => {
                        const {
                            option: t,
                            label: n
                        } = e;
                        return (0, b.jsx)(j.jJ, {
                            elementType: "button",
                            onAction: () => s(t),
                            text: n
                        }, "label-" + t)
                    }))
                }), M = O(N, I, C(p, i)), D = O(w, v, C(g, l));
                return (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsxs)(A.Y7, {
                        "data-testid": "OptionsModalWriteQuestionFormat-answerWith",
                        children: [(0, b.jsx)(A.zp, {
                            label: N
                        }), (0, b.jsx)(a.PP, {
                            ariaLabel: N,
                            menu: M,
                            menuPlacement: "bottom right",
                            text: Q(c, d, s, y)
                        })]
                    }, "OptionsModalWriteQuestionFormat-answerWith"), (0, b.jsxs)(A.Y7, {
                        "data-testid": "OptionsModalWriteQuestionFormat-promptWith",
                        children: [(0, b.jsx)(A.zp, {
                            label: w
                        }), (0, b.jsx)(a.PP, {
                            ariaLabel: w,
                            menu: D,
                            menuPlacement: "bottom right",
                            text: Q(m, d, s, y)
                        })]
                    }, "OptionsModalWriteQuestionFormat-promptWith")]
                })
            }
            var Y = s("./app/j/study-modes/legacy-common/grading/constants.ts"),
                $ = s("./app/j/study-modes/legacy-common/grading/utils/longtextGradingUtils.ts"),
                X = s("./app/j/study-modes/legacy-common/settings/utils/syncPreferenceSettings.ts"),
                J = s("./app/j/study-modes/redesigned_cards/constants.ts");
            const ee = (0, n.z)("div")({
                    name: "AudioSection",
                    class: "agxsuq0"
                }),
                te = (0, n.z)("div")({
                    name: "DisableGuidance",
                    class: "d1df0fun"
                }),
                se = (0, n.z)("div")({
                    name: "DisableGuidanceLink",
                    class: "d6q2c3a"
                });

            function ne(e) {
                let {
                    actions: {
                        updateLevenshteinPlusGradingSetting: t,
                        updateSettings: s
                    },
                    allDefinitionsHaveText: n,
                    availableSides: y,
                    cardsOrigin: f,
                    definitionLang: j,
                    hasCompleteDefinitionCustomAudio: T,
                    hasCompleteWordCustomAudio: A,
                    hasDefinitionAudio: x,
                    hasDiagram: I,
                    hasFillInTheBlankQuestions: D = !1,
                    hasWordAudio: k,
                    hiddenSettings: W,
                    isEligibleForSmartGrading: B,
                    isModalOpen: F,
                    isStudyingViaProgressBuckets: Z = !1,
                    keyboardShortcuts: G,
                    linkToSpell: z,
                    linkToWrite: Q,
                    onCloseModal: K,
                    onDisableGuidance: ne,
                    onResetProgress: ae,
                    settings: oe,
                    shouldAllowStudyingStarredOnly: re,
                    shouldShowLanguageLabel: ie,
                    shouldShowLearnPlusExperience: le = !1,
                    studyModeType: de,
                    wordLang: ue
                } = e;
                const [ce, pe] = (0, S.useState)(oe), me = (0, l.p3)(), ge = (0, S.useContext)(m.Z), {
                    t: he
                } = (0, h.ZP)(), {
                    logPageAction: _e
                } = (0, i.wL)();
                (0, S.useEffect)((() => {
                    pe(oe)
                }), [oe]);
                const Se = ie && ue !== j ? he("study_modes.options.study_with_label_language", {
                        language: (0, r.Z)(he, j)
                    }) : he("study_modes.options.study_with_label_definition"),
                    Ee = ie && ue !== j ? he("study_modes.options.study_with_label_language", {
                        language: (0, r.Z)(he, ue)
                    }) : he("study_modes.options.study_with_label_term"),
                    ye = () => {
                        const e = {
                                acceptsPartialAnswer: ce.acceptsPartialAnswer,
                                advancedAudioSettings: ce.advancedAudioSettings,
                                answerWith: ce.answerWith,
                                cardsShuffleSeed: ce.cardsShuffleSeed,
                                guidanceDisabled: ce.guidanceDisabled,
                                isAudioOn: ce.isAudioOn,
                                promptWith: ce.promptWith,
                                questionTypes: ce.questionTypes,
                                shuffle: ce.shuffle,
                                smartGrading: ce.smartGrading,
                                sortingOn: ce.sortingOn,
                                studyStarredOnly: ce.studyStarredOnly,
                                studyPath: ce.studyPath,
                                studyPathGoal: ce.studyPathGoal,
                                studyPathKnowledgeLevel: ce.studyPathKnowledgeLevel,
                                typoHelpGradingSetting: ce.typoHelpGradingSetting,
                                writtenTypes: ce.writtenTypes
                            },
                            n = (e => new Set(Object.keys((0, X.Ex)(oe, e))))(e);
                        if (n.has("smartGrading")) {
                            const e = ce.smartGrading ? Y.rs : Y.w$;
                            _e(e), de === p.StudyModeType.LEARNING_ASSISTANT && t(ce.smartGrading)
                        }
                        s(e), K(n)
                    },
                    fe = () => {
                        pe((e => ({
                            ...e,
                            sortingOn: !e.sortingOn
                        })))
                    },
                    je = e => {
                        pe((t => ({
                            ...t,
                            answerWith: e
                        })))
                    },
                    Te = e => {
                        pe((t => ({
                            ...t,
                            promptWith: e
                        })))
                    },
                    Ae = () => {
                        pe((e => ({
                            ...e,
                            acceptsPartialAnswer: !e.acceptsPartialAnswer
                        })))
                    },
                    be = () => {
                        pe((e => ({
                            ...e,
                            typoHelpGradingSetting: !e.typoHelpGradingSetting
                        })))
                    },
                    xe = () => {
                        pe((e => ({
                            ...e,
                            smartGrading: !e.smartGrading
                        })))
                    },
                    Ie = () => {
                        pe((e => ({
                            ...e,
                            isAudioOn: !e.isAudioOn
                        })))
                    },
                    ve = e => {
                        pe((t => ({
                            ...t,
                            advancedAudioSettings: e
                        })))
                    },
                    Ce = Z ? null : (0, b.jsx)("div", {
                        className: "OptionsModal-optionsRow",
                        children: (0, b.jsx)(c.Z, {
                            children: (0, b.jsx)(P.Z, {
                                shouldAllowStudyingStarredOnly: re,
                                studyStarredOnly: ce.studyStarredOnly,
                                toggleStudyStarredOnly: () => {
                                    pe((e => ({
                                        ...e,
                                        studyStarredOnly: !e.studyStarredOnly
                                    })))
                                }
                            })
                        })
                    }, "starredOnly"),
                    Ne = (0, b.jsx)(V, {
                        shuffle: ce.shuffle,
                        toggleShuffle: () => {
                            pe((e => ({
                                ...e,
                                shuffle: !e.shuffle
                            })))
                        }
                    }),
                    we = (0, b.jsx)(w.Z, {}),
                    Oe = e => e.some((e => !W.includes(e))),
                    Me = e => Oe([e]),
                    De = de === p.StudyModeType.LEARNING_ASSISTANT,
                    Le = de === p.StudyModeType.LEARNING_ASSISTANT || de === p.StudyModeType.FLASHCARDS && I,
                    Pe = de === p.StudyModeType.SPELLER || de === p.StudyModeType.WRITE && !I || de === p.StudyModeType.FLASHCARDS && !I,
                    Re = de === p.StudyModeType.WRITE && I,
                    ke = de === p.StudyModeType.FLASHCARDS,
                    Ue = de === p.StudyModeType.LEARNING_ASSISTANT && !ce.guidanceDisabled && le,
                    We = () => D && !ce.guidanceDisabled && j === p.spR.ENGLISH && ue === p.spR.ENGLISH && le && !(null != ge && ge._isUnderAge) && de === p.StudyModeType.LEARNING_ASSISTANT,
                    Be = Me(p.Std.ASSISTANT_MODE_QUESTION_TYPES),
                    Fe = ce.answerWith.definition && (0, $.k)(j) || ce.answerWith.term && (0, $.k)(ue),
                    Ze = Me(p.Std.SMART_GRADING) && B && Fe,
                    Ge = Me(p.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS) && !Ze,
                    He = Me(p.Std.SMART_GRADING) && B && ce.smartGrading,
                    Ve = de === p.StudyModeType.LEARNING_ASSISTANT && !He,
                    ze = Ze || Ge || Ve,
                    Qe = Me(p.Std.TAP_TO_PLAY_AUDIO),
                    Ke = de !== p.StudyModeType.WRITE && Oe([p.Std.ASSISTANT_MODE_WORD_AUDIO_ENABLED, p.Std.ASSISTANT_MODE_DEFINITION_AUDIO_ENABLED]) && (k || x),
                    qe = k && !A,
                    Ye = x && !T,
                    $e = de === p.StudyModeType.LEARNING_ASSISTANT && Q && z,
                    Xe = (0, b.jsxs)(te, {
                        children: [he("assistant.disable_guidance.description"), (0, b.jsx)(se, {
                            children: (0, b.jsx)(a.B0, {
                                onClick: () => {
                                    ne ? (pe((e => (0, _.ZP)(e, (e => {
                                        e.guidanceDisabled = !0, e.studyPath = E.TX, e.studyPathGoal = E.Af, e.studyPathKnowledgeLevel = E.Lm, e.questionTypes.fillInTheBlank = !1
                                    })))), ne()) : g.Z.error("User is trying to use escape hatch for non-Learn study mode")
                                },
                                size: "medium",
                                text: he("assistant.disable_guidance.link_cta")
                            })
                        })]
                    }),
                    Je = Z ? null : (0, b.jsx)(L, {
                        resetProgress: () => {
                            ye(), ae()
                        },
                        studyMode: de
                    }),
                    et = (0, b.jsx)(H, {
                        linkToSpell: z,
                        linkToWrite: Q
                    }),
                    tt = [
                        [(0, b.jsxs)("div", {
                            className: "OptionsModal-optionsRow",
                            children: [ke ? (0, b.jsx)(U, {
                                handleSortingToggle: fe,
                                sortingOn: ce.sortingOn
                            }) : null, Ce, De ? Ne : null, Pe ? (0, b.jsx)(R.Z, {
                                definitionLabel: Se,
                                initAnswerWith: oe.answerWith,
                                shouldDisableDropdown: de === p.StudyModeType.WRITE && !n,
                                shouldShowBothSidesOption: de === p.StudyModeType.FLASHCARDS && f !== J.ou.SET_PAGE,
                                updateAnswerWith: je,
                                updatePromptWith: Te,
                                wordLabel: Ee
                            }, "twoSides") : null]
                        })],
                        [Be ? Ue ? Xe : (0, b.jsx)(M.ZP, {
                            availableQuestionTypes: M.FF.filter((e => e !== M.ce.FILL_IN_THE_BLANK || We())),
                            enabledQuestionTypes: (0, M.N_)(ce.questionTypes),
                            handleToggleQuestionType: e => {
                                const t = (0, M.mT)(ce.questionTypes, e);
                                pe((e => ({
                                    ...e,
                                    questionTypes: t
                                })))
                            }
                        }) : null, $e ? et : null],
                        [Le ? (0, b.jsx)(O.Z, {
                            availableSides: y,
                            definitionLabel: Se,
                            definitionLang: j,
                            initAnswerWith: oe.answerWith,
                            initPromptWith: oe.promptWith,
                            questionTypes: ce.questionTypes,
                            studyModeType: de,
                            updateAnswerWith: je,
                            updatePromptWith: Te,
                            wordLabel: Ee
                        }, "multipleSides") : null, Re ? (0, b.jsx)(q, {
                            allDefinitionsHaveText: n,
                            definitionLabel: Se,
                            hasDiagram: I,
                            initAnswerWith: oe.answerWith,
                            initPromptWith: oe.promptWith,
                            updateAnswerWith: je,
                            updatePromptWith: Te,
                            wordLabel: Ee
                        }, "writeOptions") : null],
                        [ze ? (0, b.jsx)(N.Z, {
                            acceptsPartialAnswer: null != (st = ce.acceptsPartialAnswer) && st,
                            isSmartGradingOn: ce.smartGrading,
                            shouldShowPartialAnswers: Ge,
                            shouldShowSmartGrading: Ze,
                            shouldShowTypoHelp: Ve,
                            toggleAcceptsPartialAnswer: Ae,
                            toggleSmartGrading: xe,
                            toggleTypoHelp: be,
                            typoHelpGradingSetting: null != (nt = ce.typoHelpGradingSetting) && nt
                        }) : null],
                        [null != G ? G : null],
                        [(0, b.jsxs)(ee, {
                            children: [Qe ? (0, b.jsx)(C, {
                                isAudioOn: ce.isAudioOn,
                                onToggleAudio: Ie
                            }) : null, Qe && Ke && ce.isAudioOn ? (0, b.jsx)(v, {
                                advancedAudioSettings: ce.advancedAudioSettings,
                                definitionLabel: Se,
                                shouldShowSlowDefinitionAudio: Ye,
                                shouldShowSlowWordAudio: qe,
                                updateAdvancedAudio: ve,
                                wordLabel: Ee
                            }) : null]
                        }, "audio")],
                        [Je],
                        [we]
                    ];
                var st, nt;
                return (0, b.jsx)(o.g, {
                    body: (0, b.jsx)(d.Z, {
                        separator: (0, b.jsx)("div", {
                            className: "OptionsModal-optionsRow",
                            children: (0, b.jsx)(u.Z, {})
                        }, "separator"),
                        children: tt
                    }),
                    disableScrolling: !me,
                    isOpen: F,
                    limitHeight: !1,
                    onClose: ye,
                    title: he("study_modes.modal.title")
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/OptionsModal.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                BX: () => o,
                Y7: () => r,
                zp: () => u
            });
            s("./node_modules/core-js/modules/es.symbol.description.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = (s("./app/j/assembly/AssemblyPill.tsx"), s("./node_modules/react/jsx-runtime.js"));
            const o = "f16mwdf4",
                r = (0, n.z)("div")({
                    name: "OptionContainer",
                    class: "ojn81eb"
                }),
                i = (0, n.z)("div")({
                    name: "OptionTextContainer",
                    class: "o2xn8ew"
                }),
                l = (0, n.z)("div")({
                    name: "OptionDescription",
                    class: "op79p1u"
                }),
                d = (0, n.z)("div")({
                    name: "OptionLabel",
                    class: "o1pd62b8"
                });

            function u(e) {
                let {
                    label: t,
                    description: s
                } = e;
                return (0, a.jsxs)(i, {
                    children: [(0, a.jsx)(d, {
                        children: t
                    }), s && (0, a.jsxs)(l, {
                        children: [s, " "]
                    })]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalGradingOptions.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/AssemblyLink.tsx"),
                o = s("./app/j/assembly/AssemblyToggleSwitch.tsx"),
                r = s("./app/j/i18n/useTranslation.ts"),
                i = s("./app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.tsx"),
                l = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx"),
                d = s("./node_modules/react/jsx-runtime.js");
            const u = (0, n.z)("div")({
                name: "GradingOptions",
                class: "g728yok"
            });

            function c(e) {
                let {
                    shouldShowPartialAnswers: t,
                    shouldShowSmartGrading: s,
                    shouldShowTypoHelp: n,
                    isSmartGradingOn: c,
                    toggleSmartGrading: p,
                    acceptsPartialAnswer: m,
                    toggleAcceptsPartialAnswer: g,
                    typoHelpGradingSetting: h,
                    toggleTypoHelp: _
                } = e;
                const {
                    t: S
                } = (0, r.ZP)(), {
                    onToggle: E,
                    isExpanded: y,
                    menuClasses: f
                } = (0, i.Z)(), j = s && (0, d.jsx)(l.Y7, {
                    children: (0, d.jsx)(l.zp, {
                        description: S(c ? "study_modes.options.smart_grading.smart_description" : "study_modes.options.smart_grading.standard_description"),
                        label: (0, d.jsxs)(d.Fragment, {
                            children: [S("study_modes.options.smart_grading.smart"), (0, d.jsx)(o.Z, {
                                checked: c,
                                label: S("study_modes.options.smart_grading.smart"),
                                name: "smartGrading",
                                onChange: p
                            })]
                        })
                    })
                }), T = t && (0, d.jsx)(l.Y7, {
                    children: (0, d.jsx)(l.zp, {
                        description: S("study_modes.options.multiple_answers.description"),
                        label: (0, d.jsxs)(d.Fragment, {
                            children: [S("study_modes.options.multiple_answers.one_answer"), (0, d.jsx)(o.Z, {
                                checked: m,
                                label: S("study_modes.options.multiple_answers.one_answer"),
                                name: "partialAnswer",
                                onChange: g
                            })]
                        })
                    })
                }), A = n && (0, d.jsx)(l.Y7, {
                    className: l.BX,
                    children: (0, d.jsx)(l.zp, {
                        description: S("study_modes.options.typo_help.description"),
                        label: (0, d.jsxs)(d.Fragment, {
                            children: [S("study_modes.options.typo_help.title"), (0, d.jsx)(o.Z, {
                                checked: h,
                                label: S("study_modes.options.typo_help.title"),
                                name: "typoHelp",
                                onChange: _
                            })]
                        })
                    })
                });
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)(l.Y7, {
                        "data-testid": "gradingOptions",
                        children: [(0, d.jsx)(l.zp, {
                            label: S("study_modes.options.grading_options.label")
                        }), (0, d.jsx)(a.ZP, {
                            ariaLabel: S(y ? "study_modes.options.grading_options.hide" : "study_modes.options.grading_options.show"),
                            onClick: E,
                            rightIcon: y ? "caret-up" : "caret-down",
                            text: S(y ? "study_modes.options.hide" : "study_modes.options.view")
                        })]
                    }), (0, d.jsxs)(u, {
                        className: f,
                        children: [j, T, A]
                    })]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalGradingOptions.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalPrivacyPolicy.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var n = s("./app/j/assembly/AssemblyLink.tsx"),
                a = s("./app/j/i18n/useTranslation.ts"),
                o = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx"),
                r = s("./node_modules/react/jsx-runtime.js");

            function i() {
                const {
                    t: e
                } = (0, a.ZP)();
                return (0, r.jsx)(o.Y7, {
                    children: (0, r.jsx)(n.ZP, {
                        ariaLabel: e("about.legal.tabs.privacy_policy"),
                        linkTo: "/privacy",
                        size: "medium",
                        text: e("about.legal.tabs.privacy_policy")
                    })
                }, "privacyPolicy")
            }
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionFormat.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => y
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/AssemblyLink.tsx"),
                o = s("./app/j/assembly/AssemblyToggleSwitch.tsx"),
                r = s("./app/j/i18n/useTranslation.ts"),
                i = s("./node_modules/react/index.js"),
                l = s("./app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.tsx"),
                d = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx");

            function u(e) {
                return Object.values(e).filter(Boolean).length
            }

            function c(e, t) {
                return e.definition === t.definition && e.term === t.term && e.location === t.location
            }
            var p = s("./app/j/config/enums.ts"),
                m = s("./app/j/study-modes/legacy-common/utils/createCardSideSettings.ts");
            const g = ["term", "definition", "location"];

            function h(e, t) {
                return e === p.StudyModeType.WRITE && "location" === t
            }
            var _ = s("./node_modules/react/jsx-runtime.js");
            const S = (0, n.z)("div")({
                    name: "QuestionFormatContainer",
                    class: "q2bxuk1"
                }),
                E = (0, n.z)("div")({
                    name: "QuestionFormat",
                    class: "qfiv40x"
                });

            function y(e) {
                let {
                    availableSides: t,
                    definitionLabel: s,
                    definitionLang: n,
                    initAnswerWith: p,
                    initPromptWith: y,
                    questionTypes: f,
                    studyModeType: j,
                    updateAnswerWith: T,
                    updatePromptWith: A,
                    wordLabel: b
                } = e;
                const {
                    t: x
                } = (0, r.ZP)(), {
                    onToggle: I,
                    isExpanded: v,
                    menuClasses: C
                } = (0, l.Z)(), [N, w] = (0, i.useState)(p), [O, M] = (0, i.useState)(y), D = e => function(e) {
                    let {
                        answerWithState: t,
                        availableSides: s,
                        studyModeType: n
                    } = e;
                    return (0, m.Z)((e => t[e] && s[e] && !h(n, e)))
                }({
                    answerWithState: e,
                    availableSides: t,
                    studyModeType: j
                }), L = e => function(e) {
                    let {
                        promptWithState: t,
                        availableSides: s
                    } = e;
                    return (0, m.Z)((e => t[e] && s[e]))
                }({
                    promptWithState: e,
                    availableSides: t
                }), P = function(e) {
                    let {
                        availableSides: t,
                        studyModeType: s
                    } = e;
                    return g.filter((e => !!t[e] && !h(s, e)))
                }({
                    availableSides: t,
                    studyModeType: j
                }), R = function(e) {
                    let {
                        availableSides: t
                    } = e;
                    return g.filter((e => !!t[e]))
                }({
                    availableSides: t
                }), k = R.length > 2, U = (0, _.jsxs)(d.Y7, {
                    "data-testid": "OptionsModal-QuestionFormat-tray",
                    children: [(0, _.jsx)(d.zp, {
                        label: x("study_modes.options.question_format.label")
                    }), (0, _.jsx)(a.ZP, {
                        ariaLabel: x(v ? "study_modes.options.question_format.hide" : "study_modes.options.question_format.view"),
                        onClick: I,
                        rightIcon: v ? "caret-up" : "caret-down",
                        text: x(v ? "study_modes.options.hide" : "study_modes.options.view")
                    })]
                }), W = (e, t, a) => a.map((a => {
                    const r = "prompt" === e,
                        i = function(e, t, s, n) {
                            switch (e) {
                                case "term":
                                    return t;
                                case "definition":
                                    return s;
                                case "location":
                                    return n("study_modes.options.study_with_label_location");
                                default:
                                    throw new Error("Unrecognized side")
                            }
                        }(a, b, s, x),
                        l = x(r ? "study_modes.options.prompt_with_side" : "study_modes.options.answer_with_side", {
                            side: i
                        }),
                        p = r ? O : N,
                        m = r ? function(e, t, s, n, a, o) {
                            const r = a(s);
                            if (1 === u(r) && r[e]) return "lastEnabled";
                            const i = {
                                    ...s,
                                    [e]: !s[e]
                                },
                                l = 1 === u(a(i)),
                                d = 1 === u(n(t));
                            return o && l && d && c(i, t) ? "sameSide" : null
                        }(a, N, O, D, L, k) : function(e, t, s, n, a, o, r, i) {
                            const l = n(t);
                            if (1 === u(l) && l[e]) return "lastEnabled";
                            const d = {
                                    ...t,
                                    [e]: !t[e]
                                },
                                p = 1 === u(n(d));
                            if (o.written && d.location && 1 === u(o) && p) return "locationSideForWritten";
                            const m = 1 === u(a(s));
                            if (r && p && m && c(d, s)) return "sameSide";
                            const {
                                term: g,
                                definition: h
                            } = n(d);
                            if (g || !h || "photo" !== i) return null;
                            const _ = new Set(["copyAnswer", "written"]);
                            return Object.keys(o).filter((e => o[e])).every((e => _.has(e))) ? "photoSideForWritten" : null
                        }(a, N, O, D, L, f, k, n);
                    return (0, _.jsxs)(d.Y7, {
                        children: [(0, _.jsx)(d.zp, {
                            label: l
                        }), (0, _.jsx)(o.Z, {
                            checked: !!p[a],
                            disabled: null !== m,
                            label: i,
                            name: a,
                            onChange: t
                        })]
                    }, e + "-" + a)
                })), B = (0, _.jsxs)(S, {
                    className: C,
                    "data-testid": "OptionsModal-QuestionFormat",
                    children: [(0, _.jsx)(E, {
                        "data-testid": "OptionsModal-QuestionFormat-answerWith",
                        children: W("answer", (e => {
                            const t = e.currentTarget.name,
                                s = N[t],
                                n = {
                                    ...N,
                                    [t]: !s
                                },
                                a = n;
                            w(n), T(a)
                        }), P)
                    }), k ? (0, _.jsx)(E, {
                        "data-testid": "OptionsModal-QuestionFormat-promptWith",
                        children: W("prompt", (e => {
                            const t = e.currentTarget.name,
                                s = O[t],
                                n = {
                                    ...O,
                                    [t]: !s
                                },
                                a = n;
                            M(n), A(a)
                        }), R)
                    }) : null]
                });
                return (0, _.jsxs)(_.Fragment, {
                    children: [U, B]
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionFormat.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionTypeToggles.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                FF: () => h,
                N_: () => p,
                ZP: () => _,
                ce: () => d,
                hT: () => g,
                mT: () => m
            });
            s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./node_modules/@linaria/react/lib/index.js"),
                a = s("./app/j/assembly/AssemblyToggleSwitch.tsx"),
                o = s("./app/j/i18n/useTranslation.ts"),
                r = (s("./node_modules/react/index.js"), s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx")),
                i = s("./node_modules/react/jsx-runtime.js");
            const l = (0, n.z)("div")({
                name: "QuestionTypes",
                class: "qq0kf7u"
            });
            let d = function(e) {
                return e[e.WRITTEN = 1] = "WRITTEN", e[e.MATCHING = 2] = "MATCHING", e[e.MULTIPLE_CHOICE = 4] = "MULTIPLE_CHOICE", e[e.TRUE_FALSE = 8] = "TRUE_FALSE", e[e.REVEAL_SELF_ASSESSMENT = 16] = "REVEAL_SELF_ASSESSMENT", e[e.MULTIPLE_CHOICE_WITH_NONE_OPTION = 32] = "MULTIPLE_CHOICE_WITH_NONE_OPTION", e[e.COPY_ANSWER = 64] = "COPY_ANSWER", e[e.SPELLING = 128] = "SPELLING", e[e.FLASHCARD_WITHOUT_RESPONSE = 256] = "FLASHCARD_WITHOUT_RESPONSE", e[e.MIXED_OPTION_MATCHING = 512] = "MIXED_OPTION_MATCHING", e[e.FILL_IN_THE_BLANK = 1024] = "FILL_IN_THE_BLANK", e
            }({});
            const u = [d.WRITTEN, d.MATCHING, d.MULTIPLE_CHOICE, d.TRUE_FALSE, d.REVEAL_SELF_ASSESSMENT, d.MULTIPLE_CHOICE_WITH_NONE_OPTION, d.COPY_ANSWER, d.SPELLING, d.FLASHCARD_WITHOUT_RESPONSE, d.MIXED_OPTION_MATCHING, d.FILL_IN_THE_BLANK],
                c = e => {
                    switch (e) {
                        case d.WRITTEN:
                            return "written";
                        case d.MATCHING:
                            return "matching";
                        case d.COPY_ANSWER:
                            return "copyAnswer";
                        case d.FILL_IN_THE_BLANK:
                            return "fillInTheBlank";
                        case d.MULTIPLE_CHOICE:
                            return "multipleChoice";
                        case d.MULTIPLE_CHOICE_WITH_NONE_OPTION:
                            return "multipleChoiceWithNoneOption";
                        case d.REVEAL_SELF_ASSESSMENT:
                            return "revealSelfAssessment";
                        case d.SPELLING:
                            return "spelling";
                        default:
                            return null
                    }
                },
                p = e => {
                    const t = Object.keys(e).filter((t => !!e[t]));
                    return u.filter((e => {
                        const s = c(e);
                        return s && t.includes(s)
                    }))
                },
                m = (e, t) => {
                    const s = c(t);
                    if (null === s) throw new Error("Failed to toggle unsupported question type: " + s);
                    const n = e[s];
                    return {
                        ...e,
                        [s]: !n
                    }
                },
                g = [d.TRUE_FALSE, d.MULTIPLE_CHOICE, d.MATCHING, d.WRITTEN],
                h = [d.REVEAL_SELF_ASSESSMENT, d.MULTIPLE_CHOICE, d.WRITTEN, d.FILL_IN_THE_BLANK];

            function _(e) {
                let {
                    availableQuestionTypes: t,
                    enabledQuestionTypes: s,
                    handleToggleQuestionType: n
                } = e;
                const {
                    t: u
                } = (0, o.ZP)(), c = e => {
                    const t = Number(e.currentTarget.name);
                    n(t)
                }, p = s.filter((e => t.includes(e))), m = e => 1 === p.length && p.includes(e);
                return (0, i.jsx)(r.Y7, {
                    "data-testid": "Question Types",
                    children: (0, i.jsx)(l, {
                        children: t.map((e => {
                            const t = (e => {
                                switch (e) {
                                    case d.FILL_IN_THE_BLANK:
                                        return u("study_modes.options.question_type.fill_in_the_blank");
                                    case d.REVEAL_SELF_ASSESSMENT:
                                        return u("study_modes.options.question_type.flashcards");
                                    case d.WRITTEN:
                                        return u("study_modes.options.question_type.written");
                                    case d.MATCHING:
                                        return u("study_modes.options.question_type.matching");
                                    case d.MULTIPLE_CHOICE:
                                        return u("study_modes.options.question_type.multiple_choice");
                                    case d.TRUE_FALSE:
                                        return u("study_modes.options.question_type.true_false");
                                    default:
                                        throw new Error(e + " is not a supported Test mode question type.")
                                }
                            })(e);
                            return (0, i.jsxs)(r.Y7, {
                                children: [(0, i.jsx)(r.zp, {
                                    label: t
                                }), (0, i.jsx)(a.Z, {
                                    checked: s.includes(e),
                                    disabled: m(e),
                                    label: t,
                                    name: "" + e,
                                    onChange: c
                                })]
                            }, e)
                        }))
                    })
                })
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionTypeToggles.linaria.css")
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalStarredOnly.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var n = s("./app/j/assembly/AssemblyToggleSwitch.tsx"),
                a = s("./app/j/assembly/AssemblyTooltip.tsx"),
                o = s("./app/j/i18n/useTranslation.ts"),
                r = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx"),
                i = s("./node_modules/react/jsx-runtime.js");

            function l(e) {
                let {
                    toggleStudyStarredOnly: t,
                    shouldAllowStudyingStarredOnly: s,
                    studyStarredOnly: l
                } = e;
                const {
                    t: d
                } = (0, o.ZP)(), u = (0, i.jsx)(n.Z, {
                    checked: l,
                    disabled: !s,
                    label: d(l ? "study_modes.options.starred" : "study_modes.options.all"),
                    name: "starredOnly",
                    onChange: t
                });
                return (0, i.jsxs)(r.Y7, {
                    children: [(0, i.jsx)(r.zp, {
                        label: d("study_modes.options.study_starred")
                    }), s ? u : (c = u, (0, i.jsx)(a.Z, {
                        offset: 8,
                        placement: "left",
                        shouldFitContent: !1,
                        text: d("study_modes.options.study_starred_tooltip"),
                        children: c
                    }))]
                });
                var c
            }
        },
        "./app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalTwoSides.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/assembly/buttons/index.ts"),
                a = s("./app/j/assembly/menus/index.ts"),
                o = s("./app/j/i18n/useTranslation.ts"),
                r = s("./node_modules/nullthrows/nullthrows.js"),
                i = s.n(r),
                l = s("./node_modules/react/index.js"),
                d = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.tsx"),
                u = s("./app/j/study-modes/legacy-common/utils/createCardSideSettings.ts"),
                c = s("./node_modules/react/jsx-runtime.js"),
                p = function(e) {
                    return e.WORD = "term", e.DEFINITION = "definition", e.BOTH = "both", e
                }(p || {});

            function m(e) {
                let {
                    definitionLabel: t,
                    includeTermInBothSidesSelection: s = !1,
                    initAnswerWith: r,
                    shouldDisableDropdown: m,
                    shouldShowBothSidesOption: g,
                    updateAnswerWith: h,
                    updatePromptWith: _,
                    wordLabel: S
                } = e;
                const {
                    t: E
                } = (0, o.ZP)(), [y, f] = (0, l.useState)(r), j = [{
                    option: p.WORD,
                    label: S
                }, {
                    option: p.DEFINITION,
                    label: t
                }, g ? {
                    option: p.BOTH,
                    label: E("study_modes.options.both_card_sides")
                } : void 0].filter((e => void 0 !== e));
                const T = E("study_modes.options.answer_with"),
                    A = () => {
                        const e = j.find((e => e.option === function(e) {
                            return e.term && e.definition ? p.BOTH : e.definition ? p.DEFINITION : p.WORD
                        }(y)));
                        return i()(e, "Unable to match answerWith options config with current value " + y).label
                    },
                    b = (0, c.jsx)(a.sD, {
                        "aria-label": T,
                        children: j.map((e => {
                            const {
                                option: t,
                                label: n
                            } = e;
                            return (0, c.jsx)(a.jJ, {
                                elementType: "button",
                                onAction: () => function(e) {
                                    let t, n;
                                    e === p.BOTH ? (t = {
                                        term: !0,
                                        definition: !0,
                                        location: !1
                                    }, n = {
                                        term: s,
                                        definition: !0,
                                        location: !1
                                    }) : (t = (0, u.Z)((t => e === t)), n = (0, u.Z)((e => !t[e] && "location" !== e))), f(t), h(t), _(n)
                                }(t),
                                text: n
                            }, "label-" + t)
                        }))
                    }),
                    x = (0, c.jsx)(n.B0, {
                        disabled: m,
                        text: A()
                    });
                return (0, c.jsxs)(d.Y7, {
                    children: [(0, c.jsx)(d.zp, {
                        label: E("study_modes.options.answer_with")
                    }), m ? x : (0, c.jsx)(n.PP, {
                        ariaLabel: T,
                        disabled: m,
                        menu: b,
                        menuPlacement: "bottom right",
                        text: A()
                    })]
                })
            }
        },
        "./app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => d
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./node_modules/@linaria/core/lib/index.js"),
                a = s("./node_modules/polished/dist/polished.cjs.js"),
                o = s("./node_modules/react/index.js");
            (0, a.hO)(500);
            const r = "dligeoa",
                i = "c12rt4bv",
                l = "ej5q6i6";

            function d() {
                const [e, t] = (0, o.useState)(!1), [s, a] = (0, o.useState)(!1);
                return {
                    onToggle: () => {
                        t((e => !e)), a(!0)
                    },
                    isExpanded: e,
                    menuClasses: (0, n.cx)(r, e && l, s && !e && i)
                }
            }
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.linaria.css")
        },
        "./app/j/study-modes/legacy-common/containers/OptionsModalContainer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => x
            });
            var n = s("./app/j/core/legacy_store/LegacyStoreProvider.tsx"),
                a = s("./node_modules/react-redux/lib/index.js"),
                o = s("./node_modules/redux/lib/redux.js"),
                r = s("./node_modules/reselect/lib/index.js"),
                i = s("./app/j/study-modes/legacy-common/components/options_modal/OptionsModal.tsx"),
                l = s("./app/j/study-modes/legacy-common/grading/selectors.ts"),
                d = s("./app/j/study-modes/legacy-common/settings/actions.ts"),
                u = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                c = s("./app/j/config/enums.ts"),
                p = s("./app/j/studiable-data/utils.ts"),
                m = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts");
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");

            function g(e, t) {
                for (const s of (0, p.c4)(e, t)) {
                    const e = (0, p.xy)(s);
                    if (e && e.ttsUrl) return !0
                }
                return !1
            }

            function h(e, t) {
                for (const s of (0, p.c4)(e, t))
                    if (!(0, p.Ai)(s)) return !1;
                return !0
            }

            function _(e, t) {
                let s;
                for (const n of (0, p.c4)(e, t)) {
                    const e = (0, p.xy)(n);
                    if (!e) return !1;
                    s || (s = e.languageCode);
                    if (!(s === e.languageCode)) return !1
                }
                return !0
            }
            const S = (0, r.createSelector)(m.TQ, (e => g(e.studiableItems.filter(p.F_), c.dU_.WORD))),
                E = (0, r.createSelector)(m.TQ, (e => g(e.studiableItems.filter(p.F_), c.dU_.DEFINITION))),
                y = (0, r.createSelector)(m.TQ, (e => h(e.studiableItems.filter(p.F_), c.dU_.WORD))),
                f = (0, r.createSelector)(m.TQ, (e => h(e.studiableItems.filter(p.F_), c.dU_.DEFINITION))),
                j = (0, r.createSelector)(m.TQ, (e => _(e.studiableItems.filter(p.F_), c.dU_.WORD))),
                T = (0, r.createSelector)(m.TQ, (e => _(e.studiableItems.filter(p.F_), c.dU_.DEFINITION))),
                A = (0, r.createSelector)([j, T], ((e, t) => e && t)),
                b = (0, r.createStructuredSelector)({
                    allDefinitionsHaveText: m.hy,
                    availableSides: m.UR,
                    definitionLang: m.aW,
                    hasCompleteDefinitionCustomAudio: f,
                    hasCompleteWordCustomAudio: y,
                    hasDefinitionAudio: E,
                    hasDiagram: m.XQ,
                    hasFillInTheBlankQuestions: m.kx,
                    hasImage: m.bs,
                    hasWordAudio: S,
                    hiddenSettings: u.ZB,
                    isEligibleForSmartGrading: l.lc,
                    settings: u.Iz,
                    shouldAllowStudyingStarredOnly: m.kI,
                    shouldShowLanguageLabel: A,
                    studyModeType: u.ez,
                    wordLang: m.lb
                }),
                x = (0, a.connect)(b, (e => ({
                    actions: (0, o.bindActionCreators)({
                        updateSettings: d.ex,
                        updateLevenshteinPlusGradingSetting: d.j$
                    }, e)
                })), null, {
                    context: n.tC
                })(i.Z)
        },
        "./app/j/study-modes/legacy-common/engine/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                DQ: () => S,
                MF: () => i,
                YC: () => d,
                h5: () => c,
                ig: () => g,
                on: () => _,
                ox: () => l,
                vE: () => u,
                xS: () => h
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                o = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                r = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
            let i = function(e) {
                return e.SET_STUDY_ENGINE_INSTANCE = "STUDY_MODES_COMMON.STUDY_ENGINE.SET_STUDY_ENGINE_INSTANCE", e.SET_GRADED_ANSWER = "STUDY_MODES_COMMON.STUDY_ENGINE.SET_GRADED_ANSWER", e.SET_STUDY_STEP_AND_PROGRESS = "STUDY_MODES_COMMON.STUDY_ENGINE.SET_STUDY_STEP_AND_PROGRESS", e.ADD_TO_ANSWER_HISTORY = "STUDY_MODES_COMMON.STUDY_ENGINE.ADD_TO_ANSWER_HISTORY", e.SET_ANSWER_HISTORY = "STUDY_MODES_COMMON.STUDY_ENGINE.SET_ANSWER_HISTORY", e.SET_STUDY_STEP_AND_PROGRESS_FOR_TASKS = "STUDY_MODES_COMMON.STUDY_ENGINE.SET_STUDY_STEP_AND_PROGRESS_FOR_TASKS", e
            }({});
            const l = e => (0, r.action)(i.SET_STUDY_ENGINE_INSTANCE, e),
                d = e => (0, r.action)(i.SET_GRADED_ANSWER, e),
                u = e => (0, r.action)(i.ADD_TO_ANSWER_HISTORY, e),
                c = e => (0, r.action)(i.SET_ANSWER_HISTORY, e),
                p = (e, t, s) => {
                    const n = t.getTaskRoundProgress(),
                        a = t.getTaskSequenceProgress(),
                        o = t.getCurrentTaskProgress();
                    var l;
                    e((l = {
                        studyStep: s,
                        taskRoundProgress: n,
                        taskSequenceProgress: a,
                        taskProgress: o
                    }, (0, r.action)(i.SET_STUDY_STEP_AND_PROGRESS_FOR_TASKS, l)))
                },
                m = (e, t, s) => {
                    const n = t.getTotalProgress(),
                        a = t.getRoundProgress();
                    var o;
                    e((o = {
                        studyStep: s,
                        totalProgress: n,
                        roundProgress: a
                    }, (0, r.action)(i.SET_STUDY_STEP_AND_PROGRESS, o)))
                },
                g = e => (t, s) => {
                    const r = s(),
                        i = (0, a.C1)(r),
                        l = i.generateStudyStep(e);
                    (0, o.ez)(r) === n.StudyModeType.LEARNING_ASSISTANT ? p(t, i, l) : m(t, i, l)
                },
                h = e => async (t, s) => {
                    const n = (0, a.C1)(s()),
                        o = await n.gradeAnswer(e);
                    t(d(o))
                }, _ = (e, t) => async (s, n) => {
                    const o = (0, a.C1)(n()),
                        r = await o.gradeAnswer(e);
                    t(r.isCorrect)
                }, S = e => (t, s) => {
                    (0, a.C1)(s()).setGradingSettings(e)
                }
        },
        "./app/j/study-modes/legacy-common/engine/question/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $f: () => g,
                Ae: () => x,
                Gi: () => C,
                Ko: () => _,
                P: () => j,
                RU: () => y,
                Rf: () => m,
                VG: () => b,
                Yt: () => I,
                Zf: () => E,
                bl: () => f,
                fR: () => S,
                fT: () => T,
                fg: () => p,
                g3: () => h,
                xP: () => A,
                xb: () => N,
                yy: () => c
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./node_modules/nullthrows/nullthrows.js"),
                o = s.n(a),
                r = s("./node_modules/reselect/lib/index.js"),
                i = s("./app/j/studiable-data/utils.ts"),
                l = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                d = s("./app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts"),
                u = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts");
            const c = (0, r.createSelector)(l.wG, (e => {
                    if (!e.metadata.answerSide) throw new Error("No answerSide for question type: " + e.type + ".");
                    return e.metadata.answerSide
                })),
                p = (0, r.createSelector)(l.wG, (e => {
                    if (!e.metadata.promptSide) throw new Error("No promptSide for question type: " + e.type + ".");
                    return e.metadata.promptSide
                })),
                m = (0, r.createSelector)(l.wG, (e => e.type)),
                g = (0, r.createSelector)(l.wG, (e => e.metadata.questionSource)),
                h = (0, r.createSelector)(l.wG, (e => {
                    var t;
                    return null == (t = e.metadata.questionScoringInferenceMetadata) ? void 0 : t.currentScore
                })),
                _ = (0, r.createSelector)(l.wG, (e => {
                    var t;
                    return null == (t = e.metadata.questionScoringInferenceMetadata) ? void 0 : t.modelName
                })),
                S = (0, r.createSelector)(l.wG, (e => {
                    var t;
                    return null == (t = e.metadata.questionScoringInferenceMetadata) ? void 0 : t.modelVersion
                })),
                E = (0, r.createSelector)(l.wG, (e => {
                    var t;
                    return null == (t = e.metadata.questionScoringInferenceMetadata) ? void 0 : t.priorityScore
                })),
                y = (0, r.createSelector)(l.wG, (e => {
                    var t;
                    return null == (t = e.metadata.questionScoringInferenceMetadata) ? void 0 : t.priorityMethod
                })),
                f = (0, r.createSelector)([l.wG, u.mb], ((e, t) => o()(t.find((t => t.id === e.metadata.studiableItemId))))),
                j = (0, r.createSelector)(f, (e => e.id)),
                T = (0, r.createSelector)([p, f], ((e, t) => {
                    if (!(0, i.F_)(t)) throw new Error("studiableItem must be a Card");
                    return o()((0, i.KN)(t, e))
                })),
                A = (0, r.createSelector)([c, f], ((e, t) => {
                    if (!(0, i.F_)(t)) throw new Error("studiableItem must be a Card");
                    return o()((0, i.KN)(t, e))
                })),
                b = (0, r.createSelector)([T], (e => e.sideId)),
                x = (0, r.createSelector)([A], (e => e.sideId)),
                I = e => !v(e) || (0, u.lb)(e) === (0, u.aW)(e),
                v = (0, r.createSelector)([l.wG], (e => {
                    if (!("prompt" in e)) throw new Error("No prompt for question type: " + e.type + ".");
                    return Boolean((0, d.dC)(e.prompt))
                })),
                C = (0, r.createSelector)(u.Uv, c, ((e, t) => {
                    switch (t) {
                        case n.dU_.WORD:
                            return e.word;
                        case n.dU_.DEFINITION:
                            return e.definition;
                        default:
                            return []
                    }
                })),
                N = (0, r.createSelector)(l.wG, (e => {
                    if (!("answerLanguageCode" in e)) throw new Error("No answerLanguageCode for question type: " + e.type + ".");
                    return e.answerLanguageCode
                }))
        },
        "./app/j/study-modes/legacy-common/engine/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                C1: () => m,
                C9: () => M,
                EY: () => g,
                IQ: () => O,
                J7: () => b,
                Qw: () => T,
                Rw: () => f,
                S_: () => I,
                T$: () => C,
                Uy: () => y,
                WJ: () => P,
                XM: () => w,
                ZZ: () => L,
                tq: () => D,
                ut: () => p,
                uv: () => A,
                wG: () => S,
                wT: () => v,
                xP: () => _,
                yN: () => N,
                z5: () => h,
                zt: () => x
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/legacyAssistant/types/QAssistantModeTypes.ts"),
                o = s("./node_modules/nullthrows/nullthrows.js"),
                r = s.n(o),
                i = s("./node_modules/reselect/lib/index.js"),
                l = s("./app/j/study-engine/types.ts"),
                d = s("./app/j/study-engine/utils.ts"),
                u = s("./app/j/study-modes/legacy-common/grading/utils/isAnswerGradedAsCorrectWithLevenshteinPlus.ts"),
                c = s("./app/j/study-modes/legacy-common/selectors.ts");
            const p = (0, i.createSelector)(c.p, (e => e.studyEngine)),
                m = ((0, i.createSelector)(p, (e => e.instance)), (0, i.createSelector)(p, (e => r()(e.instance, "You must initialize the study engine before selecting it.")))),
                g = (0, i.createSelector)(p, (e => r()(e.studyStep, "You must generate the study step before selecting it."))),
                h = (0, i.createSelector)(p, (e => r()(e.answerHistory, "You must set the answer history before selecting it."))),
                _ = (0, i.createSelector)(g, (e => (0, d.KX)(e) ? e : null)),
                S = (0, i.createSelector)(g, (e => {
                    if (!(0, d.KX)(e)) throw new Error("You cannot select a question if the current study step is not a question. The current study step type is: " + e.type + ".");
                    return e
                })),
                E = (0, i.createSelector)(g, (e => (0, d.hB)(e) && e.checkpoint ? e.checkpoint : (0, d.jk)(e) ? e : null)),
                y = (0, i.createSelector)(E, (e => {
                    if (null === e) throw new Error("You cannot select a checkpoint if the current study step is not a checkpoint.");
                    return e
                })),
                f = (0, i.createSelector)([_, h], ((e, t) => {
                    if (null === e) return !1;
                    for (let s = t.length - 1; s >= 0; s--) {
                        const o = t[s];
                        if (o.studiableItemId === e.metadata.studiableItemId && (o.round === (0, a.Q)().multipleChoice && e.type === l.mw.MULTIPLE_CHOICE_QUESTION || o.round === (0, a.Q)().written && e.type === l.mw.WRITTEN_QUESTION)) return o.correctness === n.p7P.INCORRECT || o.correctness === n.p7P.INCORRECT_WITH_HINT
                    }
                    return !1
                })),
                j = (0, i.createSelector)(g, (e => {
                    if (!(0, d.hB)(e)) throw new Error("You cannot select a paywall if the current study step is not a paywall.");
                    return e
                })),
                T = (0, i.createSelector)(g, (e => {
                    var t;
                    const s = (0, d.hB)(e),
                        n = (0, d.jk)(e);
                    if (!s && !n) throw new Error("You cannot select study step metering data when the step is not a checkpoint or paywall, this is to prevent too many calls to the metering endpoint");
                    return null != (t = e.metadata.meteringData) ? t : null
                })),
                A = (0, i.createSelector)(j, (e => {
                    var t;
                    const {
                        checkpoint: s
                    } = e;
                    return (null != (t = null == s ? void 0 : s.roundResults) ? t : []).length > 0
                })),
                b = (0, i.createSelector)(g, (e => {
                    if ((0, d.hB)(e)) {
                        var t, s;
                        return null != (t = null == (s = e.checkpoint) ? void 0 : s.roundResults) ? t : []
                    }
                    return (0, d.jk)(e) && e.roundResults ? e.roundResults : []
                })),
                x = (0, i.createSelector)(p, (e => r()(e.totalProgress, "You must compute the total progress before selecting it."))),
                I = (0, i.createSelector)(p, (e => r()(e.taskProgress, "You must compute the total progress before selecting it."))),
                v = (0, i.createSelector)(p, (e => r()(e.roundProgress, "You must compute the round progress before selecting it."))),
                C = (0, i.createSelector)(g, (e => !!(0, d.jk)(e) && e.progressState === l.xA.POST_COMPLETION_CHECKPOINT)),
                N = (0, i.createSelector)(E, (e => null === e ? null : e.nextTaskLabel)),
                w = (0, i.createSelector)(p, (e => e.taskProgress)),
                O = (0, i.createSelector)(p, (e => r()(e.taskRoundProgress, "You must compute task round progress before selecting it."))),
                M = (0, i.createSelector)(p, (e => r()(e.taskSequenceProgress, "You must compute task sequence progress before selecting it."))),
                D = (0, i.createSelector)(p, (e => e.gradedAnswer)),
                L = (0, i.createSelector)(D, (e => r()(e, "You must compute the graded answer before selecting it."))),
                P = (0, i.createSelector)(D, (e => {
                    var t;
                    return (0, u.q)(null != (t = null == e ? void 0 : e.gradingSettingsSuggestion) ? t : null)
                }))
        },
        "./app/j/study-modes/legacy-common/engine/utils/graded-answer-utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ap: () => r,
                ED: () => u,
                EE: () => l,
                Rj: () => c,
                T1: () => h,
                ZP: () => i,
                bt: () => g,
                e0: () => p,
                jn: () => m,
                uL: () => d
            });
            var n = s("./node_modules/memoize-one/dist/memoize-one.cjs.js"),
                a = s.n(n),
                o = s("./app/j/study-engine/types.ts");
            const r = a()((e => {
                const {
                    feedback: {
                        submittedAnswer: t,
                        expectedAnswer: s
                    }
                } = e;
                return [t, s].forEach((e => {
                    if ((null == e ? void 0 : e.type) !== o.xh.STRING_ANSWER) throw new Error("The Graded Answer passed in does not contain String Answers.")
                })), {
                    submittedAnswerValue: t.value,
                    expectedAnswerValue: s.value
                }
            }));

            function i(e) {
                return !!e
            }

            function l(e, t) {
                return t.feedback.expectedAnswer.value === e
            }

            function d(e) {
                return !1 === (null == e ? void 0 : e.isCorrect)
            }

            function u(e, t) {
                var s;
                return (null == t || null == (s = t.feedback.submittedAnswer) ? void 0 : s.value) === e
            }

            function c(e, t) {
                const {
                    submittedAnswer: s
                } = t.feedback;
                return d(t) && (null == s ? void 0 : s.value) === e
            }

            function p(e) {
                return !0 === (null == e ? void 0 : e.isCorrect)
            }

            function m(e) {
                return null === (null == e ? void 0 : e.feedback.submittedAnswer)
            }

            function g(e) {
                var t;
                return null !== e && void 0 === (null == (t = e.feedback.submittedAnswer) ? void 0 : t.value) && !0 === e.isCorrect
            }

            function h(e, t) {
                var s;
                return void 0 === (null == t || null == (s = t.feedback.submittedAnswer) ? void 0 : s.value) && (null == t ? void 0 : t.feedback.expectedAnswer.value) === e
            }
        },
        "./app/j/study-modes/legacy-common/grading/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Iu: () => p,
                MF: () => l,
                cd: () => c,
                sy: () => d,
                yd: () => u
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts"),
                o = s("./app/j/study-modes/legacy-common/logging/actions.ts"),
                r = s("./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts"),
                i = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
            let l = function(e) {
                return e.OVERRIDE_CORRECTNESS_CLICK = "GRADING.OVERRIDE_CORRECTNESS_CLICK", e.SET_ANSWER_GRADED_BY_LONGTEXT_GRADING_SERVICE = "GRADING.SET_ANSWER_GRADED_BY_LONGTEXT_GRADING_SERVICE", e.SET_IS_GRADING = "GRADING.SET_IS_GRADING", e
            }({});
            const d = e => (0, i.action)(l.SET_ANSWER_GRADED_BY_LONGTEXT_GRADING_SERVICE, e),
                u = e => (0, i.action)(l.SET_IS_GRADING, e),
                c = () => (0, i.action)(l.OVERRIDE_CORRECTNESS_CLICK),
                p = e => {
                    let {
                        currentQuestion: t,
                        submittedAnswerValue: s,
                        expectedAnswerValue: i,
                        gradingResult: l,
                        timestampSeconds: d
                    } = e;
                    return e => {
                        e((0, o.$N)(n.AuQ.GRADE_TEXT, {
                            cnn_score: l.cnn_score,
                            displayed_grade: l.grade === n.lcN.CORRECT ? n.lcN.CORRECT : n.lcN.WRONG,
                            expected_answer_side: (0, r.Q)(t.metadata.answerSide),
                            expected_answer_text: i,
                            grade: l.grade,
                            missing_text: l.missing,
                            model_name: l.model,
                            prompt_text: (0, a.dC)(t.prompt),
                            request_successful: !0,
                            score: l.score,
                            submitted_answer_text: s
                        }, d))
                    }
                }
        },
        "./app/j/study-modes/legacy-common/grading/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Un: () => o,
                rs: () => n,
                w$: () => a
            });
            const n = "user_enabled_smart_grading",
                a = "user_disabled_smart_grading",
                o = 1e3
        },
        "./app/j/study-modes/legacy-common/grading/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Em: () => u,
                YI: () => i,
                lc: () => l,
                uO: () => d
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                o = s("./app/j/study-modes/legacy-common/selectors.ts");
            const r = (0, n.createSelector)(o.p, (e => e.grading)),
                i = (0, n.createSelector)(r, (e => e.answerGradedByLongtextGradingService)),
                l = ((0, n.createSelector)([i, a.WJ], ((e, t) => e || t)), (0, n.createSelector)(r, (e => e.isEligibleForSmartGrading))),
                d = ((0, n.createSelector)(r, (e => e.overrideCorrectnessCounter)), (0, n.createSelector)(r, (e => e.shouldShowSmartGradingUpsell))),
                u = (0, n.createSelector)(r, (e => e.isGrading))
        },
        "./app/j/study-modes/legacy-common/grading/utils/isAnswerGradedAsCorrectWithLevenshteinPlus.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => n
            });
            const n = e => !1 === (null == e ? void 0 : e.acceptsAnswersWithTypos)
        },
        "./app/j/study-modes/legacy-common/grading/utils/longtextGradingUtils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => r,
                k: () => o
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/config/enums.ts");
            const a = new Set([n.spR.ENGLISH, n.spR.FRENCH, n.spR.GERMAN, n.spR.SPANISH]);

            function o(e) {
                return a.has(e)
            }

            function r(e, t, s) {
                return e.split(" ").length >= 3 && t.split(" ").length >= 3 && void 0 !== s && o(s)
            }
        },
        "./app/j/study-modes/legacy-common/hocs/connectQuestionStepForAutoPlayAudio.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => _
            });
            var n = s("./app/j/audio_playback/thunks.ts"),
                a = s("./app/j/audio_playback/utils.ts"),
                o = s("./app/j/core/default_store/DefaultStoreProvider.tsx"),
                r = s("./app/j/core/legacy_store/LegacyStoreProvider.tsx"),
                i = s("./node_modules/react/index.js"),
                l = s("./node_modules/react-redux/lib/index.js"),
                d = s("./node_modules/redux/lib/redux.js"),
                u = s("./node_modules/reselect/lib/index.js"),
                c = s("./app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts"),
                p = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                m = s("./node_modules/react/jsx-runtime.js");
            const g = (0, u.createStructuredSelector)({
                    question: (e, t) => {
                        let {
                            question: s
                        } = t;
                        return s
                    },
                    advancedAudioSettings: p.o3,
                    isAudioOn: p.zK,
                    passThroughProps: (e, t) => t
                }),
                h = e => ({
                    actions: (0, d.bindActionCreators)({
                        replayAudio: n.fM,
                        stopAndPlayAudio: n.DQ,
                        stopPlayback: n.p0
                    }, e)
                });

            function _(e) {
                let {
                    playAnswer: t = !1,
                    playPrompt: s = !0,
                    delay: n = 0
                } = e;
                return e => {
                    class u extends i.Component {
                        componentDidMount() {
                            if (!this.props.isAudioOn) return;
                            const e = [];
                            if (s) {
                                const t = this.getPromptAudioItem(this.props);
                                t && e.push(t)
                            }
                            if (t && this.props.gradedAnswer) {
                                const t = this.getAnswerAudioItem(this.props);
                                t && e.push(t)
                            }
                            e.length > 0 && setTimeout((() => this.props.actions.stopAndPlayAudio({
                                audioItems: e
                            })), n)
                        }
                        componentDidUpdate(e) {
                            !e.isAudioOn && this.props.isAudioOn ? this.props.actions.replayAudio() : e.isAudioOn && !this.props.isAudioOn && this.props.actions.stopPlayback()
                        }
                        getPromptAudioItem(e) {
                            var t;
                            let {
                                question: s,
                                advancedAudioSettings: {
                                    definitionEnabled: n,
                                    slowDefinitionEnabled: o
                                }
                            } = e;
                            if (n) return null == (t = (0, a.kW)({
                                question: s,
                                advancedAudioSettings: {
                                    slowDefinitionEnabled: o
                                }
                            })) ? void 0 : t.audioItems[0]
                        }
                        getAnswerAudioItem(e) {
                            var t, s;
                            let {
                                gradedAnswer: n,
                                advancedAudioSettings: {
                                    wordEnabled: a,
                                    slowWordEnabled: o
                                }
                            } = e;
                            if (!a) return;
                            if (!n) return;
                            if (!n.feedback.expectedAnswerDescription) return;
                            const r = o ? null == (t = (0, c.Sg)(n.feedback.expectedAnswerDescription).audio) ? void 0 : t.slowUrl : null == (s = (0, c.Sg)(n.feedback.expectedAnswerDescription).audio) ? void 0 : s.url;
                            return r ? {
                                audioId: r,
                                url: r
                            } : void 0
                        }
                        render() {
                            return (0, m.jsx)(e, {
                                ...this.props.passThroughProps
                            })
                        }
                    }
                    return (0, d.compose)((0, l.connect)(g, null, null, {
                        context: r.tC
                    }), (0, l.connect)(null, h, null, {
                        context: o.jJ
                    }))(u)
                }
            }
        },
        "./app/j/study-modes/legacy-common/hooks/useShouldSeeSignupWall.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = s("./app/j/context/UserContext.ts"),
                a = s("./node_modules/react/index.js");

            function o(e, t, s) {
                void 0 === s && (s = !1);
                return !(0, a.useContext)(n.Z) && !s && void 0 !== e && !t
            }
        },
        "./app/j/study-modes/legacy-common/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => Ae,
                j: () => Te
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/core/getGenericErrorWithToastCallback.ts"),
                o = s("./app/j/core/legacy_store/LegacyStore.ts"),
                r = s("./node_modules/redux/lib/redux.js"),
                i = s("./node_modules/immer/dist/immer.esm.mjs"),
                l = s("./app/j/study-modes/legacy-common/engine/actions.ts"),
                d = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
            const u = (e, t) => (0, i.ZP)(e, (e => {
                    e.instance = t.payload
                })),
                c = (e, t) => (0, i.ZP)(e, (e => {
                    e.gradedAnswer = t.payload
                })),
                p = (e, t) => (0, i.ZP)(e, (e => {
                    if (null === e.answerHistory) throw new Error("You must set the answer history before adding to it.");
                    e.answerHistory = e.answerHistory.concat(t.payload)
                })),
                m = (e, t) => (0, i.ZP)(e, (e => {
                    e.answerHistory = t.payload
                })),
                g = (e, t) => (0, i.ZP)(e, (e => {
                    const {
                        roundProgress: s,
                        studyStep: n,
                        totalProgress: a
                    } = t.payload;
                    e.studyStep = n, e.totalProgress = a, e.roundProgress = s
                })),
                h = (e, t) => (0, i.ZP)(e, (e => {
                    const {
                        studyStep: s,
                        taskRoundProgress: n,
                        taskProgress: a,
                        taskSequenceProgress: o
                    } = t.payload;
                    e.studyStep = s, e.taskRoundProgress = n, e.taskProgress = a, e.taskSequenceProgress = o
                }));

            function _() {
                const e = {
                    [l.MF.SET_STUDY_ENGINE_INSTANCE]: u,
                    [l.MF.SET_GRADED_ANSWER]: c,
                    [l.MF.SET_STUDY_STEP_AND_PROGRESS]: g,
                    [l.MF.ADD_TO_ANSWER_HISTORY]: p,
                    [l.MF.SET_ANSWER_HISTORY]: m,
                    [l.MF.SET_STUDY_STEP_AND_PROGRESS_FOR_TASKS]: h
                };
                return (0, d.createReducer)({
                    instance: null,
                    gradedAnswer: null,
                    studyStep: null,
                    totalProgress: null,
                    roundProgress: null,
                    answerHistory: null,
                    taskRoundProgress: null,
                    taskProgress: null,
                    taskSequenceProgress: null
                }, e)
            }
            var S = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                E = s("./app/j/study-modes/legacy-common/grading/actions.ts");
            const y = (e, t) => (0, i.Uy)(e, (e => {
                    e.answerGradedByLongtextGradingService = t.payload
                })),
                f = (e, t) => (0, i.Uy)(e, (e => {
                    e.isGrading = t.payload
                })),
                j = e => (0, i.Uy)(e, (t => {
                    t.overrideCorrectnessCounter = e.overrideCorrectnessCounter + 1
                }));

            function T(e) {
                const t = {
                    [E.MF.SET_ANSWER_GRADED_BY_LONGTEXT_GRADING_SERVICE]: y,
                    [E.MF.SET_IS_GRADING]: f,
                    [E.MF.OVERRIDE_CORRECTNESS_CLICK]: j
                };
                return (0, d.createReducer)(function(e) {
                    return {
                        answerGradedByLongtextGradingService: !1,
                        isEligibleForSmartGrading: e.isEligibleForSmartGrading,
                        isGrading: !1,
                        overrideCorrectnessCounter: 0,
                        shouldShowSmartGradingUpsell: e.shouldShowSmartGradingUpsell
                    }
                }(e), t)
            }
            var A = s("./app/j/global/Quizlet.ts"),
                b = s("./app/j/study-modes/redesigned_cards/constants.ts"),
                x = s("./app/j/global/Rollbar.ts"),
                I = s("./app/j/utils/log-event.ts"),
                v = s("./app/j/utils/unix-timestamp.ts");
            class C {
                assemblePayload(e) {
                    return {
                        person_id: A.default.user ? A.default.user.id : A.default.uid,
                        client_id: "web",
                        platform: n.t4T.WEB,
                        client_timestamp: (0, v.vJ)(),
                        ...e
                    }
                }
                logMLFeedbackEvent(e) {
                    let {
                        studySessionId: t,
                        questionSessionId: s,
                        mlFeature: a,
                        studiableContainerId: o,
                        studiableItemId: r,
                        feedbackQuestionType: i,
                        feedbackQuestion: l,
                        feedbackAnswer: d,
                        metadata: u
                    } = e;
                    const c = {
                        study_session_id: t,
                        question_session_id: s,
                        ml_feature: a,
                        ml_inference_id: null,
                        studiable_container_id: o,
                        studiable_item_id: r,
                        feedback_question_type: i,
                        feedback_question: l,
                        flagging_answer: null,
                        upvotes_answer: null,
                        contribution_answer: null,
                        metadata: u
                    };
                    switch (i) {
                        case n.ary.FLAGGING:
                            "string" == typeof d && (c.flagging_answer = String(d));
                            break;
                        case n.ary.UPVOTES:
                            "boolean" == typeof d && (c.upvotes_answer = Boolean(d));
                            break;
                        case n.ary.CONTRIBUTION:
                            "string" == typeof d && (c.contribution_answer = String(d));
                            break;
                        default:
                            return void x.Z.error("Unexpected MLFeedbackType " + l)
                    }
                    const p = this.assemblePayload(c);
                    (0, I.Z)("ml_feedback_events", p)
                }
            }
            var N = s("./app/j/utils/StudyEventLogger.ts");

            function w(e) {
                return (0, d.createReducer)(function(e) {
                    var t;
                    const s = new N.Z({
                        modeType: e.studyModeType,
                        selectedOnly: e.selectedOnly,
                        studyableId: e.studyable.id,
                        studyableType: e.studyableType,
                        embedType: O(e.isEmbedding, e.cardsOrigin),
                        funnelUUID: e.funnelUUID,
                        userId: null == A.default || null == (t = A.default.user) ? void 0 : t.id,
                        uid: null == A.default ? void 0 : A.default.uid
                    });
                    return {
                        mlFeedbackLogger: new C,
                        studyEventLogger: s,
                        questionEventLogger: s.getQuestionEventLogger()
                    }
                }(e), {})
            }

            function O(e, t) {
                if (e) return n.b_7.EXTERNAL;
                switch (t) {
                    case b.ou.SET_PAGE:
                        return n.b_7.INTERNAL;
                    case b.ou.NOTES_LANDING:
                        return n.b_7.INTERNAL_NOTES;
                    default:
                        return null
                }
            }
            var M = s("./app/j/study-modes/legacy-common/metering/actions.ts");
            const D = e => e,
                L = (e, t) => (0, i.ZP)(e, (e => {
                    e.meteringData = t.payload
                }));

            function P(e) {
                const t = {
                    [M.MF.SET_METERING_DATA]: L
                };
                return (0, d.createReducer)(D(e), t)
            }
            var R = s("./app/j/study-modes/legacy-common/metering/selectors.ts");

            function k(e) {
                return (0, d.createReducer)(function(e) {
                    return {
                        shouldShowStudyTopNav: e.shouldShowStudyTopNav,
                        shouldShowUnderstandingTask: e.shouldShowUnderstandingTask,
                        shouldShowTestToLearn: e.shouldShowTestToLearn
                    }
                }(e), {})
            }
            var U = s("./app/j/study-modes/cards/constants.ts"),
                W = s("./app/j/study-modes/legacy-common/misc/ads/actions.ts"),
                B = s("./app/j/utils/tamperProofNow.ts");
            const F = (e, t) => (0, i.ZP)(e, (e => {
                    e.lastActionTimestamp = (0, B.Z)()
                })),
                Z = (e, t) => (0, i.ZP)(e, (e => {
                    e.shouldShowNewStudyBreak = t.payload
                }));

            function G(e) {
                const t = {
                    [l.MF.SET_STUDY_STEP_AND_PROGRESS]: F,
                    [W.MF.SET_SHOW_NEW_STUDY_BREAK]: Z,
                    [W.MF.UPDATE_LAST_ACTION_TIMESTAMP]: F
                };
                return (0, d.createReducer)(function(e) {
                    var t;
                    return {
                        adsIds: e.adsIds,
                        cardsView: U.S.CARDS_VIEW,
                        isBrandedContentSet: null != (t = null == e ? void 0 : e.isBCSEnabled) && t,
                        lastActionTimestamp: null,
                        shouldShowNewStudyBreak: !1,
                        studyMode: e.studyMode
                    }
                }(e), t)
            }

            function H(e) {
                return (0, r.combineReducers)({
                    ads: G(e),
                    abTests: k(e)
                })
            }

            function V(e) {
                return (0, d.createReducer)(function(e) {
                    return {
                        daysSinceLastVisit: e.daysSinceLastVisit
                    }
                }(e), {})
            }
            var z = s("./app/j/study-modes/legacy-common/sessions/actions.ts");
            const Q = (e, t) => (0, i.ZP)(e, (e => {
                    e.sessionLuid = t.payload
                })),
                K = (e, t) => (0, i.ZP)(e, (e => {
                    t.payload.isStarredOnly ? e.initialSessions.starred = t.payload.session : e.initialSessions.unstarred = t.payload.session
                }));

            function q(e) {
                const t = {
                    [z.MF.SET_SESSION_LUID]: Q,
                    [z.MF.SET_INITIAL_SESSIONS_LUID]: K
                };
                return (0, d.createReducer)(function(e) {
                    return {
                        initialSessions: e.sessions,
                        personId: e.personId,
                        sessionLuid: null,
                        serverTimestamp: e.serverTimestamp
                    }
                }(e), t)
            }
            var Y = s("./app/j/study-modes/legacy-common/settings/actions.ts"),
                $ = s("./app/j/utils/isCookieSupportEnabled.ts");

            function X(e) {
                var t, s, n, a, o;
                return {
                    acceptsPartialAnswer: e.acceptsPartialAnswer,
                    advancedAudioSettings: e.advancedAudioSettings,
                    answerWith: e.answerWithSetting,
                    cardsShuffleSeed: null != (t = e.cardsShuffleSeed) ? t : null,
                    guidanceDisabled: null != (s = e.guidanceDisabled) && s,
                    isAudioOn: e.audioEnabledSetting,
                    locationQuestionTypes: e.locationQuestionTypes,
                    promptWith: e.promptWithSetting,
                    questionTypes: e.questionTypesSetting,
                    smartGrading: e.smartGradingSetting || null === e.smartGradingSetting,
                    sortingOn: null != (n = e.sortingOn) && n,
                    shuffle: null != (a = e.shuffle) && a,
                    studyPath: void 0 === e.studyPathSetting ? null : e.studyPathSetting,
                    studyPathGoal: void 0 === e.studyPathGoalSetting ? null : e.studyPathGoalSetting,
                    studyPathKnowledgeLevel: void 0 === e.studyPathKnowledgeLevelSetting ? null : e.studyPathKnowledgeLevelSetting,
                    studyStarredOnly: null != (o = e.selectedOnly) && o,
                    typoHelpGradingSetting: e.typoHelpGradingSetting || null === e.typoHelpGradingSetting,
                    writtenTypes: e.writtenTypesSetting
                }
            }

            function J(e) {
                var t, s;
                return {
                    adModalShownAt: (0, B.Z)(),
                    adModalTimesShown: 0,
                    canEditRichText: e.canEditRichText,
                    hiddenSettings: null != (t = e.hiddenSettings) ? t : [],
                    isAdsInCardsPreviewEnabled: e.isAdsInCardsPreviewEnabled,
                    isCookieSupportEnabled: (0, $.Z)(),
                    isEmbedding: e.isEmbedding,
                    isOptionsModalOpen: !1,
                    modePath: e.modePath,
                    personId: e.personId,
                    shouldShowAd: e.shouldShowAd,
                    shouldHideEmbedControl: e.shouldHideEmbedControl,
                    shouldShowQChatLink: null != (s = e.shouldShowQChatLink) && s,
                    starredModePath: e.starredModePath,
                    startTimestamp: e.userStudyable.startTimestamp,
                    studyModeType: e.studyModeType,
                    userStudyable: e.userStudyable
                }
            }
            const ee = (e, t) => (0, i.ZP)(e, (e => {
                    e.display = t.payload.display, e.preferences = t.payload.preferences
                })),
                te = (e, t) => (0, i.ZP)(e, (e => {
                    e.preferences = t.payload
                })),
                se = (e, t) => (0, i.ZP)(e, (e => {
                    e.display.isOptionsModalOpen = t.payload
                })),
                ne = (e, t) => (0, i.ZP)(e, (e => {
                    e.preferences.acceptsPartialAnswer = t.payload
                })),
                ae = (e, t) => (0, i.ZP)(e, (e => {
                    e.preferences.smartGrading = t.payload
                })),
                oe = (e, t) => (0, i.ZP)(e, (e => {
                    e.preferences.typoHelpGradingSetting = t.payload
                })),
                re = (e, t) => (0, i.ZP)(e, (e => {
                    e.display.userStudyable.startTimestamp = t.payload, e.display.startTimestamp = t.payload
                })),
                ie = (e, t) => (0, i.ZP)(e, (e => {
                    e.display.adModalShownAt = t.payload.adModalShownAt, e.display.adModalTimesShown = t.payload.adModalTimesShown
                }));

            function le(e) {
                const t = {
                    [Y.aI.CHANGE_PREFERENCE]: te,
                    [Y.aI.RESTART_USER_STUDYABLE]: re,
                    [Y.aI.SET_IS_OPTIONS_MODAL_OPEN]: se,
                    [Y.aI.SETUP_SETTINGS]: ee,
                    [Y.aI.UPDATE_ACCEPTS_PARTIAL_ANSWER]: ne,
                    [Y.aI.UPDATE_ACCEPTS_SMART_GRADING]: ae,
                    [Y.aI.UPDATE_TYPO_HELP_SETTING]: oe,
                    [Y.aI.UPDATE_AD_MODAL_STATE]: ie
                };
                return (0, d.createReducer)(function(e) {
                    return {
                        display: J(e),
                        preferences: X(e)
                    }
                }(e), t)
            }
            var de = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                ue = s("./node_modules/lodash/keyBy.js"),
                ce = s.n(ue),
                pe = (s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.includes.js"), s("./app/j/study-engine/utils.ts")),
                me = s("./app/j/study-modes/legacy-common/studiable-data/actions.ts");
            const ge = (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, i.ZP)(e, (e => {
                        e.starredStudiableItemIds.includes(s) || e.starredStudiableItemIds.push(s)
                    }))
                },
                he = (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, i.ZP)(e, (e => {
                        e.selectedTerms[s.termId] = s
                    }))
                },
                _e = (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, i.ZP)(e, (e => {
                        e.starredStudiableItemIds = e.starredStudiableItemIds.filter((e => e !== s))
                    }))
                },
                Se = (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, i.ZP)(e, (e => {
                        delete e.selectedTerms[s]
                    }))
                },
                Ee = (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, i.ZP)(e, (t => {
                        const n = e.studiableItems.findIndex((e => e.id === s.id)); - 1 !== n && (delete t.studiableItems[n], t.studiableItems[n] = s)
                    }))
                };

            function ye(e) {
                const t = {
                    [me.MF.ADD_STARRED_STUDIABLE_ITEM_ID]: ge,
                    [me.MF.ADD_STARRED_STUDIABLE_ITEM_ID_SUCCESS]: he,
                    [me.MF.REMOVE_STARRED_STUDIABLE_ITEM_ID]: _e,
                    [me.MF.REMOVE_STARRED_STUDIABLE_ITEM_ID_SUCCESS]: Se,
                    [me.MF.REPLACE_STUDIABLE_ITEM]: Ee
                };
                return (0, d.createReducer)(function(e) {
                    return {
                        ...e.studiableDocumentData,
                        accents: e.studiableAccents,
                        diagramImages: e.images,
                        diagramImageRefs: e.imageRefs,
                        editableStudiableItemIds: e.editableStudiableItemIds,
                        selectedTerms: ce()(e.selectedTerms, (e => {
                            let {
                                termId: t
                            } = e;
                            return t
                        })),
                        starredStudiableItemIds: [...new Set(e.selectedTerms.map((e => (0, pe.zn)(e.termId))))],
                        studiableContainer: e.studyable,
                        studiableContainerType: e.studyableType,
                        crossModeResetTimestamp: e.crossModeResetTimestamp,
                        progressBucketName: e.progressBucketName,
                        studySummaries: e.studySummaries
                    }
                }(e), t)
            }
            var fe = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                je = s("./app/j/tracking/BrazeHelper.ts");
            const Te = (e, t) => {
                var s;
                const o = (0, fe.Sd)(t),
                    r = (0, de.ez)(t),
                    i = (0, S.EY)(t),
                    l = (0, fe.uf)(t),
                    d = (0, fe.lb)(t),
                    u = (0, fe.aW)(t);
                let c = "";
                d !== u && (c = "en" === d ? u || "" : d || "");
                const p = null != (s = (0, R.VO)(t)) ? s : 0,
                    m = {
                        studiable_id: l,
                        studiable_language: c,
                        studiable_name: (0, fe.ZM)(t),
                        studiable_type: je.Sd(o),
                        study_step: i.type,
                        study_mode: je.EN(r),
                        ...r === n.StudyModeType.LEARNING_ASSISTANT && {
                            rounds_until_paywall: p > 0 ? p - 1 : p
                        }
                    };
                try {
                    je.BX(je.iv, e, m)
                } catch (g) {
                    (0, a.Z)("Error logging to Braze after the following studyMode: " + r, !1)(g)
                }
            };

            function Ae(e) {
                o.Z.registerReducer("studyModesCommon", (0, r.combineReducers)({
                    logging: w(e),
                    sessions: q(e),
                    settings: le(e),
                    studiableData: ye(e),
                    studyEngine: _(),
                    misc: H(e),
                    grading: T(e),
                    metering: P(e.metering),
                    onboarding: V(e)
                }))
            }
        },
        "./app/j/study-modes/legacy-common/logging/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $N: () => h,
                D5: () => g,
                F: () => m,
                d9: () => _,
                dc: () => u,
                pJ: () => p,
                zD: () => c
            });
            var n = s("./app/j/compatibility/logger/getLoggerConfig.ts"),
                a = s("./app/j/config/enums.ts"),
                o = s("./app/j/study-modes/legacy-common/logging/selectors.ts"),
                r = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                i = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                l = s("./app/j/utils/logNavigationEvent.ts"),
                d = s("./app/j/utils/StudyPageVisibilityTracker.ts");
            const u = e => {
                    let {
                        mlFeature: t,
                        feedbackQuestion: s,
                        feedbackQuestionType: n,
                        feedbackAnswer: a,
                        metadata: r,
                        studiableItemId: l
                    } = e;
                    return (e, d) => {
                        const u = d(),
                            c = (0, i.uf)(u),
                            p = (0, o.q0)(u),
                            m = (0, o.Fy)(u).getQuestionSessionId(),
                            g = (0, o.Hx)(u),
                            h = {
                                studySessionId: p,
                                questionSessionId: m,
                                mlFeature: t,
                                studiableContainerId: c,
                                studiableItemId: l,
                                feedbackQuestionType: n,
                                feedbackQuestion: s,
                                feedbackAnswer: a,
                                metadata: r
                            };
                        g.logMLFeedbackEvent(h)
                    }
                },
                c = (e, t) => (s, n) => {
                    const a = n();
                    (0, o.Fy)(a).logQuestionEvent(e, {
                        ...(0, o.cs)(a),
                        ...t
                    })
                },
                p = (e, t, s) => (n, a) => {
                    const i = a(),
                        l = (0, o.Lx)(i),
                        d = (0, r.zg)(i);
                    l.logStudyEvent(e, t, {
                        ...s,
                        selectedOnly: d
                    })
                },
                m = e => {
                    let {
                        action: t = a.$w5.CLICK,
                        additionalInfo: s,
                        clickCategory: n = a.Qje.BROWSE,
                        clickName: o,
                        screenName: r
                    } = e;
                    return e => {
                        (0, l.Z)(r, n, o, s, t)
                    }
                },
                g = (e, t) => (s, n) => {
                    const a = n();
                    (0, o.o2)(a).logMultipleChoiceOptionEvent(e, t)
                },
                h = (e, t, s) => (n, a) => {
                    const r = a();
                    (0, o.Uw)(r).logTextGradingEvent(e, t, s)
                },
                _ = () => (e, t) => {
                    const s = t(),
                        a = (0, o.Lx)(s);
                    new d.Z((function(e, t) {
                        void 0 === t && (t = {}), a.logStudyEvent(e, {
                            loggerConfig: (0, n.c)()
                        }, t)
                    }))
                }
        },
        "./app/j/study-modes/legacy-common/logging/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Fy: () => g,
                Hx: () => S,
                Lx: () => _,
                Qp: () => j,
                Uw: () => f,
                XU: () => h,
                cs: () => b,
                o2: () => y,
                q0: () => E
            });
            s("./node_modules/core-js/modules/es.json.stringify.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/legacyAssistant/types/QAssistantModeTypes.ts"),
                o = s("./node_modules/nullthrows/nullthrows.js"),
                r = s.n(o),
                i = s("./node_modules/reselect/lib/index.js"),
                l = s("./app/j/study-engine/types.ts"),
                d = s("./app/j/study-modes/legacy-common/engine/question/selectors.ts"),
                u = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                c = s("./app/j/study-modes/legacy-common/selectors.ts"),
                p = s("./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts");
            const m = (0, i.createSelector)(c.p, (e => e.logging)),
                g = (0, i.createSelector)(m, (e => e.questionEventLogger)),
                h = (0, i.createSelector)(g, (e => e.getQuestionSessionId())),
                _ = (0, i.createSelector)(m, (e => e.studyEventLogger)),
                S = (0, i.createSelector)(m, (e => e.mlFeedbackLogger)),
                E = (0, i.createSelector)(m, (e => e.studyEventLogger.getStudySessionId())),
                y = ((0, i.createSelector)(m, (e => e.studyEventLogger.funnelUUID)), (0, i.createSelector)(g, (e => e.getMultipleChoiceOptionLogger()))),
                f = (0, i.createSelector)(g, (e => e.getTextGradingEventLogger())),
                j = (0, i.createSelector)(_, (e => e.logStudyEvent)),
                T = e => {
                    switch (e) {
                        case l.mw.WRITTEN_QUESTION:
                            return n.oK4.TYPING;
                        case l.mw.SEPARATED_OPTION_MATCHING_QUESTION:
                            return n.oK4.MATCH;
                        case l.mw.MULTIPLE_CHOICE_QUESTION:
                            return n.oK4.MULTIPLE_CHOICE;
                        case l.mw.REVEAL_SELF_ASSESSMENT_QUESTION:
                            return n.oK4.SELF_ASSESSMENT;
                        case l.mw.SPELLING_QUESTION:
                        case l.mw.FILL_IN_THE_BLANK_QUESTION:
                            return n.oK4.TYPING;
                        default:
                            return null
                    }
                },
                A = e => {
                    switch (e) {
                        case l.mw.WRITTEN_QUESTION:
                            return (0, a.Q)().written;
                        case l.mw.SEPARATED_OPTION_MATCHING_QUESTION:
                            return (0, a.Q)().matching;
                        case l.mw.MULTIPLE_CHOICE_QUESTION:
                            return (0, a.Q)().multipleChoice;
                        case l.mw.TRUE_FALSE_QUESTION:
                            return (0, a.Q)().trueFalse;
                        case l.mw.REVEAL_SELF_ASSESSMENT_QUESTION:
                            return (0, a.Q)().revealSelfAssessment;
                        case l.mw.SPELLING_QUESTION:
                            return (0, a.Q)().spelling;
                        case l.mw.MIXED_OPTION_MATCHING_QUESTION:
                            return (0, a.Q)().mixedOptionMatching;
                        case l.mw.FILL_IN_THE_BLANK_QUESTION:
                            return (0, a.Q)().fillInTheBlank;
                        default:
                            return null
                    }
                },
                b = (0, i.createSelector)([d.yy, d.fg, d.P, d.Rf, d.$f, d.g3, d.Ko, d.fR, d.Zf, d.RU, u.wG], ((e, t, s, a, o, i, l, d, u, c, m) => ({
                    promptTermId: (0, p.K)(s),
                    prompt_side: (0, p.Q)(r()(t)),
                    answer_side: (0, p.Q)(r()(e)),
                    answer_type: r()(T(a)),
                    participation: n.qhD.INDIVIDUAL,
                    question_type: A(a),
                    question_score: i,
                    question_scoring_model: l,
                    question_scoring_model_version: d,
                    priority_score: u,
                    priority_method: c,
                    questionContent: JSON.stringify(m),
                    ...null !== o && {
                        question_source: JSON.stringify(o)
                    }
                })))
        },
        "./app/j/study-modes/legacy-common/metering/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                EF: () => c,
                MF: () => d
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/study-modes/legacy-common/metering/selectors.ts"),
                o = s("./app/j/study-modes/legacy-common/metering/utils.ts"),
                r = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                i = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js"),
                l = s("./app/j/utils/metering/syncMeteringUtils.ts");
            let d = function(e) {
                return e.SET_METERING_DATA = "METERING.SET_METERING_DATA", e
            }({});
            const u = e => (0, i.action)(d.SET_METERING_DATA, e),
                c = e => {
                    let {
                        meteringData: t,
                        meteredEventType: s = n.jrE.LEARN_CHECKPOINT,
                        shouldMergeMeteringDataForRVA: i = !1,
                        skipLearnSaveMeteredEvent: d = !1
                    } = e;
                    return async (e, n) => {
                        const c = n(),
                            p = (0, r.uf)(c);
                        await (0, l.j)({
                            dispatchSetMeteringData: t => {
                                e(u(t))
                            },
                            getStoreMeteringData: () => (0, a.aN)(c),
                            meteredEventType: s,
                            meteringData: t,
                            saveMeteredEvent: o.$A,
                            shouldMergeMeteringDataForRVA: i,
                            skipSaveMeteredEvent: d,
                            skipUpdateMeteringMetaFromResponse: !1,
                            studiableContainerId: p
                        })
                    }
                }
        },
        "./app/j/study-modes/legacy-common/metering/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ai: () => y,
                Pi: () => E,
                VO: () => h,
                Vh: () => j,
                aN: () => d,
                dV: () => c,
                iU: () => S,
                jM: () => g,
                kn: () => f,
                qR: () => _
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.reduce.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./node_modules/reselect/lib/index.js"),
                o = s("./app/j/set/enums.ts"),
                r = s("./app/j/study-modes/legacy-common/metering/utils.ts"),
                i = s("./app/j/study-modes/legacy-common/selectors.ts");
            const l = (0, a.createSelector)(i.p, (e => e.metering)),
                d = (0, a.createSelector)(l, (e => {
                    var t;
                    return null != (t = e.meteringData) ? t : {}
                })),
                u = new Set([n.jrE.EXPLANATION_VIEW, n.jrE.LEARN_CHECKPOINT, n.jrE.TEST_SUBMISSION]),
                c = (0, a.createSelector)(d, (e => Object.keys(e).filter((e => u.has(parseInt(e, 10)))).reduce(((t, s) => (t[s] = e[s], t)), {}))),
                p = (0, a.createSelector)(d, (e => {
                    var t;
                    return null != (t = e[n.jrE.LEARN_CHECKPOINT]) ? t : null
                })),
                m = (0, a.createSelector)(d, (e => {
                    var t;
                    return null != (t = e[n.jrE.TEST_SUBMISSION]) ? t : null
                })),
                g = (0, a.createSelector)(p, (e => (0, r.XJ)(e))),
                h = ((0, a.createSelector)(m, (e => (0, r.XJ)(e))), (0, a.createSelector)(p, (e => {
                    if (!e) return null;
                    const {
                        numEvents: t,
                        threshold: s
                    } = e;
                    return s - t
                }))),
                _ = (0, a.createSelector)(h, (e => null === e ? null : e > 0)),
                S = (0, a.createSelector)(p, (e => {
                    if (!e) return null;
                    const {
                        threshold: t
                    } = e;
                    return t
                })),
                E = ((0, a.createSelector)(m, (e => {
                    if (!e) return null;
                    const {
                        numEvents: t,
                        threshold: s
                    } = e;
                    return s - t
                })), (0, a.createSelector)(p, (e => {
                    if (!e) return null;
                    const {
                        numEvents: t
                    } = e;
                    return t
                }))),
                y = (0, a.createSelector)(p, (e => {
                    if (!e) return null;
                    const {
                        canShowRewardAd: t
                    } = e;
                    return null != t && t
                })),
                f = (0, a.createSelector)(l, (e => {
                    var t;
                    return null != (t = e.isSignupWallUnlocked) && t
                })),
                j = (0, a.createSelector)(l, (e => {
                    var t;
                    return null != (t = e.dynamicPaywallToastExperience) ? t : o.qu.ALL_TOASTS
                }))
        },
        "./app/j/study-modes/legacy-common/metering/utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $A: () => r,
                XJ: () => o
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/compatibility/fetch/browserFetch.ts"),
                a = s("./app/j/global/Rollbar.ts");
            const o = e => !!e && e.numEvents >= e.threshold,
                r = async e => {
                    let {
                        eventType: t,
                        studiableContainerId: s,
                        eventCount: o
                    } = e;
                    const r = {
                        eventType: t,
                        resourceId: s
                    };
                    void 0 !== o && (r.eventCount = o);
                    try {
                        var i;
                        const e = await (0, n.cZ)("/webapi/3.4/metering/event", {
                            body: r
                        });
                        return null == e || null == (i = e.body) || null == (i = i.responses) ? void 0 : i[0]
                    } catch (l) {
                        return void a.Z.error("Failed to update metering event", l)
                    }
                }
        },
        "./app/j/study-modes/legacy-common/misc/ab_tests/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Vv: () => i,
                rU: () => r
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/legacy-common/misc/selectors.ts");
            const o = (0, n.createSelector)(a.n, (e => e.abTests)),
                r = (0, n.createSelector)(o, (e => e.shouldShowStudyTopNav)),
                i = ((0, n.createSelector)(o, (e => {
                    var t;
                    return null != (t = e.shouldShowUnderstandingTask) && t
                })), (0, n.createSelector)(o, (e => {
                    var t;
                    return null != (t = e.shouldShowTestToLearn) && t
                })))
        },
        "./app/j/study-modes/legacy-common/misc/ads/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                MF: () => a,
                lM: () => o,
                yf: () => r
            });
            var n = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
            let a = function(e) {
                return e.SET_SHOW_NEW_STUDY_BREAK = "SET_SHOW_NEW_STUDY_BREAK", e.SET_BIDS_ARE_RETURNED = "SET_BIDS_ARE_RETURNED", e.UPDATE_LAST_ACTION_TIMESTAMP = "UPDATE_LAST_ACTION_TIMESTAMP", e
            }({});
            const o = e => (0, n.action)(a.SET_SHOW_NEW_STUDY_BREAK, e),
                r = () => (0, n.action)(a.SET_SHOW_NEW_STUDY_BREAK, !1)
        },
        "./app/j/study-modes/legacy-common/misc/ads/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                SV: () => d,
                Xb: () => l,
                cS: () => c,
                nm: () => u
            });
            var n = s("./node_modules/nullthrows/nullthrows.js"),
                a = s.n(n),
                o = s("./node_modules/reselect/lib/index.js"),
                r = s("./app/j/study-modes/legacy-common/misc/selectors.ts");
            const i = (0, o.createSelector)(r.n, (e => e.ads)),
                l = (0, o.createSelector)(i, (e => e.lastActionTimestamp)),
                d = (0, o.createSelector)(i, (e => a()(e.adsIds, "Please include ad units for your study modes in entry.ts file"))),
                u = (0, o.createSelector)(i, (e => e.isBrandedContentSet)),
                c = (0, o.createSelector)(i, (e => e.shouldShowNewStudyBreak))
        },
        "./app/j/study-modes/legacy-common/misc/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                n: () => o
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/legacy-common/selectors.ts");
            const o = (0, n.createSelector)(a.p, (e => e.misc))
        },
        "./app/j/study-modes/legacy-common/options/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => n
            });
            let n = function(e) {
                return e.AUDIO = "audio", e.MULTIPLE_ANSWERS = "multipleAnswers", e.SORTING_ON = "sortingOn", e.STARRED_ONLY = "starredOnly", e.TYPO_HELP = "typoHelp", e
            }({})
        },
        "./app/j/study-modes/legacy-common/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                p: () => n
            });
            const n = e => e.get("studyModesCommon")
        },
        "./app/j/study-modes/legacy-common/sessions/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ch: () => S,
                KN: () => y,
                K_: () => h,
                MF: () => g,
                TS: () => j,
                T_: () => f,
                ZN: () => T,
                kf: () => E,
                mc: () => A
            });
            s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/core/getGenericErrorWithToastCallback.ts"),
                o = s("./app/j/global/Quizlet.ts"),
                r = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                i = s("./app/j/study-modes/legacy-common/sessions/selectors.ts"),
                l = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                d = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                u = s("./app/j/syncers/SessionSyncer.ts"),
                c = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js"),
                p = s("./app/j/utils/tamperProofNow.ts"),
                m = s("./app/j/utils/unix-timestamp.ts");
            let g = function(e) {
                return e.SET_SESSION_LUID = "STUDY_MODES_COMMON.SESSIONS.SET_SESSION_LUID", e.SET_INITIAL_SESSIONS_LUID = "STUDY_MODES_COMMON.SESSIONS.SET_INITIAL_SESSIONS_LUID", e
            }({});
            const h = (e, t) => {
                    let s;
                    const a = (0, l.ez)(e);
                    if (void 0 !== t && a === n.StudyModeType.FLASHCARDS) {
                        const n = (0, i.b7)(e);
                        s = (0, p.Z)() / 1e3 - n + t.get("score")
                    } else s = a === n.StudyModeType.LEARNING_ASSISTANT ? (0, r.C9)(e) : (0, r.zt)(e).studyProgress;
                    return Math.round(s)
                },
                _ = (e, t, s) => {
                    const n = h(s, t);
                    if (0 === n || t.get("score") === n) return;
                    !(0, l.Gw)(s).display.isCookieSupportEnabled || !o.default.user && (0, l.QE)(s) || ((e, t, s, n) => {
                        const a = (0, i.b7)(n);
                        t.set("score", s), t.set("lastModified", a), u.Z.save(e, t.properties)
                    })(e, t, n, s)
                },
                S = e => (0, c.action)(g.SET_SESSION_LUID, e),
                E = e => (t, s) => {
                    var n;
                    t((n = {
                        session: e,
                        isStarredOnly: (0, l.zg)(s())
                    }, (0, c.action)(g.SET_INITIAL_SESSIONS_LUID, n)))
                },
                y = e => {
                    let {
                        session: t
                    } = e;
                    return async (e, s) => {
                        const n = s();
                        let a;
                        a = t || {
                            personId: Number((0, i.gP)(n)),
                            selectedOnly: (0, l.zg)(n),
                            type: (0, l.ez)(n),
                            itemType: (0, d.Sd)(n),
                            itemId: (0, d.uf)(n),
                            timestamp: (0, m.S0)()
                        };
                        if (!(0, l.Gw)(n).display.isCookieSupportEnabled || !o.default.user && (0, l.QE)(n)) return;
                        const r = u.Z.add(a);
                        e(S(r)), await u.Z.save(r, a).then((s => {
                            let [n, o] = s;
                            if (!t && o) {
                                const t = {
                                    ...a,
                                    id: o.getProperties().id
                                };
                                e(E(t))
                            }
                        }))
                    }
                },
                f = () => async (e, t) => {
                    const s = t();
                    (0, i.a5)(s) || await e(y({
                        session: (0, i.sl)(s)
                    }))
                }, j = function(e) {
                    return void 0 === e && (e = {}), (t, s) => {
                        const n = s(),
                            r = (0, i.Ug)(n);
                        !(0, l.Gw)(n).display.isCookieSupportEnabled || !o.default.user && (0, l.QE)(n) || u.Z.save(r, {
                            endedTimestamp: (0, m.S0)(),
                            ...e
                        }).catch((0, a.Z)("Error updating session", !1))
                    }
                }, T = () => (e, t) => {
                    const s = t(),
                        n = h(s),
                        a = (0, l.Gw)(s);
                    let r;
                    if ((0, i.Ug)(s)) r = (0, i.Ug)(s);
                    else {
                        if (!(0, i.sl)(s)) return;
                        r = u.Z.add((0, i.sl)(s))
                    }!a.display.isCookieSupportEnabled || !o.default.user && (0, l.QE)(s) || u.Z.save(r, {
                        score: n,
                        endedTimestamp: (0, p.Z)()
                    })
                }, A = () => (e, t) => {
                    const s = t(),
                        n = (0, i.Ug)(s);
                    if (!n) return null;
                    const a = u.Z.getModel(n);
                    if (!a) return null;
                    _(n, a, s)
                }
        },
        "./app/j/study-modes/legacy-common/sessions/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Gg: () => _,
                Ug: () => g,
                a5: () => h,
                b7: () => m,
                gP: () => p,
                sl: () => c
            });
            var n = s("./node_modules/nullthrows/nullthrows.js"),
                a = s.n(n),
                o = s("./node_modules/reselect/lib/index.js"),
                r = s("./app/j/study-modes/legacy-common/selectors.ts"),
                i = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                l = s("./app/j/syncers/SessionSyncer.ts");
            const d = (0, o.createSelector)(r.p, (e => e.sessions)),
                u = (0, o.createSelector)(d, (e => e.initialSessions)),
                c = (0, o.createSelector)([u, i.zg], ((e, t) => t ? e.starred : e.unstarred)),
                p = (0, o.createSelector)(d, (e => e.personId)),
                m = (0, o.createSelector)(d, (e => e.serverTimestamp)),
                g = (0, o.createSelector)(d, (e => e.sessionLuid)),
                h = e => {
                    const t = g(e);
                    return t ? l.Z.getModel(t).getProperties() : null
                },
                _ = e => {
                    const t = g(e),
                        s = a()(t, "You must initialize a session before selecting it");
                    return l.Z.getModel(s).getProperties()
                }
        },
        "./app/j/study-modes/legacy-common/settings/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                D5: () => S,
                W6: () => T,
                aI: () => g,
                bL: () => h,
                ex: () => y,
                hv: () => f,
                j$: () => A,
                oE: () => _,
                t0: () => E
            });
            var n = s("./node_modules/lodash/merge.js"),
                a = s.n(n),
                o = s("./app/j/global/Quizlet.ts"),
                r = s("./node_modules/nullthrows/nullthrows.js"),
                i = s.n(r),
                l = s("./app/j/study-modes/legacy-common/engine/actions.ts"),
                d = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                u = s("./app/j/study-modes/legacy-common/settings/utils/syncPreferenceSettings.ts"),
                c = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                p = s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js"),
                m = s("./app/j/utils/tamperProofNow.ts");
            let g = function(e) {
                return e.SET_IS_OPTIONS_MODAL_OPEN = "STUDY_MODES_COMMON.SETTINGS.SET_IS_OPTIONS_MODAL_OPEN", e.CHANGE_PREFERENCE = "STUDY_MODES_COMMON.SETTINGS.CHANGE_PREFERENCE", e.RESTART_USER_STUDYABLE = "STUDY_MODES_COMMON.SETTINGS.RESTART_USER_STUDYABLE", e.SETUP_SETTINGS = "STUDY_MODES_COMMON.SETTINGS.SETUP_SETTINGS", e.UPDATE_ACCEPTS_PARTIAL_ANSWER = "STUDY_MODES_COMMON.SETTINGS.UPDATE_ACCEPTS_PARTIAL_ANSWER", e.UPDATE_ACCEPTS_SMART_GRADING = "STUDY_MODES_COMMON.SETTINGS.UPDATE_ACCEPTS_SMART_GRADING", e.UPDATE_TYPO_HELP_SETTING = "STUDY_MODES_COMMON.SETTINGS.UPDATE_TYPO_HELP_SETTING", e.UPDATE_AD_MODAL_STATE = "STUDY_MODES_COMMON.SETTINGS.UPDATE_AD_MODAL_STATE", e
            }({});
            const h = e => (0, p.action)(g.SET_IS_OPTIONS_MODAL_OPEN, e),
                _ = e => (0, p.action)(g.RESTART_USER_STUDYABLE, e),
                S = e => (t, s) => {
                    const n = s(),
                        o = (0, d.Gw)(n),
                        r = {
                            ...o,
                            preferences: a()({}, o.preferences, e)
                        };
                    var i;
                    t((i = r, (0, p.action)(g.SETUP_SETTINGS, i)))
                },
                E = () => (e, t) => {
                    const s = (0, d.nI)(t());
                    var n;
                    e((n = {
                        adModalShownAt: (0, m.Z)(),
                        adModalTimesShown: s.adModalTimesShown + 1
                    }, (0, p.action)(g.UPDATE_AD_MODAL_STATE, n)))
                };
            const y = e => (t, s) => {
                    const n = s(),
                        a = (0, d.Iz)(n),
                        r = function(e) {
                            const t = i()(e.questionTypes),
                                s = {
                                    ...t,
                                    matching: !1,
                                    multipleChoiceWithNoneOption: !1,
                                    copyAnswer: t.written
                                };
                            return {
                                ...e,
                                questionTypes: s
                            }
                        }(e);
                    var l;
                    t((l = r, (0, p.action)(g.CHANGE_PREFERENCE, l))),
                        function(e, t, s) {
                            if (e.studyStarredOnly !== t.studyStarredOnly) {
                                const e = (0, d.$2)(s),
                                    n = (0, d.LP)(s),
                                    a = t.studyStarredOnly ? n : e;
                                window.history.pushState({}, "", a)
                            }
                        }(a, r, n);
                    !(0, d.Gw)(s()).display.isCookieSupportEnabled || !o.default.user && (0, d.QE)(n) || (0, u.ZP)(a, r, {
                        personId: (0, d.gP)(n),
                        studyableId: (0, c.uf)(n),
                        studyableType: (0, c.Sd)(n)
                    }, (0, d.ez)(n))
                },
                f = e => (t, s) => {
                    const n = s(),
                        a = (0, d.Iz)(n);
                    t(y({
                        ...a,
                        studyStarredOnly: e
                    }))
                },
                j = e => (t, s) => {
                    t((e => (0, p.action)(g.UPDATE_ACCEPTS_PARTIAL_ANSWER, e))(e));
                    const n = s(),
                        a = (0, d.gP)(n),
                        o = (0, c.uf)(n),
                        r = (0, c.Sd)(n);
                    (0, u.tA)(e, a, o, r)
                },
                T = e => (t, s) => {
                    t(j(e));
                    const n = (0, d.Id)(s()),
                        a = (0, d.qg)(s());
                    t((0, l.DQ)({
                        acceptsPartialAnswer: e,
                        acceptsAnswersWithTypos: n,
                        acceptsSmartGrading: a
                    }))
                },
                A = e => (t, s) => {
                    var n, a;
                    t((0, l.DQ)({
                        acceptsPartialAnswer: null != (n = (0, d.R9)(s())) && n,
                        acceptsAnswersWithTypos: e,
                        acceptsSmartGrading: null != (a = (0, d.qg)(s())) && a
                    }))
                }
        },
        "./app/j/study-modes/legacy-common/settings/selectors/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $2: () => m,
                Aq: () => P,
                Cr: () => h,
                FE: () => d,
                FZ: () => L,
                G$: () => f,
                Gw: () => i,
                IR: () => j,
                Id: () => M,
                Iz: () => T,
                LP: () => E,
                Lf: () => p,
                P_: () => b,
                QE: () => c,
                R9: () => A,
                SN: () => S,
                V2: () => _,
                Xz: () => D,
                Yo: () => k,
                ZB: () => u,
                b: () => R,
                e: () => C,
                ez: () => y,
                gP: () => g,
                iv: () => N,
                nI: () => l,
                o3: () => x,
                pE: () => I,
                qg: () => O,
                zK: () => v,
                zg: () => w
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./node_modules/reselect/lib/index.js"),
                o = s("./app/j/study-modes/legacy-common/grading/selectors.ts"),
                r = s("./app/j/study-modes/legacy-common/selectors.ts");
            const i = (0, a.createSelector)(r.p, (e => e.settings)),
                l = (0, a.createSelector)(i, (e => e.display)),
                d = (0, a.createSelector)(l, (e => e.studyModeType === n.StudyModeType.TEST)),
                u = (0, a.createSelector)(l, (e => e.hiddenSettings)),
                c = ((0, a.createSelector)(l, (e => e.isCookieSupportEnabled)), (0, a.createSelector)(l, (e => e.isEmbedding))),
                p = (0, a.createSelector)(l, (e => e.isOptionsModalOpen)),
                m = (0, a.createSelector)(l, (e => e.modePath)),
                g = ((0, a.createSelector)(l, (e => e.canEditRichText)), (0, a.createSelector)(l, (e => e.personId))),
                h = (0, a.createSelector)(l, (e => e.shouldShowAd)),
                _ = (0, a.createSelector)(l, (e => e.shouldHideEmbedControl)),
                S = (0, a.createSelector)(l, (e => e.startTimestamp)),
                E = (0, a.createSelector)(l, (e => e.starredModePath)),
                y = (0, a.createSelector)(l, (e => e.studyModeType)),
                f = (0, a.createSelector)(l, (e => e.userStudyable)),
                j = (0, a.createSelector)(l, (e => {
                    var t;
                    return null != (t = e.shouldShowQChatLink) && t
                })),
                T = (0, a.createSelector)(i, (e => e.preferences)),
                A = (0, a.createSelector)(T, (e => e.acceptsPartialAnswer)),
                b = (0, a.createSelector)(A, (e => null !== e)),
                x = (0, a.createSelector)(T, (e => e.advancedAudioSettings)),
                I = (0, a.createSelector)(T, (e => {
                    const {
                        answerWith: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended answerWith setting");
                    return e.answerWith
                })),
                v = (0, a.createSelector)(T, (e => e.isAudioOn)),
                C = ((0, a.createSelector)(T, (e => e.cardsShuffleSeed)), (0, a.createSelector)(l, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.isAdsInCardsPreviewEnabled) && t
                })), (0, a.createSelector)(T, (e => e.sortingOn)), (0, a.createSelector)(T, (e => e.locationQuestionTypes)), (0, a.createSelector)(T, (e => {
                    const {
                        promptWith: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended promptWith setting");
                    return e.promptWith
                }))),
                N = (0, a.createSelector)(T, (e => {
                    const {
                        questionTypes: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended questionTypes setting");
                    return e.questionTypes
                })),
                w = (0, a.createSelector)(T, (e => e.studyStarredOnly)),
                O = ((0, a.createSelector)(T, (e => {
                    const {
                        writtenTypes: t
                    } = e;
                    if (!t) throw new Error("You must setup settings with recommended writtenTypes setting");
                    return e.writtenTypes
                })), (0, a.createSelector)([T, o.lc], ((e, t) => e.smartGrading && t))),
                M = (0, a.createSelector)([T, o.lc], ((e, t) => e.smartGrading && t || e.typoHelpGradingSetting)),
                D = (0, a.createSelector)(T, (e => e.typoHelpGradingSetting)),
                L = (0, a.createSelector)(T, (e => e.studyPath)),
                P = (0, a.createSelector)(T, (e => e.studyPathGoal)),
                R = (0, a.createSelector)(T, (e => e.studyPathKnowledgeLevel)),
                k = (0, a.createSelector)(T, (e => e.guidanceDisabled));
            (0, a.createSelector)([A, D, O], ((e, t, s) => ({
                acceptsPartialAnswer: null != e && e,
                acceptsAnswersWithTypos: t,
                acceptsSmartGrading: null != s && s
            })))
        },
        "./app/j/study-modes/legacy-common/settings/utils/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                HU: () => p,
                TR: () => i,
                gQ: () => m,
                jo: () => c,
                ov: () => l
            });
            s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/core-js/modules/es.array.includes.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/config/study-setting-metadata.ts"),
                o = s("./app/j/legacyAssistant/types/QAssistantModeTypes.ts");
            const r = (e, t) => Object.keys(t).reduce(((s, n) => (e[n] && s.push(t[n]), s)), []),
                i = e => null === e ? [] : r(e, {
                    definition: n.dU_.DEFINITION,
                    term: n.dU_.WORD,
                    location: n.dU_.LOCATION
                }),
                l = (e, t, s, a, l) => {
                    return {
                        enabledQuestionTypes: (u = e, null === u ? [] : r(u, {
                            copyAnswer: (0, o.Q)().copyAnswer,
                            fillInTheBlank: (0, o.Q)().fillInTheBlank,
                            matching: (0, o.Q)().matching,
                            multipleChoice: (0, o.Q)().multipleChoice,
                            multipleChoiceWithNoneOption: (0, o.Q)().multipleChoiceWithNoneOption,
                            revealSelfAssessment: (0, o.Q)().revealSelfAssessment,
                            written: (0, o.Q)().written,
                            spelling: (0, o.Q)().spelling
                        })),
                        enabledPromptSides: i(t),
                        enabledAnswerSides: i(s),
                        enabledWrittenAnswerSides: (d = a, null === d ? [] : r(d, {
                            definition: n.dU_.DEFINITION,
                            term: n.dU_.WORD
                        })),
                        enabledLocationQuestionTypes: l
                    };
                    var d, u
                },
                d = e => {
                    const {
                        bitValues: t
                    } = a.default.ASSISTANT_MODE_QUESTION_TYPES;
                    return {
                        copyAnswer: e.includes(t.copyAnswer),
                        fillInTheBlank: e.includes(t.fillInTheBlank),
                        matching: e.includes(t.matching),
                        multipleChoice: e.includes(t.multipleChoice),
                        multipleChoiceWithNoneOption: e.includes(t.multipleChoiceWithNoneOption),
                        revealSelfAssessment: e.includes(t.revealSelfAssessment),
                        written: e.includes(t.written),
                        spelling: e.includes(t.spelling)
                    }
                },
                u = e => ({
                    definition: e.includes(n.dU_.DEFINITION),
                    term: e.includes(n.dU_.WORD),
                    location: e.includes(n.dU_.LOCATION)
                }),
                c = e => {
                    return {
                        answerWith: u(e.enabledAnswerSides),
                        locationQuestionTypes: e.enabledLocationQuestionTypes,
                        promptWith: u(e.enabledPromptSides),
                        questionTypes: d(e.enabledQuestionTypes),
                        writtenTypes: (t = e.enabledWrittenAnswerSides, {
                            definition: t.includes(n.dU_.DEFINITION),
                            term: t.includes(n.dU_.WORD)
                        })
                    };
                    var t
                };

            function p(e, t) {
                return s = e, n = t, Object.keys(n).reduce(((e, t) => {
                    if ("locationQuestionTypes" === t) return e;
                    const a = n[t];
                    return null == a || a.length < 1 ? e[t] = s[t] : e[t] = a, e
                }), {});
                var s, n
            }

            function m(e, t, s) {
                return Object.keys(e).reduce(((n, a) => {
                    const o = t[a],
                        r = s && "questionTypes" === a;
                    return null == o || o.length < 1 || r ? n[a] = e[a] : n[a] = o, n
                }), {})
            }
        },
        "./app/j/study-modes/legacy-common/settings/utils/syncPreferenceSettings.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                ZP: () => y,
                Ex: () => g,
                tA: () => S
            });
            var n = s("./node_modules/lodash/isEqual.js"),
                a = s.n(n),
                o = s("./node_modules/lodash/flatten.js"),
                r = s.n(o),
                i = (s("./node_modules/core-js/modules/es.array.reduce.js"), s("./app/j/config/enums.ts")),
                l = s("./app/j/legacyAssistant/types/QAssistantModeTypes.ts");
            var d = s("./app/j/syncers/StudySettingSyncer.ts"),
                u = s("./app/j/utils/ensureArray.ts"),
                c = s("./app/j/utils/log-page-action.ts"),
                p = s("./app/j/utils/StudySettingEncodingHelper.ts");

            function m(e) {
                switch (e) {
                    case "definition":
                        return i.TermSide.DEFINITION;
                    case "term":
                    case "word":
                        return i.TermSide.WORD;
                    case "location":
                        return i.TermSide.LOCATION;
                    default:
                        return i.TermSide.UNKNOWN
                }
            }

            function g(e, t) {
                return Object.keys(t).filter((s => !a()(t[s], e[s]))).reduce(((e, s) => (e[s] = t[s], e)), {})
            }

            function h(e) {
                if ("boolean" == typeof e || "number" == typeof e) throw new Error("Cannot treat boolean as an immutable Map");
                return e
            }

            function _(e) {
                return (0, p.S5)(Object.keys(e).filter((t => !!e[t])).map(m).filter((e => e !== i.TermSide.UNKNOWN)))
            }

            function S(e, t, s, n) {
                const a = i.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS,
                    o = e ? 1 : 0;
                d.Z.addAndSave({
                    personId: t,
                    settingType: a,
                    settingValue: o,
                    studyableId: s,
                    studyableType: n
                })
            }

            function E(e, t, s, n) {
                switch (void 0 === n && (n = !1), t) {
                    case "isAudioOn":
                        return e === i.StudyModeType.SPELLER ? {
                            settingType: i.Std.ASSISTANT_SPELL_MODE_AUDIO_ENABLED,
                            settingValue: !!s
                        } : {
                            settingType: i.Std.TAP_TO_PLAY_AUDIO,
                            settingValue: !!s
                        };
                    case "promptWith": {
                        const t = function(e) {
                            switch (e) {
                                case i.StudyModeType.LEARNING_ASSISTANT:
                                    return i.Std.PROMPT_TERM_SIDES;
                                case i.StudyModeType.FLASHCARDS:
                                    return i.Std.CARDS_PROMPT_SIDES;
                                case i.StudyModeType.WRITE:
                                    return i.Std.WRITE_PROMPT_SIDES;
                                case i.StudyModeType.SPELLER:
                                default:
                                    return null
                            }
                        }(e);
                        return t ? {
                            settingType: t,
                            settingValue: _(h(s))
                        } : []
                    }
                    case "answerWith": {
                        const t = function(e) {
                            switch (e) {
                                case i.StudyModeType.LEARNING_ASSISTANT:
                                    return i.Std.ANSWER_TERM_SIDES;
                                case i.StudyModeType.WRITE:
                                    return i.Std.WRITE_ANSWER_SIDES;
                                case i.StudyModeType.FLASHCARDS:
                                    return i.Std.CARDS_ANSWER_SIDES;
                                case i.StudyModeType.SPELLER:
                                    return i.Std.SPELL_ANSWER_SIDES;
                                default:
                                    throw new Error("All study modes should contain answer with study setting type")
                            }
                        }(e);
                        return t ? {
                            settingType: t,
                            settingValue: _(h(s))
                        } : []
                    }
                    case "questionTypes": {
                        if (e !== i.StudyModeType.LEARNING_ASSISTANT) return [];
                        const t = Object.keys(h(s)).filter((e => !!s[e])).map((e => (0, l.Q)()[e] || 0));
                        return {
                            settingType: i.Std.ASSISTANT_MODE_QUESTION_TYPES,
                            settingValue: t.reduce(((e, t) => e | t)),
                            ...n && {
                                settingValueRaw: t
                            }
                        }
                    }
                    case "writtenTypes":
                        return [{
                            settingType: i.Std.ASSISTANT_MODE_WRITTEN_DEFINITION_SIDE,
                            settingValue: !!h(s).term
                        }, {
                            settingType: i.Std.ASSISTANT_MODE_WRITTEN_WORD_SIDE,
                            settingValue: !!h(s).definition
                        }];
                    case "advancedAudioSettings":
                        return [{
                            settingType: i.Std.ASSISTANT_MODE_WORD_AUDIO_ENABLED,
                            settingValue: !!h(s).wordEnabled
                        }, {
                            settingType: i.Std.ASSISTANT_MODE_DEFINITION_AUDIO_ENABLED,
                            settingValue: !!h(s).definitionEnabled
                        }, {
                            settingType: i.Std.ASSISTANT_MODE_SLOW_WORD_AUDIO,
                            settingValue: !!h(s).slowWordEnabled
                        }, {
                            settingType: i.Std.ASSISTANT_MODE_SLOW_DEFINITION_AUDIO,
                            settingValue: !!h(s).slowDefinitionEnabled
                        }];
                    case "acceptsPartialAnswer":
                        return {
                            settingType: i.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS, settingValue: !!s
                        };
                    case "typoHelpGradingSetting":
                        return {
                            settingType: i.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS, settingValue: !!s
                        };
                    case "smartGrading":
                        return {
                            settingType: i.Std.SMART_GRADING, settingValue: !!s
                        };
                    case "studyPath":
                        return {
                            settingType: i.Std.STUDY_PATH, settingValue: Number(s)
                        };
                    case "guidanceDisabled":
                        return {
                            settingType: i.Std.GUIDANCE_DISABLED, settingValue: !!s
                        };
                    case "sortingOn":
                        return {
                            settingType: i.Std.CARDS_SORTING_ON, settingValue: !!s
                        };
                    case "cardsShuffleSeed":
                        return {
                            settingType: i.Std.CARDS_SHUFFLE_RANDOM_SEED, settingValue: Number(s)
                        };
                    case "studyStarredOnly":
                        return e === i.StudyModeType.FLASHCARDS ? {
                            settingType: i.Std.CARDS_SELECTED_ONLY,
                            settingValue: !!s
                        } : [];
                    case "shuffle":
                        return {
                            settingType: i.Std.SHUFFLE, settingValue: !!s
                        };
                    default:
                        return []
                }
            }

            function y(e, t, s, n) {
                const a = r()(Object.keys(g(e, t)).map((e => {
                    const a = E(n, e, t[e]),
                        o = E(n, e, t[e], !0);
                    return (0, c.Z)("study_options_setting_changed", o), (0, u.Z)(a).map((e => ({
                        ...s,
                        ...e
                    })))
                })));
                a.length && d.Z.bulkAddAndSave(a)
            }
        },
        "./app/j/study-modes/legacy-common/studiable-data/actions.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Dk: () => u,
                MF: () => d,
                lr: () => c
            });
            s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/global/Rollbar.ts"),
                o = (s("./node_modules/nullthrows/nullthrows.js"), s("./app/j/studiable-data/utils.ts"), s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts")),
                r = s("./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts"),
                i = s("./app/j/syncers/SelectedTermSyncer.ts"),
                l = (s("./app/j/syncers/TermSyncer.ts"), s("./node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js"));
            let d = function(e) {
                return e.ADD_STARRED_STUDIABLE_ITEM_ID = "STUDY_MODES.COMMON.ADD_STARRED_STUDIABLE_ITEM_ID", e.ADD_STARRED_STUDIABLE_ITEM_ID_SUCCESS = "STUDY_MODES.COMMON.ADD_STARRED_STUDIABLE_ITEM_ID_SUCCESS", e.REMOVE_STARRED_STUDIABLE_ITEM_ID = "STUDY_MODES.COMMON.REMOVE_STARRED_STUDIABLE_ITEM_ID", e.REMOVE_STARRED_STUDIABLE_ITEM_ID_SUCCESS = "STUDY_MODES.COMMON.REMOVE_STARRED_STUDIABLE_ITEM_ID_SUCCESS", e.REPLACE_STUDIABLE_ITEM = "STUDY_MODES.COMMON.REPLACE_STUDIABLE_ITEM", e
            }({});
            const u = (e, t) => async (s, u) => {
                const c = u();
                let p = (0, o.uf)(c);
                if ((0, o.Sd)(c) !== n.MG.SET) {
                    const t = (0, o.h1)(c)[e];
                    if (t.studiableContainerType !== n.MG.SET) throw new Error("Unsupported studiable item with a studiable container != SET.");
                    p = t.studiableContainerId
                }
                s((e => (0, l.action)(d.ADD_STARRED_STUDIABLE_ITEM_ID, e))(e));
                try {
                    const n = (0, r.K)(e),
                        [a, o] = await i.Z.addAndSave({
                            termId: n,
                            setId: p,
                            source: t
                        });
                    s((m = o.properties, (0, l.action)(d.ADD_STARRED_STUDIABLE_ITEM_ID_SUCCESS, m)))
                } catch (g) {
                    a.Z.warn("Failed API request on selected-terms.", g)
                }
                var m
            }, c = e => async (t, s) => {
                const n = s(),
                    u = (0, o.Jh)(n),
                    c = (0, r.K)(e);
                t((e => (0, l.action)(d.REMOVE_STARRED_STUDIABLE_ITEM_ID, e))(e));
                try {
                    const s = u[c],
                        n = i.Z.add(s);
                    await i.Z.del(n), t((e => (0, l.action)(d.REMOVE_STARRED_STUDIABLE_ITEM_ID_SUCCESS, e))(e))
                } catch (p) {
                    a.Z.warn("Failed API request on selected-terms.", p)
                }
            }
        },
        "./app/j/study-modes/legacy-common/studiable-data/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Uv: () => P,
                hy: () => B,
                UR: () => N,
                CF: () => S,
                aW: () => T,
                hJ: () => M,
                XQ: () => C,
                kx: () => w,
                bs: () => j,
                cg: () => E,
                Jh: () => O,
                kI: () => R,
                Cv: () => _,
                uf: () => D,
                si: () => k,
                ZM: () => U,
                Sd: () => L,
                r9: () => f,
                TQ: () => p,
                hX: () => h,
                mb: () => m,
                h1: () => g,
                f3: () => W,
                lb: () => b
            });
            var n = s("./node_modules/lodash/keyBy.js"),
                a = s.n(n),
                o = (s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./app/j/config/enums.ts")),
                r = s("./app/j/global/Rollbar.ts"),
                i = s("./node_modules/@quizlet/progress/quizlet-shared-kotlin-progress.js");
            var l = s("./node_modules/reselect/lib/index.js"),
                d = s("./app/j/studiable-data/utils.ts"),
                u = s("./app/j/study-modes/legacy-common/selectors.ts"),
                c = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts");
            const p = (0, l.createSelector)(u.p, (e => e.studiableData)),
                m = (0, l.createSelector)(p, (e => e.studiableItems)),
                g = (0, l.createSelector)(m, (e => a()(e, (e => e.id)))),
                h = (0, l.createSelector)(p, (e => e.studiableItems.map((e => e.id)))),
                _ = (0, l.createSelector)(p, (e => new Set(e.starredStudiableItemIds))),
                S = (0, l.createSelector)(p, (e => e.crossModeResetTimestamp)),
                E = (0, l.createSelector)(p, (e => e.progressBucketName)),
                y = (0, l.createSelector)(p, (e => e.studySummaries)),
                f = (0, l.createSelector)([p, c.zg, _, y, E, S], ((e, t, s, n, a, o) => {
                    const {
                        studiableItems: l,
                        studiableContainer: d,
                        studiableMetadataByType: u,
                        setIdToDiagramImage: c,
                        exampleSentenceByStudiableItemId: p
                    } = e;
                    let m = new Set;
                    if (!t && void 0 !== n) {
                        const e = l.map((e => e.id)),
                            t = function(e, t) {
                                const s = e.map((e => ({
                                        containerId: e.id,
                                        itemIds: e.termIds,
                                        resetTime: null !== e.crossModeResetTimestamp ? 1e3 * e.crossModeResetTimestamp : null
                                    }))),
                                    n = t.map((e => ({
                                        ...e,
                                        date: 1e3 * e.date,
                                        answerHistory: e.answerHistory.map((e => ({
                                            ...e,
                                            timestamp: 1e3 * e.timestamp
                                        })))
                                    })));
                                return i.ProgressGeneratorJs.getProgress(s, n)
                            }([{
                                ...d,
                                termIds: e,
                                crossModeResetTimestamp: o
                            }], n || []),
                            s = t[d.id];
                        null == s && r.Z.error("Progress buckets for studiable container: " + d.id + " does not exist, got progress buckets by set id: " + t);
                        const u = s[a];
                        m = new Set(u.map(Number))
                    }
                    const g = t ? s : m;
                    return 0 === g.size ? {
                        studiableItems: l,
                        setIdToDiagramImage: c,
                        exampleSentenceByStudiableItemId: p,
                        studiableMetadataByType: u
                    } : function(e, t) {
                        const {
                            studiableItems: s
                        } = e, n = s.filter((e => t.has(e.id)));
                        return {
                            ...e,
                            studiableItems: n
                        }
                    }({
                        studiableItems: l,
                        setIdToDiagramImage: c,
                        exampleSentenceByStudiableItemId: p,
                        studiableMetadataByType: u
                    }, g)
                })),
                j = (0, l.createSelector)(f, (e => e.studiableItems.some((e => !!(0, d.F_)(e) && e.cardSides.some(d.p))))),
                T = ((0, l.createSelector)([p, j], ((e, t) => {
                    if (!t) return !1;
                    for (const n of (0, d.c4)(e.studiableItems.filter(d.F_), o.dU_.DEFINITION)) {
                        var s;
                        const e = (0, d.p)(n),
                            t = (0, d.xy)(n);
                        if (e && "" === (null != (s = null == t ? void 0 : t.plainText) ? s : "")) return !1
                    }
                    return !0
                })), (0, l.createSelector)(p, (e => A(e.studiableItems, o.dU_.DEFINITION))));

            function A(e, t) {
                for (const s of (0, d.c4)(e.filter(d.F_), t)) {
                    const e = (0, d.xy)(s);
                    if (e) return e.languageCode
                }
                return null
            }
            const b = (0, l.createSelector)(p, (e => A(e.studiableItems, o.dU_.WORD))),
                x = (0, l.createSelector)(p, (e => !1 === (0, d.c4)(e.studiableItems.filter(d.F_), o.dU_.WORD).next().done)),
                I = (0, l.createSelector)(p, (e => !1 === (0, d.c4)(e.studiableItems.filter(d.F_), o.dU_.DEFINITION).next().done)),
                v = (0, l.createSelector)(p, (e => e.studiableContainer)),
                C = (0, l.createSelector)(p, (e => {
                    var t;
                    return Object.keys(null != (t = e.setIdToDiagramImage) ? t : {}).length > 0
                })),
                N = (0, l.createSelector)(x, I, C, ((e, t, s) => ({
                    definition: t,
                    location: s,
                    term: e
                }))),
                w = (0, l.createSelector)(f, (e => {
                    var t;
                    return (null == e ? void 0 : e.studiableMetadataByType) && !(null == (t = e.studiableMetadataByType[o._KG.FILL_IN_THE_BLANK_KEYPHRASES]) || !t.length)
                })),
                O = (0, l.createSelector)(p, (e => e.selectedTerms)),
                M = ((0, l.createSelector)(_, (e => {
                    var t;
                    return null != (t = e.size) ? t : 0
                })), (0, l.createSelector)(p, (e => e.diagramImages ? e.diagramImages[0] : null))),
                D = (0, l.createSelector)(v, (e => e.id)),
                L = (0, l.createSelector)(p, (e => e.studiableContainerType)),
                P = (0, l.createSelector)(p, (e => e.accents)),
                R = ((0, l.createSelector)(m, (e => e.some((e => e.type === o.zqd.MULTIPLE_CHOICE_QUESTION)))), (0, l.createSelector)(_, (e => e.size > 0))),
                k = (0, l.createSelector)(v, (e => "magicNoteUuid" in e ? e.magicNoteUuid : null)),
                U = (0, l.createSelector)(v, (e => "title" in e ? e.title : e.name)),
                W = (0, l.createSelector)(v, (e => e._webUrl)),
                B = (0, l.createSelector)(p, (e => {
                    const t = e.studiableItems.filter(d.F_);
                    for (const s of (0, d.c4)(t, o.dU_.DEFINITION)) {
                        if (!s.media.some((e => {
                                if (e.type !== o.DDH.TEXT) return !1;
                                const t = e,
                                    s = "" === t.plainText && !t.richText;
                                return t.languageCode !== o.spR.PHOTOS && !s
                            }))) return !1
                    }
                    return !0
                }))
        },
        "./app/j/study-modes/legacy-common/utils/createCardSideSettings.ts": (e, t, s) => {
            "use strict";

            function n(e) {
                return {
                    term: e("term"),
                    definition: e("definition"),
                    location: e("location")
                }
            }
            s.d(t, {
                Z: () => n
            })
        },
        "./app/j/study-modes/legacy-common/utils/label-utils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                O$: () => r,
                hC: () => a,
                yW: () => o
            });
            s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js");
            var n = s("./app/j/config/enums.ts");

            function a(e, t) {
                switch (t) {
                    case n.dU_.WORD:
                        return e("assistant.label.term");
                    case n.dU_.DEFINITION:
                        return e("assistant.label.definition");
                    default:
                        return e("assistant.label.term")
                }
            }

            function o(e, t) {
                switch (t) {
                    case n.dU_.WORD:
                        return e("assistant.label.term");
                    case n.dU_.DEFINITION:
                        return e("assistant.label.definition");
                    case n.dU_.LOCATION:
                        return e("assistant.label.location");
                    default:
                        return e("assistant.label.term")
                }
            }

            function r(e, t) {
                const s = [t];
                0 !== t && s.push(0);
                for (const a of s) {
                    switch (e - 3 * a) {
                        case 0:
                            return n.dU_.WORD;
                        case 1:
                            return n.dU_.DEFINITION;
                        case 2:
                            return n.dU_.LOCATION
                    }
                }
                return null
            }
        },
        "./app/j/study-modes/legacy-common/utils/legacyRenderStudyMode.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => q
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/audio_playback/index.ts"),
                a = s("./app/j/config/enums.ts"),
                o = s("./app/j/core/default_store/DefaultStoreProvider.tsx"),
                r = s("./app/j/core/legacy_store/LegacyStoreProvider.tsx"),
                i = s("./node_modules/react/index.js"),
                l = s("./app/j/study-modes/legacy-common/index.ts"),
                d = s("./node_modules/react-redux/lib/index.js"),
                u = s("./node_modules/redux/lib/redux.js"),
                c = s("./node_modules/reselect/lib/index.js"),
                p = s("./app/j/study-modes/learn/selectors/view.ts"),
                m = s("./node_modules/lodash/noop.js"),
                g = s.n(m),
                h = (s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./node_modules/core-js/modules/es.array.includes.js"), s("./node_modules/@linaria/core/lib/index.js")),
                _ = s("./app/j/ads/components/ActionBasedAutoRefreshAd.tsx"),
                S = s("./app/j/ads/components/Ad.tsx"),
                E = s("./app/j/context/UserContext.ts"),
                y = s("./app/j/study-modes/legacy-common/misc/ads/selectors.ts"),
                f = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                j = s("./app/j/study-modes/redesigned_cards/data/engine/selectors.ts"),
                T = s("./app/j/utils/isAdBlockerEnabled.ts");
            var A = s("./app/j/ads/context/StudyModeAdsContext.tsx"),
                b = s("./app/j/components/DeprecatedModeLayout.tsx"),
                x = s("./app/j/components/ModeLayout.tsx"),
                I = s("./app/j/signup/components/AuthPromptModal.tsx"),
                v = s("./app/j/signup/types/auth.ts"),
                C = s("./app/j/study-modes/learn/types.ts"),
                N = s("./app/j/study-modes/legacy-common/hooks/useShouldSeeSignupWall.ts"),
                w = s("./app/j/utils/onPageHidden.ts"),
                O = s("./node_modules/react/jsx-runtime.js");
            const M = i.memo((function(e) {
                    return e.isBrandedContentSet ? (0, O.jsx)(S.Z, {
                        headingAlignment: "block",
                        id: e.sidebarAdsId
                    }) : (0, O.jsx)(_.Z, {
                        id: e.sidebarAdsId,
                        lastActionTimestamp: e.lastActionTimestamp
                    })
                })),
                D = i.memo((function(e) {
                    return (0, O.jsx)(S.Z, {
                        headingAlignment: "centerAlign",
                        id: e.footerAdsId
                    })
                })),
                L = {
                    [a.StudyModeType.LEARNING_ASSISTANT]: v.V.LEARN,
                    [a.StudyModeType.TEST]: v.V.TEST
                };
            s("./.linaria-cache/app/j/study-modes/legacy-common/components/StudyModesLayout.linaria.css");
            var P = s("./app/j/study-modes/legacy-common/metering/selectors.ts"),
                R = s("./app/j/study-modes/legacy-common/misc/ab_tests/selectors.ts"),
                k = s("./app/j/study-modes/legacy-common/sessions/actions.ts"),
                U = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts"),
                W = s("./app/j/study-modes/redesigned_cards/data/ads/selectors.ts"),
                B = s("./app/j/study-modes/test/selectors/ads.ts");
            const F = (0, c.createStructuredSelector)({
                    adsIds: y.SV,
                    currentView: p.R5,
                    isAdModalView: p.KL,
                    isBrandedContentSet: y.nm,
                    isEmbedding: f.QE,
                    lastActionTimestamp: y.Xb,
                    shouldBeFullHeight: f.FE,
                    shouldShowAd: f.Cr,
                    shouldHideEmbedControl: f.V2,
                    shouldShowNewStudyBreak: y.cS,
                    shouldShowStudyTopNav: R.rU,
                    shouldShowTasksScreen: p.O8,
                    studyModeType: f.ez,
                    studyableId: U.uf,
                    studyablePath: U.f3,
                    isSignupWallUnlocked: P.kn
                }),
                Z = (0, c.createStructuredSelector)({
                    isCardsModeAdView: W.iJ,
                    isTestModeAdView: B.X
                }),
                G = (0, u.compose)((0, d.connect)(F, (e => ({
                    actions: (0, u.bindActionCreators)({
                        exitSession: k.mc
                    }, e)
                })), null, {
                    context: r.tC
                }), (0, d.connect)(Z, null, null, {
                    context: o.jJ
                }))((function(e) {
                    const {
                        actions: t,
                        adsIds: s,
                        currentView: n,
                        isBrandedContentSet: l,
                        isEmbedding: d,
                        lastActionTimestamp: u,
                        shouldShowStudyTopNav: c,
                        studyModeType: p,
                        studyableId: m,
                        studyablePath: _,
                        isSignupWallUnlocked: S
                    } = e, v = (0, i.useContext)(E.Z), P = (null == v ? void 0 : v.type) === a.XsQ.NO_UPGRADE, R = (0, N.Z)(L[p], d, S), [k, U] = (0, i.useState)(R);
                    (0, i.useEffect)((() => {
                        if ([a.StudyModeType.TEST].includes(p)) return g();
                        const e = (0, w.Z)((() => t.exitSession()), !0);
                        return () => e.remove()
                    }), [p, t]);
                    const W = function() {
                            const e = (0, i.useContext)(E.Z),
                                t = (null == e ? void 0 : e.type) === a.XsQ.PLUS,
                                s = (0, r.v9)(f.Cr),
                                n = (0, o.v9)(j.B5),
                                l = (0, r.v9)(y.cS);
                            return e => !n && !!e && !t && s && !l && !(0, T.ZP)()
                        }(),
                        B = c ? x.Z : b.Z;
                    return R ? (0, O.jsx)(I.q, {
                        additionalLogData: {
                            studiableContainerId: m
                        },
                        barrierType: "escapableWall",
                        escapePath: _,
                        isOpen: k,
                        onClose: () => {
                            U(!1)
                        },
                        onOpen: () => {
                            U(!0)
                        },
                        placement: L[p]
                    }) : (0, O.jsx)(A.Uw, {
                        children: (0, O.jsx)("div", {
                            className: (0, h.cx)("StudyModesLayout", n === C.LearnModeView.TASK_ROUND_CHECKPOINT && P ? "r1t8rjpq" : null, e.isEmbedding ? "exvi2fd" : null),
                            children: (0, O.jsx)(B, {
                                adUnit: (F = s.sidebarAdsId, W(F) ? (0, O.jsx)(M, {
                                    isBrandedContentSet: l,
                                    lastActionTimestamp: u,
                                    sidebarAdsId: F
                                }) : null),
                                controls: e.modeControls,
                                isEmbedding: e.isEmbedding,
                                isTaskCardScreen: n === C.LearnModeView.TASK_COMPLETION_CHECKPOINT || n === C.LearnModeView.TASK_SEQUENCE_COMPLETION_CHECKPOINT,
                                isTaskRoundCheckpointScreen: n === C.LearnModeView.TASK_ROUND_CHECKPOINT || n === C.LearnModeView.TASK_COMPLETION_CHECKPOINT,
                                mWebAdUnit: e.shouldShowAd && s.footerAdsId ? (e => (0, O.jsx)(D, {
                                    footerAdsId: e
                                }))(s.footerAdsId) : null,
                                onCloseAdModal: e.closeAdModalAndGoToTheNextStep,
                                shouldBeFullHeight: e.shouldBeFullHeight,
                                shouldHaveNoPadding: e.shouldShowNewStudyBreak || e.shouldShowTasksScreen || e.studyModeType === a.StudyModeType.FLASHCARDS,
                                shouldHideEmbedControl: e.shouldHideEmbedControl,
                                shouldShowNewStudyBreak: e.shouldShowNewStudyBreak,
                                showAdModal: e.shouldShowAd && (e.isAdModalView || e.isTestModeAdView || e.isCardsModeAdView),
                                studyableId: e.studyableId,
                                studyablePath: e.studyablePath,
                                studyModeType: e.studyModeType,
                                children: e.children
                            })
                        })
                    });
                    var F
                }));
            var H = s("./app/j/study-modes/subs/contexts/LearnTestPaywallContextProvider.tsx"),
                V = s("./app/j/study-modes/subs/contexts/UpgradeContextProvider.tsx"),
                z = s("./app/j/utils/metering/MeteringPlus.tsx"),
                Q = s("./app/j/utils/readReactTarget.ts"),
                K = s("./app/j/utils/renderReactAppToDOM.tsx");
            async function q(e, t, s, i, d) {
                var u, c, p, m;
                const {
                    target: g,
                    data: h
                } = await (0, Q.Z)("AssistantMode"), _ = {
                    ...h,
                    ...s
                };
                (0, l.Z)(_), (0, n.ZP)(), i && d ? await i(h) : i && i(h);
                const S = null != (u = null == _ || null == (c = _.metering) || null == (c = c.meteringData) ? void 0 : c[a.jrE.LEARN_CHECKPOINT]) ? u : null,
                    E = null != (p = null == _ || null == (m = _.metering) || null == (m = m.meteringData) ? void 0 : m[a.jrE.TEST_SUBMISSION]) ? p : null;
                return (0, K.Z)((0, O.jsx)(o.ZP, {
                    children: (0, O.jsx)(r.ZP, {
                        children: (0, O.jsx)(z.eW, {
                            learnMeteringMeta: S,
                            children: (0, O.jsx)(z.w_, {
                                testMeteringMeta: E,
                                children: (0, O.jsx)(V.r, {
                                    upgradeData: _,
                                    children: (0, O.jsx)(H.l, {
                                        children: (0, O.jsx)(G, {
                                            closeAdModalAndGoToTheNextStep: s.closeAdModalAndGoToTheNextStep,
                                            modeControls: (0, O.jsx)(t, {}),
                                            children: (0, O.jsx)(e, {})
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), g), h
            }
        },
        "./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                K: () => a,
                Q: () => o
            });
            var n = s("./app/j/config/enums.ts");
            const a = e => e,
                o = e => {
                    switch (e) {
                        case n.dU_.WORD:
                            return n.TermSide.WORD;
                        case n.dU_.DEFINITION:
                            return n.TermSide.DEFINITION;
                        case n.dU_.LOCATION:
                            return n.TermSide.LOCATION;
                        default:
                            throw new Error("Unrecognized card side label: " + e)
                    }
                }
        },
        "./app/j/study-modes/legacy-common/utils/studyModeAdHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $: () => l,
                W: () => d
            });
            var n = s("./app/j/ads/AdsHelper.ts"),
                a = s("./app/j/ads/utils/screenSizes.ts"),
                o = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                r = s("./app/j/utils/isAdBlockerEnabled.ts"),
                i = s("./app/j/utils/viewport.ts");
            const l = e => (0, i.getWidth)() > a.r.tiny[0] && (0, i.getHeight)() > a.r.tiny[1] && (0, o.Cr)(e()) && !(0, r.ZP)(),
                d = e => e.shouldShowAd && (0 === e.adModalTimesShown || e.adModalTimesShown > 0 && (0, n.Rk)(e.adModalShownAt, 5))
        },
        "./app/j/study-modes/redesigned_cards/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Ku: () => c,
                M6: () => l,
                X4: () => u,
                ou: () => p,
                u1: () => m,
                wD: () => d
            });
            var n = s("./app/j/ads/enums/AdsNames.ts"),
                a = s("./app/j/config/enums.ts"),
                o = s("./app/j/core/default_store/DefaultStore.ts"),
                r = s("./app/j/study-modes/redesigned_cards/data/ads/index.ts"),
                i = s("./app/j/study-modes/redesigned_cards/data/constants.ts");
            const l = 500,
                d = 100,
                u = 28,
                c = 10;
            let p = function(e) {
                return e.MODE = "mode", e.SET_PAGE = "set_page", e.NOTES_LANDING = "notes_landing", e
            }({});
            a.Std.ASSISTANT_MODE_QUESTION_TYPES, a.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS, a.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS, a.Std.SMART_GRADING, a.StudyModeType.FLASHCARDS, p.SET_PAGE, a.Std.ASSISTANT_MODE_QUESTION_TYPES, a.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS, a.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS, a.Std.SMART_GRADING, a.StudyModeType.FLASHCARDS, p.NOTES_LANDING;
            const m = {
                hiddenSettings: [a.Std.ASSISTANT_MODE_QUESTION_TYPES, a.Std.FLEXIBLE_GRADING_ACCEPT_PARTIAL_ANSWERS, a.Std.FLEXIBLE_GRADING_ACCEPT_ANSWERS_WITH_TYPOS, a.Std.SMART_GRADING],
                questionTypesSetting: {
                    copyAnswer: !1,
                    fillInTheBlank: !1,
                    matching: !1,
                    multipleChoice: !1,
                    multipleChoiceWithNoneOption: !1,
                    revealSelfAssessment: !1,
                    written: !1,
                    spelling: !1
                },
                adsIds: {
                    sidebarAdsId: n.h.FLASHCARDS_SIDEBAR,
                    footerAdsId: null
                },
                studyModeType: a.StudyModeType.FLASHCARDS,
                closeAdModalAndGoToTheNextStep: () => {
                    (0, o.bh)().dispatch((0, r.HL)(i.S.CARDS_VIEW))
                },
                cardsOrigin: p.MODE
            }
        },
        "./app/j/study-modes/redesigned_cards/data/ads/index.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Cb: () => p,
                HL: () => u,
                N6: () => h,
                S1: () => l,
                S9: () => _,
                ZP: () => S,
                do: () => c,
                gM: () => g,
                kc: () => d
            });
            var n = s("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js"),
                a = s("./app/j/study-modes/redesigned_cards/data/constants.ts"),
                o = s("./app/j/study-modes/redesigned_cards/data/types.ts");
            const r = (0, n.createSlice)({
                    name: o.Gq,
                    initialState: {
                        shouldShowCardIntervalAd: !1,
                        cardsView: a.S.CARDS_VIEW,
                        companionAdMiniFCVariant: null,
                        isRenderingRva: !1,
                        isRewarded: !1,
                        isMwebAdEnabled: !1,
                        videoAdCountdownSeconds: void 0,
                        mwebAdsState: {
                            areCardsMovingForward: !0,
                            isRenderingMwebAd: !1,
                            isShowingCardsMwebAd: !1,
                            shouldLoadCardsMwebAd: !1,
                            shouldPreloadMwebAd: !1,
                            isAdNoFill: !1
                        }
                    },
                    reducers: {
                        init(e, t) {
                            var s, n, a;
                            let {
                                payload: o
                            } = t;
                            e.shouldShowCardIntervalAd = null != (s = o.shouldShowCardIntervalAd) && s, e.companionAdMiniFCVariant = null != (n = o.companionAdMiniFCVariant) ? n : null, e.isMwebAdEnabled = null != (a = o.isMwebAdEnabled) && a
                        },
                        setAreCardsMovingForward(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.mwebAdsState.areCardsMovingForward = s
                        },
                        setIsRenderingMwebAd(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.mwebAdsState.isRenderingMwebAd = s
                        },
                        setShouldPreloadMwebAd(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.mwebAdsState.shouldPreloadMwebAd = s
                        },
                        setCardsView(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.cardsView = s
                        },
                        setIsRenderingRva(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.isRenderingRva = s
                        },
                        setIsRewarded(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.isRewarded = s
                        },
                        setIsAdNoFill(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.mwebAdsState.isAdNoFill = s
                        },
                        setVideoAdCounterTime(e, t) {
                            let {
                                payload: s
                            } = t;
                            e.videoAdCountdownSeconds = s
                        }
                    }
                }),
                i = r.reducer,
                {
                    init: l,
                    setAreCardsMovingForward: d,
                    setCardsView: u,
                    setIsRenderingMwebAd: c,
                    setIsRenderingRva: p,
                    setIsRewarded: m,
                    setVideoAdCounterTime: g,
                    setShouldPreloadMwebAd: h,
                    setIsAdNoFill: _
                } = r.actions,
                S = i
        },
        "./app/j/study-modes/redesigned_cards/data/ads/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                FC: () => u,
                FR: () => T,
                GG: () => I,
                L3: () => b,
                N1: () => v,
                Ot: () => y,
                SR: () => c,
                Wi: () => x,
                YL: () => S,
                db: () => j,
                eG: () => f,
                iJ: () => h,
                iy: () => _,
                yl: () => A
            });
            var n = s("./app/j/core/default_store/DefaultStore.ts"),
                a = s("./node_modules/reselect/lib/index.js"),
                o = s("./app/j/study-modes/redesigned_cards/data/constants.ts"),
                r = s("./app/j/study-modes/redesigned_cards/data/engine/selectors.ts"),
                i = s("./app/j/study-modes/redesigned_cards/data/types.ts");
            const l = {
                    numCardsPriorToPreloadAds: 2,
                    numCardsToShowAds: 7
                },
                d = (0, a.createSelector)((0, n.iu)(i.sF), (e => e.ads)),
                u = (0, a.createSelector)(d, (e => e.companionAdMiniFCVariant)),
                c = (0, a.createSelector)(d, (e => e.isRenderingRva)),
                p = ((0, a.createSelector)(d, (e => e.isRewarded)), (0, a.createSelector)(d, (e => e.shouldShowCardIntervalAd))),
                m = (0, a.createSelector)(d, (e => e.cardsView)),
                g = (0, a.createSelector)(m, (e => e === o.S.AD_MODAL)),
                h = e => i.sF in e && g(e),
                _ = (0, a.createSelector)([p, u], ((e, t) => e ? "fifteenSeconds" === t ? {
                    numCardsPriorToPreloadAds: 7,
                    numCardsToShowAds: 15
                } : "fifteenSecondsTenCards" === t ? {
                    numCardsPriorToPreloadAds: 7,
                    numCardsToShowAds: 10
                } : {
                    ...l,
                    numCardsToShowAds: 15
                } : null)),
                S = (0, a.createSelector)(d, (e => e.isMwebAdEnabled)),
                E = (0, a.createSelector)(d, (e => e.mwebAdsState)),
                y = (0, a.createSelector)(E, (e => e.shouldPreloadMwebAd)),
                f = (0, a.createSelector)(E, (e => e.areCardsMovingForward)),
                j = (0, a.createSelector)(E, (e => e.isRenderingMwebAd)),
                T = (0, a.createSelector)(E, (e => e.isAdNoFill)),
                A = (0, a.createSelector)(d, (e => null == e ? void 0 : e.videoAdCountdownSeconds)),
                b = (0, a.createSelector)([A, u], ((e, t) => {
                    if (null !== t && "control" !== t && e) return Math.min(e, 15)
                })),
                x = ((0, a.createSelector)(E, (e => e.isShowingCardsMwebAd)), (0, a.createSelector)(E, (e => e.shouldLoadCardsMwebAd))),
                I = (0, a.createSelector)(r.uF, (e => null == e ? void 0 : e.shouldShowAds)),
                v = (0, a.createSelector)(r.uF, (e => null == e ? void 0 : e.shouldPreloadAds))
        },
        "./app/j/study-modes/redesigned_cards/data/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                S: () => n,
                c: () => a
            });
            let n = function(e) {
                return e[e.AD_MODAL = 0] = "AD_MODAL", e[e.CARDS_VIEW = 1] = "CARDS_VIEW", e[e.FINISHED_VIEW = 2] = "FINISHED_VIEW", e[e.LEARN_UPSELL_VIEW = 3] = "LEARN_UPSELL_VIEW", e[e.SIGNUP_WALL = 4] = "SIGNUP_WALL", e
            }({});
            const a = {
                acceptsPartialAnswer: !1,
                answerWith: {
                    definition: !0,
                    location: !0,
                    term: !1
                },
                promptWith: {
                    definition: !1,
                    location: !1,
                    term: !0
                }
            }
        },
        "./app/j/study-modes/redesigned_cards/data/engine/selectors.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                AY: () => f,
                B5: () => L,
                E9: () => x,
                Gu: () => E,
                Gz: () => T,
                P: () => M,
                UO: () => v,
                V9: () => h,
                XT: () => N,
                Xh: () => P,
                Y5: () => S,
                bl: () => R,
                oK: () => j,
                oc: () => k,
                rg: () => A,
                sx: () => w,
                tg: () => C,
                uF: () => D,
                wG: () => O,
                yl: () => I
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/core/default_store/DefaultStore.ts"),
                o = s("./node_modules/nullthrows/nullthrows.js"),
                r = s.n(o),
                i = s("./node_modules/reselect/lib/index.js"),
                l = s("./app/j/study-modes/cards/constants.ts"),
                d = s("./app/j/study-modes/cards/utils/index.ts"),
                u = s("./app/j/study-modes/data/settings/selectors/preference.ts"),
                c = s("./app/j/study-modes/data/studiable-data/selectors.ts"),
                p = s("./app/j/study-modes/redesigned_cards/data/types.ts");
            (0, i.createSelector)((0, a._k)(p.sF), (e => e));
            const m = (0, i.createSelector)((0, a.iu)(p.sF), (e => e.engine)),
                g = (0, i.createSelector)(m, (e => e.modeState)),
                h = (0, i.createSelector)(m, (e => r()(e.engine))),
                _ = (0, i.createSelector)([u.e, c.XQ], ((e, t) => (0, d.tN)(e, t))),
                S = (0, i.createSelector)([u.pE, c.XQ], ((e, t) => (0, d.tN)(e, t))),
                E = (0, i.createSelector)([_, S, u.mm, u.rE], ((e, t, s, a) => ({
                    frontCardSide: e,
                    rearCardSide: t,
                    cardOrdering: s ? n.Y2X.SHUFFLED : n.Y2X.IN_ORDER,
                    isSortingEnabled: a
                }))),
                y = (0, i.createSelector)(g, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.progress) ? t : null
                })),
                f = (0, i.createSelector)(y, (e => null == e ? void 0 : e.totalProgress.masteryBuckets.completed.length)),
                j = (0, i.createSelector)(y, (e => null == e ? void 0 : e.totalProgress.masteryBuckets.remaining.length)),
                T = ((0, i.createSelector)(y, (e => e ? e.totalProgress.masteryBuckets.completed.length + e.totalProgress.masteryBuckets.remaining.length : null)), (0, i.createSelector)(g, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.hasActionAvailableToUndo) && t
                }))),
                A = (0, i.createSelector)(y, (e => {
                    if (!e) return null;
                    const {
                        currentRound: t
                    } = e, {
                        isRoundComplete: s
                    } = e.roundProgress;
                    return s ? t + 1 : t
                })),
                b = (0, i.createSelector)(y, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.roundProgress) ? t : null
                })),
                x = (0, i.createSelector)(b, (e => null !== e ? e.numCardsCompleted + e.numCardsMovedToNextCycle : null)),
                I = (0, i.createSelector)([b, x], ((e, t) => {
                    if (null === e) return null;
                    const {
                        isRoundComplete: s,
                        numCards: n
                    } = e;
                    return s ? n - 1 : t
                })),
                v = (0, i.createSelector)(b, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.numCards) ? t : null
                })),
                C = (0, i.createSelector)(b, (e => null == e ? void 0 : e.numCardsCompleted)),
                N = (0, i.createSelector)(b, (e => null == e ? void 0 : e.numCardsMovedToNextCycle)),
                w = (0, i.createSelector)(b, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.isRoundComplete) ? t : null
                })),
                O = (0, i.createSelector)(g, (e => {
                    var t;
                    return null != (t = null == e ? void 0 : e.question) ? t : null
                })),
                M = (0, i.createSelector)(O, (e => null == e ? void 0 : e.metadata.studiableItemId)),
                D = (0, i.createSelector)(m, (e => e.adsState)),
                L = e => {
                    var t;
                    return p.sF in e && !(null == (t = D(e)) || !t.shouldShowAds)
                },
                P = (0, i.createSelector)([y, O], ((e, t) => null != e && e.roundProgress.isRoundComplete ? l.S.FINISHED_VIEW : t ? l.S.CARDS_VIEW : void 0)),
                R = (0, i.createSelector)([c.h1, M], ((e, t) => t ? e[t] : null)),
                k = (0, i.createSelector)(m, (e => e.isEngineInitialized))
        },
        "./app/j/study-modes/redesigned_cards/data/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                AI: () => o,
                Ap: () => r,
                DI: () => a,
                Gq: () => i,
                Q6: () => d,
                pJ: () => l,
                sF: () => n
            });
            const n = "cards",
                a = n + "/engine",
                o = n + "/ui",
                r = n + "/onboarding",
                i = n + "/ads",
                l = n + "/song",
                d = n + "/cardExplanations"
        },
        "./app/j/study-modes/spell/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                f: () => n,
                k: () => a
            });
            let n = function(e) {
                    return e.AD_MODAL = "ad_modal", e.EMPTY = "empty", e.CHECKPOINT = "checkpoint", e.END = "end", e.CORRECTION = "correction", e.ONBOARDING = "onboarding", e.QUESTION = "question", e
                }({}),
                a = function(e) {
                    return e.CORRECT_ONE_TIME = "correctOneTime", e.CORRECT_TWO_TIMES = "correctTwoTimes", e.CORRECT_ZERO_TIMES = "correctZeroTimes", e
                }({})
        },
        "./app/j/study-modes/subs/contexts/LearnTestPaywallContextProvider.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => p,
                l: () => c
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/context/UserContext.ts"),
                o = s("./app/j/hooks/useQMeasure.ts"),
                r = s("./node_modules/react/index.js"),
                i = s("./app/j/study-modes/subs/contexts/UpgradeContextProvider.tsx"),
                l = s("./node_modules/react/jsx-runtime.js");
            const d = () => {
                    const e = (0, o.Z)(),
                        t = (0, i.A)(),
                        s = (0, r.useContext)(a.Z);
                    return {
                        getTestModePaywallCopyVariant: (0, r.useCallback)((() => t ? e.getVariationAndEnroll("TestModePaywallCopy[default,subscriptions]") : null), [e, t]),
                        getIsInTestSocialProofExperiment: (0, r.useCallback)((() => !((null == s ? void 0 : s.selfIdentifiedTeacherStatus) === n.IXc.TEACHER) && e.isInTestVariant("TestModePaywallSocialProof[default,subscriptions]")), [e, null == s ? void 0 : s.selfIdentifiedTeacherStatus]),
                        getIsInCtaSwapExperiment: (0, r.useCallback)((() => "experiment" === e.getVariationAndEnroll("TestModePaywallCtaSwap[default,subscriptions]")), [e])
                    }
                },
                u = (0, r.createContext)(void 0),
                c = e => {
                    let {
                        children: t
                    } = e;
                    return (0, l.jsx)(u.Provider, {
                        value: d(),
                        children: t
                    })
                },
                p = () => {
                    const e = (0, r.useContext)(u);
                    if (void 0 === e) throw new Error("useLearnTestPaywall must be used within a LearnTestPaywallContextProvider");
                    return e
                }
        },
        "./app/j/study-modes/subs/contexts/UpgradeContextProvider.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                A: () => l,
                r: () => i
            });
            var n = s("./node_modules/react/index.js"),
                a = s("./node_modules/react/jsx-runtime.js");
            const o = (0, n.createContext)(void 0),
                r = e => ({
                    isEligibleForFreeTrial: e.isEligibleForFreeTrial
                }),
                i = e => {
                    let {
                        children: t,
                        upgradeData: s
                    } = e;
                    return (0, a.jsx)(o.Provider, {
                        value: r(s),
                        children: t
                    })
                };

            function l() {
                var e;
                const t = (0, n.useContext)(o);
                if (void 0 === t) throw new Error("useGetIsEligibleForFreeTrial() can only be used in components with a UpgradeContextProvider");
                return null != (e = t.isEligibleForFreeTrial) && e
            }
        },
        "./app/j/study-modes/test/constants.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                NG: () => i,
                UC: () => u,
                Yo: () => l,
                f: () => c,
                mK: () => d,
                o6: () => o,
                wp: () => r
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/study-engine/types.ts");
            let o = function(e) {
                return e.TRUE_FALSE = "trueFalse", e.MCQ = "mcq", e.MATCHING = "matching", e.WRITTEN = "written", e
            }({});
            const r = "testCTA",
                i = "test_mode_click_print_results",
                l = "test_mode_click_print_in_test",
                d = "test_mode_click_print",
                u = "testMode",
                c = 80;
            a.lt.TEST, n.StudyModeType.TEST
        },
        "./app/j/study-modes/test/selectors/ads.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                X: () => r
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/test/selectors/base.ts"),
                o = s("./app/j/study-modes/test/types.ts");
            const r = (0, n.createSelector)(a.e, (e => e === o.d.AD_MODAL))
        },
        "./app/j/study-modes/test/selectors/base.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                e: () => r,
                o: () => o
            });
            var n = s("./node_modules/reselect/lib/index.js"),
                a = s("./app/j/study-modes/test/constants.ts");
            const o = e => e[a.UC],
                r = (0, n.createSelector)(o, (e => null == e ? void 0 : e.view))
        },
        "./app/j/study-modes/test/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                d: () => n
            });
            let n = function(e) {
                return e.TEST = "test", e.REVIEW = "review", e.AD_MODAL = "ad_modal", e.PAYWALL = "paywall", e.LOADING = "loading", e
            }({})
        },
        "./app/j/study-modes/test/utils/getReactKeyForQuestionElement.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var n = s("./app/j/study-engine/types.ts");

            function a(e, t) {
                const s = e.attributes[0];
                switch (null == s ? void 0 : s.type) {
                    case n.LK.TEXT_ATTRIBUTE:
                        var a;
                        return null != (a = s.plainText + "-" + t) ? a : s.richText;
                    case n.LK.IMAGE_ATTRIBUTE:
                        return s.url;
                    case n.LK.LOCATION_ATTRIBUTE:
                        return s.shape + ":" + s.diagramImage.url;
                    case n.LK.AUDIO_ATTRIBUTE:
                        return s.url;
                    default:
                        return "[empty]"
                }
            }
        },
        "./app/j/study-modes/write/types.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                i9: () => n,
                ru: () => o,
                x$: () => a
            });
            let n = function(e) {
                    return e.AD_MODAL = "ad_modal", e.LOADING = "loading", e.CHECKPOINT = "checkpoint", e.COPY_ANSWER = "copy_answer", e.END = "end", e.FEEDBACK = "feedback", e.QUESTION = "question", e
                }({}),
                a = function(e) {
                    return e.SET_CURRENT_VIEW = "WRITE.SET_CURRENT_VIEW", e.SET_IS_SHOWING_INLINE_FEEDBACK = "WRITE.SET_IS_SHOWING_INLINE_FEEDBACK", e.SET_LAST_INTERMISSION_VIEW = "WRITE.SET_LAST_INTERMISSION_VIEW", e
                }({}),
                o = function(e) {
                    return e.CORRECT = "correct", e.INCORRECT = "incorrect", e.OVERALL = "overall", e
                }({})
        },
        "./app/j/study-modes/write/write.entry.ts": (e, t, s) => {
            "use strict";
            var n = s("./app/j/ads/enums/AdsNames.ts"),
                a = s("./app/j/config/enums.ts"),
                o = s("./app/j/core/legacy_store/LegacyStore.ts"),
                r = s("./app/j/global/Quizlet.ts"),
                i = s("./app/j/login/index.ts"),
                l = s("./node_modules/redux-actions/lib/index.js"),
                d = s("./app/j/study-engine/types.ts"),
                u = s("./app/j/study-modes/legacy-common/utils/legacyRenderStudyMode.tsx"),
                c = s("./node_modules/lodash/last.js"),
                p = s.n(c),
                m = s("./node_modules/lodash/dropRight.js"),
                g = s.n(m),
                h = (s("./node_modules/core-js/modules/es.promise.js"), s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./app/j/i18n/$t.ts")),
                _ = s("./app/j/notifications/addNotification.ts"),
                S = s("./app/j/notifications/Constants.ts"),
                E = s("./node_modules/nullthrows/nullthrows.js"),
                y = s.n(E),
                f = s("./node_modules/react-redux/lib/index.js"),
                j = s("./app/j/study-engine/utils.ts"),
                T = s("./app/j/study-modes/legacy-common/engine/actions.ts"),
                A = s("./app/j/study-modes/legacy-common/engine/selectors.ts"),
                b = s("./app/j/study-modes/legacy-common/engine/utils/question-element-utils.ts"),
                x = s("./app/j/study-modes/legacy-common/grading/actions.ts"),
                I = s("./app/j/global/Rollbar.ts"),
                v = s("./app/j/study-modes/legacy-common/grading/constants.ts"),
                C = s("./app/j/utils/FetchWith.ts");
            var N = s("./app/j/study-modes/legacy-common/grading/selectors.ts"),
                w = s("./app/j/study-modes/legacy-common/grading/utils/longtextGradingUtils.ts"),
                O = s("./app/j/study-modes/legacy-common/logging/actions.ts"),
                M = s("./app/j/study-modes/legacy-common/sessions/actions.ts"),
                D = s("./app/j/study-modes/legacy-common/sessions/selectors.ts"),
                L = s("./app/j/study-modes/legacy-common/settings/actions.ts"),
                P = s("./app/j/study-modes/legacy-common/settings/selectors/index.ts"),
                R = s("./app/j/study-modes/legacy-common/utils/studyModeAdHelper.ts"),
                k = (s("./node_modules/core-js/modules/es.string.trim.js"), s("./node_modules/reselect/lib/index.js")),
                U = s("./app/j/studiable-data/utils.ts"),
                W = s("./app/j/study-modes/legacy-common/engine/question/selectors.ts"),
                B = s("./app/j/study-modes/legacy-common/studiable-data/selectors.ts");
            const F = e => e.get("write"),
                Z = (0, k.createSelector)([A.zt], (e => e.masteryBuckets)),
                G = (0, k.createSelector)([W.yy, B.mb, B.Uv], ((e, t, s) => {
                    const n = y()((0, U.KN)(t.filter(U.F_)[0], e)),
                        {
                            languageCode: a
                        } = y()((0, U.xy)(n));
                    return {
                        languageCode: a,
                        label: e,
                        accents: s[e]
                    }
                }));
            var H = s("./app/j/study-modes/write/types.ts");
            const V = (0, k.createSelector)(F, (e => e.currentView)),
                z = (0, k.createSelector)(F, (e => e.isShowingInlineFeedback)),
                Q = ((0, k.createSelector)(F, (e => e.lastIntermissionView)), (0, k.createSelector)([A.EY, A.tq], ((e, t) => (0, j.KX)(e) ? (e => {
                    var t;
                    if (!e) return H.i9.QUESTION;
                    const {
                        submittedAnswer: s
                    } = e.feedback;
                    if ((null == s ? void 0 : s.type) !== d.xh.STRING_ANSWER) throw new Error("Write only supports String answers");
                    return null != s && null != (t = s.value) && t.trim() ? H.i9.FEEDBACK : H.i9.COPY_ANSWER
                })(t) : e.hasCompletedStudying ? H.i9.END : H.i9.CHECKPOINT))),
                K = (0, k.createSelector)([F], (e => e.currentView === H.i9.LOADING)),
                q = (0, l.PH)(H.x$.SET_CURRENT_VIEW),
                Y = (0, l.PH)(H.x$.SET_IS_SHOWING_INLINE_FEEDBACK),
                $ = (0, l.PH)(H.x$.SET_LAST_INTERMISSION_VIEW),
                X = () => (e, t) => {
                    const s = Q(t());
                    e(q(s))
                },
                J = 500;
            var ee = s("./app/j/studiable-data/types.ts"),
                te = (s("./node_modules/core-js/modules/es.array.sort.js"), s("./app/j/study-modes/legacy-common/utils/label-utils.ts"));

            function se(e, t) {
                const s = {};
                return t.forEach((t => {
                    const n = t[e];
                    n && (s[n] || (s[n] = []), s[n].push(t))
                })), s
            }
            const ne = (0, k.createSelector)([A.z5, B.mb], ((e, t) => {
                if (e.length < t.length) return 1;
                const s = se("round", e),
                    n = Math.max(...Object.keys(s).map((e => parseInt(e, 10))), 1);
                return s[n].length >= (n <= 1 || !s[n - 1] ? t.length : s[n - 1].filter((e => e.correctness !== a.p7P.CORRECT)).length) ? n + 1 : n
            }));

            function ae(e, t, s) {
                let n = e.get(t);
                if (void 0 === n) {
                    const a = (0, te.O$)(t, s);
                    n = Array.from(e.values()).find((e => e.label === a))
                }
                return n
            }
            const oe = (0, k.createSelector)([A.z5], (e => Math.max(...e.map((e => e.round)), 1))),
                re = (0, k.createSelector)([B.r9, A.z5], ((e, t) => {
                    const s = new Map,
                        n = e.studiableItems.filter(U.F_);
                    for (const a of n) {
                        const e = new Map;
                        for (const t of a.cardSides) e.set(t.sideId, t);
                        s.set(a.id, e)
                    }
                    return t.filter((e => s.has(e.studiableItemId))).filter((e => {
                        if (e.type !== ee.N.N_SIDED_CARD_ANSWER) return !1;
                        const {
                            promptSideIds: t,
                            answerSideIds: n
                        } = e, a = y()(s.get(e.studiableItemId)), o = ae(a, t[0], e.studiableItemId), r = ae(a, n[0], e.studiableItemId);
                        return void 0 !== o && void 0 !== r
                    })).map((e => {
                        var t;
                        if (e.type !== ee.N.N_SIDED_CARD_ANSWER) throw new Error("Write only supports NSidedCardAnswers");
                        const {
                            promptSideIds: n,
                            answerSideIds: o,
                            round: r,
                            studiableItemId: i
                        } = e, l = y()(s.get(e.studiableItemId)), d = ae(l, n[0], e.studiableItemId), u = null != (t = null == d ? void 0 : d.media) ? t : [], c = ae(l, o[0], e.studiableItemId), p = y()((0, U.xy)(y()(c)), "Expected at least one TextMedia connection, found none");
                        return {
                            expectedAnswer: {
                                type: a.DDH.TEXT,
                                ...p
                            },
                            isCorrect: e.correctness === a.p7P.CORRECT,
                            prompt: u,
                            round: r,
                            studiableItemId: i
                        }
                    }))
                })),
                ie = (0, k.createSelector)([re], (e => {
                    const t = se("round", e);
                    return Object.keys(t).map((e => {
                        const s = t[e];
                        return {
                            round: Number(e),
                            numAsked: s.length,
                            numCorrect: s.filter((e => e.isCorrect)).length,
                            answers: s
                        }
                    })).sort(((e, t) => e.round - t.round))
                }));
            var le = s("./app/j/utils/tamperProofNow.ts");
            const de = (0, k.createSelector)(A.wG, (e => {
                    if (e.type !== d.mw.WRITTEN_QUESTION) throw new Error("You cannot select a WrittenQuestion if the current question is not a written question.\n        The current question type is: " + e.type + ".");
                    return e
                })),
                ue = (0, k.createSelector)([ne, W.VG, W.Ae, A.z5, W.bl], ((e, t, s, n, o) => {
                    const r = y()(p()(n), "Trying to save a unexisting answer");
                    return n => ({
                        personId: n.personId.toString(),
                        sessionId: n.id,
                        studyMode: a.StudyModeType.WRITE,
                        round: e,
                        correctness: r.correctness,
                        containerType: o.studiableContainerType,
                        containerId: o.studiableContainerId,
                        itemType: a.zqd.N_SIDED_CARD,
                        itemId: o.id,
                        promptSideIds: [t],
                        answerSideIds: [s],
                        timestamp: (0, le.Z)()
                    })
                })),
                ce = (0, k.createSelector)([A.ZZ, W.bl, W.VG, W.Ae, ne], ((e, t, s, n, o) => ({
                    type: ee.N.N_SIDED_CARD_ANSWER,
                    correctness: e.isCorrect ? a.p7P.CORRECT : a.p7P.INCORRECT,
                    round: o,
                    studiableItemId: t.id,
                    studyModeType: a.StudyModeType.WRITE,
                    timestamp: (0, le.Z)(),
                    promptSideIds: [s],
                    answerSideIds: [n]
                })));
            var pe = s("./app/j/syncers/StudiableAnswerSyncer.ts");
            const me = e => (t, s) => {
                    (0, f.batch)((() => {
                        t((0, T.ig)(e)), t((0, T.YC)(null)), t(X())
                    }));
                    V(s()) === H.i9.QUESTION && t((0, O.zD)(a.WFi.VIEW_START))
                },
                ge = () => async (e, t) => {
                    const s = t(),
                        n = (0, P.Gw)(s),
                        o = y()(p()((0, A.z5)(s)), "Invalid attempt to finish a question without having submitted an answer");
                    if (e((0, x.yd)(!1)), n.display.isCookieSupportEnabled) {
                        await e((0, M.T_)());
                        const n = (0, D.Gg)(t()),
                            a = ue(s);
                        pe.Z.addAndSave(a(n))
                    }
                    e((0, O.zD)(a.WFi.VIEW_END)), (0, f.batch)((() => {
                        e(me([o])), e((0, x.sy)(!1))
                    }))
                }, he = () => (e, t) => {
                    e($(H.i9.CHECKPOINT)), (e => (0, R.$)(e) && (0, R.W)((0, P.nI)(e())))(t) ? (e(q(H.i9.AD_MODAL)), e((0, L.t0)())) : e(me([]))
                }, _e = e => {
                    let {
                        value: t
                    } = e;
                    return async (e, s) => {
                        await e((0, T.xS)((0, j.zo)(t)));
                        const {
                            feedback: n,
                            isCorrect: o,
                            gradingSettingsSuggestion: r,
                            metadata: i
                        } = (0, A.ZZ)(s()), l = n.expectedAnswer.value, d = (0, A.wG)(s()), u = n.expectedAnswerDescription ? (0, b.Sg)(n.expectedAnswerDescription).text : null;
                        let c = !1;
                        if (!o && (0, w.A)(l, t, null == u ? void 0 : u.languageCode) && (0, P.qg)(s()) && (0, N.lc)(s())) {
                            e((0, x.yd)(!0)), e((0, O.$N)(a.AuQ.REQUEST_START));
                            const s = await (p = l, m = t, g = null == u ? void 0 : u.languageCode, void 0 === g && (g = a.spR.ENGLISH), (0, C.cZ)("/webapi/3.8/grading/grade-longtext-answer", {
                                expectedAnswer: p,
                                submittedAnswer: m,
                                languageCode: g
                            }, v.Un).then((e => e)).catch((e => (I.Z.warning("Error hitting longtext grading service: " + e), null))));
                            if (s) {
                                if (e((0, O.$N)(a.AuQ.REQUEST_END, {
                                        request_successful: !0
                                    })), (null == s ? void 0 : s.responses[0].data.longtextGradingResult.grade) === a.lcN.CORRECT) {
                                    const t = {
                                        isCorrect: !0,
                                        feedback: n,
                                        gradingSettingsSuggestion: r,
                                        metadata: i
                                    };
                                    e((0, T.YC)(t)), c = !0
                                }
                                e((0, x.sy)(!0)), e((0, x.Iu)({
                                    currentQuestion: d,
                                    submittedAnswerValue: t,
                                    expectedAnswerValue: l,
                                    gradingResult: s.responses[0].data.longtextGradingResult
                                }))
                            } else e((0, O.$N)(a.AuQ.REQUEST_END, {
                                request_successful: !1
                            })), (0, _.Z)({
                                duration: S.th.DEFAULT,
                                icon: "exclamation",
                                isDismissible: !0,
                                message: (0, h.Z)("study_modes.smart_grading.toast_notification"),
                                onClickSecondaryAction: () => {
                                    e((0, L.bL)(!0))
                                },
                                secondaryActionLabel: (0, h.Z)("study_modes.smart_grading.toast_cta")
                            })
                        }
                        var p, m, g;
                        const E = ce(s());
                        e((0, T.vE)([E])), e((0, O.zD)(a.WFi.ANSWER, {
                            answer_text: t,
                            correctness: o || c ? a.p7P.CORRECT : a.p7P.INCORRECT
                        })), l.toLocaleLowerCase() === t.toLocaleLowerCase() ? 
                        (e(Y(!0)), window.setTimeout((() => {e(ge()), e(Y(!1))}), J)) : 
                        (e(Y(!0)), window.setTimeout((() => {e(ge()), e(Y(!1))}), J))
                    }
                }, Se = e => (t, s) => {
                    const n = s();
                    t((0, O.zD)(e ? a.WFi.OVERRIDE : a.WFi.OVERRIDE_TO_INCORRECT));
                    const o = (0, A.z5)(n),
                        r = y()(p()(o), "Invalid attempt to modify undefined answer"),
                        i = [...g()(o, 1), {
                            ...r,
                            correctness: e
                        }];
                    t((0, x.cd)()), t((0, T.h5)(i)), t(ge())
                };
            var Ee = s("./node_modules/lodash/difference.js"),
                ye = s.n(Ee),
                fe = s("./app/j/compatibility/logger/getLoggerConfig.ts"),
                je = s("./app/j/study-engine/factory.ts"),
                Te = s("./app/j/study-modes/legacy-common/logging/selectors.ts"),
                Ae = s("./app/j/study-modes/legacy-common/studiable-data/actions.ts");
            const be = function(e, t, s) {
                    return void 0 === s && (s = {}), n => {
                        n((0, O.pJ)(e, t, {
                            source: a.brn.DIRECT,
                            ...s
                        }))
                    }
                },
                xe = function(e, t) {
                    return void 0 === t && (t = {}), (s, n) => {
                        const o = n(),
                            r = de(o),
                            i = (0, b.Sg)(r.prompt);
                        s((0, O.zD)(e, {
                            answer_has_text: !0,
                            answer_type: a.oK4.TYPING,
                            prompt_has_audio: !!i.audio,
                            prompt_has_image: !!i.image,
                            prompt_has_text: !!i.text,
                            ...t
                        }))
                    }
                };
            var Ie = s("./app/j/study-modes/legacy-common/settings/utils/index.ts"),
                ve = s("./node_modules/lodash/isEqual.js"),
                Ce = s.n(ve),
                Ne = s("./app/j/i18n/LocalizationConstants.ts"),
                we = s("./app/j/legacyAssistant/types/QAssistantModeTypes.ts");
            const Oe = (0, k.createSelector)([P.e, P.pE], ((e, t) => ({
                    knowledgeLevel: null,
                    nSidedCardSettings: {
                        enabledQuestionTypes: [(0, we.Q)().written],
                        enabledPromptSides: (0, Ie.TR)(e),
                        enabledAnswerSides: (0, Ie.TR)(t),
                        enabledWrittenAnswerSides: []
                    },
                    shuffle: !1,
                    studyPathGoal: null,
                    taskSequence: null,
                    userLanguageCode: Ne.ZX
                }))),
                Me = (0, k.createSelector)([B.XQ], (e => ({
                    promptWith: {
                        definition: !e,
                        location: e,
                        term: !1
                    },
                    answerWith: {
                        definition: !1,
                        location: !1,
                        term: !0
                    },
                    locationQuestionTypes: [(0, we.Q)().written]
                }))),
                De = e => Object.values(e).filter(Boolean).length,
                Le = (0, k.createSelector)([P.Iz, B.XQ, B.hy], ((e, t, s) => {
                    let {
                        answerWith: n,
                        promptWith: a
                    } = e;
                    return !n.location && (!(n.definition && !s) && (!(a.location && !t) && (!(De(a) > 1) && (!(De(n) > 1) && !Ce()(n, a)))))
                })),
                Pe = (0, k.createSelector)([B.r9, P.e], ((e, t) => {
                    if (!t.location) return e;
                    const {
                        studiableItems: s,
                        setIdToDiagramImage: n,
                        exampleSentenceByStudiableItemId: o,
                        studiableMetadataByType: r
                    } = e;
                    return {
                        studiableItems: s.filter((e => (0, U.F_)(e) && null !== (0, U.KN)(e, a.dU_.LOCATION))),
                        setIdToDiagramImage: n,
                        exampleSentenceByStudiableItemId: o,
                        studiableMetadataByType: r
                    }
                })),
                Re = () => (e, t) => {
                    const s = t(),
                        n = (0, P.Iz)(s),
                        a = Me(s),
                        o = (0, Ie.HU)(a, n);
                    e((0, L.D5)(o)), e(((e, t) => {
                        const s = t();
                        Le(s) || e((0, L.ex)({
                            ...(0, P.Iz)(s),
                            ...Me(s)
                        }))
                    }))
                };
            var ke = s("./app/j/models/QStudiableAnswer.ts");
            const Ue = async (e, t) => {
                if (!e) return [];
                const s = await (async e => (await ke.Z.where({
                        sessionId: e.id,
                        personId: e.personId
                    })).map((e => e.getProperties())))(e),
                    n = new Set(t.map((e => e.id)));
                return s.filter((e => n.has(e.itemId))).map(U.lt)
            };
            var We = s("./app/j/utils/StudyPageVisibilityTracker.ts");
            const Be = () => async (e, t) => {
                var s, n;
                const a = t(),
                    o = (0, A.z5)(a),
                    r = (0, B.CF)(a),
                    i = je.Z.create(d.lt.WEB_WRITE, Pe(a), o, Oe(a), {
                        acceptsPartialAnswer: null != (s = (0, P.R9)(a)) && s,
                        acceptsAnswersWithTypos: !1,
                        acceptsSmartGrading: null != (n = (0, P.qg)(a)) && n
                    }, r, {});
                (0, f.batch)((() => {
                    e((0, T.ox)(i)), e(me([]))
                }))
            }, Fe = () => async (e, t) => {
                const s = t(),
                    n = await Ue((0, D.sl)(s), Pe(s).studiableItems);
                e(be(a.WVJ.BEGIN, {
                    loggerConfig: (0, fe.c)()
                })), e((0, T.h5)(n)), e(Be())
            }, Ze = Fe, Ge = () => async (e, t) => {
                e($(H.i9.END)), (e => V(e()) === H.i9.END && (0, R.W)((0, P.nI)(e())))(t) ? (e(q(H.i9.AD_MODAL)), e((0, L.t0)())) : (e((0, M.ZN)()), e((0, M.kf)(null)), e((0, M.Ch)(null)), e(be(a.WVJ.BEGIN, {
                    loggerConfig: (0, fe.c)()
                })), e((0, T.h5)([])), e(Be()))
            }, He = e => async (t, s) => {
                const n = s(),
                    o = Array.from((0, B.Cv)(n)),
                    r = ye()(o, e),
                    i = ye()(e, o);
                r.forEach((e => t((0, Ae.lr)(e)))), i.forEach((e => t((0, Ae.Dk)(e, a.cip.WRITE)))), t((0, L.hv)(!0)), window.history.pushState({}, "", (0, P.LP)(n)), t(Ge())
            };
            var Ve = s("./app/j/core/legacy_store/LegacyStoreProvider.tsx"),
                ze = s("./node_modules/redux/lib/redux.js"),
                Qe = s("./node_modules/lodash/intersection.js"),
                Ke = s.n(Qe),
                qe = s("./app/j/components/ModeControls.tsx"),
                Ye = s("./node_modules/react/index.js"),
                $e = s("./app/j/study-modes/legacy-common/containers/OptionsModalContainer.ts"),
                Xe = s("./app/j/components/UIProgressBar.tsx"),
                Je = s("./node_modules/react/jsx-runtime.js");
            const et = function(e) {
                    return (0, Je.jsxs)("div", {
                        className: "WriteProgressBar",
                        children: [(0, Je.jsx)(Xe.Z, {
                            max: e.max,
                            value: e.value,
                            variant: e.variant
                        }), (0, Je.jsxs)("div", {
                            className: "WriteProgressBar-label",
                            children: [(0, Je.jsx)("div", {
                                className: "WriteProgress-labelText",
                                children: e.label
                            }), (0, Je.jsx)("div", {
                                className: "WriteProgress-value",
                                children: e.value
                            })]
                        })]
                    })
                },
                tt = 100;

            function st(e) {
                return e.remaining.length + e.incorrect.length + e.correct.length || tt
            }

            function nt(e) {
                return (0, Je.jsxs)("div", {
                    className: "WriteProgress",
                    children: [(0, Je.jsx)(at, {
                        masteryBuckets: e.masteryBuckets
                    }), (0, Je.jsx)(ot, {
                        masteryBuckets: e.masteryBuckets
                    }), (0, Je.jsx)(rt, {
                        masteryBuckets: e.masteryBuckets
                    })]
                })
            }

            function at(e) {
                const {
                    masteryBuckets: t
                } = e, s = t.remaining.length;
                return (0, Je.jsx)(et, {
                    label: (0, h.Z)("modes.learn.side_panel.remaining_label"),
                    max: st(t),
                    value: s
                })
            }

            function ot(e) {
                const {
                    masteryBuckets: t
                } = e, s = t.incorrect.length;
                return (0, Je.jsx)(et, {
                    label: (0, h.Z)("modes.learn.side_panel.incorrect_label"),
                    max: st(t),
                    value: s,
                    variant: "invalid"
                })
            }

            function rt(e) {
                const {
                    masteryBuckets: t
                } = e, s = t.correct.length;
                return (0, Je.jsx)(et, {
                    label: (0, h.Z)("modes.learn.side_panel.correct_label"),
                    max: st(t),
                    value: s,
                    variant: "valid"
                })
            }
            const it = Ye.memo(nt),
                lt = (0, k.createStructuredSelector)({
                    masteryBuckets: Z
                }),
                dt = (0, f.connect)(lt, null, null, {
                    context: Ve.tC
                })(it);
            var ut = s("./app/j/utils/ModeHelper.ts");
            const ct = ["answerWith", "promptWith", "studyStarredOnly"];

            function pt(e) {
                return (0, Je.jsxs)(Je.Fragment, {
                    children: [(0, Je.jsx)(qe.Z, {
                        modeName: (0, ut.ZP)(h.Z, a.StudyModeType.WRITE),
                        modeType: (0, ut.ye)(a.StudyModeType.WRITE),
                        onClickOptions: () => {
                            e.actions.setIsOptionsModalOpen(!0)
                        },
                        progress: e.isWriteLoading ? null : (0, Je.jsx)(dt, {}),
                        studyablePath: e.studiablePath
                    }), e.isOptionsModalOpen ? (0, Je.jsx)($e.Z, {
                        isModalOpen: e.isOptionsModalOpen,
                        onCloseModal: t => {
                            e.actions.setIsOptionsModalOpen(!1);
                            const s = Array.from(t);
                            Ke()(s, ct).length > 0 && e.actions.restartWrite()
                        },
                        onResetProgress: () => {
                            e.actions.setIsOptionsModalOpen(!1), e.actions.restartWriteWithNewSession()
                        }
                    }) : null]
                })
            }
            const mt = Ye.memo(pt),
                gt = (0, k.createStructuredSelector)({
                    isOptionsModalOpen: P.Lf,
                    isWriteLoading: K,
                    studiablePath: B.f3
                }),
                ht = (0, f.connect)(gt, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        setIsOptionsModalOpen: L.bL,
                        restartWrite: Ze,
                        restartWriteWithNewSession: Ge
                    }, e)
                })), null, {
                    context: Ve.tC
                })(mt);
            var _t = s("./app/j/components/UILoadingIndicator.tsx");

            function St() {
                return (0, Je.jsx)("div", {
                    className: "WriteLoading",
                    "data-testid": "WriteLoading",
                    children: (0, Je.jsx)(_t.Z, {
                        size: "medium"
                    })
                })
            }
            const Et = Ye.memo(St);
            var yt = s("./app/j/compatibility/logger/useLogger.ts"),
                ft = s("./app/j/components/T.tsx"),
                jt = s("./app/j/components/UIHeading.tsx"),
                Tt = s("./app/j/hooks/useClickAway.ts"),
                At = (s("./node_modules/core-js/modules/es.array.includes.js"), s("./app/j/components/UIButton.tsx")),
                bt = s("./app/j/hocs/keydownDecorator.tsx"),
                xt = s("./app/j/hooks/useBreakpoint.ts"),
                It = s("./app/j/utils/BreakpointsHelper.ts"),
                vt = s("./app/j/utils/UserAgentHelper.ts");
            const Ct = (0, bt.Z)()((function(e) {
                let {
                    keydownEvent: t,
                    onClick: s
                } = e;
                const [n, a] = (0, Ye.useState)(!1), o = (0, xt.Z)(), r = (0, It.Nc)(o, "m"), i = (0, It.Nc)(o, "s");
                (0, Ye.useEffect)((() => {
                    !t || n || bt.a.includes(t.key) || (t.preventDefault(), s(), a(!0))
                }), [n, t]);
                const l = (0, vt.b1)() ? (0, h.Z)("assistant.continue_button.touchscreen_text") : (0, h.Z)("assistant.continue_button.non_touchscreen_text");
                return (0, Je.jsx)("div", {
                    className: "FixedContinueButton",
                    children: (0, Je.jsx)(At.Z, {
                        "aria-label": l,
                        hero: r && !i,
                        onClick: s,
                        width: r ? "fill" : "auto",
                        children: l
                    })
                })
            }));
            var Nt = s("./node_modules/classnames/index.js"),
                wt = s.n(Nt);

            function Ot(e) {
                return (0, Je.jsxs)("div", {
                    className: wt()("WriteCheckpointRow", "WriteCheckpointRow--" + e.variant),
                    children: [(0, Je.jsx)("div", {
                        className: "WriteCheckpointRow-element",
                        children: e.label
                    }), (0, Je.jsx)("div", {
                        className: "WriteCheckpointRow-element",
                        children: e.data
                    }), (0, Je.jsxs)("div", {
                        className: "WriteCheckpointRow-element",
                        children: [e.percent, "%"]
                    })]
                })
            }
            const Mt = Ye.memo(Ot);

            function Dt(e, t) {
                const s = (0, Ve.I0)();
                (0, Ye.useEffect)((() => (s(be(a.WVJ.ENTER_SCREEN, t, {
                    screen: e
                })), () => {
                    s(be(a.WVJ.EXIT_SCREEN, t, {
                        screen: e
                    }))
                })), [s, e])
            }
            const Lt = (e, t) => Math.floor(100 * e / t);

            function Pt(e) {
                const {
                    logEvent: t
                } = (0, yt.wL)(), s = Ye.useRef(null);
                return Dt(a.HtK.CHECKPOINT, {
                    loggers: {
                        logEvent: t
                    }
                }), (0, Tt.Z)(s, e.actions.finishCheckpoint), (0, Je.jsxs)("div", {
                    className: "WriteCheckpoint",
                    "data-testid": "WriteCheckpoint",
                    ref: s,
                    children: [(0, Je.jsx)("div", {
                        className: "WriteCheckpoint-heading",
                        children: (0, Je.jsx)(jt.Z, {
                            deprecatedStyle: !0,
                            size: 3,
                            children: (0, Je.jsx)(ft.Z, {
                                id: "modes.learn.content.checkpoint.round_number",
                                roundNumber: e.roundNumber
                            })
                        })
                    }), (0, Je.jsxs)("div", {
                        className: "WriteCheckpoint-table",
                        children: [(0, Je.jsx)(Rt, {
                            checkpoint: e.checkpoint
                        }), (0, Je.jsx)(Ut, {
                            checkpoint: e.checkpoint
                        }), (0, Je.jsx)(kt, {
                            masteryBuckets: e.masteryBuckets
                        }), (0, Je.jsx)("div", {
                            className: "WriteCheckpoint-anyKeyWrapper",
                            children: (0, Je.jsx)(Ct, {
                                onClick: e.actions.finishCheckpoint
                            })
                        })]
                    })]
                })
            }

            function Rt(e) {
                const {
                    roundResults: t
                } = e.checkpoint, s = t ? t.filter((e => e.isCorrect)).length : 0, n = t ? t.length : 0;
                return (0, Je.jsx)(Mt, {
                    data: s,
                    label: (0, h.Z)("modes.learn.content.checkpoint.correct_label"),
                    percent: Lt(s, n),
                    variant: H.ru.CORRECT
                })
            }

            function kt(e) {
                const {
                    correct: t,
                    incorrect: s,
                    remaining: n
                } = e.masteryBuckets, a = t.length, o = t.length + s.length + n.length;
                return (0, Je.jsx)(Mt, {
                    data: a + " / " + o,
                    label: (0, h.Z)("modes.learn.content.checkpoint.overall_label"),
                    percent: Lt(a, o),
                    variant: H.ru.OVERALL
                })
            }

            function Ut(e) {
                const {
                    roundResults: t
                } = e.checkpoint, s = t ? t.filter((e => !e.isCorrect)).length : 0, n = t ? t.length : 0;
                return (0, Je.jsx)(Mt, {
                    data: s,
                    label: (0, h.Z)("modes.learn.content.checkpoint.incorrect_label"),
                    percent: Lt(s, n),
                    variant: H.ru.INCORRECT
                })
            }
            const Wt = Ye.memo(Pt),
                Bt = (0, k.createStructuredSelector)({
                    checkpoint: A.Uy,
                    masteryBuckets: Z,
                    roundNumber: oe
                }),
                Ft = (0, f.connect)(Bt, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        finishCheckpoint: he
                    }, e)
                })), null, {
                    context: Ve.tC
                })(Wt);
            var Zt = s("./node_modules/lodash/negate.js"),
                Gt = s.n(Zt),
                Ht = s("./app/j/components/UIDelimiter.tsx"),
                Vt = s("./app/j/components/UIHr.tsx"),
                zt = s("./app/j/i18n/useTranslation.ts");

            function Qt(e) {
                const t = wt()("WriteFeedbackItem", {
                    ["WriteFeedbackItem--" + e.variant]: !!e.variant
                });
                return (0, Je.jsxs)("div", {
                    className: t,
                    "data-testid": "feedback-item",
                    children: [(0, Je.jsx)("div", {
                        className: "WriteFeedbackItem-label",
                        children: (0, Je.jsx)("p", {
                            className: "WriteFeedbackItem-labelContent",
                            children: e.label
                        })
                    }), (0, Je.jsx)("div", {
                        className: "WriteFeedbackItem-content",
                        children: e.children
                    })]
                })
            }
            Qt.defaultProps = {
                variant: "default"
            };
            const Kt = Ye.memo(Qt);
            var qt = s("./app/j/study-modes/test/utils/getReactKeyForQuestionElement.ts"),
                Yt = s("./app/j/components/Image.tsx");

            function $t(e) {
                return (0, Je.jsx)("div", {
                    className: "WriteImageAttribute",
                    children: (0, Je.jsx)(Yt.Z, {
                        alt: e.altText,
                        src: e.imageAttribute.url
                    })
                })
            }
            const Xt = Ye.memo($t);
            var Jt = s("./app/j/diagrams/components/Diagram.tsx"),
                es = s("./app/j/diagrams/components/DiagramShape.tsx"),
                ts = s("./app/j/diagrams/types.ts");
            const ss = e => e.target.openPopup();

            function ns(e) {
                const {
                    shape: t
                } = e.locationAttribute;
                return (0, Je.jsx)("div", {
                    className: "WriteLocationAttribute",
                    children: (0, Je.jsx)(Jt.default, {
                        diagramShapes: (0, Je.jsx)(es.default, {
                            onAdd: ss,
                            shape: t
                        }),
                        image: e.diagramImage,
                        variant: ts.U.ZOOM_TO_POINTS
                    })
                })
            }
            const as = Ye.memo(ns);
            var os = s("./app/j/components/FormattedText.tsx");
            const rs = {
                min: 20,
                max: 30,
                mode: "multi"
            };

            function is(e) {
                const {
                    textAttribute: t
                } = e;
                return t.plainText || t.richText ? (0, Je.jsx)("div", {
                    className: "WriteTextAttribute",
                    children: (0, Je.jsx)(os.Z, {
                        lang: t.languageCode,
                        richText: t.richText,
                        text: t.plainText,
                        textfit: rs
                    })
                }) : null
            }
            const ls = Ye.memo(is);
            var ds = s("./app/j/audio_playback/thunks.ts"),
                us = s("./app/j/core/default_store/DefaultStoreProvider.tsx"),
                cs = s("./app/j/components/UIIconButton.tsx");

            function ps(e) {
                const t = e.url;
                return {
                    audioId: t,
                    url: t
                }
            }
            const ms = function(e) {
                    return Ye.useEffect((() => {
                        e.shouldAutoplay && e.actions.stopAndPlayAudio({
                            audioItems: [ps(e.audioAttribute)]
                        })
                    }), [e.shouldAutoplay, e.actions, e.audioAttribute]), (0, Je.jsx)("div", {
                        className: "WriteAudioAttribute",
                        children: (0, Je.jsx)(cs.Z, {
                            icon: "audio",
                            onClick: t => {
                                t.preventDefault(), e.actions.stopAndPlayAudio({
                                    audioItems: [ps(e.audioAttribute)]
                                })
                            },
                            variant: "borderless"
                        })
                    })
                },
                gs = (0, f.connect)(null, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        stopAndPlayAudio: ds.DQ
                    }, e)
                })), o.Q, {
                    context: us.jJ
                })(ms);

            function hs(e) {
                const t = (0, b.Sg)(e.questionElements);
                return (0, Je.jsxs)("div", {
                    className: "WriteQuestionElements",
                    children: [(0, Je.jsxs)("div", {
                        className: "WriteQuestionElements-visualElements",
                        children: [t.text ? (0, Je.jsx)(ls, {
                            textAttribute: t.text
                        }, "text") : null, t.image ? (0, Je.jsx)(Xt, {
                            imageAttribute: t.image
                        }, "image") : null, t.location ? (0, Je.jsx)(as, {
                            diagramImage: t.location.diagramImage,
                            locationAttribute: t.location
                        }, (0, qt.Z)(e.questionElements, 0)) : null]
                    }), (0, Je.jsx)("div", {
                        className: "WriteQuestionElements-audioWrapper",
                        children: t.audio ? (0, Je.jsx)(gs, {
                            audioAttribute: t.audio,
                            shouldAutoplay: e.shouldAutoplayAudio
                        }) : null
                    })]
                })
            }
            const _s = Ye.memo(hs);

            function Ss(e) {
                return (0, Je.jsx)(Kt, {
                    label: e.label,
                    variant: e.variant,
                    children: (0, Je.jsx)(_s, {
                        questionElements: e.questionElements,
                        shouldAutoplayAudio: e.shouldAutoplayAudio
                    })
                })
            }
            const Es = Ye.memo(Ss);
            var ys = s("./app/j/components/DeprecatedSpecialCharacterTextarea.tsx"),
                fs = s("./app/j/i18n/getLocalizedLanguage.ts"),
                js = s("./node_modules/keycode-js/dist/keycode.cjs.js"),
                Ts = s("./app/j/utils/breakpoint.ts");

            function As(e) {
                const {
                    actions: t
                } = e, s = Ye.useRef(null), [n, a] = function(e, t) {
                    const [s, n] = Ye.useState("");
                    return Ye.useEffect((() => {
                        n(""), t.current && t.current.focus()
                    }), [t, e]), [s, n]
                }(e.currentItemId, s), o = () => {
                    t.submitAnswer && t.submitAnswer({
                        submittedAnswer: n
                    })
                };
                return (0, Je.jsxs)("form", {
                    className: "WriteTypeTheAnswerField",
                    onSubmit: e => {
                        e.preventDefault(), o()
                    },
                    children: [(0, Je.jsx)(bs, {
                        ...e,
                        answerInput: n,
                        onChangeInput: e => {
                            a(e.target.value), t.onChangeInput && t.onChangeInput(e)
                        },
                        onKeyDown: e => {
                            e.keyCode !== js.AC || e.shiftKey || (e.preventDefault(), o())
                        },
                        ref: s
                    }), e.actions.submitAnswer ? (0, Je.jsx)(Is, {
                        ...e
                    }) : null]
                })
            }
            const bs = Ye.forwardRef(((e, t) => (0, Je.jsx)("div", {
                className: "WriteTypeTheAnswerField-input",
                children: (0, Je.jsx)(ys.Z, {
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: "off",
                    disabled: e.isValid,
                    invalid: !e.isValid && void 0,
                    label: (0, Je.jsx)(xs, {
                        editionContext: e.editionContext,
                        shouldShowLang: e.shouldShowLang
                    }),
                    languageCodes: [e.editionContext.languageCode],
                    onChange: e.onChangeInput,
                    onKeyDown: e.onKeyDown,
                    ref: t,
                    specificAccents: e.editionContext.accents,
                    spellCheck: !1,
                    type: "autoExpand",
                    value: e.answerInput,
                    variant: "inline"
                })
            })));

            function xs(e) {
                const {
                    shouldShowLang: t,
                    editionContext: s
                } = e;
                if (t) return (0, Je.jsx)(ft.Z, {
                    id: "assistant.type_answer.type_the_language_label",
                    language: (0, fs.w)(e.editionContext.languageCode)
                });
                switch (s.label) {
                    case a.dU_.WORD:
                        return (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.type_the_term_label"
                        });
                    case a.dU_.DEFINITION:
                        return (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.type_the_definition_label"
                        });
                    default:
                        return (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.type_the_answer_label"
                        })
                }
            }

            function Is(e) {
                const {
                    matches: t
                } = (0, Ts.Z)({
                    above: "m",
                    below: "l"
                }), s = wt()("WriteTypeTheAnswerField-actions", {
                    "is-correct": e.isValid
                });
                return (0, Je.jsx)("div", {
                    className: s,
                    children: (0, Je.jsx)(At.Z, {
                        type: "submit",
                        width: t ? "fill" : "auto",
                        children: e.isValid ? (0, Je.jsxs)("span", {
                            children: [(0, Je.jsx)(ft.Z, {
                                id: "assistant.feedback.correct"
                            }), " ", (0, Je.jsx)("span", {
                                "aria-label": "happy-emoji",
                                role: "img",
                                children: "рџЂ"
                            })]
                        }) : (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.answer"
                        })
                    })
                })
            }
            const vs = Ye.memo(As);

            function Cs(e) {
                const {
                    t
                } = (0, zt.ZP)(), s = Ye.useRef(null), [n, a] = function(e) {
                    const t = (0, Ve.I0)(),
                        [s, n] = Ye.useState(!1);
                    return [s, function(s) {
                        const a = (0, j.zo)(s.target.value);
                        t((0, T.on)(a, (t => {
                            n(t), t && setTimeout((() => {
                                n(!1), e(a)
                            }), J)
                        })))
                    }]
                }(e.actions.finishQuestion), o = e.question.metadata.studiableItemId, r = y()(e.gradedAnswer.feedback.expectedAnswerDescription, "Expected answer description is null for written question.");
                return (0, Je.jsxs)("div", {
                    className: "WriteCopyAnswerView",
                    children: [(0, Je.jsx)("div", {
                        className: "WriteCopyAnswerView-heading",
                        children: (0, Je.jsx)(ft.Z, {
                            id: "modes.learn.content.grade_answer.copy_answer_label"
                        })
                    }), (0, Je.jsx)("div", {
                        className: "WriteCopyAnswerView-content",
                        children: (0, Je.jsxs)(Ht.Z, {
                            separator: (0, Je.jsx)(Vt.Z, {}),
                            children: [(0, Je.jsx)(Es, {
                                label: t("modes.learn.content.grade_answer.prompt_label"),
                                questionElements: e.question.prompt
                            }), (0, Je.jsx)(Es, {
                                label: t("modes.learn.content.grade_answer.correct_label"),
                                questionElements: r
                            }), (0, Je.jsx)(Ns, {
                                answerEditionContext: e.answerEditionContext,
                                currentItemId: o,
                                handleChange: e => {
                                    s.current && clearTimeout(s.current), s.current = setTimeout((() => {
                                        a(e)
                                    }), 500)
                                },
                                isAnswerCorrect: n,
                                shouldShowLangInLabel: e.shouldShowLangInLabel
                            })]
                        })
                    })]
                })
            }

            function Ns(e) {
                return (0, Je.jsx)(vs, {
                    actions: {
                        onChangeInput: e.handleChange
                    },
                    currentItemId: e.currentItemId,
                    editionContext: e.answerEditionContext,
                    isValid: e.isAnswerCorrect,
                    shouldShowLang: e.shouldShowLangInLabel
                })
            }
            const ws = Ye.memo(Cs),
                Os = (0, k.createStructuredSelector)({
                    answerEditionContext: G,
                    shouldShowLangInLabel: Gt()(W.Yt),
                    gradedAnswer: A.ZZ,
                    question: de
                }),
                Ms = (0, f.connect)(Os, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        finishQuestion: ge
                    }, e)
                })), null, {
                    context: Ve.tC
                })(ws);
            var Ds = s("./app/j/components/UIIcon.tsx"),
                Ls = s("./app/j/i18n/Trans.tsx");
            const Ps = {
                min: 16,
                max: 30,
                mode: "multi"
            };

            function Rs(e) {
                let {
                    answer: t,
                    diagramImage: s
                } = e;
                const n = wt()("WriteAnswer", {
                    "WriteAnswer--correct": t.isCorrect,
                    "WriteAnswer--incorrect": !t.isCorrect
                });
                return (0, Je.jsxs)("div", {
                    className: n,
                    children: [(0, Je.jsx)("div", {
                        className: "WriteAnswer-icon",
                        children: (0, Je.jsx)(Ds.Z, {
                            icon: t.isCorrect ? "check" : "close-x"
                        })
                    }), (0, Je.jsx)("div", {
                        className: "WriteAnswer-answer",
                        children: (0, Je.jsx)(Us, {
                            textMedia: t.expectedAnswer
                        })
                    }), (0, Je.jsx)("div", {
                        className: "WriteAnswer-prompt",
                        children: (0, Je.jsx)(ks, {
                            diagramImage: s,
                            prompt: t.prompt
                        })
                    })]
                })
            }

            function ks(e) {
                const t = e.prompt.map((t => {
                    switch (t.type) {
                        case a.DDH.TEXT:
                            return (0, Je.jsx)(Us, {
                                textMedia: t
                            }, t.plainText);
                        case a.DDH.IMAGE:
                            return (0, Je.jsx)(Ws, {
                                imageMedia: t
                            }, t.url);
                        case a.DDH.DIAGRAM_SHAPE:
                            return (0, Je.jsx)(Bs, {
                                diagramImage: e.diagramImage,
                                shape: t.shape
                            }, t.shape);
                        default:
                            return null
                    }
                }));
                return (0, Je.jsx)(Je.Fragment, {
                    children: t
                })
            }

            function Us(e) {
                const t = e.textMedia;
                return t.plainText || t.richText ? (0, Je.jsx)(os.Z, {
                    lang: t.languageCode,
                    richText: t.richText,
                    text: t.plainText,
                    textfit: Ps
                }) : null
            }

            function Ws(e) {
                const t = e.imageMedia;
                return (0, Je.jsx)(Yt.Z, {
                    shape: "square",
                    size: "s",
                    src: t.url
                })
            }

            function Bs(e) {
                const {
                    diagramImage: t,
                    shape: s
                } = e, n = y()(t, "Attempted to render a Diagram without a Diagram Image");
                return (0, Je.jsx)(Jt.default, {
                    diagramShapes: (0, Je.jsx)(es.default, {
                        shape: s
                    }),
                    image: n,
                    variant: ts.U.ZOOM_TO_POINTS
                })
            }
            const Fs = Ye.memo(Rs),
                Zs = (e, t) => e + "/" + t + " - " + Math.round(e / t * 100) + "%";

            function Gs(e) {
                const {
                    logEvent: t
                } = (0, yt.wL)();
                return Dt(a.HtK.RESULTS, {
                    loggers: {
                        logEvent: t
                    }
                }), Ye.useEffect((() => {
                    e.actions.updateProgressAndFinishSession()
                }), []), (0, Je.jsx)("div", {
                    className: "WriteEndView",
                    children: e.sessionSummary.map((t => (0, Ye.createElement)(Hs, {
                        ...e,
                        key: t.round,
                        round: t
                    })))
                })
            }

            function Hs(e) {
                const {
                    round: t,
                    diagramImage: s
                } = e;
                return (0, Je.jsxs)("div", {
                    className: "WriteEndView-round",
                    children: [(0, Je.jsxs)("div", {
                        className: "WriteEndView-roundHeader",
                        children: [(0, Je.jsx)(Vs, {
                            round: t
                        }), 1 === t.round ? (0, Je.jsx)(zs, {
                            actions: e.actions
                        }) : (0, Je.jsx)(Qs, {
                            actions: e.actions,
                            round: t
                        })]
                    }), t.answers.map((e => (0, Je.jsx)(Fs, {
                        answer: e,
                        diagramImage: s
                    }, e.studiableItemId)))]
                }, "Round " + t.round)
            }

            function Vs(e) {
                const {
                    round: t
                } = e;
                return (0, Je.jsxs)("div", {
                    className: "WriteEndView-roundSummary",
                    children: [(0, Je.jsx)("div", {
                        className: "WriteEndView-header",
                        children: (0, Je.jsx)(ft.Z, {
                            id: "modes.learn.content.analyze.round_number",
                            roundNumber: t.round
                        })
                    }), (0, Je.jsx)("div", {
                        className: "WriteEndView-subheader",
                        children: Zs(t.numCorrect, t.numAsked)
                    })]
                })
            }

            function zs(e) {
                return (0, Je.jsx)(At.Z, {
                    "aria-label": (0, h.Z)("modes.learn.content.analyze.start_over_button"),
                    onClick: e.actions.restartWriteWithNewSession,
                    children: (0, Je.jsx)(ft.Z, {
                        id: "modes.learn.content.analyze.start_over_button"
                    })
                })
            }

            function Qs(e) {
                const t = e.round.answers.map((e => e.studiableItemId));
                return (0, Je.jsx)(At.Z, {
                    "aria-label": (0, h.Z)("modes.learn.content.analyze.star_and_start_over_aria_label", {
                        termCount: e.round.numAsked
                    }),
                    onClick: () => e.actions.starItemsAndRestartWrite(t),
                    children: (0, Je.jsx)(Ls.Z, {
                        id: "modes.learn.content.analyze.star_and_start_over",
                        reactComponents: {
                            StarIcon: (0, Je.jsx)(Ds.Z, {
                                icon: "star-filled"
                            })
                        },
                        values: {
                            termCount: e.round.numAsked
                        }
                    })
                })
            }
            const Ks = Ye.memo(Gs),
                qs = (0, k.createStructuredSelector)({
                    sessionSummary: ie,
                    diagramImage: B.hJ
                }),
                Ys = (0, f.connect)(qs, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        restartWriteWithNewSession: Ge,
                        starItemsAndRestartWrite: He,
                        updateProgressAndFinishSession: M.ZN
                    }, e)
                })), null, {
                    context: Ve.tC
                })(Ks);
            var $s = s("./app/j/study-modes/legacy-common/hocs/connectQuestionStepForAutoPlayAudio.tsx"),
                Xs = s("./node_modules/@quizlet/grader/quizlet-shared-kotlin-grader.js"),
                Js = s("./app/j/utils/diff.ts"),
                en = s("./app/j/utils/strip-markdown.ts");

            function tn(e) {
                return {
                    answerLanguage: e.answerLang,
                    promptLanguage: e.promptLang,
                    promptText: null,
                    gradingSettings: null
                }
            }

            function sn(e, t, s) {
                const n = !(0, Xs.isCaseSensitive)(e, t, s),
                    [a, o] = [e, t].map(en.Z),
                    r = new Js.ZP({
                        ignoreCase: n
                    }),
                    i = r.diff_main(a, o, !1);
                return r.diff_cleanupSemantic(i), i
            }
            class nn extends Ye.Component {
                constructor(e) {
                    super(e);
                    const t = tn(e),
                        {
                            userAnswer: s,
                            correctAnswer: n
                        } = e;
                    this.state = {
                        diff: sn(s, n, t)
                    }
                }
                UNSAFE_componentWillReceiveProps(e) {
                    const {
                        userAnswer: t,
                        correctAnswer: s
                    } = e, n = tn(e);
                    this.setState({
                        diff: sn(t, s, n)
                    })
                }
                shouldComponentUpdate(e) {
                    return void 0 !== this.props.userAnswer && void 0 !== this.props.correctAnswer && void 0 !== e.userAnswer && void 0 !== e.correctAnswer || (I.Z.warning("[DiffText] Trying to update the component with undefined answer", {
                        currentUserAnswer: this.props.userAnswer,
                        nextUserAnswer: e.userAnswer,
                        currentCorrectAnswer: this.props.correctAnswer,
                        nextCorrectAnswer: e.correctAnswer
                    }), !1)
                }
                renderText() {
                    const e = "additions" === this.props.mode ? Js.D$ : Js.NL;
                    return this.state.diff.filter((t => {
                        let [s, n] = t;
                        return s === e || s === Js.JZ
                    })).map(((e, t) => {
                        let [s, n] = e;
                        return s === Js.JZ ? (0, Je.jsx)("span", {
                            children: n
                        }, t) : s === Js.D$ ? (0, Je.jsx)("ins", {
                            className: "DiffText-ins",
                            children: n
                        }, t) : s === Js.NL ? (0, Je.jsx)("del", {
                            className: "DiffText-del",
                            children: n
                        }, t) : null
                    }))
                }
                render() {
                    return (0, Je.jsx)("span", {
                        className: "DiffText",
                        children: this.renderText()
                    })
                }
            }
            var an = s("./app/j/components/UIBreakpoint.tsx"),
                on = s("./app/j/components/UIDiv.tsx"),
                rn = s("./app/j/diagrams/DiagramConstants.ts"),
                ln = s("./app/j/study-modes/common/components/FeedbackItem.tsx"),
                dn = s("./app/j/diagrams/helpers.ts");

            function un(e) {
                let {
                    children: t,
                    diagramShapeState: s,
                    image: n,
                    padding: a = !0,
                    shape: o
                } = e;
                const r = wt()("PromptLocation", {
                    "has-padding": a
                });
                return (0, Je.jsx)("div", {
                    className: r,
                    children: (0, Je.jsx)(Jt.default, {
                        diagramShapes: (0, Je.jsx)(es.default, {
                            onAdd: dn.LY,
                            shape: o,
                            state: s,
                            children: t
                        }),
                        image: n,
                        variant: ts.U.ZOOM_TO_POINTS
                    })
                })
            }

            function cn() {
                return cn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, cn.apply(this, arguments)
            }
            const pn = e => {
                let {
                    styles: t = {},
                    ...s
                } = e;
                return Ye.createElement("svg", cn({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "64",
                    height: "64"
                }, s), Ye.createElement("circle", {
                    fill: "#FDCA47",
                    cx: "32",
                    cy: "32",
                    r: "30"
                }), Ye.createElement("path", {
                    fill: "#F9B700",
                    d: "M51.654 9.346A29.869 29.869 0 0 1 59 29c0 16.569-13.432 30-30 30a29.871 29.871 0 0 1-19.654-7.345C14.846 57.99 22.952 62 32 62c16.568 0 30-13.431 30-30 0-9.047-4.012-17.152-10.346-22.654z"
                }), Ye.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFE8BB",
                    d: "M6.418 20.5C5.302 24.242 13 11 25 6.084c5.834-2.391-13.832-1.5-18.582 14.416z"
                }), Ye.createElement("circle", {
                    fill: "#302C3B",
                    cx: "42.387",
                    cy: "24.677",
                    r: "4.999"
                }), Ye.createElement("path", {
                    fill: "#302C3B",
                    d: "M18.867 23.748a5 5 0 1 0 1.735 9.849 5 5 0 0 0-1.735-9.849zm25.389 17.236c-6.754-1.632-16.871-.215-21.526 6.138-.834 1.137-.022 2.335 1.144 1.559 4.455-2.965 13.092-4.799 19.311-3.322 2.375.564 3.557-3.748 1.071-4.375z"
                }))
            };

            function mn() {
                return mn = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, mn.apply(this, arguments)
            }
            const gn = e => {
                let {
                    styles: t = {},
                    ...s
                } = e;
                return Ye.createElement("svg", mn({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "64",
                    height: "64"
                }, s), Ye.createElement("circle", {
                    fill: "#FDCA47",
                    cx: "32",
                    cy: "32",
                    r: "30"
                }), Ye.createElement("path", {
                    fill: "#F9B700",
                    d: "M51.654 9.346A29.874 29.874 0 0 1 59 29c0 16.568-13.432 30-30 30a29.865 29.865 0 0 1-19.654-7.346C14.846 57.99 22.952 62 32 62c16.568 0 30-13.432 30-30 0-9.047-4.012-17.152-10.346-22.654z"
                }), Ye.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFE8BB",
                    d: "M6.418 20.5C5.302 24.242 13 11 25 6.084c5.834-2.391-13.832-1.5-18.582 14.416z"
                }), Ye.createElement("circle", {
                    fill: "#302C3B",
                    cx: "20.5",
                    cy: "24.5",
                    r: "5"
                }), Ye.createElement("circle", {
                    fill: "#302C3B",
                    cx: "43.5",
                    cy: "24.5",
                    r: "5"
                }), Ye.createElement("path", {
                    fill: "#302C3B",
                    d: "M51 37.789c0-.893-.529-2.01-2.037-2.297C45.092 34.756 39.373 34 32 34h-.002c-7.369 0-13.091.756-16.961 1.492-1.508.287-2.037 1.404-2.037 2.297C13 45.867 19.271 54 31.998 54H32c12.729 0 19-8.133 19-16.211z"
                }), Ye.createElement("path", {
                    fill: "#1A1626",
                    d: "M33.844 42c-.578-.012-1.471.455-1.145 1.688.163.621 1.191 1.375 1.191 2.381 0 2.045-3.783 2.045-3.783 0 0-1.006 1.027-1.76 1.193-2.381.327-1.232-.566-1.699-1.146-1.688-1.574.037-4.155 1.498-4.155 3.969C25.999 48.748 28.686 51 32 51c3.311 0 5.998-2.252 5.998-5.031 0-2.471-2.582-3.932-4.154-3.969z"
                }), Ye.createElement("path", {
                    fill: "#F46C60",
                    d: "M24 50.082c2.313 1.051 4.979 1.668 8 1.668s5.688-.617 8-1.668c-2.23-1.139-4.887-1.832-8-1.832-3.115 0-5.768.693-8 1.832z"
                }), Ye.createElement("path", {
                    fill: "#FFF",
                    d: "M46.504 38.037C43.996 37.66 38.688 37 31.998 37c-6.688 0-11.993.66-14.503 1.037-1.479.221-1.568.76-1.466 1.52.062.451.156 1 .302 1.588.162.652.291.824 1.447.836 2.221.027 26.222.027 28.444 0 1.156-.012 1.281-.184 1.445-.836.145-.588.242-1.137.301-1.588.106-.76.012-1.299-1.464-1.52z"
                }))
            };

            function hn(e) {
                let {
                    emoji: t,
                    headingText: s,
                    isCorrect: n
                } = e;

                function a() {
                    const e = n ? (0, Je.jsx)(gn, {
                        viewBox: "0 0 64 64"
                    }) : (0, Je.jsx)(pn, {
                        viewBox: "0 0 64 64"
                    });
                    return (0, Je.jsx)("span", {
                        className: "FeedbackHeading-emoji",
                        children: s ? t : e
                    })
                }
                const o = wt()("FeedbackHeading", {
                    "is-correct": n && !s,
                    "is-incorrect": !n && !s
                });
                return (0, Je.jsxs)("div", {
                    className: o,
                    children: [(0, Je.jsx)("div", {
                        className: "FeedbackHeading-inner",
                        children: (0, Je.jsx)(an.Z, {
                            above: "s",
                            children: e => (0, Je.jsxs)(jt.Z, {
                                deprecatedStyle: !0,
                                size: e ? 3 : 4,
                                children: [a(), s || (n ? (0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.correct_nicely_done"
                                }) : (0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.study_this_one"
                                }))]
                            })
                        })
                    }), (0, Je.jsx)("div", {
                        className: "FeedbackHeading-separator",
                        children: (0, Je.jsx)(Vt.Z, {})
                    })]
                })
            }
            const _n = Ye.memo(hn);
            var Sn = s("./app/j/audio_playback/utils.ts"),
                En = s("./app/j/components/DeprecatedFormattedTextWithImage.tsx");

            function yn(e) {
                const {
                    audio: t,
                    image: s,
                    text: n
                } = (0, b.Sg)(e), {
                    plainText: a,
                    richText: o,
                    languageCode: r
                } = null != n ? n : {};
                return {
                    audioUrl: null == t ? void 0 : t.url,
                    imageUrl: null == s ? void 0 : s.url,
                    languageCode: r,
                    plainText: a,
                    richText: null != o ? o : void 0
                }
            }
            const fn = e => {
                let {
                    actions: {
                        stopAndPlayAudio: t
                    },
                    audioUrl: s,
                    imageUrl: n,
                    languageCode: a,
                    plainText: o,
                    playingAudioId: r,
                    richText: i
                } = e;
                const l = (0, Je.jsx)(cs.Z, {
                        disabled: !s,
                        icon: "audio",
                        onClick: s ? () => {
                            return e = s, void t((0, Sn.os)(e));
                            var e
                        } : void 0,
                        variant: "borderless"
                    }),
                    d = wt()("FeedbackTextWithImage-audio", {
                        "is-playing": r === s
                    });
                return (0, Je.jsxs)("div", {
                    className: "FeedbackTextWithImage",
                    children: [(0, Je.jsx)(En.Z, {
                        imageShape: "square",
                        imageSize: "xs",
                        imageUrl: n,
                        lang: a,
                        richText: i,
                        text: o
                    }), (0, Je.jsx)("span", {
                        className: d,
                        children: l
                    })]
                })
            };

            function jn(e) {
                let {
                    children: t
                } = e;
                return (0, Je.jsx)("div", {
                    className: "FeedbackViewContent",
                    children: t
                })
            }

            function Tn(e) {
                let {
                    children: t,
                    verticalAlignWithoutScroll: s = "center"
                } = e;
                const n = wt()("ScrollableViewLayout", {
                    "ScrollableViewLayout--topAligned": "top" === s
                });
                return (0, Je.jsxs)("div", {
                    className: n,
                    children: [(0, Je.jsx)("div", {
                        className: "ScrollableViewLayout-topBlur"
                    }), (0, Je.jsx)("div", {
                        className: "ScrollableViewLayout-content",
                        children: t
                    }), (0, Je.jsx)("div", {
                        className: "ScrollableViewLayout-bottomBlur"
                    })]
                })
            }

            function An(e) {
                let {
                    children: t
                } = e;
                return (0, Je.jsx)("div", {
                    className: "FeedbackViewDetails",
                    children: (0, Je.jsx)(Tn, {
                        verticalAlignWithoutScroll: "top",
                        children: t
                    })
                })
            }

            function bn(e) {
                let {
                    action: t,
                    children: s
                } = e;
                return (0, Je.jsxs)("div", {
                    className: "FixedActionLayout",
                    children: [(0, Je.jsx)("div", {
                        className: "FixedActionLayout-content",
                        children: s
                    }), (0, Je.jsx)("div", {
                        className: "FixedActionLayout-action",
                        children: t
                    })]
                })
            }

            function xn(e) {
                let {
                    children: t,
                    onClickContinue: s,
                    shouldHideActionButton: n
                } = e;
                return (0, Je.jsx)(bn, {
                    action: n ? null : (0, Je.jsx)(Ct, {
                        onClick: s
                    }),
                    children: t
                })
            }
            var In = s("./app/j/audio_playback/selectors.ts");
            const vn = (0, k.createStructuredSelector)({
                    playingAudioId: In.jZ
                }),
                Cn = (0, f.connect)(vn, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        stopAndPlayAudio: ds.DQ
                    }, e)
                })), o.Q, {
                    context: us.jJ
                })(fn);
            var Nn = s("./app/j/study-modes/legacy-common/engine/utils/graded-answer-utils.ts"),
                wn = s("./app/j/components/UIOverlayTrigger.tsx"),
                On = s("./app/j/components/UIPopover.tsx");

            function Mn(e) {
                let {
                    isOverride: t = !1,
                    onPrimaryCtaClick: s,
                    onSecondaryCtaClick: n,
                    shouldShowSecondaryCta: a
                } = e;
                return (0, Je.jsxs)(On.Z, {
                    arrow: !1,
                    extraClassNames: "StandardGradingPopover",
                    includeArrowInBounds: !1,
                    variant: "rounded",
                    children: [(0, Je.jsx)(jt.Z, {
                        size: 5,
                        children: t ? (0, h.Z)("assistant.feedback.override_standard_grading_popover.header") : (0, h.Z)("assistant.feedback.standard_grading_popover.header")
                    }), (0, Je.jsxs)("div", {
                        className: "StandardGradingPopover-text",
                        children: [t ? (0, h.Z)("assistant.feedback.override_standard_grading_popover.body") : (0, h.Z)("assistant.feedback.standard_grading_popover.body"), (0, Je.jsxs)("div", {
                            className: "StandardGradingPopover-ctas",
                            children: [a && n ? (0, Je.jsx)(At.Z, {
                                onClick: n,
                                variant: "whiteBorder",
                                children: t ? (0, h.Z)("assistant.feedback.override_standard_grading_popover.override_cta") : (0, h.Z)("assistant.feedback.standard_grading_popover.secondary_cta")
                            }) : null, (0, Je.jsx)(At.Z, {
                                onClick: s,
                                children: (0, h.Z)("assistant.feedback.standard_grading_popover.primary_cta")
                            })]
                        })]
                    })]
                })
            }

            function Dn(e) {
                let {
                    handleOpenOptionsModal: t
                } = e;
                const s = (0, Ye.useRef)(null);
                return (0, Je.jsx)("div", {
                    className: "StandardGradingLabelSection",
                    children: (0, Je.jsxs)("div", {
                        className: "StandardGradingLabel",
                        children: [(0, Je.jsx)(Ds.Z, {
                            icon: "check-circle",
                            size: "large"
                        }), (0, Je.jsx)(ft.Z, {
                            id: "assistant.feedback.standard_grading_applied"
                        }), (0, Je.jsx)(wn.Z, {
                            className: "StandardGradingLabel-overlay",
                            overlay: (0, Je.jsx)(Mn, {
                                onPrimaryCtaClick: t,
                                onSecondaryCtaClick: () => {
                                    const e = s.current;
                                    null !== e && e.close()
                                },
                                shouldShowSecondaryCta: !0
                            }),
                            position: "bottom",
                            ref: s,
                            triggerAction: (0, vt.b1)() ? "click" : "hover",
                            children: (0, Je.jsx)("div", {
                                className: "StandardGradingLabel-info",
                                children: (0, Je.jsx)(Ds.Z, {
                                    alt: (0, h.Z)("assistant.feedback.standard_grading_applied"),
                                    icon: "circle-info"
                                })
                            })
                        })]
                    })
                })
            }
            var Ln = s("./app/j/compatibility/userAgentHelper.ts"),
                Pn = s("./app/j/components/UILink.tsx"),
                Rn = s("./app/j/assembly/AssemblyBadge.tsx"),
                kn = s("./app/j/components/UIBadge.tsx");

            function Un() {
                return (0, Je.jsx)(kn.Z, {
                    variant: "yellow",
                    children: (0, Je.jsx)(ft.Z, {
                        id: "global.new_label"
                    })
                })
            }
            var Wn = s("./app/j/components/PremiumBadge.tsx"),
                Bn = s("./app/j/context/UserContext.ts");

            function Fn(e) {
                let {
                    handleOpenOptionsModal: t,
                    shouldShowSmartGradingBadge: s,
                    shouldShowSmartGradingUpsell: n
                } = e;
                const {
                    t: o
                } = (0, zt.ZP)(), {
                    logSubscriptionEvent: r
                } = (0, yt.wL)(), i = (0, Ye.useContext)(Bn.Z);

                function l() {
                    let e;
                    return e = (null == i ? void 0 : i.type) === a.XsQ.TEACHER ? a.XsQ.TEACHER : a.XsQ.PLUS, (0, Je.jsx)("div", {
                        className: "SmartGradingPopover-plusBadge",
                        children: (0, Je.jsx)(Wn.Z, {
                            styleVariant: Rn.P.Indigo,
                            type: e
                        })
                    })
                }

                function d() {
                    const e = null != i && i._isEligibleForFreeTrial ? (0, Je.jsx)(ft.Z, {
                            id: "assistant.feedback.smart_grading_upsell_popover.cta.trial_eligible"
                        }) : (0, Je.jsx)(ft.Z, {
                            id: "assistant.feedback.smart_grading_upsell_popover.cta.trial_ineligible"
                        }),
                        t = null != i && i._isEligibleForFreeTrial ? o("assistant.feedback.smart_grading_upsell_popover.cta.trial_eligible") : o("assistant.feedback.smart_grading_upsell_popover.cta.trial_ineligible");
                    return (0, Je.jsxs)(On.Z, {
                        arrow: !1,
                        extraClassNames: "SmartGradingPopover SmartGradingPopover--upsell",
                        includeArrowInBounds: !1,
                        variant: "rounded",
                        children: [(0, Je.jsx)(jt.Z, {
                            size: 5,
                            children: (0, Je.jsx)(ft.Z, {
                                id: "assistant.feedback.smart_grading_upsell_popover.heading"
                            })
                        }), (0, Je.jsx)("div", {
                            className: "SmartGradingPopover-text",
                            children: (0, Je.jsx)(ft.Z, {
                                id: "assistant.feedback.smart_grading_upsell_popover.body"
                            })
                        }), (0, Je.jsx)(At.Z, {
                            "aria-label": t,
                            onClick: () => {
                                return e = t, r({
                                    action: a.Mpk.CLICK,
                                    cta: e,
                                    fullActionName: "smart_grading_upsell_popover_click"
                                }), void window.open("/upgrade?source=smart_grading", "_blank");
                                var e
                            },
                            children: e
                        }), l()]
                    })
                }
                return s ? (0, Je.jsxs)(on.Z, {
                    className: "YouSaidLabelWithSmartGrading",
                    children: [(0, Je.jsx)(ft.Z, {
                        id: "assistant.feedback.you_said_label"
                    }), (0, Je.jsx)(wn.Z, {
                        overlay: (0, Je.jsxs)(On.Z, {
                            extraClassNames: "SmartGradingPopover",
                            includeArrowInBounds: !1,
                            children: [(0, Je.jsx)(jt.Z, {
                                size: 5,
                                children: (0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.smart_grading_popover_heading"
                                })
                            }), (0, Je.jsxs)("div", {
                                className: "SmartGradingPopover-text",
                                children: [(0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.smart_grading_popover_text"
                                }), (0, Je.jsx)(Pn.Z, {
                                    onClick: t,
                                    children: (0, Je.jsx)(ft.Z, {
                                        id: "assistant.feedback.update_options_link"
                                    })
                                })]
                            })]
                        }),
                        position: "middle right",
                        triggerAction: "hover",
                        children: (0, Je.jsxs)("div", {
                            className: "SmartGradingLabelWithInfo",
                            children: [(0, Je.jsx)(Un, {}), (0, Je.jsx)(ft.Z, {
                                id: "assistant.feedback.smart_grading"
                            }), (0, Je.jsx)(Ds.Z, {
                                icon: "circle-info",
                                size: "medium"
                            })]
                        })
                    })]
                }) : n ? (0, Je.jsxs)(on.Z, {
                    className: "YouSaidLabelWithSmartGrading",
                    children: [(0, Je.jsx)(ft.Z, {
                        id: "assistant.feedback.you_said_label"
                    }), (0, Je.jsx)(wn.Z, {
                        beforeOpen: () => {
                            r({
                                action: a.Mpk.VIEW,
                                fullActionName: "smart_grading_upsell_popover_open"
                            })
                        },
                        overlay: d(),
                        position: "bottom right",
                        triggerAction: "hover",
                        children: (0, Je.jsx)("div", {
                            className: "SmartGradingLabelWithInfo",
                            children: (0, Je.jsxs)("div", {
                                className: "SmartGradingLabelWithInfo--lock",
                                children: [(0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.smart_grading_upsell_popover.cta.trial_eligible"
                                }), (0, Je.jsx)(Ds.Z, {
                                    icon: "lock",
                                    size: "medium"
                                })]
                            })
                        })
                    })]
                }) : (0, Je.jsx)(ft.Z, {
                    id: "assistant.feedback.you_said_label"
                })
            }

            function Zn(e) {
                let {
                    answerLang: t,
                    correctAnswer: s,
                    isCorrect: n,
                    onClickAnswerOverride: a,
                    promptLang: o,
                    shouldShowSmartGradingBadge: r,
                    shouldShowSmartGradingUpsell: i = !1,
                    userAnswer: l,
                    shouldShowStandardGradingPopover: d,
                    handleOpenOptionsModal: u
                } = e;
                const {
                    t: c
                } = (0, zt.ZP)(), p = (0, Ln.YQ)();

                function m() {
                    a && a()
                }
                return (0, Je.jsx)(ln.Z, {
                    label: (0, Je.jsx)(Fn, {
                        handleOpenOptionsModal: u,
                        labelText: c("assistant.feedback.you_said_label"),
                        shouldShowSmartGradingBadge: r,
                        shouldShowSmartGradingUpsell: i
                    }),
                    text: l,
                    children: (0, Je.jsxs)("div", {
                        className: "WrittenFeedbackItem",
                        children: [(0, Je.jsx)("span", {
                            className: "WrittenFeedbackItem-answer",
                            children: (0, Je.jsx)(nn, {
                                answerLang: t,
                                correctAnswer: s,
                                mode: "deletions",
                                promptLang: o,
                                userAnswer: l
                            })
                        }), a ? (0, Je.jsxs)("span", {
                            className: "WrittenFeedbackItem-answerOverride",
                            children: [(0, Je.jsx)(Pn.Z, {
                                onClick: m,
                                children: n ? (0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.answer_is_wrong"
                                }) : (0, Je.jsx)(ft.Z, {
                                    id: "assistant.feedback.i_mistyped"
                                })
                            }), d && n && u ? (g = u, (0, Je.jsx)(wn.Z, {
                                className: "WrittenFeedbackItem-overlay",
                                overlay: (0, Je.jsx)(Mn, {
                                    isOverride: !0,
                                    onPrimaryCtaClick: g,
                                    onSecondaryCtaClick: p ? m : null,
                                    shouldShowSecondaryCta: p
                                }),
                                position: p ? void 0 : "bottom center",
                                triggerAction: p ? "click" : "hover",
                                children: (0, Je.jsx)("div", {
                                    className: "WrittenFeedbackItem-answerOverrideInfo",
                                    children: (0, Je.jsx)(Ds.Z, {
                                        alt: c("assistant.feedback.override_standard_grading_popover.icon_alt_label"),
                                        icon: "circle-info"
                                    })
                                })
                            })) : null]
                        }) : null]
                    })
                });
                var g
            }
            const Gn = (0, k.createStructuredSelector)({
                    gradedAnswer: A.tq,
                    shouldShowSmartGradingBadge: N.YI,
                    shouldShowSmartGradingUpsell: N.uO,
                    question: A.EY
                }),
                Hn = (0, ze.compose)((0, f.connect)(Gn, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        advanceFromWrittenQuestionFeedback: ge,
                        setIsOptionsModalOpen: L.bL,
                        overrideCorrectness: Se
                    }, e)
                })), null, {
                    context: Ve.tC
                }), (0, $s.Z)({
                    playAnswer: !0
                }))((function(e) {
                    let {
                        actions: t,
                        gradedAnswer: s,
                        overrideCorrectnessCounter: n,
                        question: o,
                        shouldShowSmartGradingBadge: r,
                        shouldShowSmartGradingUpsell: i,
                        shouldShowStandardGradingLabel: l
                    } = e;
                    const [d, u] = (0, Ye.useState)(!1), {
                        t: c
                    } = (0, zt.ZP)();

                    function p() {
                        d || (t.overrideCorrectness(a.p7P.CORRECT), u(!0))
                    }

                    function m() {
                        d || (t.overrideCorrectness(a.p7P.INCORRECT), u(!0))
                    }

                    function g() {
                        const {
                            text: e
                        } = (0, b.Sg)(o.prompt), {
                            submittedAnswerValue: a,
                            expectedAnswerValue: d
                        } = (0, Nn.Ap)(s);
                        return (0, Je.jsx)(Zn, {
                            answerLang: o.answerLanguageCode,
                            correctAnswer: d,
                            handleOpenOptionsModal: () => t.setIsOptionsModalOpen(!0),
                            isCorrect: s.isCorrect,
                            onClickAnswerOverride: s.isCorrect ? m : p,
                            promptLang: null == e ? void 0 : e.languageCode,
                            shouldShowSmartGradingBadge: r,
                            shouldShowSmartGradingUpsell: !s.isCorrect && i,
                            shouldShowStandardGradingPopover: l && n < 1,
                            userAnswer: a
                        })
                    }

                    function _() {
                        const {
                            text: e
                        } = (0, b.Sg)(o.prompt), {
                            submittedAnswerValue: t,
                            expectedAnswerValue: n
                        } = (0, Nn.Ap)(s);
                        return (0, Je.jsx)(ln.Z, {
                            label: (0, h.Z)("assistant.feedback.correct_answer_label"),
                            text: n,
                            children: (0, Je.jsx)(nn, {
                                answerLang: o.answerLanguageCode,
                                correctAnswer: n,
                                mode: "additions",
                                promptLang: null == e ? void 0 : e.languageCode,
                                userAnswer: t
                            })
                        })
                    }
                    const {
                        location: S
                    } = (0, b.Sg)(o.prompt);
                    return (0, Je.jsx)(xn, {
                        onClickContinue: function() {
                            d || (t.advanceFromWrittenQuestionFeedback(s.isCorrect), u(!0))
                        },
                        children: (0, Je.jsxs)(jn, {
                            children: [(0, Je.jsx)(_n, {
                                isCorrect: s.isCorrect
                            }), (0, Je.jsx)(An, {
                                children: void 0 !== S ? (E = S, (0, Je.jsx)(an.Z, {
                                    below: "s",
                                    children: e => e ? (0, Je.jsxs)("div", {
                                        children: [(0, Je.jsx)("div", {
                                            className: "WrittenQuestionFeedbackView-mobileDiagram",
                                            children: (0, Je.jsx)(un, {
                                                diagramShapeState: s.isCorrect ? rn.kA.CORRECT : rn.kA.INCORRECT,
                                                image: E.diagramImage,
                                                padding: !1,
                                                shape: E.shape
                                            })
                                        }), (0, Je.jsxs)("div", {
                                            children: [(0, Je.jsx)(on.Z, {
                                                children: _()
                                            }), s.isCorrect ? null : (0, Je.jsx)(on.Z, {
                                                children: g()
                                            })]
                                        })]
                                    }) : (0, Je.jsxs)(un, {
                                        diagramShapeState: s.isCorrect ? rn.kA.CORRECT : rn.kA.INCORRECT,
                                        image: E.diagramImage,
                                        shape: E.shape,
                                        children: [(0, Je.jsx)(on.Z, {
                                            children: _()
                                        }), s.isCorrect ? null : (0, Je.jsx)(on.Z, {
                                            children: g()
                                        })]
                                    })
                                }, "feedback")) : function() {
                                    var e;
                                    const {
                                        metadata: {
                                            promptSide: s
                                        },
                                        prompt: n
                                    } = o, {
                                        text: a
                                    } = (0, b.Sg)(n);
                                    return (0, Je.jsxs)(Ht.Z, {
                                        separator: (0, Je.jsx)(Vt.Z, {}),
                                        children: [(0, Je.jsxs)(on.Z, {
                                            children: [l && (0, Je.jsx)(Dn, {
                                                handleOpenOptionsModal: () => t.setIsOptionsModalOpen(!0)
                                            }), (0, Je.jsx)(ln.Z, {
                                                label: (0, te.hC)(c, s),
                                                text: null != (e = null == a ? void 0 : a.plainText) ? e : "",
                                                children: (0, Je.jsx)(Cn, {
                                                    ...yn(n)
                                                })
                                            })]
                                        }), (0, Je.jsx)(on.Z, {
                                            children: g()
                                        }), (0, Je.jsx)(on.Z, {
                                            children: _()
                                        })]
                                    })
                                }()
                            })]
                        })
                    });
                    var E
                }));
            class Vn extends Ye.PureComponent {
                constructor() {
                    super(...arguments), this.state = {
                        answerInput: "",
                        hasSubmitted: !1
                    }, this.handleClickDontKnow = () => {
                        const {
                            actions: {
                                onClickDontKnow: e
                            }
                        } = this.props;
                        y()(e)()
                    }, this.handleSubmitAnswer = () => {
                        const {
                            actions: {
                                submitAnswer: e
                            }
                        } = this.props;
                        e && !this.state.hasSubmitted && (this.setState({
                            hasSubmitted: !0
                        }), e({
                            submittedAnswer: this.state.answerInput
                        }))
                    }, this.handleOnChangeInput = e => {
                        this.setState({
                            answerInput: e.target.value
                        }), this.props.actions.onChangeInput && this.props.actions.onChangeInput(e)
                    }, this.handleOnKeyDown = e => {
                        e.keyCode !== js.AC || e.shiftKey || (e.preventDefault(), this.handleSubmitAnswer())
                    }, this.handleOnSubmit = e => {
                        e.preventDefault(), this.handleSubmitAnswer()
                    }, this.textareaRef = Ye.createRef()
                }
                componentDidMount() {
                    this.focus()
                }
                componentDidUpdate(e) {
                    e.currentItemId !== this.props.currentItemId && (this.focus(), this.clear())
                }
                getLabel() {
                    if (this.props.shouldShowLang) return (0, Je.jsx)(ft.Z, {
                        id: "assistant.type_answer.type_the_language_label",
                        language: (0, fs.w)(this.props.lang)
                    });
                    if (this.props.shouldShowSide) {
                        if (this.props.answerSide === a.dU_.WORD) return (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.type_the_term_label"
                        });
                        if (this.props.answerSide === a.dU_.DEFINITION) return (0, Je.jsx)(ft.Z, {
                            id: "assistant.type_answer.type_the_definition_label"
                        })
                    }
                    return (0, Je.jsx)(ft.Z, {
                        id: "assistant.type_answer.type_the_answer_label"
                    })
                }
                getButtonClasses() {
                    return wt()("TypeTheAnswerField-actions", {
                        "is-correct": this.props.isValid
                    })
                }
                renderAnswerFieldInput(e) {
                    const t = {
                        addOnContent: this.props.actions.onClickDontKnow && e ? this.renderDontKnowLink() : null,
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        invalid: !this.props.isValid && void 0,
                        label: this.getLabel(),
                        languageCodes: [this.props.lang],
                        onChange: this.handleOnChangeInput,
                        onKeyDown: this.handleOnKeyDown,
                        specificAccents: this.props.accents,
                        spellCheck: !1,
                        type: "autoExpand",
                        value: this.state.answerInput,
                        variant: "inline"
                    };
                    return (0, Je.jsx)("div", {
                        className: "TypeTheAnswerField-input",
                        children: (0, Je.jsx)(ys.Z, {
                            ...t,
                            ref: this.textareaRef
                        })
                    })
                }
                renderDontKnowLink() {
                    return (0, Je.jsx)("span", {
                        className: "TypeTheAnswerField-dontKnow",
                        children: (0, Je.jsx)(Pn.Z, {
                            onClick: this.handleClickDontKnow,
                            children: (0, Je.jsx)(ft.Z, {
                                id: "assistant.type_answer.don_t_know"
                            })
                        })
                    })
                }
                renderButtonText() {
                    return this.props.isValid ? (0, Je.jsxs)("span", {
                        children: [(0, Je.jsx)(ft.Z, {
                            id: "assistant.feedback.correct"
                        }), " ", (0, Je.jsx)("span", {
                            "aria-label": "happy-emoji",
                            role: "img",
                            children: "рџЂ"
                        })]
                    }) : (0, Je.jsx)(ft.Z, {
                        id: "assistant.type_answer.answer"
                    })
                }
                renderButton(e) {
                    return (0, Je.jsxs)("div", {
                        className: this.getButtonClasses(),
                        children: [(0, Je.jsx)(At.Z, {
                            disabled: this.props.loading,
                            type: "submit",
                            width: e ? "fill" : "auto",
                            children: this.props.loading ? (0, Je.jsx)(_t.Z, {}) : this.renderButtonText()
                        }), this.props.actions.onClickDontKnow && !e ? this.renderDontKnowLink() : null]
                    })
                }
                render() {
                    return (0, Je.jsx)(an.Z, {
                        above: "m",
                        below: "l",
                        children: e => (0, Je.jsxs)("form", {
                            className: "TypeTheAnswerField",
                            name: "form",
                            onSubmit: this.handleOnSubmit,
                            children: [this.renderAnswerFieldInput(e), this.shouldRenderButton() ? this.renderButton(e) : null]
                        })
                    })
                }
                shouldRenderButton() {
                    return !!this.props.actions.submitAnswer
                }
                focus() {
                    y()(this.textareaRef.current, "textareaRef should exist").focus()
                }
                clear() {
                    const e = this.textareaRef.current ? this.textareaRef.current.getTextarea() : null;
                    e && (e.value = ""), this.setState({
                        answerInput: ""
                    }), this.setState({
                        hasSubmitted: !1
                    })
                }
            }

            function zn(e) {
                const t = e.question.metadata.studiableItemId,
                    s = y()(e.question.metadata.answerSide, "No answerSide for written question.");
                return (0, Je.jsxs)("div", {
                    className: "WriteQuestion",
                    children: [(0, Je.jsxs)("div", {
                        className: "WriteQuestion-prompt",
                        children: [(0, Je.jsx)(_s, {
                            questionElements: e.question.prompt,
                            shouldAutoplayAudio: e.isAudioOn
                        }), (0, Je.jsx)("div", {
                            className: "WriteQuestion-dontKnow",
                            children: (0, Je.jsx)(Pn.Z, {
                                onClick: () => e.actions.submitAnswer({
                                    value: ""
                                }),
                                children: (0, Je.jsx)(ft.Z, {
                                    id: "modes.learn.content.answer_page.dont_know"
                                })
                            })
                        })]
                    }), (0, Je.jsx)("div", {
                        className: "WriteQuestion-answer",
                        children: (0, Je.jsx)(Vn, {
                            accents: e.accents,
                            actions: {
                                submitAnswer: t => {
                                    let {
                                        submittedAnswer: s
                                    } = t;
                                    e.actions.submitAnswer({
                                        value: s
                                    })
                                }
                            },
                            answerSide: s,
                            currentItemId: t,
                            isValid: e.isShowingInlineFeedback,
                            lang: e.question.answerLanguageCode,
                            loading: e.isGrading,
                            shouldShowLang: !e.isQuestionMonolingual,
                            shouldShowSide: e.question.metadata.promptSide === a.dU_.LOCATION
                        })
                    })]
                })
            }
            const Qn = Ye.memo(zn),
                Kn = (0, k.createStructuredSelector)({
                    accents: W.Gi,
                    answerSide: W.yy,
                    answerSideLang: W.xb,
                    isAudioOn: P.zK,
                    isGrading: N.Em,
                    isQuestionMonolingual: W.Yt,
                    isShowingInlineFeedback: z,
                    question: de
                }),
                qn = (0, f.connect)(Kn, (e => ({
                    actions: (0, ze.bindActionCreators)({
                        logQuestionEvent: xe,
                        submitAnswer: _e
                    }, e)
                })), null, {
                    context: Ve.tC
                })(Qn);

            function Yn(e) {
                return e.currentView === H.i9.FEEDBACK ? (0, Je.jsx)("div", {
                    className: "WriteViewController",
                    children: (0, Je.jsx)("div", {
                        className: "WrittenQuestionFeedbackView",
                        children: (0, Je.jsx)($n, {
                            ...e
                        })
                    })
                }) : (0, Je.jsx)("div", {
                    className: "WriteViewController",
                    children: (0, Je.jsx)($n, {
                        ...e
                    })
                })
            }

            function $n(e) {
                switch (e.currentView) {
                    case H.i9.AD_MODAL:
                        return null;
                    case H.i9.LOADING:
                        return (0, Je.jsx)(Et, {});
                    case H.i9.QUESTION:
                        return (0, Je.jsx)(qn, {});
                    case H.i9.COPY_ANSWER:
                        return (0, Je.jsx)(Ms, {});
                    case H.i9.FEEDBACK:
                        return (0, Je.jsx)(Hn, {});
                    case H.i9.CHECKPOINT:
                        return (0, Je.jsx)(Ft, {});
                    case H.i9.END:
                        return (0, Je.jsx)(Ys, {});
                    default:
                        throw new Error("Unsupported view " + e.currentView + " in WriteViewController")
                }
            }
            const Xn = Ye.memo(Yn),
                Jn = (0, k.createStructuredSelector)({
                    currentView: V
                }),
                ea = (0, f.connect)(Jn, null, null, {
                    context: Ve.tC
                })(Xn);
            var ta = s("./node_modules/immer/dist/immer.esm.mjs");
            const sa = {
                [H.x$.SET_CURRENT_VIEW]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, ta.ZP)(e, (e => {
                        e.currentView = s
                    }))
                },
                [H.x$.SET_IS_SHOWING_INLINE_FEEDBACK]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, ta.ZP)(e, (e => {
                        e.isShowingInlineFeedback = s
                    }))
                },
                [H.x$.SET_LAST_INTERMISSION_VIEW]: (e, t) => {
                    let {
                        payload: s
                    } = t;
                    return (0, ta.ZP)(e, (e => {
                        e.lastIntermissionView = s
                    }))
                }
            };
            s("./node_modules/keymaster/keymaster.js");
            const na = {
                hiddenSettings: [a.Std.ASSISTANT_MODE_QUESTION_TYPES, a.Std.ASSISTANT_MODE_WRITTEN_DEFINITION_SIDE, a.Std.ASSISTANT_MODE_WRITTEN_WORD_SIDE],
                questionTypesSetting: {
                    copyAnswer: !0,
                    fillInTheBlank: !1,
                    matching: !1,
                    multipleChoice: !1,
                    multipleChoiceWithNoneOption: !1,
                    revealSelfAssessment: !1,
                    written: !0,
                    spelling: !1
                },
                adsIds: {
                    sidebarAdsId: null,
                    footerAdsId: n.h.WRITE_MWEB
                },
                studyMode: d.lt.WEB_WRITE,
                studyModeType: a.StudyModeType.WRITE,
                writtenTypesSetting: {
                    definition: !0,
                    location: !0,
                    term: !0
                },
                closeAdModalAndGoToTheNextStep: () => {
                    o.Z.dispatch(((e, t) => {
                        F(t()).lastIntermissionView === H.i9.CHECKPOINT ? e(he()) : e(Ge())
                    }))
                }
            };
            (0, u.Z)(ea, ht, na, (() => {
                r.default.user || (0, i.default)(), o.Z.registerReducer("write", (0, l.jZ)(sa, {
                    currentView: H.i9.LOADING,
                    isShowingInlineFeedback: !1,
                    lastIntermissionView: null
                })), o.Z.dispatch(((e, t) => {
                    const s = t();
                    e(Re()), new We.Z((function(e, t) {
                        void 0 === t && (t = {}), (0, Te.Lx)(s).logStudyEvent(e, {
                            loggerConfig: (0, fe.c)()
                        }, t)
                    }))
                }))
            })).then((() => {
                o.Z.dispatch(Fe())
            }))
        },
        "./app/j/syncers/SelectedTermSyncer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r
            });
            var n = s("./app/j/models/QModel.ts");
            class a extends n.Z {}
            a.URL_BASE = "selected-terms", a.MODEL_NAME = "selectedTerm", a.UNIQUE_KEYS = ["termId", "personId"];
            const o = {
                ...s("./app/j/syncers/LegacySyncer.ts").Z
            };
            o.init(a);
            const r = o
        },
        "./app/j/syncers/SessionSyncer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = s("./app/j/models/QSession.ts");
            const a = {
                ...s("./app/j/syncers/LegacySyncer.ts").Z
            };
            a.init(n.Z);
            const o = a
        },
        "./app/j/syncers/StudiableAnswerSyncer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var n = s("./app/j/models/QStudiableAnswer.ts");
            const a = {
                ...s("./app/j/syncers/LegacySyncer.ts").Z
            };
            a.init(n.Z);
            const o = a
        },
        "./app/j/syncers/StudySettingSyncer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var n = s("./app/j/models/QModel.ts");
            class a extends n.Z {}
            a.URL_BASE = "study-settings", a.MODEL_NAME = "studySetting", a.UNIQUE_KEYS = ["personId", "studyableType", "studyableId", "settingType"];
            var o = s("./app/j/syncers/LegacySyncer.ts");
            const r = {};
            Object.assign(r, o.Z), r.init(a);
            const i = r
        },
        "./app/j/syncers/TermSyncer.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => r
            });
            var n = s("./app/j/models/QModel.ts");
            class a extends n.Z {}
            a.URL_BASE = "terms", a.MODEL_NAME = "term", a.PARTITION_COLUMN = "setId";
            const o = {
                ...s("./app/j/syncers/LegacySyncer.ts").Z
            };
            o.init(a), o.setShouldSyncDelay(!0);
            const r = o
        },
        "./app/j/utils/AccentHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var n = s("./node_modules/lodash/uniq.js"),
                a = s.n(n);
            const o = {
                af: ["ГЎ", "Г ", "Гў", "Г¤", "Г§", "Г©", "ГЁ", "ГЄ", "Г«", "Г­", "Г¬", "Г®", "ГЇ", "Гі", "ГІ", "Гґ", "Г¶", "Гє", "Г№", "Гј", "Г»", "ГЅ", "Гї"],
                akk: ["ДЃ", "Гў", "Д“", "ГЄ", "Д«", "Г®", "ЕЌ", "Гґ", "Е«", "Г»", "бё«", "б№Ј", "ЕЎ", "б№­", "в‚Ђ", "в‚Ѓ", "в‚‚", "в‚ѓ", "в‚„", "в‚…", "в‚†", "в‚‡", "в‚€", "в‚‰"],
                ang: ["Г¦", "Г°", "Гѕ"],
                ar: ["Ш§", "ШЁ", "ШЄ", "Ш«", "Ш¬", "Ш­", "Ш®", "ШЇ", "Ш°", "Ш±", "ШІ", "Ші", "Шґ", "Шµ", "Ш¶", "Ш·", "Шё", "Ш№", "Шє", "ЩЃ", "Щ‚", "Щѓ", "Щ„", "Щ…", "Щ†", "Щ‡", "Щ€", "ЩЉ", "ШЎ", "Ш©", "Щ‰"],
                bg: ["Р°", "Р±", "РІ", "Рі", "Рґ", "Рµ", "Р¶", "Р·", "Рё", "Р№", "Рє", "Р»", "Рј", "РЅ", "Рѕ", "Рї", "СЂ", "СЃ", "С‚", "Сѓ", "С„", "С…", "С†", "С‡", "С€", "С‰", "СЉ", "СЊ", "СЋ", "СЏ"],
                bs: ["Д‡", "Д‘", "ДЌ", "ЕЎ", "Еѕ"],
                chem: ["в†ђ", "в†‘", "в†’", "в†“", "в†”", "в€™", "В°", "вЃ»", "вЃє", "вЃ°", "В№", "ВІ", "Ві", "вЃґ", "вЃµ", "вЃ¶", "вЃ·", "вЃё", "вЃ№", "вЃї", "в‚‹", "в‚Ђ", "в‚Ѓ", "в‚‚", "в‚ѓ", "в‚„", "в‚…", "в‚†", "в‚‡", "в‚€", "в‚‰", "в‡Њ", "Оµ", "в€†", "в‚Љ", "в‚™"],
                cs: ["ГЎ", "ДЌ", "ДЏ", "Г©", "Д›", "Г­", "Е€", "Гі", "p", "Е™", "ЕЎ", "ЕҐ", "Гє", "ЕЇ", "ГЅ", "Еѕ"],
                cy: ["Гў", "Г¤", "ГЎ", "Г ", "ГЄ", "Г«", "Г©", "ГЁ", "Г®", "ГЇ", "Г­", "Г¬", "Гґ", "Г¶", "Гі", "ГІ", "Г»", "Гј", "Гє", "Г№", "Еµ", "бє…", "бєѓ", "бєЃ", "Е·", "Гї", "ГЅ", "б»і"],
                da: ["ГҐ", "Г¦", "Гё"],
                de: ["Г¤", "Г¶", "Гј", "Гџ", "вёљ"],
                dyo: ["ГЎ", "Г©", "Г­", "Гі", "Г±", "Гє", "ЕЉ"],
                el: ["О±", "ОІ", "Оі", "Оґ", "Оµ", "О¶", "О·", "Оё", "О№", "Оє", "О»", "Ој", "ОЅ", "Оѕ", "Ої", "ПЂ", "ПЃ", "Пѓ", "П‚", "П„", "П…", "П†", "П‡", "П€", "П‰"],
                es: ["ГЎ", "Г©", "Г­", "Гі", "Гє", "Гј", "Г±", "Вї", "ВЎ", "В°"],
                fi: ["ГҐ", "Г¤", "Г¶"],
                fr: ["Г ", "Гў", "Г§", "ГЁ", "Г©", "ГЄ", "Г«", "Г®", "ГЇ", "Гґ", "Е“", "Г№", "Г»", "Гј"],
                gd: ["Г ", "ГЎ", "ГЁ", "Г©", "Г¬", "Г­", "ГІ", "Гі", "Г№", "Гє"],
                ga: ["Г ", "ГЎ", "ГЁ", "Г©", "Г¬", "Г­", "ГІ", "Гі", "Г№", "Гє"],
                hai: ["gМ±", "kМ±", "xМ±"],
                haw: ["ДЃ", "Д“", "Д«", "ЕЌ", "Е«"],
                hr: ["Д‡", "Д‘", "ДЌ", "ЕЎ", "Еѕ"],
                hu: ["ГЎ", "Г©", "Г­", "Гі", "Г¶", "Е‘", "Гє", "Гј", "Е±"],
                is: ["ГЎ", "Г¦", "Г°", "Г©", "Г­", "Гі", "Г¶", "Гё", "Гѕ", "Гє", "ГЅ"],
                it: ["Г ", "ГЁ", "Г©", "Г¬", "ГІ", "Гі", "Г№"],
                iw: ["Чђ", "Ч‘Цј", "Ч‘", "Ч’", "Ч“", "Ч”", "Ч•", "Ч–", "Ч—", "Ч", "Ч™", "Ч›Цј", "Ч›", "Чљ", "Чњ", "Чћ", "Чќ", "Ч ", "Чџ", "ЧЎ", "Чў", "Ч¤Цј", "Ч¤", "ЧЈ", "Ч¦", "ЧҐ", "Ч§", "ЧЁ", "Ч©ЧЃ", "Ч©Ч‚", "Ч©", "ЧЄЦј", "ЧЄ"],
                ku: ["Г§", "Г©", "ГЄ", "Г­", "Г®", "Еџ", "Гє", "Г»"],
                la: ["ДЃ", "Г¦", "Д“", "Д«", "ЕЌ", "Е“", "Е«", "Иі"],
                lkt: ["ГЎ", "Д…", "Д…МЃ", "ДЌ", "Г©", "З§", "Иџ", "Г­", "ДЇ", "Гі", "ЕЎ", "Гє", "Еі", "Еѕ", "Е‹", "Кј"],
                math: ["+", "в€’", "В±", "Г—", "Г·", "%", "=", "в‰ ", "в‰€", "в‰Ў", "<", ">", "в‰¤", "в‰Ґ", "в‰…", "в€ј", "ВЅ", "Вј", "Вѕ", "в€љ", "вЃ°", "В№", "ВІ", "Ві", "вЃґ", "вЃµ", "вЃ¶", "вЃ·", "вЃё", "вЃ№", "вЃї", "вЃє", "вЃ»", "в€§", "в‚Ђ", "в‚Ѓ", "в‚‚", "в‚ѓ", "в‚„", "в‚…", "в‚†", "в‚‡", "в‚€", "в‚‰", "ПЂ", "в€ћ", "в€†", "в€‘", "Ж’", "в€«", "вЂ–", "|", "вЉҐ", "в€ ", "в€©", "в€Є", "в€€", "в€‹", "в€ѓ", "вЉ‚", "вЉѓ", "вЉ†", "вЉ‡", "в€‰", "вЉ„", "В°", "О±", "ОІ", "Оі", "Оґ", "Оµ", "О·", "Оё", "О№", "Оє", "О»", "Вµ", "в€Ё", "О©", "П‰", "в„µ", "в€…", "в€Ђ", "вЉ•", "вЉ—", "в†ђ", "в†‘", "в†’", "в†“", "в†”", "в€ґ", "в€µ", "Пѓ", "вЊ’", "в‚Љ", "в‚™"],
                mi: ["ДЃ", "Д“", "Д«", "ЕЌ", "Е«"],
                nl: ["ГЎ", "Г ", "Гў", "Г¤", "Г§", "Г©", "ГЁ", "ГЄ", "Г«", "Г­", "Г¬", "Г®", "ГЇ", "Гі", "ГІ", "Гґ", "Г¶", "Гє", "Г№", "Гј", "Г»", "ГЅ", "Гї"],
                no: ["ГҐ", "Г¦", "Гё"],
                ood: ["Дѓ", "бёЌ", "Д•", "Д­", "Г±", "Е‹", "ЕЏ", "б№Ј", "Е­"],
                pl: ["Д…", "Д‡", "Д™", "Е„", "Е‚", "Гі", "Е›", "Еє", "Еј"],
                pt: ["Г ", "ГЎ", "Гў", "ГЈ", "Г§", "Г©", "ГЄ", "Г­", "Гі", "Гґ", "Гµ", "Гє", "Гј"],
                rar: ["ДЃ", "Д“", "Д«", "ЕЌ", "Е«", "К»", "кћЊ"],
                ro: ["Дѓ", "Гў", "Г®", "И™", "Еџ", "И›", "ЕЈ"],
                ru: ["Р°", "ГЎ", "Р±", "РІ", "Рі", "Рґ", "Рµ", "Г©", "С‘", "Р¶", "Р·", "Рё", "РёМЃ", "Р№", "Рє", "Р»", "Рј", "РЅ", "Рѕ", "Гі", "Рї", "СЂ", "СЃ", "С‚", "Сѓ", "СѓМЃ", "С„", "С…", "С†", "С‡", "С€", "С‰", "СЉ", "С‹", "С‹МЃ", "СЊ", "СЌ", "СЋ", "СЋМЃ", "СЏ", "СЏМЃ"],
                sk: ["ГЎ", "Г¤", "ДЌ", "Г©", "Д›", "Г­", "Дє", "Дѕ", "Е€", "Гі", "Гґ", "Е•", "ЕЎ", "ЕҐ", "Гє", "ГЅ", "Еѕ"],
                sr: ["Д‡", "Д‘", "ДЌ", "ЕЎ", "Еѕ"],
                sv: ["ГҐ", "Г¤", "Г¶"],
                tet: ["Г±", "ГЎ", "Г©", "Г­", "Гі", "Гє"],
                tr: ["Д±", "Г¶", "Гј", "Г§", "Дџ", "Еџ"],
                tyv: ["Р°", "Р±", "РІ", "Рі", "Рґ", "Рµ", "С‘", "Р¶", "Р·", "Рё", "Р№", "Рє", "Р»", "Рј", "РЅ", "ТЈ", "Рѕ", "У©", "Рї", "СЂ", "СЃ", "С‚", "Сѓ", "ТЇ", "С„", "С…", "С†", "С‡", "С€", "С‰", "СЉ", "С‹", "СЊ", "СЌ", "СЋ", "СЏ"],
                vi: ["ГЎ", "ЗЋ", "Гў", "Д‘", "ГЄ", "Гґ", "ЖЎ", "Ж°"],
                wo: ["Г ", "Г©", "Г«", "Гі", "Г±", "ЕЉ"],
                "zh-pi": ["ДЃ", "ГЎ", "ЗЋ", "Г ", "Д“", "Г©", "Д›", "ГЁ", "Д«", "Г­", "Зђ", "Г¬", "ЕЌ", "Гі", "З’", "ГІ", "Е«", "Гє", "З”", "Г№", "З–", "З", "Зљ", "Зњ", "Гј"]
            };
            var r = s("./app/j/config/languages.ts"),
                i = s("./app/j/utils/ensureArray.ts");
            const l = {
                containsAccentLanguage: e => (0, i.Z)(e).some((e => e in o && o[e].length > 0)),
                containsHardLanguage: e => (0, i.Z)(e).some((e => r.GK.indexOf(e) > -1)),
                getCharactersByLangForLangs(e) {
                    const t = {};
                    return a()(e).filter((e => e)).forEach((e => {
                        o[e] && (t[e] = o[e])
                    })), t
                }
            }
        },
        "./app/j/utils/HOCs.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                E: () => i,
                r: () => l
            });
            var n = s("./app/j/constants/DiagnosticConstants.ts"),
                a = s("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),
                o = s.n(a);

            function r(e, t) {
                if (n.up) {
                    const s = e => e.displayName || e.name || "Component";
                    t.displayName = s(t) + "(" + s(e) + ")"
                }
                return o()(t, e)
            }

            function i(e) {
                return t => r(t, e(t))
            }

            function l(e) {
                return t => r(t, e(t))
            }
        },
        "./app/j/utils/Leaflet.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                $g: () => d,
                AK: () => l,
                Ep: () => g,
                H4: () => m,
                os: () => r
            });
            var n = s("./app/j/diagrams/DiagramConstants.ts"),
                a = s("./app/j/diagrams/LeafletConstants.ts"),
                o = s("./app/j/diagrams/QLeaflet.ts");

            function r(e) {
                return a.k.pointToLatLng(e, n.m6)
            }
            const i = n.C / 2;

            function l(e) {
                return "Point" === function(e) {
                    return e.geometry.type
                }(e)
            }

            function d(e) {
                return (e.getNorth() - e.getSouth()) * (e.getEast() - e.getWest())
            }

            function u(e, t) {
                return e.getNorthEast()[t] - e.getSouthWest()[t]
            }

            function c(e, t, s, n) {
                return u(e, n) >= u(t, n) ? t.getCenter()[n] - e.getCenter()[n] : "lat" === n ? function(e, t, s) {
                    let n = 0;
                    const a = Math.max(s.getNorth(), t.getNorth()),
                        o = Math.min(s.getSouth(), t.getSouth());
                    return e.getNorth() >= a ? n = a - e.getNorth() : e.getSouth() < o && (n = o - e.getSouth()), n
                }(e, t, s) : function(e, t, s) {
                    let n = 0;
                    const a = Math.min(s.getWest(), t.getWest()),
                        o = Math.max(s.getEast(), t.getEast());
                    return e.getWest() <= a ? n = a - e.getWest() : e.getEast() > o && (n = o - e.getEast()), n
                }(e, t, s)
            }

            function p(e, t, s) {
                const a = function(e, t) {
                        let s = t.getNorth(),
                            n = t.getEast();
                        const a = u(t, "lat"),
                            r = u(t, "lng");
                        return 0 === e ? (s = 0, n = 0) : a / r < e ? s = r * e + t.getSouth() : n = a / e + t.getWest(), o.Z.latLngBounds(t.getSouthWest(), o.Z.latLng(s, n))
                    }(e, t),
                    r = function(e, t) {
                        const s = d(e),
                            a = d(t) / s;
                        return a < n.Lg ? n.Lg / a : 0
                    }(s, a);
                return r && (a.getNorthEast().lat = (a.getNorth() - a.getSouth()) * Math.sqrt(r) + a.getSouth(), a.getNorthEast().lng = (a.getEast() - a.getWest()) * Math.sqrt(r) + a.getWest()), a
            }

            function m(e, t, s) {
                let n = e;
                s && (n = s);
                let r = n.getSouth(),
                    l = n.getNorth(),
                    d = n.getEast(),
                    u = n.getWest();
                const c = a.k.pointToLatLng(o.Z.point(i, 0), t).lng,
                    p = a.k.pointToLatLng(o.Z.point(0, i), t).lat;
                return Math.abs(u - e.getWest()) < Math.abs(c) && (u -= c), Math.abs(d - e.getEast()) < Math.abs(c) && (d += c), Math.abs(l - e.getNorth()) < Math.abs(p) && (l -= p), Math.abs(r - e.getSouth()) < Math.abs(p) && (r += p), o.Z.latLngBounds(o.Z.latLng(r, u), o.Z.latLng(l, d))
            }

            function g(e, t, s, n) {
                const a = m(e, n);
                return function(e, t, s) {
                    const n = c(e, t, s, "lng"),
                        a = c(e, t, s, "lat"),
                        r = o.Z.latLng(e.getNorth() + a, e.getEast() + n),
                        i = o.Z.latLng(e.getSouth() + a, e.getWest() + n);
                    return o.Z.latLngBounds(r, i)
                }(function(e, t) {
                    const s = e.getCenter(),
                        n = t.getCenter(),
                        a = n.lat - s.lat,
                        r = n.lng - s.lng,
                        i = o.Z.latLng(t.getNorth() - a, t.getEast() - r),
                        l = o.Z.latLng(t.getSouth() - a, t.getWest() - r);
                    return o.Z.latLngBounds(i, l)
                }(a, p(t, a, s)), s, a)
            }
        },
        "./app/j/utils/LoginHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Bk: () => S,
                Bq: () => g,
                GG: () => _,
                SL: () => m,
                Xs: () => h
            });
            s("./node_modules/core-js/modules/es.json.stringify.js"), s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/compatibility/cookies.ts"),
                a = s("./node_modules/qs/lib/index.js"),
                o = s.n(a),
                r = s("./app/j/utils/Cookie.ts"),
                i = s("./app/j/utils/redirect.ts"),
                l = s("./app/j/utils/urlHelper.ts");
            const d = "google-oauth-redirector",
                u = "fb-oauth-redirector";

            function c(e, t) {
                void 0 === e && (e = null);
                let s = e;
                return null === s && (s = "undefined" == typeof window ? t : window.location.pathname + window.location.search), s = (0, l.Gx)(s), "undefined" != typeof window && null === (0, l.Rp)(s) && (s += window.location.hash), s
            }

            function p(e) {
                let {
                    oauthRedirectorUri: t,
                    redirect: s = null,
                    reauthenticate: n = !1,
                    customParams: a = {},
                    pageSource: o
                } = e;
                let r = {
                    from: c(s, o)
                };
                return n && (r = {
                    ...r,
                    reauthenticate: "1"
                }), a && (r = {
                    ...r,
                    customParams: JSON.stringify(a)
                }), "/" + t + "?" + (i = r, Object.keys(i).map((e => [e, i[e]].map(encodeURIComponent).join("="))).join("&"));
                var i
            }

            function m(e) {
                let {
                    redirect: t = null,
                    reauthenticate: s = !1,
                    customParams: a = {},
                    pageSource: o
                } = e;
                const {
                    readCookieWithKey: i
                } = (0, n.f)(), l = i(r.RY.AUTH__CSRF);
                return p({
                    oauthRedirectorUri: d,
                    redirect: t,
                    reauthenticate: s,
                    customParams: {
                        ...a,
                        state: l
                    },
                    pageSource: o
                })
            }

            function g(e) {
                let {
                    redirect: t = null,
                    reauthenticate: s = !1,
                    customParams: a = {},
                    pageSource: o
                } = e;
                const {
                    readCookieWithKey: i
                } = (0, n.f)(), l = i(r.RY.AUTH__CSRF);
                return p({
                    oauthRedirectorUri: u,
                    redirect: t,
                    reauthenticate: s,
                    customParams: {
                        ...a,
                        state: l
                    },
                    pageSource: o
                })
            }

            function h(e) {
                let {
                    isReauth: t = !1,
                    authenticationResponse: s = {},
                    signupOrigin: n = "",
                    screenName: a = "",
                    redir: r = "",
                    pageSource: i
                } = e;
                const l = c(r, i);
                return "/apple-login?" + o().stringify({
                    ...s,
                    signupOrigin: n,
                    screenName: a,
                    isReauth: t,
                    redir: l
                })
            }

            function _(e) {
                let t = null;
                return "undefined" != typeof window && (t = o().parse(window.location.search).screenName), t || e || void 0
            }
            const S = async (e, t) => {
                const s = window.AppleID;
                if (!s) return void t("error_apple_client");
                const n = r.ZP.read(r.RY.AUTH__CSRF);
                try {
                    s.auth.init({
                        clientId: "com.quizlet.client",
                        scope: "name email",
                        redirectURI: window.location.origin,
                        state: n,
                        nonce: n,
                        usePopup: !0
                    });
                    const t = await s.auth.signIn(),
                        a = h({
                            ...e,
                            authenticationResponse: t
                        });
                    (0, i.ZP)(a)
                } catch (a) {
                    t("error_apple_authorization")
                }
            }
        },
        "./app/j/utils/PageSessionHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var n = s("./app/j/constants/TimeConstants.ts"),
                a = s("./app/j/utils/tamperProofNow.ts"),
                o = s("./node_modules/uuid/dist/esm-browser/v4.js");
            const r = 30 * n.A_;
            class i {
                constructor(e) {
                    void 0 === e && (e = r), this.pageSessionId = "", this.sessionExpirationTimestamp = 0, this.lastAccessTimestamp = 0, this.ttl = e
                }
                generatePageSessionId() {
                    return (0, o.Z)()
                }
                setPageSessionId(e) {
                    this.pageSessionId = e, this.sessionExpirationTimestamp = (0, a.Z)() + this.ttl
                }
                setLastAccessTimestamp(e) {
                    this.lastAccessTimestamp = e
                }
                getPageSessionId() {
                    let e;
                    return this.lastAccessTimestamp > 0 && this.lastAccessTimestamp < this.sessionExpirationTimestamp ? e = this.pageSessionId : (e = this.generatePageSessionId(), this.setPageSessionId(e)), this.setLastAccessTimestamp((0, a.Z)()), e
                }
            }
        },
        "./app/j/utils/StudyEventLogger.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => c
            });
            var n = s("./app/j/config/enums.ts"),
                a = s("./app/j/utils/log-event.ts"),
                o = s("./app/j/utils/PageSessionHelper.ts"),
                r = (s("./node_modules/core-js/modules/es.json.stringify.js"), s("./app/j/utils/unix-timestamp.ts"));
            class i {
                constructor(e) {
                    let {
                        studyPageSessionHelper: t,
                        questionPageSessionHelper: s,
                        uid: n,
                        userId: a
                    } = e;
                    this.studyPageSessionHelper = t, this.questionPageSessionHelper = s, this.uid = n, this.userId = a
                }
                getStudySessionId() {
                    return this.studyPageSessionHelper.getPageSessionId()
                }
                getQuestionSessionId() {
                    return this.questionPageSessionHelper.getPageSessionId()
                }
                logMultipleChoiceOptionEvent(e, t, s) {
                    const o = {
                        action: e,
                        uid: this.uid,
                        user_id: this.userId || null,
                        client_id: null,
                        client_timestamp: (0, r.vJ)(),
                        platform: n.t4T.WEB,
                        study_session_id: this.studyPageSessionHelper.getPageSessionId(),
                        question_session_id: this.getQuestionSessionId(),
                        ...t,
                        option_texts: JSON.stringify(t.option_texts)
                    };
                    s ? (0, a.K)(s, "multiple_choice_option_events", o) : (0, a.Z)("multiple_choice_option_events", o)
                }
            }
            class l {
                constructor(e) {
                    let {
                        studyPageSessionHelper: t,
                        questionPageSessionHelper: s,
                        uid: n,
                        userId: a
                    } = e;
                    this.studyPageSessionHelper = t, this.questionPageSessionHelper = s, this.uid = n, this.userId = a
                }
                getStudySessionId() {
                    return this.studyPageSessionHelper.getPageSessionId()
                }
                getQuestionSessionId() {
                    return this.questionPageSessionHelper.getPageSessionId()
                }
                logTextGradingEvent(e, t, s, o) {
                    void 0 === s && (s = (0, r.vJ)());
                    const i = {
                        action: e,
                        client_id: null,
                        client_timestamp: s,
                        platform: n.t4T.WEB,
                        question_session_id: this.getQuestionSessionId(),
                        study_session_id: this.getStudySessionId(),
                        uid: this.uid,
                        user_id: this.userId || null,
                        ...t
                    };
                    o ? (0, a.K)(o, "text_grading_events", i) : (0, a.Z)("text_grading_events", i)
                }
            }
            class d {
                constructor(e, t, s, n) {
                    this.modeType = e, this.questionPageSessionHelper = new o.Z, this.studyPageSessionHelper = t, this.multipleChoiceOptionLogger = null, this.textGradingEventLogger = null, this.uid = s, this.userId = n
                }
                generateNewQuestionSessionId() {
                    const e = this.questionPageSessionHelper.generatePageSessionId();
                    return this.questionPageSessionHelper.setPageSessionId(e), e
                }
                getQuestionSessionId() {
                    return this.questionPageSessionHelper.getPageSessionId()
                }
                getStudySessionId() {
                    return this.studyPageSessionHelper.getPageSessionId()
                }
                logQuestionEvent(e, t, s, o) {
                    void 0 === s && (s = !1);
                    const {
                        answeredTermId: i,
                        promptTermId: l,
                        questionContent: d,
                        questionSessionId: u,
                        ...c
                    } = t;
                    e === n.WFi.VIEW_START && this.generateNewQuestionSessionId(), s && this.generateNewQuestionSessionId();
                    const p = {
                        action: e,
                        uid: this.uid,
                        mode_type: this.modeType,
                        client_answered_term_id: i,
                        server_answered_term_id: i,
                        client_prompt_term_id: l,
                        server_prompt_term_id: l,
                        client_timestamp: (0, r.vJ)(),
                        platform: n.t4T.WEB,
                        question_session_id: u || this.getQuestionSessionId(),
                        study_session_id: this.studyPageSessionHelper.getPageSessionId(),
                        question_content: e === n.WFi.VIEW_START ? d : null,
                        ...c
                    };
                    return o ? (0, a.K)(o, "question_events", p) : (0, a.Z)("question_events", p), this.getQuestionSessionId()
                }
                getMultipleChoiceOptionLogger() {
                    return null === this.multipleChoiceOptionLogger && (this.multipleChoiceOptionLogger = new i({
                        studyPageSessionHelper: this.studyPageSessionHelper,
                        questionPageSessionHelper: this.questionPageSessionHelper,
                        uid: this.uid,
                        userId: this.userId
                    })), this.multipleChoiceOptionLogger
                }
                getTextGradingEventLogger() {
                    return null === this.textGradingEventLogger && (this.textGradingEventLogger = new l({
                        questionPageSessionHelper: this.questionPageSessionHelper,
                        studyPageSessionHelper: this.studyPageSessionHelper,
                        uid: this.uid,
                        userId: this.userId
                    })), this.textGradingEventLogger
                }
            }
            var u = s("./app/j/utils/SearchEventLogger.ts");
            class c {
                constructor(e) {
                    let {
                        modeType: t,
                        selectedOnly: s,
                        studyableId: n,
                        studyableType: a,
                        embedType: r,
                        enabled: i = !0,
                        funnelUUID: l,
                        gameInstanceId: u,
                        gameInstanceUuid: c,
                        gameType: p,
                        uid: m,
                        userId: g
                    } = e;
                    this.modeType = t, this.selectedOnly = s, this.studyableId = n, this.studyableType = a, this.embedType = r, this.enabled = i, this.funnelUUID = l, this.gameInstanceId = u, this.gameInstanceUuid = c, this.gameType = p, this.uid = m, this.userId = g, this.studyPageSessionHelper = new o.Z, this.questionEventLogger = new d(this.modeType, this.studyPageSessionHelper, m, g), this.logStudyEvent = this.logStudyEvent.bind(this)
                }
                getStudySessionId() {
                    return this.studyPageSessionHelper.getPageSessionId()
                }
                logStudyEvent(e, t, s) {
                    if (!this.enabled) return;
                    const {
                        sessionId: o,
                        termId: i,
                        referer: l,
                        selectedOnly: d,
                        ...c
                    } = s || {}, p = {
                        action: e,
                        client_session_id: o,
                        client_studyable_id: this.studyableId,
                        client_term_id: i,
                        client_timestamp: (0, r.vJ)(),
                        embed_type: this.embedType,
                        funnel_uuid: this.funnelUUID,
                        game_instance_id: this.gameInstanceId,
                        game_instance_uuid: this.gameInstanceUuid,
                        game_type: this.gameType,
                        mode_type: this.modeType,
                        platform: n.t4T.WEB,
                        referrer: l || window.document.referrer,
                        selected_only: void 0 !== d ? d : this.selectedOnly,
                        server_session_id: o,
                        server_studyable_id: this.studyableId,
                        server_term_id: i,
                        study_session_id: this.getStudySessionId(),
                        studyable_type: this.studyableType,
                        uid: this.uid,
                        user_id: this.userId || null,
                        ...c
                    }, {
                        loggers: m,
                        loggerConfig: g
                    } = t;
                    m && m.logEvent ? m.logEvent("study_events", p, {
                        includeUserDetails: !1
                    }) : g && (0, a.K)(g, "study_events", p, {
                        includeUserDetails: !1
                    }), e !== n.WVJ.BEGIN || this.embedType || u.ZP.logSearchHitStudy(this.studyableId, this.studyableType, this.getStudySessionId(), this.modeType, t)
                }
                getQuestionEventLogger() {
                    return this.questionEventLogger
                }
            }
        },
        "./app/j/utils/StudyPageVisibilityTracker.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var n = s("./app/j/config/enums.ts");
            class a {
                constructor(e) {
                    this.handleVisible = () => {
                        this.logFn(n.WVJ.ENTER)
                    }, this.handleHidden = () => {
                        this.logFn(n.WVJ.EXIT)
                    }, this.logFn = e, "visible" === document.visibilityState && this.handleVisible(), document.addEventListener("visibilitychange", (() => {
                        switch (document.visibilityState) {
                            case "hidden":
                                this.handleHidden();
                                break;
                            case "visible":
                                this.handleVisible()
                        }
                    }), !0)
                }
            }
        },
        "./app/j/utils/StudySettingEncodingHelper.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Yu: () => p,
                R1: () => g,
                S5: () => m,
                Tx: () => _,
                eR: () => h
            });
            var n = s("./node_modules/lodash/flow.js"),
                a = s.n(n),
                o = (s("./node_modules/core-js/modules/es.array.reduce.js"), s("./node_modules/core-js/modules/es.array.iterator.js"), s("./node_modules/core-js/modules/web.dom-collections.iterator.js"), s("./app/j/config/enums.ts")),
                r = s("./app/j/config/study-setting-metadata.ts"),
                i = s("./node_modules/nullthrows/nullthrows.js"),
                l = s.n(i),
                d = s("./app/j/study-modes/legacy-common/utils/studiablesToTermUtils.ts");
            o.Std.PROMPT_TERM_SIDES, o.Std.ANSWER_TERM_SIDES, o.Std.MATCH_MODE_SIDES, o.Std.TEST_PROMPT_TERM_SIDES, o.Std.TEST_ANSWER_TERM_SIDES;

            function u(e) {
                const t = l()(function(e, t) {
                    const s = Object.keys(e);
                    for (let n = 0; n < s.length; n++)
                        if (e[s[n]] === t) return s[n];
                    return null
                }(o.Std, e));
                return r.default[t] ? t : null
            }

            function c(e) {
                return 2 ** Number(e)
            }

            function p(e) {
                return e.reduce(((e, t) => {
                    return s = e, n = t, void 0 === a && (a = !0), Number(a ? s | n : s & ~n);
                    var s, n, a
                }), 0)
            }

            function m(e) {
                return p(e.map(c))
            }

            function g(e) {
                return p(e.map(a()(d.Q, c)))
            }

            function h(e, t, s) {
                let n;
                return n = t ? [...s, e] : s.filter((t => t !== e)), n
            }

            function _(e) {
                const t = l()(u(e));
                return r.default[t]
            }
        },
        "./app/j/utils/diff.ts": (e, t, s) => {
            "use strict";

            function n(e) {
                let {
                    ignoreCase: t
                } = e;
                this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32, this.ignoreCase = t
            }
            s.d(t, {
                D$: () => o,
                JZ: () => r,
                NL: () => a,
                ZP: () => i
            });
            const a = -1,
                o = 1,
                r = 0;
            n.Diff, n.prototype.diff_main = function(e, t, s, n) {
                void 0 === s && (s = !0), void 0 === n && (n = void 0), void 0 === n && (n = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
                var a = n;
                if (null == e || null == t) throw new Error("Null input. (diff_main)");
                if (e == t) return e ? [
                    [r, e]
                ] : [];
                var o = this.diff_commonPrefix(e, t),
                    i = e.substring(0, o);
                e = e.substring(o), t = t.substring(o), o = this.diff_commonSuffix(e, t);
                var l = e.substring(e.length - o);
                e = e.substring(0, e.length - o), t = t.substring(0, t.length - o);
                var d = this.diff_compute_(e, t, s, a);
                return i && d.unshift([r, i]), l && d.push([r, l]), this.diff_cleanupMerge(d), d
            }, n.prototype.diff_compute_ = function(e, t, s, n) {
                var i;
                if (!e) return [
                    [o, t]
                ];
                if (!t) return [
                    [a, e]
                ];
                var l = e.length > t.length ? e : t,
                    d = e.length > t.length ? t : e,
                    u = l.indexOf(d);
                if (-1 != u) return i = [
                    [o, l.substring(0, u)],
                    [r, d],
                    [o, l.substring(u + d.length)]
                ], e.length > t.length && (i[0][0] = i[2][0] = a), i;
                if (1 == d.length) return [
                    [a, e],
                    [o, t]
                ];
                l = d = null;
                var c = this.diff_halfMatch_(e, t);
                if (c) {
                    var p = c[0],
                        m = c[1],
                        g = c[2],
                        h = c[3],
                        _ = c[4],
                        S = this.diff_main(p, g, s, n),
                        E = this.diff_main(m, h, s, n);
                    return S.concat([
                        [r, _]
                    ], E)
                }
                return this.diff_bisect_(e, t, n)
            }, n.prototype.diff_bisect_ = function(e, t, s) {
                for (var n = e.length, r = t.length, i = Math.ceil((n + r) / 2), l = i, d = 2 * i, u = new Array(d), c = new Array(d), p = 0; p < d; p++) u[p] = -1, c[p] = -1;
                u[l + 1] = 0, c[l + 1] = 0;
                for (var m = n - r, g = m % 2 != 0, h = 0, _ = 0, S = 0, E = 0, y = 0; y < i && !((new Date).getTime() > s); y++) {
                    for (var f = -y + h; f <= y - _; f += 2) {
                        for (var j = l + f, T = (v = f == -y || f != y && u[j - 1] < u[j + 1] ? u[j + 1] : u[j - 1] + 1) - f; v < n && T < r && e.charAt(v) == t.charAt(T);) v++, T++;
                        if (u[j] = v, v > n) _ += 2;
                        else if (T > r) h += 2;
                        else if (g) {
                            if ((x = l + m - f) >= 0 && x < d && -1 != c[x])
                                if (v >= (b = n - c[x])) return this.diff_bisectSplit_(e, t, v, T, s)
                        }
                    }
                    for (var A = -y + S; A <= y - E; A += 2) {
                        for (var b, x = l + A, I = (b = A == -y || A != y && c[x - 1] < c[x + 1] ? c[x + 1] : c[x - 1] + 1) - A; b < n && I < r && e.charAt(n - b - 1) == t.charAt(r - I - 1);) b++, I++;
                        if (c[x] = b, b > n) E += 2;
                        else if (I > r) S += 2;
                        else if (!g) {
                            if ((j = l + m - A) >= 0 && j < d && -1 != u[j]) {
                                var v;
                                T = l + (v = u[j]) - j;
                                if (v >= (b = n - b)) return this.diff_bisectSplit_(e, t, v, T, s)
                            }
                        }
                    }
                }
                return [
                    [a, e],
                    [o, t]
                ]
            }, n.prototype.diff_bisectSplit_ = function(e, t, s, n, a) {
                var o = e.substring(0, s),
                    r = t.substring(0, n),
                    i = e.substring(s),
                    l = t.substring(n),
                    d = this.diff_main(o, r, !1, a),
                    u = this.diff_main(i, l, !1, a);
                return d.concat(u)
            }, n.prototype.diff_commonPrefix = function(e, t) {
                var s = this.ignoreCase ? e.charAt(0).toLowerCase() != t.charAt(0).toLowerCase() : e.charAt(0) != t.charAt(0);
                if (!e || !t || s) return 0;
                for (var n = 0, a = Math.min(e.length, t.length), o = a, r = 0; n < o;) {
                    var i = e.substring(r, o),
                        l = t.substring(r, o);
                    this.ignoreCase && (i = i.toLowerCase(), l = l.toLowerCase()), i == l ? r = n = o : a = o, o = Math.floor((a - n) / 2 + n)
                }
                return o
            }, n.prototype.diff_commonSuffix = function(e, t) {
                if (!e || !t || e.charAt(e.length - 1).toLowerCase() != t.charAt(t.length - 1).toLowerCase()) return 0;
                for (var s = 0, n = Math.min(e.length, t.length), a = n, o = 0; s < a;) {
                    var r = e.substring(e.length - a, e.length - o),
                        i = t.substring(t.length - a, t.length - o);
                    this.ignoreCase && (r = r.toLowerCase(), i = i.toLowerCase()), r == i ? o = s = a : n = a, a = Math.floor((n - s) / 2 + s)
                }
                return a
            }, n.prototype.diff_commonOverlap_ = function(e, t) {
                var s = e.length,
                    n = t.length;
                if (0 == s || 0 == n) return 0;
                s > n ? e = e.substring(s - n) : s < n && (t = t.substring(0, s));
                var a = Math.min(s, n);
                if (e == t) return a;
                for (var o = 0, r = 1;;) {
                    var i = e.substring(a - r),
                        l = t.indexOf(i);
                    if (-1 == l) return o;
                    r += l, 0 != l && e.substring(a - r) != t.substring(0, r) || (o = r, r++)
                }
            }, n.prototype.diff_halfMatch_ = function(e, t) {
                if (this.Diff_Timeout <= 0) return null;
                var s = e.length > t.length ? e : t,
                    n = e.length > t.length ? t : e;
                if (s.length < 4 || 2 * n.length < s.length) return null;
                var a = this;

                function o(e, t, s) {
                    for (var n, o, r, i, l = e.substring(s, s + Math.floor(e.length / 4)), d = -1, u = ""; - 1 != (d = t.indexOf(l, d + 1));) {
                        var c = a.diff_commonPrefix(e.substring(s), t.substring(d)),
                            p = a.diff_commonSuffix(e.substring(0, s), t.substring(0, d));
                        u.length < p + c && (u = t.substring(d - p, d) + t.substring(d, d + c), n = e.substring(0, s - p), o = e.substring(s + c), r = t.substring(0, d - p), i = t.substring(d + c))
                    }
                    return 2 * u.length >= e.length ? [n, o, r, i, u] : null
                }
                var r, i, l, d, u, c = o(s, n, Math.ceil(s.length / 4)),
                    p = o(s, n, Math.ceil(s.length / 2));
                return c || p ? (r = p ? c && c[4].length > p[4].length ? c : p : c, e.length > t.length ? (i = r[0], l = r[1], d = r[2], u = r[3]) : (d = r[0], u = r[1], i = r[2], l = r[3]), [i, l, d, u, r[4]]) : null
            }, n.prototype.diff_cleanupSemantic = function(e) {
                for (var t = !1, s = [], n = 0, i = null, l = 0, d = 0, u = 0, c = 0, p = 0; l < e.length;) e[l][0] == r ? (s[n++] = l, d = c, u = p, c = 0, p = 0, i = e[l][1]) : (e[l][0] == o ? c += e[l][1].length : p += e[l][1].length, null !== i && i.length <= Math.max(d, u) && i.length <= Math.max(c, p) && (e.splice(s[n - 1], 0, [a, i]), e[s[n - 1] + 1][0] = o, n--, l = --n > 0 ? s[n - 1] : -1, d = 0, u = 0, c = 0, p = 0, i = null, t = !0)), l++;
                for (t && this.diff_cleanupMerge(e), this.diff_cleanupSemanticLossless(e), l = 1; l < e.length;) {
                    if (e[l - 1][0] == a && e[l][0] == o) {
                        var m = e[l - 1][1],
                            g = e[l][1],
                            h = this.diff_commonOverlap_(m, g);
                        h && (e.splice(l, 0, [r, g.substring(0, h)]), e[l - 1][1] = m.substring(0, m.length - h), e[l + 1][1] = g.substring(h), l++), l++
                    }
                    l++
                }
            }, n.prototype.diff_cleanupSemanticLossless = function(e) {
                var t = /[^a-zA-Z0-9]/,
                    s = /\s/,
                    n = /[\r\n]/,
                    a = /\n\r?\n$/,
                    o = /^\r?\n\r?\n/;

                function i(e, r) {
                    if (!e || !r) return 5;
                    var i = 0;
                    return (e.charAt(e.length - 1).match(t) || r.charAt(0).match(t)) && (i++, (e.charAt(e.length - 1).match(s) || r.charAt(0).match(s)) && (i++, (e.charAt(e.length - 1).match(n) || r.charAt(0).match(n)) && (i++, (e.match(a) || r.match(o)) && i++))), i
                }
                for (var l = 1; l < e.length - 1;) {
                    if (e[l - 1][0] == r && e[l + 1][0] == r) {
                        var d = e[l - 1][1],
                            u = e[l][1],
                            c = e[l + 1][1],
                            p = this.diff_commonSuffix(d, u);
                        if (p) {
                            var m = u.substring(u.length - p);
                            d = d.substring(0, d.length - p), u = m + u.substring(0, u.length - p), c = m + c
                        }
                        for (var g = d, h = u, _ = c, S = i(d, u) + i(u, c); u.charAt(0) === c.charAt(0);) {
                            d += u.charAt(0), u = u.substring(1) + c.charAt(0), c = c.substring(1);
                            var E = i(d, u) + i(u, c);
                            E >= S && (S = E, g = d, h = u, _ = c)
                        }
                        e[l - 1][1] != g && (g ? e[l - 1][1] = g : (e.splice(l - 1, 1), l--), e[l][1] = h, _ ? e[l + 1][1] = _ : (e.splice(l + 1, 1), l--))
                    }
                    l++
                }
            }, n.prototype.diff_cleanupEfficiency = function(e) {
                for (var t = !1, s = [], n = 0, i = "", l = 0, d = !1, u = !1, c = !1, p = !1; l < e.length;) e[l][0] == r ? (e[l][1].length < this.Diff_EditCost && (c || p) ? (s[n++] = l, d = c, u = p, i = e[l][1]) : (n = 0, i = ""), c = p = !1) : (e[l][0] == a ? p = !0 : c = !0, i && (d && u && c && p || i.length < this.Diff_EditCost / 2 && d + u + c + p == 3) && (e.splice(s[n - 1], 0, [a, i]), e[s[n - 1] + 1][0] = o, n--, i = "", d && u ? (c = p = !0, n = 0) : (l = --n > 0 ? s[n - 1] : -1, c = p = !1), t = !0)), l++;
                t && this.diff_cleanupMerge(e)
            }, n.prototype.diff_cleanupMerge = function(e) {
                e.push([r, ""]);
                for (var t, s = 0, n = 0, i = 0, l = "", d = ""; s < e.length;) switch (e[s][0]) {
                    case o:
                        i++, d += e[s][1], s++;
                        break;
                    case a:
                        n++, l += e[s][1], s++;
                        break;
                    case r:
                        n + i > 1 ? (0 !== n && 0 !== i && (0 !== (t = this.diff_commonPrefix(d, l)) && (s - n - i > 0 && e[s - n - i - 1][0] == r ? e[s - n - i - 1][1] += d.substring(0, t) : (e.splice(0, 0, [r, d.substring(0, t)]), s++), d = d.substring(t), l = l.substring(t)), 0 !== (t = this.diff_commonSuffix(d, l)) && (e[s][1] = d.substring(d.length - t) + e[s][1], d = d.substring(0, d.length - t), l = l.substring(0, l.length - t))), 0 === n ? e.splice(s - n - i, n + i, [o, d]) : 0 === i ? e.splice(s - n - i, n + i, [a, l]) : e.splice(s - n - i, n + i, [a, l], [o, d]), s = s - n - i + (n ? 1 : 0) + (i ? 1 : 0) + 1) : 0 !== s && e[s - 1][0] == r ? (e[s - 1][1] += e[s][1], e.splice(s, 1)) : s++, i = 0, n = 0, l = "", d = ""
                }
                "" === e[e.length - 1][1] && e.pop();
                var u = !1;
                for (s = 1; s < e.length - 1;) e[s - 1][0] == r && e[s + 1][0] == r && (e[s][1].substring(e[s][1].length - e[s - 1][1].length) == e[s - 1][1] ? (e[s][1] = e[s - 1][1] + e[s][1].substring(0, e[s][1].length - e[s - 1][1].length), e[s + 1][1] = e[s - 1][1] + e[s + 1][1], e.splice(s - 1, 1), u = !0) : e[s][1].substring(0, e[s + 1][1].length) == e[s + 1][1] && (e[s - 1][1] += e[s + 1][1], e[s][1] = e[s][1].substring(e[s + 1][1].length) + e[s + 1][1], e.splice(s + 1, 1), u = !0)), s++;
                u && this.diff_cleanupMerge(e)
            }, n.prototype.diff_levenshtein = function(e) {
                for (var t = 0, s = 0, n = 0, i = 0; i < e.length; i++) {
                    var l = e[i][0],
                        d = e[i][1];
                    switch (l) {
                        case o:
                            s += d.length;
                            break;
                        case a:
                            n += d.length;
                            break;
                        case r:
                            t += Math.max(s, n), s = 0, n = 0
                    }
                }
                return t += Math.max(s, n)
            };
            const i = n
        },
        "./app/j/utils/elementMatches.ts": (e, t, s) => {
            "use strict";

            function n(e, t) {
                const s = e.ownerDocument.querySelectorAll(t);
                let n = s.length;
                for (; --n >= 0 && s.item(n) !== e;);
                return n > -1
            }

            function a(e, t) {
                return function(e) {
                    return (e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || n).bind(e)
                }(e)(t)
            }
            s.d(t, {
                Z: () => a
            })
        },
        "./app/j/utils/ensureArray.ts": (e, t, s) => {
            "use strict";

            function n(e) {
                return e ? Array.isArray(e) ? e : [e] : []
            }
            s.d(t, {
                Z: () => n
            })
        },
        "./app/j/utils/hexToRgba.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            s("./node_modules/core-js/modules/es.string.replace.js");
            var n = s("./node_modules/invariant/browser.js"),
                a = s.n(n);

            function o(e, t) {
                void 0 === t && (t = 1);
                const s = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, ((e, t, s, n) => t + t + s + s + n + n)),
                    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);
                a()(n, "Failed to extract parts from hex string");
                return "rgba(" + parseInt(n[1], 16) + ", " + parseInt(n[2], 16) + ", " + parseInt(n[3], 16) + ", " + t + ")"
            }
        },
        "./app/j/utils/is-element-active.ts": (e, t, s) => {
            "use strict";

            function n(e) {
                return window.document.activeElement === e
            }
            s.d(t, {
                Z: () => n
            })
        },
        "./app/j/utils/metering/MeteringPlus.tsx": (e, t, s) => {
            "use strict";
            s.d(t, {
                PK: () => p,
                eW: () => i,
                r5: () => g,
                vM: () => l,
                vU: () => m,
                w_: () => c
            });
            var n = s("./node_modules/react/index.js"),
                a = s("./node_modules/react/jsx-runtime.js");
            const o = e => ({
                    learnMeteringMeta: e
                }),
                r = (0, n.createContext)(void 0),
                i = e => {
                    let {
                        children: t,
                        learnMeteringMeta: s
                    } = e;
                    return (0, a.jsx)(r.Provider, {
                        value: o(s),
                        children: t
                    })
                };

            function l() {
                var e, t;
                const s = (0, n.useContext)(r);
                if (void 0 === s) throw new Error("useGetNumberOfMeteredPlusLearnRounds() can only be used in components with a LearnMeterContextProvider");
                return null != (e = null == (t = s.learnMeteringMeta) ? void 0 : t.threshold) ? e : null
            }
            const d = e => ({
                    testMeteringMeta: e
                }),
                u = (0, n.createContext)(void 0),
                c = e => {
                    let {
                        children: t,
                        testMeteringMeta: s
                    } = e;
                    return (0, a.jsx)(u.Provider, {
                        value: d(s),
                        children: t
                    })
                };

            function p() {
                var e, t;
                const s = (0, n.useContext)(u);
                if (void 0 === s) throw new Error("useGetNumberOfMeteredPlusTestRounds() can only be used in components with a TestMeterContextProvider");
                return null != (e = null == (t = s.testMeteringMeta) ? void 0 : t.threshold) ? e : null
            }
            const m = (e, t) => !(t || !e || e.canShowRewardAd) && e.numEvents >= e.threshold,
                g = (e, t) => t || m(e, t)
        },
        "./app/j/utils/metering/syncMeteringUtils.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                j: () => o
            });
            s("./node_modules/core-js/modules/es.promise.js");
            var n = s("./app/j/config/enums.ts"),
                a = s("./node_modules/immer/dist/immer.esm.mjs");
            const o = async e => {
                let t, {
                    dispatchSetMeteringData: s,
                    getStoreMeteringData: o,
                    meteredEventType: r,
                    meteringData: i,
                    saveMeteredEvent: l,
                    shouldMergeMeteringDataForRVA: d,
                    skipSaveMeteredEvent: u,
                    skipUpdateMeteringMetaFromResponse: c,
                    studiableContainerId: p,
                    meterExceededAction: m
                } = e;
                if (t = d ? (e => {
                        let {
                            meteringData: t,
                            storeMeteringData: s
                        } = e;
                        return (0, a.ZP)(t, (e => {
                            const t = e[n.jrE.LEARN_CHECKPOINT],
                                a = s[n.jrE.LEARN_CHECKPOINT];
                            t && null !== (null == a ? void 0 : a.canShowRewardAd) && void 0 !== (null == a ? void 0 : a.canShowRewardAd) && (t.canShowRewardAd = a.canShowRewardAd)
                        }))
                    })({
                        meteringData: i,
                        storeMeteringData: o()
                    }) : i, s(t), u) return;
                const g = (e => e === n.jrE.LEARN_CHECKPOINT_REWARD ? n.jrE.LEARN_CHECKPOINT : e)(r),
                    h = t[g];
                if (!h) return;
                const _ = r === g,
                    S = await l({
                        eventType: r,
                        studiableContainerId: p,
                        ..._ && {
                            eventCount: h.numEvents
                        }
                    });
                if (c) return;
                const E = null == S ? void 0 : S.data;
                E && (t = {
                    ...t,
                    [g]: E
                }, m && E.numEvents > E.threshold && m(), s(t))
            }
        },
        "./app/j/utils/parseAge.ts": (e, t, s) => {
            "use strict";

            function n(e, t, s) {
                const n = t - 1;
                if (Number.isNaN(n) || Number.isNaN(e) || Number.isNaN(s) || -1 === t || -1 === e || -1 === s) return 1 / 0;
                const a = new Date,
                    o = new Date(e, n, s);
                let r = a.getFullYear() - o.getFullYear();
                const i = a.getMonth() - o.getMonth();
                return (i < 0 || 0 === i && a.getDate() < o.getDate()) && r--, r
            }
            s.d(t, {
                Z: () => n
            })
        },
        "./app/j/utils/strip-markdown.ts": (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            s("./node_modules/core-js/modules/es.string.replace.js");

            function n(e) {
                return e.replace(/\*([^*]+)\*/g, ((e, t) => t))
            }
        },
        "./node_modules/core-js/modules/es.array.reverse.js": (e, t, s) => {
            "use strict";
            var n = s("./node_modules/core-js/internals/export.js"),
                a = s("./node_modules/core-js/internals/function-uncurry-this.js"),
                o = s("./node_modules/core-js/internals/is-array.js"),
                r = a([].reverse),
                i = [1, 2];
            n({
                target: "Array",
                proto: !0,
                forced: String(i) === String(i.reverse())
            }, {
                reverse: function() {
                    return o(this) && (this.length = this.length), r(this)
                }
            })
        },
        "./node_modules/core-js/modules/web.url.to-json.js": (e, t, s) => {
            "use strict";
            var n = s("./node_modules/core-js/internals/export.js"),
                a = s("./node_modules/core-js/internals/function-call.js");
            n({
                target: "URL",
                proto: !0,
                enumerable: !0
            }, {
                toJSON: function() {
                    return a(URL.prototype.toString, this)
                }
            })
        },
        "./node_modules/keymaster/keymaster.js": function(e) {
            ! function(t) {
                var s, n = {},
                    a = {
                        16: !1,
                        18: !1,
                        17: !1,
                        91: !1
                    },
                    o = [],
                    r = {
                        "в‡§": 16,
                        shift: 16,
                        "вЊҐ": 18,
                        alt: 18,
                        option: 18,
                        "вЊѓ": 17,
                        ctrl: 17,
                        control: 17,
                        "вЊ": 91,
                        command: 91
                    },
                    i = {
                        backspace: 8,
                        tab: 9,
                        clear: 12,
                        enter: 13,
                        return: 13,
                        esc: 27,
                        escape: 27,
                        space: 32,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        del: 46,
                        delete: 46,
                        home: 36,
                        end: 35,
                        pageup: 33,
                        pagedown: 34,
                        ",": 188,
                        ".": 190,
                        "/": 191,
                        "`": 192,
                        "-": 189,
                        "=": 187,
                        ";": 186,
                        "'": 222,
                        "[": 219,
                        "]": 221,
                        "\\": 220
                    },
                    l = {
                        96: 48,
                        97: 49,
                        98: 50,
                        99: 51,
                        100: 52,
                        101: 53,
                        102: 54,
                        103: 55,
                        104: 56,
                        105: 57
                    };
                for (code = function(e) {
                        return i[e] || e.toUpperCase().charCodeAt(0)
                    }, _downKeys = [], s = 1; s < 20; s++) i["f" + s] = 111 + s;

                function d(e, t) {
                    for (var s = e.length; s--;)
                        if (e[s] === t) return s;
                    return -1
                }

                function u(e, t) {
                    if (e.length != t.length) return !1;
                    for (var s = 0; s < e.length; s++)
                        if (e[s] !== t[s]) return !1;
                    return !0
                }
                var c = {
                    16: "shiftKey",
                    18: "altKey",
                    17: "ctrlKey",
                    91: "metaKey"
                };

                function p(e) {
                    for (s in a) a[s] = e[c[s]]
                }

                function m(e, t, s) {
                    var a, o;
                    a = E(e), void 0 === s && (s = t, t = "all");
                    for (var r = 0; r < a.length; r++) o = [], (e = a[r].split("+")).length > 1 && (o = y(e), e = [e[e.length - 1]]), e = e[0], (e = code(e)) in n || (n[e] = []), n[e].push({
                        shortcut: a[r],
                        scope: t,
                        method: s,
                        key: a[r],
                        mods: o
                    })
                }
                for (s in r) m[s] = !1;

                function g(e) {
                    o = e ? [e] : []
                }

                function h() {
                    return o.length ? o[o.length - 1] : "all"
                }

                function _(e) {
                    o.push(e)
                }

                function S(e) {
                    var t = h();
                    if (!Array.isArray(t)) return !1;
                    var s = t.indexOf(e);
                    s >= 0 && (t.splice(s, 1), 0 == t.length ? o.pop() : o[o.length - 1] = t)
                }

                function E(e) {
                    var t;
                    return "" == (t = (e = e.replace(/\s/g, "")).split(","))[t.length - 1] && (t[t.length - 2] += ","), t
                }

                function y(e) {
                    for (var t = e.slice(0, e.length - 1), s = 0; s < t.length; s++) t[s] = r[t[s]];
                    return t
                }

                function f(e, t, s) {
                    e.addEventListener ? e.addEventListener(t, s, !1) : e.attachEvent && e.attachEvent("on" + t, (function() {
                        s(window.event)
                    }))
                }
                f(document, "keydown", (function(e) {
                    ! function(e) {
                        var t, s, o, i, u, c;
                        if (t = l[e.keyCode] || e.keyCode, -1 == d(_downKeys, t) && _downKeys.push(t), 93 != t && 224 != t || (t = 91), t in a)
                            for (o in a[t] = !0, r) r[o] == t && (m[o] = !0);
                        else if (p(e), m.filter.call(this, e) && t in n)
                            for (c = h(), i = 0; i < n[t].length; i++)
                                if (s = n[t][i], Array.isArray(c) && c.indexOf(s.scope) >= 0 || s.scope == c || "all" == s.scope) {
                                    for (o in u = s.mods.length > 0, a)(!a[o] && d(s.mods, +o) > -1 || a[o] && -1 == d(s.mods, +o)) && (u = !1);
                                    (0 != s.mods.length || a[16] || a[18] || a[17] || a[91]) && !u || !1 === s.method(e, s) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
                                }
                    }(e)
                })), f(document, "keyup", (function(e) {
                    var t, s = e.keyCode,
                        n = d(_downKeys, s);
                    if (n >= 0 && _downKeys.splice(n, 1), 93 != s && 224 != s || (s = 91), s in a)
                        for (t in a[s] = !1, r) r[t] == s && (m[t] = !1)
                })), f(window, "focus", (function() {
                    for (s in a) a[s] = !1;
                    for (s in r) m[s] = !1
                }));
                var j = t.key;
                t.key = m, t.key.setScope = g, t.key.getScope = h, t.key.pushScope = _, t.key.popScope = function(e) {
                    newScope = [];
                    for (var t = 0; t < o.length && o[t] !== e; t++) newScope.push(o[t]);
                    o = newScope, S(e)
                }, t.key.deleteScope = function(e) {
                    var t, s, a;
                    for (t in n)
                        for (s = n[t], a = 0; a < s.length;) s[a].scope === e ? s.splice(a, 1) : a++
                }, t.key.addOverlappingScope = function(e) {
                    var t = h(),
                        s = [];
                    "all" != t ? (Array.isArray(t) ? s = t : s.push(t), s.indexOf(e) > -1 || (s.push(e), Array.isArray(t) ? o[o.length - 1] = s : _(s))) : g(e)
                }, t.key.removeOverlappingScope = S, t.key.filter = function(e) {
                    var t, s = (t = (t = e.target || e.srcElement) instanceof HTMLDocument ? t.documentElement : t).tagName,
                        n = t.classList;
                    if (!(n instanceof DOMTokenList)) throw console.info("Event", e), new Error("Browser does not support classList");
                    var a = "INPUT" !== s && "SELECT" !== s && "TEXTAREA" !== s,
                        o = n.contains("js-keymaster-allow");
                    return a || o
                }, t.key.isPressed = function(e) {
                    return "string" == typeof e && (e = code(e)), -1 != d(_downKeys, e)
                }, t.key.getPressedKeyCodes = function() {
                    return _downKeys.slice(0)
                }, t.key.noConflict = function() {
                    var e = t.key;
                    return t.key = j, e
                }, t.key.unbind = function(e, t) {
                    var s, a, o, r, i, l = [];
                    for (s = E(e), r = 0; r < s.length; r++) {
                        if ((a = s[r].split("+")).length > 1 && (l = y(a)), e = a[a.length - 1], e = code(e), void 0 === t && (t = h()), !n[e]) return;
                        for (o = 0; o < n[e].length; o++)(i = n[e][o]).scope === t && u(i.mods, l) && (n[e][o] = {})
                    }
                }, e.exports = m
            }(this)
        },
        "./node_modules/lodash/_LazyWrapper.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseCreate.js"),
                a = s("./node_modules/lodash/_baseLodash.js");

            function o(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            o.prototype = n(a.prototype), o.prototype.constructor = o, e.exports = o
        },
        "./node_modules/lodash/_LodashWrapper.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseCreate.js"),
                a = s("./node_modules/lodash/_baseLodash.js");

            function o(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            o.prototype = n(a.prototype), o.prototype.constructor = o, e.exports = o
        },
        "./node_modules/lodash/_arrayReduce.js": e => {
            e.exports = function(e, t, s, n) {
                var a = -1,
                    o = null == e ? 0 : e.length;
                for (n && o && (s = e[++a]); ++a < o;) s = t(s, e[a], a, e);
                return s
            }
        },
        "./node_modules/lodash/_assignMergeValue.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseAssignValue.js"),
                a = s("./node_modules/lodash/eq.js");
            e.exports = function(e, t, s) {
                (void 0 !== s && !a(e[t], s) || void 0 === s && !(t in e)) && n(e, t, s)
            }
        },
        "./node_modules/lodash/_baseDifference.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_SetCache.js"),
                a = s("./node_modules/lodash/_arrayIncludes.js"),
                o = s("./node_modules/lodash/_arrayIncludesWith.js"),
                r = s("./node_modules/lodash/_arrayMap.js"),
                i = s("./node_modules/lodash/_baseUnary.js"),
                l = s("./node_modules/lodash/_cacheHas.js");
            e.exports = function(e, t, s, d) {
                var u = -1,
                    c = a,
                    p = !0,
                    m = e.length,
                    g = [],
                    h = t.length;
                if (!m) return g;
                s && (t = r(t, i(s))), d ? (c = o, p = !1) : t.length >= 200 && (c = l, p = !1, t = new n(t));
                e: for (; ++u < m;) {
                    var _ = e[u],
                        S = null == s ? _ : s(_);
                    if (_ = d || 0 !== _ ? _ : 0, p && S == S) {
                        for (var E = h; E--;)
                            if (t[E] === S) continue e;
                        g.push(_)
                    } else c(t, S, d) || g.push(_)
                }
                return g
            }
        },
        "./node_modules/lodash/_baseIntersection.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_SetCache.js"),
                a = s("./node_modules/lodash/_arrayIncludes.js"),
                o = s("./node_modules/lodash/_arrayIncludesWith.js"),
                r = s("./node_modules/lodash/_arrayMap.js"),
                i = s("./node_modules/lodash/_baseUnary.js"),
                l = s("./node_modules/lodash/_cacheHas.js"),
                d = Math.min;
            e.exports = function(e, t, s) {
                for (var u = s ? o : a, c = e[0].length, p = e.length, m = p, g = Array(p), h = 1 / 0, _ = []; m--;) {
                    var S = e[m];
                    m && t && (S = r(S, i(t))), h = d(S.length, h), g[m] = !s && (t || c >= 120 && S.length >= 120) ? new n(m && S) : void 0
                }
                S = e[0];
                var E = -1,
                    y = g[0];
                e: for (; ++E < c && _.length < h;) {
                    var f = S[E],
                        j = t ? t(f) : f;
                    if (f = s || 0 !== f ? f : 0, !(y ? l(y, j) : u(_, j, s))) {
                        for (m = p; --m;) {
                            var T = g[m];
                            if (!(T ? l(T, j) : u(e[m], j, s))) continue e
                        }
                        y && y.push(j), _.push(f)
                    }
                }
                return _
            }
        },
        "./node_modules/lodash/_baseLodash.js": e => {
            e.exports = function() {}
        },
        "./node_modules/lodash/_baseMerge.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_Stack.js"),
                a = s("./node_modules/lodash/_assignMergeValue.js"),
                o = s("./node_modules/lodash/_baseFor.js"),
                r = s("./node_modules/lodash/_baseMergeDeep.js"),
                i = s("./node_modules/lodash/isObject.js"),
                l = s("./node_modules/lodash/keysIn.js"),
                d = s("./node_modules/lodash/_safeGet.js");
            e.exports = function e(t, s, u, c, p) {
                t !== s && o(s, (function(o, l) {
                    if (p || (p = new n), i(o)) r(t, s, l, u, e, c, p);
                    else {
                        var m = c ? c(d(t, l), o, l + "", t, s, p) : void 0;
                        void 0 === m && (m = o), a(t, l, m)
                    }
                }), l)
            }
        },
        "./node_modules/lodash/_baseMergeDeep.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_assignMergeValue.js"),
                a = s("./node_modules/lodash/_cloneBuffer.js"),
                o = s("./node_modules/lodash/_cloneTypedArray.js"),
                r = s("./node_modules/lodash/_copyArray.js"),
                i = s("./node_modules/lodash/_initCloneObject.js"),
                l = s("./node_modules/lodash/isArguments.js"),
                d = s("./node_modules/lodash/isArray.js"),
                u = s("./node_modules/lodash/isArrayLikeObject.js"),
                c = s("./node_modules/lodash/isBuffer.js"),
                p = s("./node_modules/lodash/isFunction.js"),
                m = s("./node_modules/lodash/isObject.js"),
                g = s("./node_modules/lodash/isPlainObject.js"),
                h = s("./node_modules/lodash/isTypedArray.js"),
                _ = s("./node_modules/lodash/_safeGet.js"),
                S = s("./node_modules/lodash/toPlainObject.js");
            e.exports = function(e, t, s, E, y, f, j) {
                var T = _(e, s),
                    A = _(t, s),
                    b = j.get(A);
                if (b) n(e, s, b);
                else {
                    var x = f ? f(T, A, s + "", e, t, j) : void 0,
                        I = void 0 === x;
                    if (I) {
                        var v = d(A),
                            C = !v && c(A),
                            N = !v && !C && h(A);
                        x = A, v || C || N ? d(T) ? x = T : u(T) ? x = r(T) : C ? (I = !1, x = a(A, !0)) : N ? (I = !1, x = o(A, !0)) : x = [] : g(A) || l(A) ? (x = T, l(T) ? x = S(T) : m(T) && !p(T) || (x = i(A))) : I = !1
                    }
                    I && (j.set(A, x), y(x, A, E, f, j), j.delete(A)), n(e, s, x)
                }
            }
        },
        "./node_modules/lodash/_baseReduce.js": e => {
            e.exports = function(e, t, s, n, a) {
                return a(e, (function(e, a, o) {
                    s = n ? (n = !1, e) : t(s, e, a, o)
                })), s
            }
        },
        "./node_modules/lodash/_baseUniq.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_SetCache.js"),
                a = s("./node_modules/lodash/_arrayIncludes.js"),
                o = s("./node_modules/lodash/_arrayIncludesWith.js"),
                r = s("./node_modules/lodash/_cacheHas.js"),
                i = s("./node_modules/lodash/_createSet.js"),
                l = s("./node_modules/lodash/_setToArray.js");
            e.exports = function(e, t, s) {
                var d = -1,
                    u = a,
                    c = e.length,
                    p = !0,
                    m = [],
                    g = m;
                if (s) p = !1, u = o;
                else if (c >= 200) {
                    var h = t ? null : i(e);
                    if (h) return l(h);
                    p = !1, u = r, g = new n
                } else g = t ? [] : m;
                e: for (; ++d < c;) {
                    var _ = e[d],
                        S = t ? t(_) : _;
                    if (_ = s || 0 !== _ ? _ : 0, p && S == S) {
                        for (var E = g.length; E--;)
                            if (g[E] === S) continue e;
                        t && g.push(S), m.push(_)
                    } else u(g, S, s) || (g !== m && g.push(S), m.push(_))
                }
                return m
            }
        },
        "./node_modules/lodash/_castArrayLikeObject.js": (e, t, s) => {
            var n = s("./node_modules/lodash/isArrayLikeObject.js");
            e.exports = function(e) {
                return n(e) ? e : []
            }
        },
        "./node_modules/lodash/_castFunction.js": (e, t, s) => {
            var n = s("./node_modules/lodash/identity.js");
            e.exports = function(e) {
                return "function" == typeof e ? e : n
            }
        },
        "./node_modules/lodash/_createAssigner.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseRest.js"),
                a = s("./node_modules/lodash/_isIterateeCall.js");
            e.exports = function(e) {
                return n((function(t, s) {
                    var n = -1,
                        o = s.length,
                        r = o > 1 ? s[o - 1] : void 0,
                        i = o > 2 ? s[2] : void 0;
                    for (r = e.length > 3 && "function" == typeof r ? (o--, r) : void 0, i && a(s[0], s[1], i) && (r = o < 3 ? void 0 : r, o = 1), t = Object(t); ++n < o;) {
                        var l = s[n];
                        l && e(t, l, n, r)
                    }
                    return t
                }))
            }
        },
        "./node_modules/lodash/_createFlow.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_LodashWrapper.js"),
                a = s("./node_modules/lodash/_flatRest.js"),
                o = s("./node_modules/lodash/_getData.js"),
                r = s("./node_modules/lodash/_getFuncName.js"),
                i = s("./node_modules/lodash/isArray.js"),
                l = s("./node_modules/lodash/_isLaziable.js");
            e.exports = function(e) {
                return a((function(t) {
                    var s = t.length,
                        a = s,
                        d = n.prototype.thru;
                    for (e && t.reverse(); a--;) {
                        var u = t[a];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (d && !c && "wrapper" == r(u)) var c = new n([], !0)
                    }
                    for (a = c ? a : s; ++a < s;) {
                        u = t[a];
                        var p = r(u),
                            m = "wrapper" == p ? o(u) : void 0;
                        c = m && l(m[0]) && 424 == m[1] && !m[4].length && 1 == m[9] ? c[r(m[0])].apply(c, m[3]) : 1 == u.length && l(u) ? c[p]() : c.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (c && 1 == e.length && i(n)) return c.plant(n).value();
                        for (var a = 0, o = s ? t[a].apply(this, e) : n; ++a < s;) o = t[a].call(this, o);
                        return o
                    }
                }))
            }
        },
        "./node_modules/lodash/_createSet.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_Set.js"),
                a = s("./node_modules/lodash/noop.js"),
                o = s("./node_modules/lodash/_setToArray.js"),
                r = n && 1 / o(new n([, -0]))[1] == 1 / 0 ? function(e) {
                    return new n(e)
                } : a;
            e.exports = r
        },
        "./node_modules/lodash/_getData.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_metaMap.js"),
                a = s("./node_modules/lodash/noop.js"),
                o = n ? function(e) {
                    return n.get(e)
                } : a;
            e.exports = o
        },
        "./node_modules/lodash/_getFuncName.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_realNames.js"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", s = n[t], o = a.call(n, t) ? s.length : 0; o--;) {
                    var r = s[o],
                        i = r.func;
                    if (null == i || i == e) return r.name
                }
                return t
            }
        },
        "./node_modules/lodash/_isLaziable.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_LazyWrapper.js"),
                a = s("./node_modules/lodash/_getData.js"),
                o = s("./node_modules/lodash/_getFuncName.js"),
                r = s("./node_modules/lodash/wrapperLodash.js");
            e.exports = function(e) {
                var t = o(e),
                    s = r[t];
                if ("function" != typeof s || !(t in n.prototype)) return !1;
                if (e === s) return !0;
                var i = a(s);
                return !!i && e === i[0]
            }
        },
        "./node_modules/lodash/_metaMap.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_WeakMap.js"),
                a = n && new n;
            e.exports = a
        },
        "./node_modules/lodash/_realNames.js": e => {
            e.exports = {}
        },
        "./node_modules/lodash/_safeGet.js": e => {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        "./node_modules/lodash/_wrapperClone.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_LazyWrapper.js"),
                a = s("./node_modules/lodash/_LodashWrapper.js"),
                o = s("./node_modules/lodash/_copyArray.js");
            e.exports = function(e) {
                if (e instanceof n) return e.clone();
                var t = new a(e.__wrapped__, e.__chain__);
                return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "./node_modules/lodash/difference.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseDifference.js"),
                a = s("./node_modules/lodash/_baseFlatten.js"),
                o = s("./node_modules/lodash/_baseRest.js"),
                r = s("./node_modules/lodash/isArrayLikeObject.js"),
                i = o((function(e, t) {
                    return r(e) ? n(e, a(t, 1, r, !0)) : []
                }));
            e.exports = i
        },
        "./node_modules/lodash/dropRight.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseSlice.js"),
                a = s("./node_modules/lodash/toInteger.js");
            e.exports = function(e, t, s) {
                var o = null == e ? 0 : e.length;
                return o ? (t = s || void 0 === t ? 1 : a(t), n(e, 0, (t = o - t) < 0 ? 0 : t)) : []
            }
        },
        "./node_modules/lodash/flow.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_createFlow.js")();
            e.exports = n
        },
        "./node_modules/lodash/forEach.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_arrayEach.js"),
                a = s("./node_modules/lodash/_baseEach.js"),
                o = s("./node_modules/lodash/_castFunction.js"),
                r = s("./node_modules/lodash/isArray.js");
            e.exports = function(e, t) {
                return (r(e) ? n : a)(e, o(t))
            }
        },
        "./node_modules/lodash/intersection.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_arrayMap.js"),
                a = s("./node_modules/lodash/_baseIntersection.js"),
                o = s("./node_modules/lodash/_baseRest.js"),
                r = s("./node_modules/lodash/_castArrayLikeObject.js"),
                i = o((function(e) {
                    var t = n(e, r);
                    return t.length && t[0] === e[0] ? a(t) : []
                }));
            e.exports = i
        },
        "./node_modules/lodash/isString.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseGetTag.js"),
                a = s("./node_modules/lodash/isArray.js"),
                o = s("./node_modules/lodash/isObjectLike.js");
            e.exports = function(e) {
                return "string" == typeof e || !a(e) && o(e) && "[object String]" == n(e)
            }
        },
        "./node_modules/lodash/merge.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseMerge.js"),
                a = s("./node_modules/lodash/_createAssigner.js")((function(e, t, s) {
                    n(e, t, s)
                }));
            e.exports = a
        },
        "./node_modules/lodash/negate.js": e => {
            e.exports = function(e) {
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return !e.call(this);
                        case 1:
                            return !e.call(this, t[0]);
                        case 2:
                            return !e.call(this, t[0], t[1]);
                        case 3:
                            return !e.call(this, t[0], t[1], t[2])
                    }
                    return !e.apply(this, t)
                }
            }
        },
        "./node_modules/lodash/reduce.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_arrayReduce.js"),
                a = s("./node_modules/lodash/_baseEach.js"),
                o = s("./node_modules/lodash/_baseIteratee.js"),
                r = s("./node_modules/lodash/_baseReduce.js"),
                i = s("./node_modules/lodash/isArray.js");
            e.exports = function(e, t, s) {
                var l = i(e) ? n : r,
                    d = arguments.length < 3;
                return l(e, o(t, 4), s, d, a)
            }
        },
        "./node_modules/lodash/size.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseKeys.js"),
                a = s("./node_modules/lodash/_getTag.js"),
                o = s("./node_modules/lodash/isArrayLike.js"),
                r = s("./node_modules/lodash/isString.js"),
                i = s("./node_modules/lodash/_stringSize.js");
            e.exports = function(e) {
                if (null == e) return 0;
                if (o(e)) return r(e) ? i(e) : e.length;
                var t = a(e);
                return "[object Map]" == t || "[object Set]" == t ? e.size : n(e).length
            }
        },
        "./node_modules/lodash/toPlainObject.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_copyObject.js"),
                a = s("./node_modules/lodash/keysIn.js");
            e.exports = function(e) {
                return n(e, a(e))
            }
        },
        "./node_modules/lodash/uniq.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_baseUniq.js");
            e.exports = function(e) {
                return e && e.length ? n(e) : []
            }
        },
        "./node_modules/lodash/uniqueId.js": (e, t, s) => {
            var n = s("./node_modules/lodash/toString.js"),
                a = 0;
            e.exports = function(e) {
                var t = ++a;
                return n(e) + t
            }
        },
        "./node_modules/lodash/wrapperLodash.js": (e, t, s) => {
            var n = s("./node_modules/lodash/_LazyWrapper.js"),
                a = s("./node_modules/lodash/_LodashWrapper.js"),
                o = s("./node_modules/lodash/_baseLodash.js"),
                r = s("./node_modules/lodash/isArray.js"),
                i = s("./node_modules/lodash/isObjectLike.js"),
                l = s("./node_modules/lodash/_wrapperClone.js"),
                d = Object.prototype.hasOwnProperty;

            function u(e) {
                if (i(e) && !r(e) && !(e instanceof n)) {
                    if (e instanceof a) return e;
                    if (d.call(e, "__wrapped__")) return l(e)
                }
                return new a(e)
            }
            u.prototype = o.prototype, u.prototype.constructor = u, e.exports = u
        },
        "./.linaria-cache/app/j/ads/components/Ad.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/ads/components/AdHeading.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/ads/components/studyModes/AdModal.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/ads/components/styles/AdTypeStyle.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/assembly/AssemblyToggleSwitch.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/DeprecatedFormattedTextWithImage.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/DeprecatedSpecialCharacterTextarea.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/EmbedFooter.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/ModeLayout.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/SiteLogo.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/components/StudyModeLogoDropdown.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/diagrams/components/DiagramShapePolygon.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/diagrams/components/DiagramShapePopup.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/rich_text/components/PMDocument.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/rich_text/components/SpecialCharactersToolbar.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/rich_text/constants.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/signup/components/AuthPromptOptions.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/signup/components/AuthPromptStyling.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/signup/components/TosLegend.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/common/components/FeedbackItem.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/SpecialCharacterButtonGroup.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/StudyModesLayout.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/OptionsModal.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/OptionsModalStyling.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalAdvancedAudio.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalGradingOptions.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionFormat.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalQuestionTypeToggles.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/common/OptionsModalResetProgress.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/hooks/useAnimatedMenu.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./.linaria-cache/app/j/study-modes/legacy-common/components/options_modal/learn/OptionsModalOtherStudyModes.linaria.css": (e, t, s) => {
            "use strict";
            s.r(t)
        },
        "./node_modules/orderedmap/index.js": e => {
            function t(e) {
                this.content = e
            }
            t.prototype = {
                constructor: t,
                find: function(e) {
                    for (var t = 0; t < this.content.length; t += 2)
                        if (this.content[t] === e) return t;
                    return -1
                },
                get: function(e) {
                    var t = this.find(e);
                    return -1 == t ? void 0 : this.content[t + 1]
                },
                update: function(e, s, n) {
                    var a = n && n != e ? this.remove(n) : this,
                        o = a.find(e),
                        r = a.content.slice();
                    return -1 == o ? r.push(n || e, s) : (r[o + 1] = s, n && (r[o] = n)), new t(r)
                },
                remove: function(e) {
                    var s = this.find(e);
                    if (-1 == s) return this;
                    var n = this.content.slice();
                    return n.splice(s, 2), new t(n)
                },
                addToStart: function(e, s) {
                    return new t([e, s].concat(this.remove(e).content))
                },
                addToEnd: function(e, s) {
                    var n = this.remove(e).content.slice();
                    return n.push(e, s), new t(n)
                },
                addBefore: function(e, s, n) {
                    var a = this.remove(s),
                        o = a.content.slice(),
                        r = a.find(e);
                    return o.splice(-1 == r ? o.length : r, 0, s, n), new t(o)
                },
                forEach: function(e) {
                    for (var t = 0; t < this.content.length; t += 2) e(this.content[t], this.content[t + 1])
                },
                prepend: function(e) {
                    return (e = t.from(e)).size ? new t(e.content.concat(this.subtract(e).content)) : this
                },
                append: function(e) {
                    return (e = t.from(e)).size ? new t(this.subtract(e).content.concat(e.content)) : this
                },
                subtract: function(e) {
                    var s = this;
                    e = t.from(e);
                    for (var n = 0; n < e.content.length; n += 2) s = s.remove(e.content[n]);
                    return s
                },
                get size() {
                    return this.content.length >> 1
                }
            }, t.from = function(e) {
                if (e instanceof t) return e;
                var s = [];
                if (e)
                    for (var n in e) s.push(n, e[n]);
                return new t(s)
            }, e.exports = t
        },
        "./node_modules/react-textfit/lib/Textfit.js": (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                },
                a = function() {
                    function e(e, t) {
                        for (var s = 0; s < t.length; s++) {
                            var n = t[s];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, s, n) {
                        return s && e(t.prototype, s), n && e(t, n), t
                    }
                }(),
                o = m(s("./node_modules/react/index.js")),
                r = m(s("./node_modules/prop-types/index.js")),
                i = m(s("./node_modules/react-textfit/lib/utils/shallowEqual.js")),
                l = m(s("./node_modules/react-textfit/lib/utils/series.js")),
                d = m(s("./node_modules/react-textfit/lib/utils/whilst.js")),
                u = m(s("./node_modules/react-textfit/lib/utils/throttle.js")),
                c = m(s("./node_modules/react-textfit/lib/utils/uniqueId.js")),
                p = s("./node_modules/react-textfit/lib/utils/innerSize.js");

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e, t) {
                return e.scrollWidth - 1 <= t
            }

            function h(e, t) {
                return e.scrollHeight - 1 <= t
            }
            var _ = function(e) {
                function t(e) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var s = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return s.state = {
                        fontSize: null,
                        ready: !1
                    }, s.handleWindowResize = function() {
                        s.process()
                    }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), s.handleWindowResize = (0, u.default)(s.handleWindowResize, e.throttle), s
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        this.state.ready && ((0, i.default)(this.props, e) || this.process())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, c.default)()
                    }
                }, {
                    key: "process",
                    value: function() {
                        var e = this,
                            t = this.props,
                            s = t.min,
                            n = t.max,
                            a = t.mode,
                            o = t.forceSingleModeWidth,
                            r = t.onReady,
                            i = this._parent,
                            u = this._child,
                            m = (0, p.innerWidth)(i),
                            _ = (0, p.innerHeight)(i);
                        if (_ <= 0 || isNaN(_)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
                        else if (m <= 0 || isNaN(m)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
                        else {
                            var S = (0, c.default)();
                            this.pid = S;
                            var E = function() {
                                    return S !== e.pid
                                },
                                y = "multi" === a ? function() {
                                    return h(u, _)
                                } : function() {
                                    return g(u, m)
                                },
                                f = "multi" === a ? function() {
                                    return g(u, m)
                                } : function() {
                                    return h(u, _)
                                },
                                j = void 0,
                                T = s,
                                A = n;
                            this.setState({
                                ready: !1
                            }), (0, l.default)([function(t) {
                                return (0, d.default)((function() {
                                    return T <= A
                                }), (function(t) {
                                    if (E()) return t(!0);
                                    j = parseInt((T + A) / 2, 10), e.setState({
                                        fontSize: j
                                    }, (function() {
                                        return E() ? t(!0) : (y() ? T = j + 1 : A = j - 1, t())
                                    }))
                                }), t)
                            }, function(t) {
                                return "single" === a && o || f() ? t() : (T = s, A = j, (0, d.default)((function() {
                                    return T < A
                                }), (function(t) {
                                    if (E()) return t(!0);
                                    j = parseInt((T + A) / 2, 10), e.setState({
                                        fontSize: j
                                    }, (function() {
                                        return S !== e.pid ? t(!0) : (f() ? T = j + 1 : A = j - 1, t())
                                    }))
                                }), t))
                            }, function(t) {
                                if (j = Math.min(T, A), j = Math.max(j, s), j = Math.min(j, n), j = Math.max(j, 0), E()) return t(!0);
                                e.setState({
                                    fontSize: j
                                }, t)
                            }], (function(t) {
                                t || E() || e.setState({
                                    ready: !0
                                }, (function() {
                                    return r(j)
                                }))
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            s = t.children,
                            a = t.text,
                            r = t.style,
                            i = (t.min, t.max, t.mode),
                            l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                                var s = {};
                                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (s[n] = e[n]);
                                return s
                            }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
                            d = this.state,
                            u = d.fontSize,
                            c = d.ready,
                            p = n({}, r, {
                                fontSize: u
                            }),
                            m = {
                                display: c ? "block" : "inline-block"
                            };
                        return "single" === i && (m.whiteSpace = "nowrap"), o.default.createElement("div", n({
                            ref: function(t) {
                                return e._parent = t
                            },
                            style: p
                        }, l), o.default.createElement("div", {
                            ref: function(t) {
                                return e._child = t
                            },
                            style: m
                        }, a && "function" == typeof s ? c ? s(a) : a : s))
                    }
                }]), t
            }(o.default.Component);
            _.propTypes = {
                children: r.default.node,
                text: r.default.string,
                min: r.default.number,
                max: r.default.number,
                mode: r.default.oneOf(["single", "multi"]),
                forceSingleModeWidth: r.default.bool,
                throttle: r.default.number,
                onReady: r.default.func
            }, _.defaultProps = {
                min: 1,
                max: 100,
                mode: "multi",
                forceSingleModeWidth: !0,
                throttle: 50,
                autoResize: !0,
                onReady: function() {}
            }, t.default = _
        },
        "./node_modules/react-textfit/lib/index.js": (e, t, s) => {
            "use strict";
            var n, a = s("./node_modules/react-textfit/lib/Textfit.js"),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                };
            o.default, t.ZP = o.default
        },
        "./node_modules/react-textfit/lib/utils/innerSize.js": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.innerHeight = function(e) {
                var t = window.getComputedStyle(e, null);
                return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
            }, t.innerWidth = function(e) {
                var t = window.getComputedStyle(e, null);
                return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
            }
        },
        "./node_modules/react-textfit/lib/utils/series.js": (e, t, s) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var s = [],
                    n = 0,
                    a = !0;

                function r(e) {
                    function n() {
                        t && t(e, s)
                    }
                    a ? o.default.nextTick(n) : n()
                }
                e.length > 0 ? e[0]((function t(a, o) {
                    s.push(o), ++n >= e.length || a ? r(a) : e[n](t)
                })) : r(null);
                a = !1
            };
            var n, a = s("./node_modules/process/browser.js"),
                o = (n = a) && n.__esModule ? n : {
                    default: n
                }
        },
        "./node_modules/react-textfit/lib/utils/shallowEqual.js": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                if (e === t) return !0;
                var s = Object.keys(e),
                    n = Object.keys(t);
                if (s.length !== n.length) return !1;
                for (var a = Object.prototype.hasOwnProperty, o = 0; o < s.length; o++)
                    if (!a.call(t, s[o]) || e[s[o]] !== t[s[o]]) return !1;
                return !0
            }
        },
        "./node_modules/react-textfit/lib/utils/throttle.js": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var s = void 0,
                    n = void 0,
                    a = void 0,
                    o = void 0,
                    r = 0;

                function i() {
                    o = 0, r = +new Date, a = e.apply(s, n), s = null, n = null
                }
                return function() {
                    s = this, n = arguments;
                    var e = new Date - r;
                    return o || (e >= t ? i() : o = setTimeout(i, t - e)), a
                }
            }
        },
        "./node_modules/react-textfit/lib/utils/uniqueId.js": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return s++
            };
            var s = 0
        },
        "./node_modules/react-textfit/lib/utils/whilst.js": (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
                e() ? t((function s(a) {
                    for (var o = arguments.length, r = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) r[i - 1] = arguments[i];
                    a ? n(a) : e.apply(this, r) ? t(s) : n(null)
                })) : n(null)
            };
            var s = function() {}
        },
        "./node_modules/react-transition-group/cjs/CSSTransition.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            i(s("./node_modules/prop-types/index.js"));
            var n = i(s("./node_modules/react-transition-group/node_modules/dom-helpers/cjs/addClass.js")),
                a = i(s("./node_modules/react-transition-group/node_modules/dom-helpers/cjs/removeClass.js")),
                o = i(s("./node_modules/react/index.js")),
                r = i(s("./node_modules/react-transition-group/cjs/Transition.js"));
            s("./node_modules/react-transition-group/cjs/utils/PropTypes.js");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            var d = function(e, t) {
                    return e && t && t.split(" ").forEach((function(t) {
                        return (0, a.default)(e, t)
                    }))
                },
                u = function(e) {
                    var t, s;

                    function a() {
                        for (var t, s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function(e, s) {
                            var n = t.resolveArguments(e, s),
                                a = n[0],
                                o = n[1];
                            t.removeClasses(a, "exit"), t.addClass(a, o ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, s)
                        }, t.onEntering = function(e, s) {
                            var n = t.resolveArguments(e, s),
                                a = n[0],
                                o = n[1] ? "appear" : "enter";
                            t.addClass(a, o, "active"), t.props.onEntering && t.props.onEntering(e, s)
                        }, t.onEntered = function(e, s) {
                            var n = t.resolveArguments(e, s),
                                a = n[0],
                                o = n[1] ? "appear" : "enter";
                            t.removeClasses(a, o), t.addClass(a, o, "done"), t.props.onEntered && t.props.onEntered(e, s)
                        }, t.onExit = function(e) {
                            var s = t.resolveArguments(e)[0];
                            t.removeClasses(s, "appear"), t.removeClasses(s, "enter"), t.addClass(s, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            var s = t.resolveArguments(e)[0];
                            t.addClass(s, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            var s = t.resolveArguments(e)[0];
                            t.removeClasses(s, "exit"), t.addClass(s, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.resolveArguments = function(e, s) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, s]
                        }, t.getClassNames = function(e) {
                            var s = t.props.classNames,
                                n = "string" == typeof s,
                                a = n ? "" + (n && s ? s + "-" : "") + e : s[e];
                            return {
                                baseClassName: a,
                                activeClassName: n ? a + "-active" : s[e + "Active"],
                                doneClassName: n ? a + "-done" : s[e + "Done"]
                            }
                        }, t
                    }
                    s = e, (t = a).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
                    var i = a.prototype;
                    return i.addClass = function(e, t, s) {
                        var a = this.getClassNames(t)[s + "ClassName"],
                            o = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === s && o && (a += " " + o), "active" === s && e && e.scrollTop, a && (this.appliedClasses[t][s] = a, function(e, t) {
                            e && t && t.split(" ").forEach((function(t) {
                                return (0, n.default)(e, t)
                            }))
                        }(e, a))
                    }, i.removeClasses = function(e, t) {
                        var s = this.appliedClasses[t],
                            n = s.base,
                            a = s.active,
                            o = s.done;
                        this.appliedClasses[t] = {}, n && d(e, n), a && d(e, a), o && d(e, o)
                    }, i.render = function() {
                        var e = this.props,
                            t = (e.classNames, function(e, t) {
                                if (null == e) return {};
                                var s, n, a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) s = o[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
                                return a
                            }(e, ["classNames"]));
                        return o.default.createElement(r.default, l({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, a
                }(o.default.Component);
            u.defaultProps = {
                classNames: ""
            }, u.propTypes = {};
            var c = u;
            t.default = c, e.exports = t.default
        },
        "./node_modules/react-transition-group/cjs/ReplaceTransition.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            r(s("./node_modules/prop-types/index.js"));
            var n = r(s("./node_modules/react/index.js")),
                a = r(s("./node_modules/react-dom/index.js")),
                o = r(s("./node_modules/react-transition-group/cjs/TransitionGroup.js"));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function(e) {
                var t, s;

                function r() {
                    for (var t, s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                    return (t = e.call.apply(e, [this].concat(n)) || this).handleEnter = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onEnter", 0, s)
                    }, t.handleEntering = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onEntering", 0, s)
                    }, t.handleEntered = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onEntered", 0, s)
                    }, t.handleExit = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onExit", 1, s)
                    }, t.handleExiting = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onExiting", 1, s)
                    }, t.handleExited = function() {
                        for (var e = arguments.length, s = new Array(e), n = 0; n < e; n++) s[n] = arguments[n];
                        return t.handleLifecycle("onExited", 1, s)
                    }, t
                }
                s = e, (t = r).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
                var i = r.prototype;
                return i.handleLifecycle = function(e, t, s) {
                    var o, r = this.props.children,
                        i = n.default.Children.toArray(r)[t];
                    if (i.props[e] && (o = i.props)[e].apply(o, s), this.props[e]) {
                        var l = i.props.nodeRef ? void 0 : a.default.findDOMNode(this);
                        this.props[e](l)
                    }
                }, i.render = function() {
                    var e = this.props,
                        t = e.children,
                        s = e.in,
                        a = function(e, t) {
                            if (null == e) return {};
                            var s, n, a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) s = o[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
                            return a
                        }(e, ["children", "in"]),
                        r = n.default.Children.toArray(t),
                        i = r[0],
                        l = r[1];
                    return delete a.onEnter, delete a.onEntering, delete a.onEntered, delete a.onExit, delete a.onExiting, delete a.onExited, n.default.createElement(o.default, a, s ? n.default.cloneElement(i, {
                        key: "first",
                        onEnter: this.handleEnter,
                        onEntering: this.handleEntering,
                        onEntered: this.handleEntered
                    }) : n.default.cloneElement(l, {
                        key: "second",
                        onEnter: this.handleExit,
                        onEntering: this.handleExiting,
                        onEntered: this.handleExited
                    }))
                }, r
            }(n.default.Component);
            i.propTypes = {};
            var l = i;
            t.default = l, e.exports = t.default
        },
        "./node_modules/react-transition-group/cjs/SwitchTransition.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.default = t.modes = void 0;
            var n, a, o = l(s("./node_modules/react/index.js")),
                r = (l(s("./node_modules/prop-types/index.js")), s("./node_modules/react-transition-group/cjs/Transition.js")),
                i = l(s("./node_modules/react-transition-group/cjs/TransitionGroupContext.js"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = {
                out: "out-in",
                in: "in-out"
            };
            t.modes = d;
            var u = function(e, t, s) {
                    return function() {
                        var n;
                        e.props[t] && (n = e.props)[t].apply(n, arguments), s()
                    }
                },
                c = ((n = {})[d.out] = function(e) {
                    var t = e.current,
                        s = e.changeState;
                    return o.default.cloneElement(t, {
                        in: !1,
                        onExited: u(t, "onExited", (function() {
                            s(r.ENTERING, null)
                        }))
                    })
                }, n[d.in] = function(e) {
                    var t = e.current,
                        s = e.changeState,
                        n = e.children;
                    return [t, o.default.cloneElement(n, {
                        in: !0,
                        onEntered: u(n, "onEntered", (function() {
                            s(r.ENTERING)
                        }))
                    })]
                }, n),
                p = ((a = {})[d.out] = function(e) {
                    var t = e.children,
                        s = e.changeState;
                    return o.default.cloneElement(t, {
                        in: !0,
                        onEntered: u(t, "onEntered", (function() {
                            s(r.ENTERED, o.default.cloneElement(t, {
                                in: !0
                            }))
                        }))
                    })
                }, a[d.in] = function(e) {
                    var t = e.current,
                        s = e.children,
                        n = e.changeState;
                    return [o.default.cloneElement(t, {
                        in: !1,
                        onExited: u(t, "onExited", (function() {
                            n(r.ENTERED, o.default.cloneElement(s, {
                                in: !0
                            }))
                        }))
                    }), o.default.cloneElement(s, {
                        in: !0
                    })]
                }, a),
                m = function(e) {
                    var t, s;

                    function n() {
                        for (var t, s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(n)) || this).state = {
                            status: r.ENTERED,
                            current: null
                        }, t.appeared = !1, t.changeState = function(e, s) {
                            void 0 === s && (s = t.state.current), t.setState({
                                status: e,
                                current: s
                            })
                        }, t
                    }
                    s = e, (t = n).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
                    var a = n.prototype;
                    return a.componentDidMount = function() {
                        this.appeared = !0
                    }, n.getDerivedStateFromProps = function(e, t) {
                        return null == e.children ? {
                            current: null
                        } : t.status === r.ENTERING && e.mode === d.in ? {
                            status: r.ENTERING
                        } : !t.current || (s = t.current, n = e.children, s === n || o.default.isValidElement(s) && o.default.isValidElement(n) && null != s.key && s.key === n.key) ? {
                            current: o.default.cloneElement(e.children, {
                                in: !0
                            })
                        } : {
                            status: r.EXITING
                        };
                        var s, n
                    }, a.render = function() {
                        var e, t = this.props,
                            s = t.children,
                            n = t.mode,
                            a = this.state,
                            l = a.status,
                            d = a.current,
                            u = {
                                children: s,
                                current: d,
                                changeState: this.changeState,
                                status: l
                            };
                        switch (l) {
                            case r.ENTERING:
                                e = p[n](u);
                                break;
                            case r.EXITING:
                                e = c[n](u);
                                break;
                            case r.ENTERED:
                                e = d
                        }
                        return o.default.createElement(i.default.Provider, {
                            value: {
                                isMounting: !this.appeared
                            }
                        }, e)
                    }, n
                }(o.default.Component);
            m.propTypes = {}, m.defaultProps = {
                mode: d.out
            };
            var g = m;
            t.default = g
        },
        "./node_modules/react-transition-group/cjs/Transition.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.default = t.EXITING = t.ENTERED = t.ENTERING = t.EXITED = t.UNMOUNTED = void 0;
            i(s("./node_modules/prop-types/index.js"));
            var n = i(s("./node_modules/react/index.js")),
                a = i(s("./node_modules/react-dom/index.js")),
                o = i(s("./node_modules/react-transition-group/cjs/config.js")),
                r = (s("./node_modules/react-transition-group/cjs/utils/PropTypes.js"), i(s("./node_modules/react-transition-group/cjs/TransitionGroupContext.js")));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = "unmounted";
            t.UNMOUNTED = l;
            var d = "exited";
            t.EXITED = d;
            var u = "entering";
            t.ENTERING = u;
            var c = "entered";
            t.ENTERED = c;
            var p = "exiting";
            t.EXITING = p;
            var m = function(e) {
                var t, s;

                function i(t, s) {
                    var n;
                    n = e.call(this, t, s) || this;
                    var a, o = s && !s.isMounting ? t.enter : t.appear;
                    return n.appearStatus = null, t.in ? o ? (a = d, n.appearStatus = u) : a = c : a = t.unmountOnExit || t.mountOnEnter ? l : d, n.state = {
                        status: a
                    }, n.nextCallback = null, n
                }
                s = e, (t = i).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s, i.getDerivedStateFromProps = function(e, t) {
                    return e.in && t.status === l ? {
                        status: d
                    } : null
                };
                var m = i.prototype;
                return m.componentDidMount = function() {
                    this.updateStatus(!0, this.appearStatus)
                }, m.componentDidUpdate = function(e) {
                    var t = null;
                    if (e !== this.props) {
                        var s = this.state.status;
                        this.props.in ? s !== u && s !== c && (t = u) : s !== u && s !== c || (t = p)
                    }
                    this.updateStatus(!1, t)
                }, m.componentWillUnmount = function() {
                    this.cancelNextCallback()
                }, m.getTimeouts = function() {
                    var e, t, s, n = this.props.timeout;
                    return e = t = s = n, null != n && "number" != typeof n && (e = n.exit, t = n.enter, s = void 0 !== n.appear ? n.appear : t), {
                        exit: e,
                        enter: t,
                        appear: s
                    }
                }, m.updateStatus = function(e, t) {
                    void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === u ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === d && this.setState({
                        status: l
                    })
                }, m.performEnter = function(e) {
                    var t = this,
                        s = this.props.enter,
                        n = this.context ? this.context.isMounting : e,
                        r = this.props.nodeRef ? [n] : [a.default.findDOMNode(this), n],
                        i = r[0],
                        l = r[1],
                        d = this.getTimeouts(),
                        p = n ? d.appear : d.enter;
                    !e && !s || o.default.disabled ? this.safeSetState({
                        status: c
                    }, (function() {
                        t.props.onEntered(i)
                    })) : (this.props.onEnter(i, l), this.safeSetState({
                        status: u
                    }, (function() {
                        t.props.onEntering(i, l), t.onTransitionEnd(p, (function() {
                            t.safeSetState({
                                status: c
                            }, (function() {
                                t.props.onEntered(i, l)
                            }))
                        }))
                    })))
                }, m.performExit = function() {
                    var e = this,
                        t = this.props.exit,
                        s = this.getTimeouts(),
                        n = this.props.nodeRef ? void 0 : a.default.findDOMNode(this);
                    t && !o.default.disabled ? (this.props.onExit(n), this.safeSetState({
                        status: p
                    }, (function() {
                        e.props.onExiting(n), e.onTransitionEnd(s.exit, (function() {
                            e.safeSetState({
                                status: d
                            }, (function() {
                                e.props.onExited(n)
                            }))
                        }))
                    }))) : this.safeSetState({
                        status: d
                    }, (function() {
                        e.props.onExited(n)
                    }))
                }, m.cancelNextCallback = function() {
                    null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                }, m.safeSetState = function(e, t) {
                    t = this.setNextCallback(t), this.setState(e, t)
                }, m.setNextCallback = function(e) {
                    var t = this,
                        s = !0;
                    return this.nextCallback = function(n) {
                        s && (s = !1, t.nextCallback = null, e(n))
                    }, this.nextCallback.cancel = function() {
                        s = !1
                    }, this.nextCallback
                }, m.onTransitionEnd = function(e, t) {
                    this.setNextCallback(t);
                    var s = this.props.nodeRef ? this.props.nodeRef.current : a.default.findDOMNode(this),
                        n = null == e && !this.props.addEndListener;
                    if (s && !n) {
                        if (this.props.addEndListener) {
                            var o = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                                r = o[0],
                                i = o[1];
                            this.props.addEndListener(r, i)
                        }
                        null != e && setTimeout(this.nextCallback, e)
                    } else setTimeout(this.nextCallback, 0)
                }, m.render = function() {
                    var e = this.state.status;
                    if (e === l) return null;
                    var t = this.props,
                        s = t.children,
                        a = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, function(e, t) {
                            if (null == e) return {};
                            var s, n, a = {},
                                o = Object.keys(e);
                            for (n = 0; n < o.length; n++) s = o[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
                            return a
                        }(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                    return n.default.createElement(r.default.Provider, {
                        value: null
                    }, "function" == typeof s ? s(e, a) : n.default.cloneElement(n.default.Children.only(s), a))
                }, i
            }(n.default.Component);

            function g() {}
            m.contextType = r.default, m.propTypes = {}, m.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: g,
                onEntering: g,
                onEntered: g,
                onExit: g,
                onExiting: g,
                onExited: g
            }, m.UNMOUNTED = l, m.EXITED = d, m.ENTERING = u, m.ENTERED = c, m.EXITING = p;
            var h = m;
            t.default = h
        },
        "./node_modules/react-transition-group/cjs/TransitionGroup.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            r(s("./node_modules/prop-types/index.js"));
            var n = r(s("./node_modules/react/index.js")),
                a = r(s("./node_modules/react-transition-group/cjs/TransitionGroupContext.js")),
                o = s("./node_modules/react-transition-group/cjs/utils/ChildMapping.js");

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            var l = Object.values || function(e) {
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                },
                d = function(e) {
                    var t, s;

                    function r(t, s) {
                        var n, a = (n = e.call(this, t, s) || this).handleExited.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(n));
                        return n.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: a,
                            firstRender: !0
                        }, n
                    }
                    s = e, (t = r).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
                    var d = r.prototype;
                    return d.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, d.componentWillUnmount = function() {
                        this.mounted = !1
                    }, r.getDerivedStateFromProps = function(e, t) {
                        var s = t.children,
                            n = t.handleExited;
                        return {
                            children: t.firstRender ? (0, o.getInitialChildMapping)(e, n) : (0, o.getNextChildMapping)(e, s, n),
                            firstRender: !1
                        }
                    }, d.handleExited = function(e, t) {
                        var s = (0, o.getChildMapping)(this.props.children);
                        e.key in s || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                            var s = i({}, t.children);
                            return delete s[e.key], {
                                children: s
                            }
                        })))
                    }, d.render = function() {
                        var e = this.props,
                            t = e.component,
                            s = e.childFactory,
                            o = function(e, t) {
                                if (null == e) return {};
                                var s, n, a = {},
                                    o = Object.keys(e);
                                for (n = 0; n < o.length; n++) s = o[n], t.indexOf(s) >= 0 || (a[s] = e[s]);
                                return a
                            }(e, ["component", "childFactory"]),
                            r = this.state.contextValue,
                            i = l(this.state.children).map(s);
                        return delete o.appear, delete o.enter, delete o.exit, null === t ? n.default.createElement(a.default.Provider, {
                            value: r
                        }, i) : n.default.createElement(a.default.Provider, {
                            value: r
                        }, n.default.createElement(t, o, i))
                    }, r
                }(n.default.Component);
            d.propTypes = {}, d.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var u = d;
            t.default = u, e.exports = t.default
        },
        "./node_modules/react-transition-group/cjs/TransitionGroupContext.js": (e, t, s) => {
            "use strict";
            var n;
            t.__esModule = !0, t.default = void 0;
            var a = ((n = s("./node_modules/react/index.js")) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            t.default = a, e.exports = t.default
        },
        "./node_modules/react-transition-group/cjs/config.js": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = void 0;
            t.default = {
                disabled: !1
            }, e.exports = t.default
        },
        "./node_modules/react-transition-group/cjs/index.js": (e, t, s) => {
            "use strict";
            t.TL = t.Kv = void 0;
            var n = o(s("./node_modules/react-transition-group/cjs/CSSTransition.js"));
            t.Kv = n.default, o(s("./node_modules/react-transition-group/cjs/ReplaceTransition.js")).default;
            var a = o(s("./node_modules/react-transition-group/cjs/SwitchTransition.js"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.TL = a.default, o(s("./node_modules/react-transition-group/cjs/TransitionGroup.js")).default, o(s("./node_modules/react-transition-group/cjs/Transition.js")).default, o(s("./node_modules/react-transition-group/cjs/config.js")).default
        },
        "./node_modules/react-transition-group/cjs/utils/ChildMapping.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.getChildMapping = a, t.mergeChildMappings = o, t.getInitialChildMapping = function(e, t) {
                return a(e.children, (function(s) {
                    return (0, n.cloneElement)(s, {
                        onExited: t.bind(null, s),
                        in: !0,
                        appear: r(s, "appear", e),
                        enter: r(s, "enter", e),
                        exit: r(s, "exit", e)
                    })
                }))
            }, t.getNextChildMapping = function(e, t, s) {
                var i = a(e.children),
                    l = o(t, i);
                return Object.keys(l).forEach((function(a) {
                    var o = l[a];
                    if ((0, n.isValidElement)(o)) {
                        var d = a in t,
                            u = a in i,
                            c = t[a],
                            p = (0, n.isValidElement)(c) && !c.props.in;
                        !u || d && !p ? u || !d || p ? u && d && (0, n.isValidElement)(c) && (l[a] = (0, n.cloneElement)(o, {
                            onExited: s.bind(null, o),
                            in: c.props.in,
                            exit: r(o, "exit", e),
                            enter: r(o, "enter", e)
                        })) : l[a] = (0, n.cloneElement)(o, {
                            in: !1
                        }) : l[a] = (0, n.cloneElement)(o, {
                            onExited: s.bind(null, o),
                            in: !0,
                            exit: r(o, "exit", e),
                            enter: r(o, "enter", e)
                        })
                    }
                })), l
            };
            var n = s("./node_modules/react/index.js");

            function a(e, t) {
                var s = Object.create(null);
                return e && n.Children.map(e, (function(e) {
                    return e
                })).forEach((function(e) {
                    s[e.key] = function(e) {
                        return t && (0, n.isValidElement)(e) ? t(e) : e
                    }(e)
                })), s
            }

            function o(e, t) {
                function s(s) {
                    return s in t ? t[s] : e[s]
                }
                e = e || {}, t = t || {};
                var n, a = Object.create(null),
                    o = [];
                for (var r in e) r in t ? o.length && (a[r] = o, o = []) : o.push(r);
                var i = {};
                for (var l in t) {
                    if (a[l])
                        for (n = 0; n < a[l].length; n++) {
                            var d = a[l][n];
                            i[a[l][n]] = s(d)
                        }
                    i[l] = s(l)
                }
                for (n = 0; n < o.length; n++) i[o[n]] = s(o[n]);
                return i
            }

            function r(e, t, s) {
                return null != s[t] ? s[t] : e.props[t]
            }
        },
        "./node_modules/react-transition-group/cjs/utils/PropTypes.js": (e, t, s) => {
            "use strict";
            t.__esModule = !0, t.classNamesShape = t.timeoutsShape = void 0;
            var n;
            (n = s("./node_modules/prop-types/index.js")) && n.__esModule;
            t.timeoutsShape = null;
            t.classNamesShape = null
        },
        "./node_modules/react-transition-group/node_modules/dom-helpers/cjs/addClass.js": (e, t, s) => {
            "use strict";
            var n = s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            t.__esModule = !0, t.default = function(e, t) {
                e.classList ? e.classList.add(t) : (0, a.default)(e, t) || ("string" == typeof e.className ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
            };
            var a = n(s("./node_modules/react-transition-group/node_modules/dom-helpers/cjs/hasClass.js"));
            e.exports = t.default
        },
        "./node_modules/react-transition-group/node_modules/dom-helpers/cjs/hasClass.js": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t) {
                return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
            }, e.exports = t.default
        },
        "./node_modules/react-transition-group/node_modules/dom-helpers/cjs/removeClass.js": (e, t) => {
            "use strict";

            function s(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            t.__esModule = !0, t.default = function(e, t) {
                e.classList ? e.classList.remove(t) : "string" == typeof e.className ? e.className = s(e.className, t) : e.setAttribute("class", s(e.className && e.className.baseVal || "", t))
            }, e.exports = t.default
        },
        "./node_modules/wgs84/index.js": e => {
            e.exports.RADIUS = 6378137, e.exports.FLATTENING = 1 / 298.257223563, e.exports.POLAR_RADIUS = 6356752.3142
        }
    },
    e => {
        e.O(0, ["react", "redux", "immutable", "rich_text_rendering", "quizlet_shared_kotlin", "leaflet", "pinyin_converter", "grader", "kotlin_serialization", "study_modes_core", "kotlin_coroutines", "kotlin_data_layer", "assistant_generator", "progress", "common"], (() => {
            return t = "./app/j/study-modes/write/write.entry.ts", e(e.s = t);
            var t
        }));
        e.O()
    }
]);
