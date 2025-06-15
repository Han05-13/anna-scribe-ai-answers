
// Global variables
let currentSection = 'home';
let rateLimitState = {
    requestsThisMinute: 0,
    tokensThisMinute: 0,
    requestsToday: 0,
    lastMinuteReset: Date.now(),
    lastDayReset: Date.now(),
    cooldownUntil: 0
};
let cooldownTimer = null;

// Rate limiting configuration
const RATE_LIMITS = {
    REQUESTS_PER_MINUTE: 28,
    TOKENS_PER_MINUTE: 60000,
    REQUESTS_PER_DAY: 1400,
    COOLDOWN_SECONDS: 15
};

// API key (Note: In production, this should be secured)
const API_KEY = "AIzaSyDkbEjn21-DvyI795K4fR1N5irLt1Is2H0";

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    loadRateLimitState();
    showCookieConsent();
    updateRateLimitDisplay();
    
    // Set up navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const section = href.substring(1);
                showSection(section);
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileNav.classList.contains('show') && 
            !mobileNav.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Close mobile menu if open
        const mobileNav = document.getElementById('mobileNav');
        if (mobileNav.classList.contains('show')) {
            toggleMobileMenu();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update URL hash without triggering scroll
        history.pushState(null, null, `#${sectionId}`);
    }
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const icon = menuBtn.querySelector('i');
    
    mobileNav.classList.toggle('show');
    
    // Update icon
    if (mobileNav.classList.contains('show')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    
    // Reinitialize icons
    initializeLucideIcons();
}

// Rate limiting functions
function loadRateLimitState() {
    const stored = localStorage.getItem('apiRateLimit');
    const now = Date.now();
    
    if (stored) {
        const parsed = JSON.parse(stored);
        const minutesPassed = Math.floor((now - parsed.lastMinuteReset) / 60000);
        const daysPassed = Math.floor((now - parsed.lastDayReset) / 86400000);
        
        rateLimitState = {
            requestsThisMinute: minutesPassed > 0 ? 0 : parsed.requestsThisMinute,
            tokensThisMinute: minutesPassed > 0 ? 0 : parsed.tokensThisMinute,
            requestsToday: daysPassed > 0 ? 0 : parsed.requestsToday,
            lastMinuteReset: minutesPassed > 0 ? now : parsed.lastMinuteReset,
            lastDayReset: daysPassed > 0 ? now : parsed.lastDayReset,
            cooldownUntil: parsed.cooldownUntil || 0
        };
    }
    
    saveRateLimitState();
}

function saveRateLimitState() {
    localStorage.setItem('apiRateLimit', JSON.stringify(rateLimitState));
}

function updateRateLimitDisplay() {
    const statusElement = document.getElementById('rateLimitStatus');
    if (statusElement) {
        statusElement.textContent = 
            `Requests today: ${rateLimitState.requestsToday}/${RATE_LIMITS.REQUESTS_PER_DAY} | ` +
            `This minute: ${rateLimitState.requestsThisMinute}/${RATE_LIMITS.REQUESTS_PER_MINUTE}`;
    }
}

function checkRateLimit() {
    const now = Date.now();
    
    // Check if still in cooldown
    if (now < rateLimitState.cooldownUntil) {
        const remainingCooldown = Math.ceil((rateLimitState.cooldownUntil - now) / 1000);
        startCooldownTimer(remainingCooldown);
        showToast(`Please wait ${remainingCooldown} seconds before making another request`, 'error');
        return false;
    }

    // Reset counters if time periods have passed
    const minutesPassed = Math.floor((now - rateLimitState.lastMinuteReset) / 60000);
    const daysPassed = Math.floor((now - rateLimitState.lastDayReset) / 86400000);
    
    if (minutesPassed > 0) {
        rateLimitState.requestsThisMinute = 0;
        rateLimitState.tokensThisMinute = 0;
        rateLimitState.lastMinuteReset = now;
    }
    
    if (daysPassed > 0) {
        rateLimitState.requestsToday = 0;
        rateLimitState.lastDayReset = now;
    }

    // Check limits
    if (rateLimitState.requestsThisMinute >= RATE_LIMITS.REQUESTS_PER_MINUTE) {
        rateLimitState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
        saveRateLimitState();
        startCooldownTimer(RATE_LIMITS.COOLDOWN_SECONDS);
        showToast(`Exceeded ${RATE_LIMITS.REQUESTS_PER_MINUTE} requests per minute. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`, 'error');
        return false;
    }

    if (rateLimitState.tokensThisMinute >= RATE_LIMITS.TOKENS_PER_MINUTE) {
        rateLimitState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
        saveRateLimitState();
        startCooldownTimer(RATE_LIMITS.COOLDOWN_SECONDS);
        showToast(`Exceeded ${RATE_LIMITS.TOKENS_PER_MINUTE} tokens per minute. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`, 'error');
        return false;
    }

    if (rateLimitState.requestsToday >= RATE_LIMITS.REQUESTS_PER_DAY) {
        rateLimitState.cooldownUntil = now + (RATE_LIMITS.COOLDOWN_SECONDS * 1000);
        saveRateLimitState();
        startCooldownTimer(RATE_LIMITS.COOLDOWN_SECONDS);
        showToast(`Exceeded ${RATE_LIMITS.REQUESTS_PER_DAY} requests per day. Please wait ${RATE_LIMITS.COOLDOWN_SECONDS} seconds.`, 'error');
        return false;
    }

    return true;
}

function updateRateLimit(tokensUsed) {
    rateLimitState.requestsThisMinute++;
    rateLimitState.tokensThisMinute += tokensUsed;
    rateLimitState.requestsToday++;
    saveRateLimitState();
    updateRateLimitDisplay();
}

function startCooldownTimer(seconds) {
    const generateBtn = document.getElementById('generateBtn');
    const btnIcon = generateBtn.querySelector('i');
    const btnText = generateBtn.childNodes[generateBtn.childNodes.length - 1];
    
    if (cooldownTimer) {
        clearInterval(cooldownTimer);
    }
    
    generateBtn.disabled = true;
    btnIcon.setAttribute('data-lucide', 'clock');
    initializeLucideIcons();
    
    cooldownTimer = setInterval(() => {
        seconds--;
        btnText.textContent = `Wait ${seconds}s`;
        
        if (seconds <= 0) {
            clearInterval(cooldownTimer);
            cooldownTimer = null;
            generateBtn.disabled = false;
            btnIcon.setAttribute('data-lucide', 'send');
            btnText.textContent = 'Generate Answer';
            initializeLucideIcons();
        }
    }, 1000);
}

// Answer generation functions
async function generateAnswer() {
    const question = document.getElementById('question').value.trim();
    const markType = document.getElementById('markType').value;
    
    if (!question) {
        showToast('Please enter a question', 'error');
        return;
    }
    
    if (!markType) {
        showToast('Please select the mark type', 'error');
        return;
    }
    
    // Check rate limits
    if (!checkRateLimit()) {
        return;
    }
    
    const generateBtn = document.getElementById('generateBtn');
    const btnIcon = generateBtn.querySelector('i');
    const btnText = generateBtn.childNodes[generateBtn.childNodes.length - 1];
    
    // Show loading state
    generateBtn.disabled = true;
    btnIcon.setAttribute('data-lucide', 'loader-2');
    btnIcon.classList.add('loading');
    btnText.textContent = 'Generating...';
    initializeLucideIcons();
    
    try {
        const prompt = generatePrompt(question, markType);
        
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to generate answer');
        }

        const data = await response.json();
        const generatedAnswer = data.candidates[0].content.parts[0].text;
        
        // Update rate limiting
        const tokensUsed = data.usageMetadata?.totalTokenCount || 1000;
        updateRateLimit(tokensUsed);
        
        // Display answer
        displayAnswer(generatedAnswer);
        
        showToast('Answer generated successfully!', 'success');
    } catch (error) {
        console.error('Error generating answer:', error);
        showToast('Failed to generate answer. Please try again.', 'error');
    } finally {
        // Reset button state
        generateBtn.disabled = false;
        btnIcon.setAttribute('data-lucide', 'send');
        btnIcon.classList.remove('loading');
        btnText.textContent = 'Generate Answer';
        initializeLucideIcons();
    }
}

function generatePrompt(question, markType) {
    const basePrompt = `You are an expert assistant for Anna University students. Generate a comprehensive, well-structured answer with key insights and essential points for the following question in the ${markType} format:

Question: ${question}

`;

    switch (markType) {
        case "2-mark":
            return basePrompt + `
Please provide a concise answer suitable for a 2-mark question with these requirements:
- **Key Insights**: Focus on the most critical 1-2 concepts
- **Essential Points**: Maximum 2-3 sentences with precise definitions
- **Format**: Direct, to-the-point explanation
- **Content**: Include key terms, definitions, and core concepts
- **Structure**: Brief but complete answer that covers the question fully

Ensure the answer contains the most important information a student needs to score full marks.

Answer:`;

        case "13-mark":
            return basePrompt + `
Please provide a detailed answer suitable for a 13-mark question with these requirements:
- **Key Insights**: Identify and explain 4-5 major concepts or points
- **Essential Points**: Include introduction, main content with subheadings, and conclusion
- **Structure**: Use proper headings, bullet points, and clear organization
- **Content**: Step-by-step explanations, relevant examples, and practical applications
- **Critical Elements**: Include advantages, disadvantages, and real-world relevance
- **Visual Aids**: Suggest diagrams or flowcharts where applicable
- **Anna University Standards**: Follow exam pattern and marking scheme

Focus on providing comprehensive coverage while highlighting the most important aspects that examiners look for.

Answer:`;

        case "15-mark":
            return basePrompt + `
Please provide a comprehensive answer suitable for a 15-mark question with these requirements:
- **Key Insights**: Develop 6-8 major concepts with deep analysis
- **Essential Points**: Detailed introduction, multiple well-structured sections, comprehensive conclusion
- **Structure**: Clear headings, subheadings, numbered points, and logical flow
- **Content**: In-depth explanations, multiple examples, case studies, and comparative analysis
- **Critical Analysis**: Include advantages, disadvantages, applications, limitations, and future scope
- **Technical Details**: Mathematical formulations, algorithms, or technical specifications where relevant
- **Visual Elements**: Suggest multiple diagrams, flowcharts, tables, or graphs
- **Real-world Application**: Include industry examples, current trends, and practical implementations
- **Conclusion**: Summarize key takeaways and important points for easy revision

Provide university-level depth while ensuring all critical points are covered for maximum marks.

Answer:`;

        default:
            return basePrompt + "Please provide an appropriate answer with key insights and essential points for this question.";
    }
}

function displayAnswer(answer) {
    const placeholder = document.getElementById('answerPlaceholder');
    const content = document.getElementById('answerContent');
    const copyBtn = document.getElementById('copyBtn');
    
    placeholder.style.display = 'none';
    content.style.display = 'block';
    copyBtn.style.display = 'flex';
    
    // Format text with bold markers
    const formattedAnswer = answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    content.innerHTML = formattedAnswer;
}

function copyAnswer() {
    const content = document.getElementById('answerContent');
    const text = content.textContent || content.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('Answer copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy to clipboard', 'error');
    });
}

function clearAll() {
    document.getElementById('question').value = '';
    document.getElementById('markType').value = '';
    
    const placeholder = document.getElementById('answerPlaceholder');
    const content = document.getElementById('answerContent');
    const copyBtn = document.getElementById('copyBtn');
    
    placeholder.style.display = 'flex';
    content.style.display = 'none';
    copyBtn.style.display = 'none';
    
    content.innerHTML = '';
}

// Contact form functions
function submitContact(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;
    
    // Create mailto link
    const mailtoLink = `mailto:hariharan05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    showToast('Email client opened. Please send the email from there.', 'success');
    
    // Clear form
    document.getElementById('contactForm').reset();
}

// Cookie consent functions
function showCookieConsent() {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
}

function acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    document.getElementById('cookieConsent').style.display = 'none';
}

function declineCookies() {
    localStorage.setItem('cookie-consent', 'declined');
    document.getElementById('cookieConsent').style.display = 'none';
}

// Toast notification function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home');
    }
});

// Initialize based on URL hash
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
});
