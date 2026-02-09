const resourcesData = [
    {
        id: 1,
        title: "Development Evidence Portal",
        description: "The world's most comprehensive repository of impact evaluations and systematic reviews in international development.",
        longDescription: null, // Using iframe instead
        category: ["Databases"],
        audience: ["For Researchers", "For Policymakers", "For Donors", "For NGOs"],
        icon: "database",
        featured: true,
        url: "https://developmentevidence.3ieimpact.org",
        totalPages: 12400,
        useIframe: true
    },
    {
        id: 2,
        title: "Evidence Gap Maps",
        description: "Visual tools that map existing evidence and identify gaps where more research is needed.",
        longDescription: `
            <div class="space-y-6">
                <p class="text-lg text-gray-700 leading-relaxed">Evidence Gap Maps (EGMs) are thematic collections of evidence that show what we know and do not know about development interventions.</p>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Gap Map Example" class="w-full h-48 object-cover rounded-xl shadow-sm" />
                <div>
                    <h4 class="font-bold text-gray-900 mb-2">Available Maps</h4>
                    <ul class="space-y-3">
                        <li class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                            <span class="text-gray-600"><strong>Science, Technology and Innovation:</strong> Mapping evidence on STI interventions.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                            <span class="text-gray-600"><strong>Food Systems:</strong> Evidence on food security and nutrition.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                            <span class="text-gray-600"><strong>Social Protection:</strong> Interventions for vulnerable populations.</span>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        category: ["Tools and methods"],
        audience: ["For Researchers", "For Policymakers"],
        icon: "map",
        featured: true,
        url: "https://www.3ieimpact.org/evidence-hub/evidence-gap-maps",
        totalPages: 45,
        useIframe: false
    },
    {
        id: 3,
        title: "Impact Evaluation Glossary",
        description: "A searchable database of terms and definitions used in impact evaluation and social research.",
        longDescription: `
            <div class="space-y-6">
                 <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm text-yellow-800 mb-4">
                    <div class="font-bold mb-1">Quick Tip</div>
                    Use this glossary to standardize terminology in your research proposals.
                </div>
                <p class="text-gray-600">Clear definitions are the bedrock of rigorous research. This glossary provides standard definitions for technical terms used in quantitative and qualitative impact evaluation.</p>
                <div class="border rounded-lg overflow-hidden">
                    <div class="bg-gray-50 px-4 py-2 border-b font-mono text-xs text-gray-500">Preview terms</div>
                    <div class="divide-y divide-gray-100">
                        <div class="p-4">
                            <span class="font-bold text-gray-900 block mb-1">Counterfactual</span>
                            <span class="text-gray-600 text-sm">What would have happened to the participants in a program had they not participated.</span>
                        </div>
                        <div class="p-4">
                            <span class="font-bold text-gray-900 block mb-1">Randomized Controlled Trial (RCT)</span>
                            <span class="text-gray-600 text-sm">An impact evaluation design in which random assignment is used to allocate the intervention.</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        category: ["Learning and reference"],
        audience: ["For Researchers", "For Students"],
        icon: "book-a",
        featured: false,
        url: "https://www.3ieimpact.org/resources/Glossaries",
        totalPages: 150,
        useIframe: false
    },
    {
        id: 4,
        title: "RIDIE Registry",
        description: "The Registry for International Development Impact Evaluations (RIDIE) promotes transparency and high-quality research.",
        longDescription: `
            <div class="space-y-6">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-2xl">R</div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900">RIDIE</h3>
                        <p class="text-sm text-gray-500">Registry for International Development Impact Evaluations</p>
                    </div>
                </div>
                <p class="text-gray-700">RIDIE is a prospective registry of impact evaluations related to development in low- and middle-income countries. Registration helps avoid publication bias and improves the transparency of research findings.</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <a href="#" class="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                        <div class="font-bold text-gray-900 group-hover:text-blue-700">Register a Study</div>
                        <div class="text-xs text-gray-500 mt-1">Submit your evaluation design</div>
                    </a>
                    <a href="#" class="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                        <div class="font-bold text-gray-900 group-hover:text-blue-700">Search Registry</div>
                        <div class="text-xs text-gray-500 mt-1">Browse ongoing evaluations</div>
                    </a>
                </div>
            </div>
        `,
        category: ["Databases"],
        audience: ["For Researchers", "For Donors"],
        icon: "clipboard-list",
        featured: false,
        url: "https://www.3ieimpact.org/resources/ridie",
        totalPages: 890,
        useIframe: false
    },
    {
        id: 5,
        title: "PIR Methods Menu",
        description: "A comprehensive menu of methods for Policy, Influence, and Research (PIR) effectiveness.",
        longDescription: `
            <div class="space-y-8">
                <p class="text-lg text-gray-700 leading-relaxed">
                    This resource provides a detailed menu of various methods used to evaluate policy influence and research uptake. It serves as a guide for selecting the most appropriate evaluation tools for your context.
                </p>

                <div class="grid gap-6 md:grid-cols-2">
                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Adaptive Management</h4>
                        <p class="text-sm text-gray-600">A general term for a set of approaches that incorporate feedback loops and iterative adaptation into program implementation.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Agent-Based Modeling</h4>
                        <p class="text-sm text-gray-600">A computational simulation of interactions between a defined set of actors or "agents" in order to understand dynamics influencing outcomes in a system.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Case Studies</h4>
                        <p class="text-sm text-gray-600">A descriptive analysis of a 'bounded' program, event, activity, or individuals over time through detailed, in-depth data collection.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Contribution Analysis</h4>
                        <p class="text-sm text-gray-600">A confirmatory evaluation approach that assesses a policy or reform's contribution to outcomes or observed changes.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Cost-Benefit Analysis</h4>
                        <p class="text-sm text-gray-600">Compares a policy's expected costs and benefits, usually prior to implementation, to decide if the policy is 'worth' implementation.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Experimental Approaches (RCTs)</h4>
                        <p class="text-sm text-gray-600">Creates comparable groups that participate in a policy vs. those that do not, in order to attribute changes in outcomes to the policy.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Network Mapping</h4>
                        <p class="text-sm text-gray-600">A participatory approach designed to help people identify, visualize, discuss, and influence key actors and interrelationships.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Outcome Harvesting</h4>
                        <p class="text-sm text-gray-600">An approach focusing on collecting evidence of changes and working backwards to determine how an intervention may have contributed to these changes.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Process Tracing</h4>
                        <p class="text-sm text-gray-600">Test and refine a theory by observing how the policy or reform worked in a single case.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Realist Evaluation</h4>
                        <p class="text-sm text-gray-600">A theory-driven approach that analyzes programs based on configurations of context, causal mechanisms, and outcomes.</p>
                    </div>
                    
                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Social Network Analysis</h4>
                        <p class="text-sm text-gray-600">An analytical approach to identify and characterize social structures and relationships through networks and graph theory.</p>
                    </div>

                    <div class="bg-gray-50 p-5 rounded-xl border border-gray-100">
                        <h4 class="font-bold text-gray-900 mb-2">Systematic Review</h4>
                        <p class="text-sm text-gray-600">A synthesis of research evidence on a clearly defined topic using rigorous, repeatable methods.</p>
                    </div>
                </div>

                <div class="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100 text-center">
                   <h5 class="font-bold text-blue-900 mb-2">Explore Full Methodology</h5>
                   <p class="text-sm text-blue-800 mb-4">Access the complete interactive guide with 40+ methods on the official portal.</p>
                   <a href="https://www.3ieimpact.org/pir-methods" target="_blank" class="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800">
                       Open Full Menu <span class="icon-external-link"></span>
                   </a>
                </div>
            </div>
        `,
        category: ["Tools and methods"],
        audience: ["For Researchers", "For Evaluators"],
        icon: "menu",
        featured: false,
        url: "https://www.3ieimpact.org/pir-methods",
        totalPages: 24,
        useIframe: false
    },
    {
        id: 6,
        title: "Journal of Development Effectiveness",
        description: "Publishes original papers reporting high-quality research on the effectiveness of development interventions.",
        longDescription: `
            <div class="space-y-6">
                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80" alt="Journal" class="w-full h-40 object-cover rounded-xl opacity-80" />
                <p class="text-gray-700">The <em>Journal of Development Effectiveness</em> publishes papers reporting evidence of the effectiveness of development interventions and the methodology of impact evaluation.</p>
                <div>
                    <h4 class="font-bold text-gray-900 mb-2">Recent Issues Focus On:</h4>
                    <ul class="list-disc pl-5 space-y-2 text-gray-600">
                        <li>Microfinance effectiveness in rural settings</li>
                        <li>Educational interventions in post-conflict zones</li>
                        <li>Methodological advances in quasi-experimental designs</li>
                    </ul>
                </div>
                <div class="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 italic">
                    "The go-to journal for rigorous impact evaluation studies."
                </div>
            </div>
        `,
        category: ["Learning and reference"],
        audience: ["For Researchers", "For Academics"],
        icon: "book-open-text",
        featured: false,
        url: "https://www.3ieimpact.org/resources/journal-of-development-effectiveness",
        totalPages: 12,
        useIframe: false
    },
    {
        id: 7,
        title: "Remote Sensing Inventory",
        description: "A catalogue of remote sensing applications for impact evaluations in developing countries.",
        longDescription: `
            <div class="space-y-6">
                <p class="text-gray-700">This inventory catalogues studies that have used remote sensing data (satellite imagery, drone data, etc.) for impact measurement. It is a vital resource for researchers looking to employ novel data collection methods.</p>
                <div class="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm overflow-hidden relative">
                    <div class="absolute top-0 right-0 p-4 opacity-20">
                        <div class="icon-satellite text-6xl"></div>
                    </div>
                    <div class="mb-4 text-white font-bold border-b border-slate-700 pb-2">Data Types Indexed</div>
                    <ul class="space-y-2">
                        <li>> Satellite Imagery (Optical/Radar)</li>
                        <li>> Drone / UAV Footage</li>
                        <li>> Nighttime Lights Data</li>
                        <li>> Land Cover Classification</li>
                    </ul>
                </div>
            </div>
        `,
        category: ["Databases", "Tools and methods"],
        audience: ["For Researchers"],
        icon: "satellite",
        featured: false,
        url: "https://www.3ieimpact.org/resources/remote-sensing-inventory",
        totalPages: 67,
        useIframe: false
    },
    {
        id: 8,
        title: "Video Lecture Series",
        description: "Educational videos covering various topics in impact evaluation methodologies and practice.",
        longDescription: `
            <div class="space-y-6">
                <p class="text-gray-700">In 2014, 3ie and the Asian Development Bank developed a joint video lecture series as a primer for those interested in evaluations. Lectures 1-6 cover core concepts.</p>
                <div class="grid grid-cols-1 gap-3">
                    <div class="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                        <div class="w-24 h-16 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                             <div class="absolute inset-0 bg-black/10"></div>
                             <div class="icon-circle-play text-white text-2xl relative z-10"></div>
                        </div>
                        <div>
                            <div class="font-bold text-gray-900 text-sm">Lecture 1: What is impact evaluation?</div>
                            <div class="text-xs text-gray-500 mt-1">Prof. Howard White • Why simple change measurement fails</div>
                        </div>
                    </div>
                    <div class="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                        <div class="w-24 h-16 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                             <div class="absolute inset-0 bg-black/10"></div>
                             <div class="icon-circle-play text-white text-2xl relative z-10"></div>
                        </div>
                        <div>
                            <div class="font-bold text-gray-900 text-sm">Lecture 2: The Theory of Change</div>
                            <div class="text-xs text-gray-500 mt-1">Prof. Howard White • Foundations of rigorous evaluation</div>
                        </div>
                    </div>
                     <div class="flex gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200">
                        <div class="w-24 h-16 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center relative overflow-hidden">
                             <div class="absolute inset-0 bg-black/10"></div>
                             <div class="icon-circle-play text-white text-2xl relative z-10"></div>
                        </div>
                        <div>
                            <div class="font-bold text-gray-900 text-sm">Lecture 3: Intro to RCTs</div>
                            <div class="text-xs text-gray-500 mt-1">Annette Brown • Creating valid counterfactuals</div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        category: ["Learning and reference"],
        audience: ["For Students", "For Researchers"],
        icon: "film",
        featured: false,
        url: "https://www.3ieimpact.org/resources/video-lecture-series",
        totalPages: 12,
        useIframe: false
    },
    {
        id: 9,
        title: "International Development Coordinating Group",
        description: "Promoting the production and use of evidence to improve social and economic development.",
        longDescription: `
            <div class="space-y-6">
                <p class="text-gray-700">The IDCG is a network within the Campbell Collaboration. We coordinate the production of high-quality systematic reviews of social and economic interventions in low- and middle-income countries.</p>
                <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50">
                    <h5 class="font-bold text-blue-900 text-sm uppercase mb-1">Our Mission</h5>
                    <p class="text-sm text-blue-800 italic">To improve the quality of life for people in developing countries by informing policy with evidence.</p>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 mb-2">Activities</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Training</span>
                        <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Editorial Services</span>
                        <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Peer Review</span>
                        <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Dissemination</span>
                    </div>
                </div>
            </div>
        `,
        category: ["Community and groups"],
        audience: ["For Researchers", "For Policymakers"],
        icon: "globe",
        featured: false,
        url: "https://www.3ieimpact.org/resources/International-Development-Coordinating-Group",
        totalPages: 34,
        useIframe: false
    }
];