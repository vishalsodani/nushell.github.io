(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{423:function(e,t,a){e.exports=a.p+"assets/img/0_19_autocomplete.c1127036.gif"},424:function(e,t,a){e.exports=a.p+"assets/img/0_19_heart_theme.3eb69eac.png"},425:function(e,t,a){e.exports=a.p+"assets/img/0_19_table_colors.f3672252.png"},483:function(e,t,a){"use strict";a.r(t);var r=a(54),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nushell-0-19"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-0-19"}},[e._v("#")]),e._v(" Nushell 0.19")]),e._v(" "),r("p",[e._v("Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.")]),e._v(" "),r("p",[e._v("Today, we're releasing 0.19 of Nu. In this version, we fill some long-lived gaps in Nu, improve completions, theming, and much more.")]),e._v(" "),r("h1",{attrs:{id:"where-to-get-it"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-to-get-it"}},[e._v("#")]),e._v(" Where to get it")]),e._v(" "),r("p",[e._v("Nu 0.19 is available as "),r("a",{attrs:{href:"https://github.com/nushell/nushell/releases/tag/0.19.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("pre-built binaries"),r("OutboundLink")],1),e._v(" or from "),r("a",{attrs:{href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"}},[e._v("crates.io"),r("OutboundLink")],1),e._v(". If you have Rust installed you can install it using "),r("code",[e._v("cargo install nu")]),e._v(".")]),e._v(" "),r("p",[e._v("If you want all the goodies, you can install "),r("code",[e._v("cargo install nu --features=extra")]),e._v(".")]),e._v(" "),r("p",[e._v("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),r("code",[e._v("cargo install nu_plugin_<plugin name>")]),e._v(".")]),e._v(" "),r("h1",{attrs:{id:"what-s-new"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new"}},[e._v("#")]),e._v(" What's New")]),e._v(" "),r("h2",{attrs:{id:"new-completion-engine-thegedge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-completion-engine-thegedge"}},[e._v("#")]),e._v(" New completion engine (thegedge)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(423),alt:"animation of Nu completion"}})]),e._v(" "),r("p",[e._v("Nushell's completion suggestions are now built around the nushell parser. This means completers can now use a much richer context to provide relevant suggestions. This is still a work in progress, but one immediate improvement is that we can now complete commands, flags, and arguments in most nested structures. For example, "),r("code",[e._v("echo $(l<TAB>")]),e._v(" will show you all commands that start with l.")]),e._v(" "),r("p",[e._v('The completion work is still very "new", with parts landing in the hours before the release, so please give it a spin and let us know where we can keep improving it.')]),e._v(" "),r("h2",{attrs:{id:"improved-theming-fdncred"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#improved-theming-fdncred"}},[e._v("#")]),e._v(" Improved theming (fdncred)")]),e._v(" "),r("p",[r("img",{attrs:{src:a(424),alt:"image of a Nu table built with hearts"}})]),e._v(" "),r("p",[r("em",[e._v("Nu, with love")])]),e._v(" "),r("p",[e._v("We're continuing to expand what's possible with Nu's themes, allowing you to configure more areas of how your data is displayed.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(425),alt:"image of a Nu table custom colors"}})]),e._v(" "),r("p",[e._v("You can also configure how the various Nu data types are displayed. You can learn about the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2449",target:"_blank",rel:"noopener noreferrer"}},[e._v("new custom data colors"),r("OutboundLink")],1),e._v(" if you're interested in configuring them for yourself. There's also and example "),r("code",[e._v("config.toml")]),e._v(" "),r("a",{attrs:{href:"https://github.com/nushell/nushell/blob/main/docs/sample_config/config.toml",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(" with an example of how to set the colors you like.")]),e._v(" "),r("h2",{attrs:{id:"table-literals-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-literals-jonathandturner"}},[e._v("#")]),e._v(" Table literals (jonathandturner)")]),e._v(" "),r("p",[e._v("Starting with 0.19, you can now write table values like you would other kinds of values. To do so, separate a row of header names from the data using a "),r("code",[e._v(";")]),e._v(".  For example:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> echo [[name size]; [JT 185] [KJ 160]]\n───┬──────┬──────\n # │ name │ size\n───┼──────┼──────\n 0 │ JT   │  185\n 1 │ KJ   │  160\n───┴──────┴──────\n")])])]),r("p",[e._v("To be a valid table, the number of columns needs to line up.")]),e._v(" "),r("h2",{attrs:{id:"multiline-edits-jonathandturner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#multiline-edits-jonathandturner"}},[e._v("#")]),e._v(" Multiline edits (jonathandturner)")]),e._v(" "),r("p",[e._v("In addition to the new table literals, we're opening up multiline commands. Initially, this will be for the line editor, but we'll extend this further as we improve parser support.")]),e._v(" "),r("p",[e._v("You can now also write the above:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> echo [\n[name, size];\n[JT, 185]\n[KJ, 160]\n]\n───┬──────┬──────\n # │ name │ size\n───┼──────┼──────\n 0 │ JT   │  185\n 1 │ KJ   │  160\n───┴──────┴──────\n")])])]),r("p",[e._v("You might have noticed we now also allow commas to separate cells. These are intended to help readability and give a more familiar syntax for people coming from other languages.")]),e._v(" "),r("h2",{attrs:{id:"nushell-celebrates-its-first-year-in-the-public"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nushell-celebrates-its-first-year-in-the-public"}},[e._v("#")]),e._v(" Nushell celebrates its first year in the public")]),e._v(" "),r("p",[e._v("We recently sat down and wrote about "),r("a",{attrs:{href:"http://www.nushell.sh/blog/2020/08/23/year_of_nushell.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("where Nushell has come over the last year"),r("OutboundLink")],1),e._v(" and some thoughts about where it's going. The blog post is a wealth of information about Nu's philosophy and direction. Well worth a read.")]),e._v(" "),r("h2",{attrs:{id:"command-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#command-improvements"}},[e._v("#")]),e._v(" Command improvements")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("size")]),e._v(" now gives back "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2473",target:"_blank",rel:"noopener noreferrer"}},[e._v("simpler columns"),r("OutboundLink")],1),e._v(" (gillespiecd)")]),e._v(" "),r("li",[r("code",[e._v("uniqe")]),e._v(" has "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2472",target:"_blank",rel:"noopener noreferrer"}},[e._v("more examples"),r("OutboundLink")],1),e._v(" (gillespiecd)")]),e._v(" "),r("li",[r("code",[e._v("ls")]),e._v(" will tolerate more "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2466",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS errors while listing"),r("OutboundLink")],1),e._v(" (gorogoroumaru)")]),e._v(" "),r("li",[r("code",[e._v("cd .")]),e._v(" now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2457",target:"_blank",rel:"noopener noreferrer"}},[e._v("does the expected"),r("OutboundLink")],1),e._v(" (VincentWo)")]),e._v(" "),r("li",[r("code",[e._v("math stddev")]),e._v(" and "),r("code",[e._v("math variance")]),e._v(" both received updates (gillespiecd)")]),e._v(" "),r("li",[e._v("List literals can "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2454",target:"_blank",rel:"noopener noreferrer"}},[e._v("now have commas"),r("OutboundLink")],1),e._v(" (jonathandturner)")]),e._v(" "),r("li",[r("code",[e._v("str index-of")]),e._v(" can now do a "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2430",target:"_blank",rel:"noopener noreferrer"}},[e._v("reverse find"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("A new "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2429",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell plugin sample"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("New "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2428",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("path dirname")]),e._v(" and "),r("code",[e._v("path filestem")]),e._v(" subcommands"),r("OutboundLink")],1),e._v(" (fdncred)")]),e._v(" "),r("li",[e._v("The "),r("code",[e._v("alias")]),e._v(" command now has "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2418",target:"_blank",rel:"noopener noreferrer"}},[e._v("optional type inference"),r("OutboundLink")],1),e._v(" (bailey-layzer)")]),e._v(" "),r("li",[e._v("The line editor hinter is "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2405",target:"_blank",rel:"noopener noreferrer"}},[e._v("now configurable"),r("OutboundLink")],1),e._v(" (amitdev)")]),e._v(" "),r("li",[r("code",[e._v("version")]),e._v(" now includes the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2390",target:"_blank",rel:"noopener noreferrer"}},[e._v("git hash when built locally"),r("OutboundLink")],1),e._v(" (coolshaurya)")]),e._v(" "),r("li",[r("code",[e._v("touch")]),e._v(" can now take "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2386",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple arguments"),r("OutboundLink")],1),e._v(" (jzaefferer)")]),e._v(" "),r("li",[r("code",[e._v("date")]),e._v(" now has "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2383",target:"_blank",rel:"noopener noreferrer"}},[e._v("subcommands"),r("OutboundLink")],1),e._v(" (gorogoroumaru)")]),e._v(" "),r("li",[e._v("A new "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2381",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("sleep")]),e._v(" command"),r("OutboundLink")],1),e._v(" (LhKipp)")]),e._v(" "),r("li",[e._v("Improvements to "),r("code",[e._v("ls")]),e._v(" and "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2379",target:"_blank",rel:"noopener noreferrer"}},[e._v("hidden files"),r("OutboundLink")],1),e._v(" (mattclarke)")]),e._v(" "),r("li",[r("code",[e._v("sort-by")]),e._v(" errors "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2366",target:"_blank",rel:"noopener noreferrer"}},[e._v("now point to mismatched types"),r("OutboundLink")],1),e._v(" (luccasmmg)")]),e._v(" "),r("li",[r("code",[e._v("str")]),e._v(" subcommands for "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2360",target:"_blank",rel:"noopener noreferrer"}},[e._v("various capitalizations"),r("OutboundLink")],1),e._v(" (rrichardson)")]),e._v(" "),r("li",[e._v("Time units are now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2356",target:"_blank",rel:"noopener noreferrer"}},[e._v("more readable"),r("OutboundLink")],1),e._v(" (mattclarke)")]),e._v(" "),r("li",[e._v("Exit scripts from per-directory environments are now "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2352",target:"_blank",rel:"noopener noreferrer"}},[e._v("run in the original directory"),r("OutboundLink")],1),e._v(" (samhedin)")]),e._v(" "),r("li",[e._v("We've also got a "),r("a",{attrs:{href:"https://github.com/nushell/contributor-book/pull/29",target:"_blank",rel:"noopener noreferrer"}},[e._v("Portuguese translation of the contributor book(!!)"),r("OutboundLink")],1),e._v(" (vpperego)")]),e._v(" "),r("li",[e._v("Improved "),r("a",{attrs:{href:"https://github.com/nushell/book/pull/126",target:"_blank",rel:"noopener noreferrer"}},[e._v("RHEL installation instructions"),r("OutboundLink")],1),e._v(" (arnaldo2792)")])]),e._v(" "),r("h2",{attrs:{id:"more-cleanup-and-improvements-gillespiecd-jonathandturner-marcoleni-andrasio-dmeijboom-thegedge-jzaefferer-ryuichi1208-josephtlyons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-cleanup-and-improvements-gillespiecd-jonathandturner-marcoleni-andrasio-dmeijboom-thegedge-jzaefferer-ryuichi1208-josephtlyons"}},[e._v("#")]),e._v(" More cleanup and improvements (gillespiecd, jonathandturner, Marcoleni, andrasio, dmeijboom, thegedge, jzaefferer, ryuichi1208, JosephTLyons)")]),e._v(" "),r("p",[e._v("Cleanups in math commands, extra bits of command help, reformating of the command list, better email samples, cleaned up spans in pipelines, fix to "),r("code",[e._v("header")]),e._v(" command with mismatched columns, cleanup of dependency usage, cleaned up display config, added crossreferences in command help, subcommands are now sorted before being listed, some dockerfile improvements, nu-cli now has nu-data split off from it, column count now won't break on empty tables, wasm is now tested on CI, improvements to "),r("code",[e._v("histogram")]),e._v(" and "),r("code",[e._v("count")]),e._v(",")]),e._v(" "),r("h2",{attrs:{id:"breaking-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),r("h3",{attrs:{id:"starship-is-now-external"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starship-is-now-external"}},[e._v("#")]),e._v(" Starship is now external")]),e._v(" "),r("p",[e._v("To help Nu focus a bit more on the core capabilities, and to free up it to update separate from Nu, Starship is now external. Once you install Starship, you can set your prompt to use starship using:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> config set prompt `echo $(starship prompt)`\n")])])]),r("p",[e._v("You can also set Nu to use other prompts as well. For example, if you like powerline, you can also use this:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("> config set prompt `echo $(powerline shell left)`\n")])])]),r("h3",{attrs:{id:"no-more-auto-pivot-by-default"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#no-more-auto-pivot-by-default"}},[e._v("#")]),e._v(" No more auto-pivot by default")]),e._v(" "),r("p",[e._v("Based on feedback from users, we've now disabled any auto-pivoting of tables by default. You can still re-enable this behavior in your config, but we will no longer rotate any tables without being explicitly asked.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# To only rotate large tables:\n> config set pivot_mode auto\n\n# To always rotate a single row to be vertical:\n> config set pivot_mode always\n")])])]),r("h3",{attrs:{id:"time-units-are-now-renamed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#time-units-are-now-renamed"}},[e._v("#")]),e._v(" Time units are now renamed")]),e._v(" "),r("p",[e._v("To make it easier, and more readable, to work with a variety of units in the future, we've renamed the time units.")]),e._v(" "),r("p",[e._v("Instead of "),r("code",[e._v("1s")]),e._v(", you'll now use "),r("code",[e._v("1sec")]),e._v(". Most units for time now follow 3 letters instead of a single letter. You can read more about the "),r("a",{attrs:{href:"https://github.com/nushell/nushell/pull/2356",target:"_blank",rel:"noopener noreferrer"}},[e._v("full change in the PR"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"header-colors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header-colors"}},[e._v("#")]),e._v(" Header colors")]),e._v(" "),r("p",[e._v("With the new theming support, "),r("code",[e._v("header_color")]),e._v(", "),r("code",[e._v("header_bold")]),e._v(", and "),r("code",[e._v("header_align")]),e._v(" have moved into the "),r("code",[e._v("[color_config]")]),e._v(" section, and out of the root level, of the "),r("code",[e._v("config.toml")]),e._v(" file.")]),e._v(" "),r("h3",{attrs:{id:"simplified-default-build"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simplified-default-build"}},[e._v("#")]),e._v(" Simplified default build")]),e._v(" "),r("p",[e._v("While not technically a breaking change, it's worth a mention that starting with 0.19, you don't need to use "),r("code",[e._v("--features=stable")]),e._v(" to get most of Nu's features. We've folded most of the common ones into the default install.  For all the bells and whistles, now use "),r("code",[e._v("--features=extra")]),e._v(", which includes additional functionality not part of the original "),r("code",[e._v("stable")]),e._v(" release.")]),e._v(" "),r("h1",{attrs:{id:"looking-forward"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#looking-forward"}},[e._v("#")]),e._v(" Looking forward")]),e._v(" "),r("p",[e._v("With 0.19, we see the first deeper changes to the completion engine since Nu was first released. These will grow to allow custom completions for commands, and we're looking forward to making these features available.")]),e._v(" "),r("p",[e._v("The new table literal also takes a step in the direction of data frame support in the future, a powerful feature popularized by pandas, R and other data processing libraries and languages. With it, we hope Nu will continue to grow to having a richer, more nuanced, view of data over time.")])])}),[],!1,null,null,null);t.default=o.exports}}]);