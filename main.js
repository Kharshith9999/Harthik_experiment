// --- MOCK DATABASE (Macro Events) ---
const macroEvents = {
    rbi_dollar: {
        id: 'rbi_dollar',
        title: "RBI Unexpectedly Tightens Limits on Banks' Dollar Positions",
        tag: 'Breaking Entity',
        time: '03:14 PM IST • MAR 31',
        confidence: 98,
        facts: "RBI intervenes to curb dollar hoarding amidst global crude spikes, limiting Net Open Position Limit (NOPL) to stabilize the Rupee.",
        aam_janta: "Banks can hold fewer dollars, squeezing short-term profits. High import costs keep everyday items (fuel, electronics) expensive.",
        macro_desc1: "The Reserve Bank of India (RBI) has suddenly instructed commercial banks to limit their Net Open Position Limit (NOPL) for US Dollars. This aggressive intervention is designed to curb dollar hoarding by institutions amidst soaring global crude oil prices.",
        macro_desc2: "While this protects the broader currency in the long run, the immediate effect chokes short-term forex trading revenues for major private banks.",
        flow: ['RBI Dollar Limit', 'Forex Liquidity Drop', 'Bank Margin Squeeze', 'Credit Growth Slows'],
        indices: [
            { name: 'NIFTY 50', before: 22820.00, after: 22331.40, color: 'red' },
            { name: 'SENSEX', before: 73580.00, after: 71948.00, color: 'red' },
            { name: 'BANK NIFTY', before: 52275.00, after: 50275.35, color: 'red', label: 'HEAVIEST HIT' }
        ],
        stocks: [
            { name: 'HDFCBANK', sector: 'Financials', before: 1435.20, after: 1380.00, sparkline: [100, 90, 85, 95, 70, 60, 40], color: 'red' },
            { name: 'ICICIBANK', sector: 'Financials', before: 1090.50, after: 1045.10, sparkline: [100, 95, 90, 80, 75, 55, 45], color: 'red' },
            { name: 'RELIANCE', sector: 'Energy / Conglomerate', before: 2860.00, after: 2910.00, sparkline: [40, 45, 42, 60, 80, 85, 100], color: 'emerald' }
        ],
        life: [
            { icon: '⛽', title: 'Fuel / Transport', desc: 'Crude spike offsets any subsidy. Pump prices likely to inflate.', cost: '+2.5% Cost', color: 'red' },
            { icon: '🏠', title: 'Home / Auto EMIs', desc: 'Liquidity tightening means banks won\'t pass on rate cuts soon.', cost: 'Sticky (No Drop)', color: 'orange' },
            { icon: '🛒', title: 'Electronics Imports', desc: 'RBI action protects Rupee, saving margins on imported goods.', cost: 'Stable', color: 'emerald' }
        ],
        risk: {
            text: "Direct hit by dollar limits. High probability of breaking current support level for banks.",
            budgetHit: "-₹1,200",
            advice: "Delay discretionary spending on imported tech for 30 days until currency stabilizes. Lock in fixed-rate FDs now."
        }
    },
    semiconductor_ban: {
        id: 'semiconductor_ban',
        title: "Global Supply Chain Shock: Taiwan Semi Export Bans Enacted",
        tag: 'Global Crisis',
        time: '08:00 AM IST • APR 01',
        confidence: 94,
        facts: "Geopolitical tensions trigger immediate suspension of high-end silicon exports to non-allied zones, causing global manufacturing panic.",
        aam_janta: "Phones, cars, and laptops are going to become rare and very expensive for the next 6-12 months. Expect major delays in auto deliveries.",
        macro_desc1: "A sudden escalation in regional disputes has led to an immediate halt in tier-1 semiconductor exports. This bottlenecks the global technology supply chain instantly, severely impacting auto and consumer electronics manufacturers.",
        macro_desc2: "Domestic automakers targeting aggressive EV pushes are forced to slash Q3 production targets by up to 40%, cratering automotive stocks.",
        flow: ['Export Ban', 'Chip Shortage', 'Production Halt', 'Revenue Slash'],
        indices: [
            { name: 'NIFTY 50', before: 22331.40, after: 21900.50, color: 'red' },
            { name: 'NIFTY AUTO', before: 21500.00, after: 19800.00, color: 'red', label: 'CRASHED' },
            { name: 'NIFTY IT', before: 34500.00, after: 35100.00, color: 'emerald', label: 'SAFE HAVEN' }
        ],
        stocks: [
            { name: 'TATAMOTORS', sector: 'Automotive', before: 980.50, after: 890.00, sparkline: [100, 95, 70, 60, 50, 40, 30], color: 'red' },
            { name: 'M&M', sector: 'Automotive', before: 1950.00, after: 1820.00, sparkline: [100, 95, 90, 75, 60, 55, 45], color: 'red' },
            { name: 'TCS', sector: 'IT Services', before: 3950.00, after: 4050.00, sparkline: [40, 50, 45, 65, 80, 90, 100], color: 'emerald' }
        ],
        life: [
            { icon: '📱', title: 'Smartphones & Laptops', desc: 'Severe inventory crunch expected within 3 weeks.', cost: '+15% Premium', color: 'red' },
            { icon: '🚗', title: 'Vehicle Deliveries', desc: 'Wait times stretching from 2 months to 8 months for SUVs.', cost: 'Delayed', color: 'orange' },
            { icon: '💼', title: 'Software Jobs', desc: 'Domestic IT sector sees increased outsourcing demand.', cost: 'Hiring Boom', color: 'emerald' }
        ],
        risk: {
            text: "Auto portfolio decimated by supply shock. Reallocate capital to domestic IT and software services.",
            budgetHit: "-₹8,500",
            advice: "If you need a new car or laptop, buy it TODAY. Defer selling existing tech assets."
        }
    },
    monsoon_shift: {
        id: 'monsoon_shift',
        title: "IMD Predicts Severe El Niño: Erratic Monsoon Threatens Kharif Crop",
        tag: 'Climate Alert',
        time: '11:30 AM IST • MAY 12',
        confidence: 85,
        facts: "Meteorological models confirm a rapid onset of El Niño, leading to a projected 18% deficit in crucial monsoon rainfall across the agrarian belt.",
        aam_janta: "Less rain means fewer crops. Prices for rice, sugar, and daily groceries will shoot up, hurting the household grocery budget.",
        macro_desc1: "The India Meteorological Department (IMD) has issued a red alert for the upcoming monsoon season. An 18% rainfall deficit severely threatens the Kharif (summer-sown) crops like rice, sugarcane, and cotton.",
        macro_desc2: "This triggers an immediate rural consumption slowdown and forces the government to ban key agricultural exports to control domestic inflation, hurting FMCG volumes.",
        flow: ['El Niño Alert', 'Rainfall Deficit', 'Crop Yield Drop', 'Food Inflation'],
        indices: [
            { name: 'NIFTY 50', before: 21900.50, after: 21750.00, color: 'red' },
            { name: 'NIFTY FMCG', before: 54000.00, after: 51200.00, color: 'red', label: 'STRESSED' },
            { name: 'SENSEX', before: 71948.00, after: 71400.00, color: 'red' }
        ],
        stocks: [
            { name: 'HINDUNILVR', sector: 'FMCG', before: 2250.00, after: 2110.00, sparkline: [100, 92, 85, 70, 65, 50, 40], color: 'red' },
            { name: 'ITC', sector: 'FMCG / Agri', before: 420.50, after: 395.00, sparkline: [100, 95, 90, 80, 75, 60, 50], color: 'red' },
            { name: 'COROMANDEL', sector: 'Fertilizers', before: 1100.00, after: 1250.00, sparkline: [30, 40, 45, 60, 75, 90, 100], color: 'emerald' }
        ],
        life: [
            { icon: '🍚', title: 'Daily Groceries', desc: 'Flour, rice, and sugar prices to inflate by double digits.', cost: '+12% Cost', color: 'red' },
            { icon: '💧', title: 'Water Tariffs', desc: 'Urban municipalities likely to enforce rationing and fines.', cost: 'Rationed', color: 'orange' },
            { icon: '🧥', title: 'Apparel', desc: 'Cotton shortfall will make next season\'s clothing pricier.', cost: '+5% Cost', color: 'red' }
        ],
        risk: {
            text: "FMCG margins crushed by raw material costs. Fertilizer and agrochem plays provide hedge opportunities.",
            budgetHit: "-₹3,500",
            advice: "Stockpile non-perishable pantry staples now. Rotate portfolio out of rural-dependent consumer goods."
        }
    }
};

// --- APP STATE ---
const state = {
    currentEventId: 'rbi_dollar',
    isLifeMode: false
};

// --- CORE FUNCTIONS ---

// Update the DOM gracefully
function updateDOMText(selector, text) {
    const el = document.querySelector(selector);
    if (el && el.innerText !== text) {
        el.innerText = text;
        el.classList.add('value-update');
        setTimeout(() => el.classList.remove('value-update'), 400);
    }
}

function formatMoney(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}

// Generate an SVG path string from an array of data points (0 to 100)
function generateSparkline(data) {
    const width = 100;
    const height = 30;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min === 0 ? 1 : max - min;
    
    let path = '';
    data.forEach((val, i) => {
        const x = (i / (data.length - 1)) * width;
        // SVG y is inverted (0 is top)
        const y = height - (((val - min) / range) * height * 0.8) - (height * 0.1); // add 10% padding
        path += (i === 0 ? 'M' : 'L') + `${x.toFixed(1)},${y.toFixed(1)} `;
    });
    return path;
}

// Trigger state render
function renderState() {
    const event = macroEvents[state.currentEventId];
    
    // 1. Update Header Data
    updateDOMText('#tag-label', event.tag);
    updateDOMText('#time-label', event.time);
    const confBar = document.querySelector('#confidence-bar');
    if(confBar) confBar.style.width = `${event.confidence}%`;
    updateDOMText('#confidence-label', `${event.confidence}% CONF`);
    
    document.querySelector('#main-title').innerText = event.title;
    
    // 2. Update Paragraphs
    updateDOMText('#fact-desc', event.facts);
    updateDOMText('#aam-janta-desc', event.aam_janta);
    updateDOMText('#macro-desc-1', event.macro_desc1);
    updateDOMText('#macro-desc-2', event.macro_desc2);
    
    // Update Flow elements
    event.flow.forEach((text, i) => {
        updateDOMText(`#flow-${i+1}`, text);
    });

    // 3. Update Indices
    const indicesContainer = document.querySelector('#indices-container');
    indicesContainer.innerHTML = ''; // clear old
    event.indices.forEach(idx => {
        const changeValue = idx.after - idx.before;
        const changePercent = ((changeValue / idx.before) * 100).toFixed(2);
        const sign = changeValue >= 0 ? '+' : '';
        const colorClass = idx.color === 'red' ? 'red' : 'emerald';
        const arrow = changeValue >= 0 ? '↗' : '➔'; // or different arrow
        
        let labelHTML = '';
        if (idx.label) {
            labelHTML = `<span class="text-[9px] bg-${colorClass}-500/20 px-1.5 py-0.5 rounded text-${colorClass}-300 border border-${colorClass}-500/30 ml-2">${idx.label}</span>`;
        }

        indicesContainer.innerHTML += `
        <div class="bg-black/40 border border-white/5 p-5 rounded-2xl hover:border-${colorClass}-500/40 transition group ${idx.label ? `shadow-[inset_0_0_20px_rgba(${idx.color === 'red'? '239,68,68' : '16,185,129'},0.02)] border-${colorClass}-900/30` : ''}">
            <div class="text-${colorClass === 'red' ? 'slate-400' : colorClass+'-400'} text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center justify-between">
                ${idx.name} ${labelHTML}
            </div>
            <div class="flex items-end justify-between mb-3">
                <div class="text-2xl font-display font-black text-white">${formatMoney(idx.after).replace('₹', '')}</div>
                <div class="bg-${colorClass}-500/10 text-${colorClass}-400 border border-${colorClass}-500/20 px-2 py-1 rounded text-xs font-bold">
                    ${sign}${changePercent}%
                </div>
            </div>
            <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>${idx.before}</span>
                <span class="text-${colorClass}-500/50">${arrow}</span>
                <span class="text-slate-300">${idx.after}</span>
            </div>
        </div>`;
    });

    // 4. Update Stocks Table
    const stocksTbody = document.querySelector('#stocks-tbody');
    stocksTbody.innerHTML = '';
    event.stocks.forEach(stock => {
        const changeValue = stock.after - stock.before;
        const changePercent = ((changeValue / stock.before) * 100).toFixed(2);
        const sign = changeValue >= 0 ? '+' : '';
        const colorClass = stock.color === 'red' ? 'red' : 'emerald';
        const sparkPath = generateSparkline(stock.sparkline);

        stocksTbody.innerHTML += `
        <tr class="hover:bg-white/[0.02] transition cursor-pointer group fade-in-up">
            <td class="py-4 border-b border-white/5">
                <div class="font-bold text-white text-base">${stock.name}</div>
                <div class="text-xs text-slate-500 font-inter">${stock.sector}</div>
            </td>
            <td class="py-4 border-b border-white/5">
                <div class="text-slate-300 font-mono text-sm">${formatMoney(stock.before)}</div>
            </td>
            <td class="py-4 border-b border-white/5">
                <div class="text-white font-bold font-mono text-sm value-update">${formatMoney(stock.after)}</div>
            </td>
            <td class="py-4 border-b border-white/5 w-32">
                <svg class="w-full h-8 sparkline animated-path" viewBox="0 0 100 30">
                    <path class="stroke-${colorClass}-500 group-hover:stroke-${colorClass}-400 drop-shadow-[0_2px_4px_rgba(${colorClass === 'red'? '239,68,68' : '52,211,153'},0.5)]" d="${sparkPath}" />
                </svg>
            </td>
            <td class="py-4 text-right border-b border-white/5">
                <span class="bg-${colorClass}-500/10 text-${colorClass}-400 border border-${colorClass}-500/20 px-3 py-1.5 rounded-lg font-bold">${sign}${changePercent}%</span>
            </td>
        </tr>`;
    });

    // 5. Update Life Cards
    // Pro Mode text in right panel
    updateDOMText('#risk-text', event.risk.text);
    updateDOMText('#risk-budget', event.risk.budgetHit);
    updateDOMText('#risk-advice', event.risk.advice);

    // Life grid big panel
    const lifeGrid = document.querySelector('#life-grid');
    lifeGrid.innerHTML = '';
    event.life.forEach(item => {
        lifeGrid.innerHTML += `
        <div class="bg-black/40 border border-white/5 p-5 rounded-2xl fade-in-up">
            <div class="w-8 h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center mb-3 text-lg">${item.icon}</div>
            <h4 class="text-sm font-bold text-white mb-1">${item.title}</h4>
            <p class="text-xs text-slate-400 mb-3">${item.desc}</p>
            <span class="text-${item.color}-400 font-display font-bold text-lg">${item.cost}</span>
        </div>`;
    });
}

// Search Dropdown interactions
const searchInput = document.getElementById('search-input');
const searchDropdown = document.getElementById('search-dropdown');

searchInput.addEventListener('focus', () => {
    searchDropdown.classList.add('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('active');
    }
});

// Select Event
window.selectEvent = function(eventId) {
    if(macroEvents[eventId]) {
        state.currentEventId = eventId;
        searchDropdown.classList.remove('active');
        searchInput.value = ''; // clear input
        searchInput.placeholder = 'Analyzing: ' + macroEvents[eventId].title.substring(0,25) + '...';
        
        // Add a slight flash effect to body to indicate data transition
        const mainPanel = document.querySelector('#main-card');
        mainPanel.style.opacity = '0.5';
        setTimeout(() => {
            renderState();
            mainPanel.style.opacity = '1';
        }, 300);
    }
}

// Mode Toggle
window.toggleMode = function() {
    state.isLifeMode = !state.isLifeMode;

    const knob = document.getElementById('toggleKnob');
    const toggleBg = document.getElementById('toggleBg');
    const viewMarket = document.getElementById('view-market');
    const viewLife = document.getElementById('view-life');
    const indicesPanel = document.getElementById('indices-panel');
    const rightMarket = document.getElementById('right-market-content');
    const rightLife = document.getElementById('right-life-content');
    const rightBadge = document.getElementById('right-card-badge');
    const rightTitle = document.getElementById('right-card-title');

    if (state.isLifeMode) {
        knob.classList.add('translate-x-3', 'bg-white');
        knob.classList.remove('bg-slate-400');
        toggleBg.classList.add('bg-blue-600', 'border-blue-400');
        toggleBg.classList.remove('bg-slate-800', 'border-white/10');

        viewMarket.classList.add('opacity-0');
        indicesPanel.classList.add('opacity-0');

        setTimeout(() => {
            viewMarket.classList.add('hidden');
            indicesPanel.classList.add('hidden');
            viewLife.classList.remove('hidden');
            setTimeout(() => viewLife.classList.remove('opacity-0'), 50);
        }, 300);

        rightTitle.innerText = "Personal Budget Hit";
        rightBadge.innerText = "Life Mode";
        rightBadge.className = "bg-orange-500/20 border border-orange-500/30 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-orange-400 uppercase backdrop-blur-md transition-all";
        
        rightMarket.classList.add('hidden');
        rightLife.classList.remove('hidden');
    } else {
        knob.classList.remove('translate-x-3', 'bg-white');
        knob.classList.add('bg-slate-400');
        toggleBg.classList.remove('bg-blue-600', 'border-blue-400');
        toggleBg.classList.add('bg-slate-800', 'border-white/10');

        viewLife.classList.add('opacity-0');

        setTimeout(() => {
            viewLife.classList.add('hidden');
            viewMarket.classList.remove('hidden');
            indicesPanel.classList.remove('hidden');
            setTimeout(() => {
                viewMarket.classList.remove('opacity-0');
                indicesPanel.classList.remove('opacity-0');
            }, 50);
        }, 300);

        rightTitle.innerText = "Your Portfolio Risk";
        rightBadge.innerText = "Pro Mode";
        rightBadge.className = "bg-white/10 border border-white/20 px-2 py-1 rounded text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md transition-all";
        
        rightLife.classList.add('hidden');
        rightMarket.classList.remove('hidden');
    }
}

// 3D Three.js Setup and Tilt Effect
window.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderState();

    // Tilt Cards
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -3; 
            const rotateY = ((x - centerX) / centerX) * 3;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // ThreeJS 
    const cContainer = document.getElementById('canvas-container');
    if(cContainer && typeof THREE !== 'undefined') {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x030712, 0.003);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 20, 120);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        cContainer.appendChild(renderer.domElement);

        const particleCount = 600;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const originalY = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 400;     
            positions[i * 3 + 1] = (Math.random() - 0.5) * 100 - 20; 
            positions[i * 3 + 2] = (Math.random() - 0.5) * 400; 
            originalY[i] = positions[i * 3 + 1];
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const canvas = document.createElement('canvas');
        canvas.width = 16; canvas.height = 16;
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 1)'); 
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 1.5, map: texture, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let mouseX = 0, mouseY = 0, time = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
        });

        function animate() {
            requestAnimationFrame(animate);
            time += 0.01;
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y + 20) * 0.05;
            camera.lookAt(0, 0, 0);

            const posAttr = geometry.attributes.position;
            for (let i = 0; i < particleCount; i++) {
                const x = posAttr.getX(i);
                const z = posAttr.getZ(i);
                posAttr.setY(i, originalY[i] + Math.sin(x * 0.05 + time) * 3 + Math.cos(z * 0.05 + time) * 3);
            }
            posAttr.needsUpdate = true;
            particles.rotation.y += 0.0005;

            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }
});
