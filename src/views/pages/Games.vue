<script setup>
import { computed, ref } from 'vue';

// Sample game data
const games = [
    {
        name: 'Banishers: Ghosts of New Eden',
        publisher: 'Focus Entertainment',
        platforms: ['STEAM']
    },
    {
        name: 'Colony Survival',
        publisher: 'Pipllz',
        platforms: ['STEAM']
    },
    {
        name: 'F1® Manager 2023',
        publisher: 'Frontier Developments',
        platforms: ['EPIC', 'STEAM', 'XBOX']
    },
    {
        name: 'Elden Ring',
        publisher: 'Bandai Namco Entertainment',
        platforms: ['STEAM', 'XBOX', 'PS4', 'PS5']
    },
    {
        name: 'Halo Infinite',
        publisher: 'Xbox Game Studios',
        platforms: ['XBOX', 'STEAM']
    },
    {
        name: 'Apex Legends',
        publisher: 'Electronic Arts',
        platforms: ['STEAM', 'ORIGIN', 'SWITCH', 'PS4', 'PS5', 'XBOX']
    },
    {
        name: 'Call of Duty: Modern Warfare II',
        publisher: 'Activision',
        platforms: ['BATTLENET', 'STEAM', 'PS4', 'PS5', 'XBOX']
    },
    {
        name: 'Cyberpunk 2077',
        publisher: 'CD Projekt',
        platforms: ['STEAM', 'GOG', 'PS4', 'PS5', 'XBOX']
    },
    {
        name: 'Grand Theft Auto V',
        publisher: 'Rockstar Games',
        platforms: ['STEAM', 'EPIC', 'PS3', 'PS4', 'PS5', 'XBOX']
    },
    {
        name: 'Minecraft',
        publisher: 'Mojang Studios',
        platforms: ['JAVA', 'BEDROCK', 'PS4', 'PS5', 'XBOX', 'SWITCH', 'WINDOWS']
    },
    {
        name: 'Valorant',
        publisher: 'Riot Games',
        platforms: ['RIOT']
    },
    {
        name: 'Fortnite',
        publisher: 'Epic Games',
        platforms: ['EPIC', 'PS4', 'PS5', 'XBOX', 'SWITCH', 'ANDROID', 'IOS']
    },
    {
        name: 'Among Us',
        publisher: 'Innersloth',
        platforms: ['STEAM', 'SWITCH', 'MOBILE']
    },
    {
        name: 'Stardew Valley',
        publisher: 'ConcernedApe',
        platforms: ['STEAM', 'SWITCH', 'PS4', 'XBOX', 'MOBILE']
    },
    {
        name: 'FIFA 23',
        publisher: 'Electronic Arts',
        platforms: ['STEAM', 'ORIGIN', 'PS4', 'PS5', 'XBOX']
    }
];

const platforms = [
    { name: 'All Games', value: null },
    { name: 'BATTLENET', value: 'BATTLENET' },
    { name: 'EA APP', value: 'EA APP' },
    { name: 'EPIC', value: 'EPIC' },
    { name: 'GOG', value: 'GOG' },
    { name: 'NONE', value: 'NONE' },
    { name: 'NV BUNDLE', value: 'NV BUNDLE' },
    { name: 'NVIDIA', value: 'NVIDIA' },
    { name: 'STEAM', value: 'STEAM' },
    { name: 'UNKNOWN', value: 'UNKNOWN' },
    { name: 'UPLAY', value: 'UPLAY' },
    { name: 'XBOX', value: 'XBOX' }
];

const alphabeticalFilters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const selectedPlatform = ref(null);
const selectedLetter = ref(null);

const isMobile = ref(window.innerWidth < 991);

const filteredGames = computed(() => {
    let filtered = games;

    if (selectedPlatform.value) {
        filtered = filtered.filter((game) => game.platforms.includes(selectedPlatform.value));
    }

    if (selectedLetter.value) {
        filtered = filtered.filter((game) => game.name.startsWith(selectedLetter.value));
    }

    return filtered;
});

const filterByPlatform = (platform) => {
    selectedPlatform.value = selectedPlatform.value === platform ? null : platform;
    selectedLetter.value = null;
};

const filterByLetter = (letter) => {
    selectedLetter.value = selectedLetter.value === letter ? null : letter;
    selectedPlatform.value = null;
};

function smoothScroll(id) {
    document.body.click();
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to handle both smooth scrolling and closing the menu
function handleMenuClick(id) {
    smoothScroll(id);
    isMenuOpen.value = false; // Close the menu after clicking
}

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>
<template>
    <div class="bg-[#0C0E21] text-white">
        <div id="home" class="landing-wrapper overflow-hidden">
            <div class="py-4 px-4 md:px-6 lg:px-8 fixed top-0 left-0 w-full z-30 bg-[#0C0E21] border-b border-surface">
                <div class="max-w-screen-2xl mx-auto flex items-center justify-between">
                    <!-- Logo Section -->
                    <router-link to="/" class="flex items-center">
                        <img src="/demo/images/logo-cloudgamingxgeforcenow_pink.png" alt="Logo" class="logo-image" />
                    </router-link>

                    <!-- Desktop Menu -->
                    <div class="items-center hidden lg:flex flex-1 justify-end">
                        <ul class="menu-list">
                            <li><router-link :to="{ path: '/', name: 'home' }" class="menu-item"> Plans </router-link></li>
                            <li><router-link :to="{ path: '/', name: 'games' }" class="menu-item"> Games </router-link></li>
                            <li><router-link :to="{ path: '/', name: 'home' }" class="menu-item">Devices</router-link></li>
                            <li><router-link :to="{ path: '/', name: 'home' }" class="menu-item">Redeem Gift Card</router-link></li>
                            <li class="separator">|</li>
                            <li><router-link :to="{ path: '/', name: 'home' }" class="menu-item">Login</router-link></li>
                            <li class="ml-8">
                                <Button label="Get Started" to="/auth/login" rounded class="custom-button" />
                            </li>
                        </ul>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="lg:hidden">
                        <button class="p-3" @click="toggleMenu">
                            <i class="pi pi-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu Overlay -->
            <div v-if="isMenuOpen" class="fixed inset-0 bg-[#0C0E21] z-20 lg:hidden" style="top: 73px">
                <div class="p-4">
                    <ul class="mobile-menu-list">
                        <li><a @click="handleMenuClick('#hero')" class="mobile-menu-item">Plans</a></li>
                        <li><a @click="handleMenuClick('#features')" class="mobile-menu-item">Games</a></li>
                        <li><a @click="handleMenuClick('#highlights')" class="mobile-menu-item">Devices</a></li>
                        <li><a @click="handleMenuClick('#pricing')" class="mobile-menu-item">Redeem Gift Card</a></li>
                        <li><a @click="handleMenuClick('#pricing')" class="mobile-menu-item">Login</a></li>
                        <li class="mt-4">
                            <Button label="Get Started" to="/auth/login" rounded class="custom-button w-full" />
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex flex-col pt-20 px-40 overflow-hidden">
                <!-- Text Section -->
                <div class="flex flex-col mb-30">
                    <span class="text-xl mb-8">
                        <span class="text-gradient">LATEST GAMES</span>
                    </span>
                    <span class="text-900 gray-700 text-6xl font-bold mb-4">What’s new this week</span>
                    <span class="text-900 color-900 text-lg font-normal mt-5">Too many games to choose from? Need a recommendation?</span>
                    <p class="text-900 color-900 text-lg font-normal">Check out the latest games on GeForce NOW.</p>
                </div>

                <!-- Slider -->
                <div class="flex justify-center mt-10 mb-10">
                    <div class="slider slider-right-to-left">
                        <div class="slide-track">
                            <div class="slide">
                                <img src="/demo/images/games/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/istockphoto-1334436084-612x612.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/MMwRCjVEaoJPP4dBBugWFY.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Honor-of-Kings-HoK-Launch-Date-How-to-Download-System-Requirements-and-More-968x544.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Mobile-Legends-Featured-Image-Banner.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/istockphoto-1334436084-612x612.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/MMwRCjVEaoJPP4dBBugWFY.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/fifa-mobile-grid-tile-season-5-16x9-1.jpg.adapt.crop191x100.1200w.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Honor-of-Kings-HoK-Launch-Date-How-to-Download-System-Requirements-and-More-968x544.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Mobile-Legends-Featured-Image-Banner.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center flex flex-col items-center mb-20">
                    <span class="text-xl mb-8 mt-20">
                        <span class="text-gradient">LATEST GAMES</span>
                    </span>
                    <span class="text-900 gray-700 text-6xl font-bold mb-4">1900+ games available</span>
                    <span class="text-900 color-900 text-xl font-normal mt-5">New games will be added every single week.</span>
                    <p class="text-900 color-900 text-xl font-normal">Check back often to see which new games have been added.</p>
                </div>

                <div class="flex flex-col mt-30">
                    <div class="container mx-auto my-8">
                        <div class="flex justify-between items-center mb-4">
                            <div class="flex gap-2">
                                <Button
                                    v-for="platform in platforms"
                                    :key="platform.value"
                                    :label="platform.name"
                                    :class="['p-button-text', `p-button-${platform.value?.toLowerCase() || ''}`, { 'p-button-active': selectedPlatform === platform.value }]"
                                    @click="filterByPlatform(platform.value)"
                                />
                            </div>
                        </div>

                        <div class="flex items-center mb-10">
                            <Button v-for="letter in alphabeticalFilters" :key="letter" :label="letter" :class="['p-button-text', { 'p-button-active': selectedLetter === letter }]" @click="filterByLetter(letter)" />
                        </div>

                        <DataTable :value="filteredGames" :paginator="true" :rows="10" :responsiveLayout="'scroll'" tableStyle="min-width: 50rem" sortField="name" :sortOrder="1">
                            <Column field="name" header="Name" />
                            <Column field="publisher" header="Publisher" />
                            <Column field="platforms" header="Platforms">
                                <template #body="slotProps">
                                    <span v-for="platform in slotProps.data.platforms" :key="platform" class="mr-2">{{ platform }}</span>
                                </template>
                            </Column>
                            <Column field="actions" header="Actions">
                                <template #body="slotProps">
                                    <div class="flex gap-2">
                                        <Button v-for="platform in slotProps.data.platforms" :key="platform" :label="platform" :class="['p-button-text', `p-button-${platform.toLowerCase()}`]" />
                                    </div>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
            </div>

            <footer class="bg-[#0A0A23] text-white py-20 px-20">
                <div class="container px-4">
                    <!-- Top Section -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        <!-- Logo and Social Section -->
                        <div class="col-span-1">
                            <!-- Logo -->
                            <img src="/demo/images/logo-cloudgaming_pink.png" alt="Yes 5G Gaming" class="h-12 mb-8" />

                            <!-- Social Media Icons -->
                            <div class="flex space-x-6">
                                <a href="#" class="text-white hover:text-gray-300">
                                    <i class="pi pi-facebook text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-gray-300">
                                    <i class="pi pi-instagram text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-gray-300">
                                    <i class="pi pi-twitter text-xl"></i>
                                </a>
                                <a href="#" class="text-white hover:text-gray-300">
                                    <i class="pi pi-youtube text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <!-- Empty Column for Spacing -->
                        <div class="hidden md:block"></div>

                        <!-- Company Section -->
                        <div class="col-span-1">
                            <h3 class="text-lg font-semibold mb-4">Company</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="hover:text-gray-300">About Us</a></li>
                                <li><a href="#" class="hover:text-gray-300">Yes 5G Gaming Terms & Conditions</a></li>
                                <li><a href="#" class="hover:text-gray-300">Nvidia Terms & Conditions</a></li>
                                <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <!-- Support Section -->
                        <div class="col-span-1">
                            <h3 class="text-lg font-semibold mb-4">Support</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="hover:text-gray-300">FAQ</a></li>
                                <li><a href="#" class="hover:text-gray-300">Sign Up</a></li>
                                <li><a href="#" class="hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Section -->
                    <div class="border-t border-gray-700 pt-8">
                        <p class="text-sm text-gray-400">Powered by YTL, YTL Communications Sdn Bhd (Reg No. 200701035605 & 793634-V)</p>
                        <p class="text-sm text-gray-400 mt-2">18th Floor, Menara YTL, 205 Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia.</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.p-button-text {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
}

.p-button-active {
    background-color: #585b84;
    color: white;
}

/* .p-button-steam {
    color: #66c0f4;
}

.p-button-epic {
    color: #f74411;
}

.p-button-xbox {
    color: #107c10;
} */

footer {
    background-color: #0a0a23; /* Dark navy blue background */
}
.custom-card {
    background-color: #0c0e21;
    color: white;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    border: 2px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(180deg, rgba(255, 0, 132, 1) 0%, rgba(47, 59, 245, 1) 50%, rgba(47, 59, 245, 0.3) 100%);
}

/* Base styling for the button */
.custom-toggle-button {
    background: transparent; /* Transparent background for unselected */
    border: 2px solid #767ef8; /* Border color */
    border-radius: 100px;
    color: #767ef8; /* Text color */
    padding: 10px 20px;
    transition:
        background-color 0.3s ease,
        color 0.3s ease;
}

.slick-carousel {
    width: 100%; /* Full width for the carousel */
}

.slick-image {
    width: 100%; /* Images fill the carousel width */
    border-radius: 15px; /* Optional: Add rounded corners */
}

/* Adjust the dots styling if needed */
.slick-dots {
    bottom: 10px; /* Positioning of the dots */
}

.image-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 1024px) {
    .image-content {
        margin-top: 2px; /* Adds spacing between text and image in mobile view */
    }
}

/* Overall Background */
.bg-gradientBlue {
    background: radial-gradient(1407.97% 48.5% at 50% 100%, #2f3bf5 9.37%, rgba(12, 14, 33, 0) 100%);
}

/* Hero Section */
.hero-section {
    padding-top: 150px; /* Adjust for alignment */
    padding-bottom: 150px;
}

@media (min-width: 768px) {
    .hero-section {
        padding-top: 70; /* Adjust for alignment */
        padding-bottom: 70px;
    }
}

/* Logo */
.logo-image {
    width: 65%; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
}

@media (min-width: 768px) {
    /* Increase logo size on larger screens if necessary */
    .logo-image {
        width: 150px;
    }
}

@media (min-width: 1024px) {
    .logo-image {
        width: 65%;
    }
}

/* Header */
.menu-list {
    list-style: none;
    display: flex;
    gap: 2rem;
    align-items: center;
}

.menu-item {
    color: #ffffff;
    font-weight: 500;
    font-size: 1.1rem;
    transition: color 0.3s;
    cursor: pointer;
}

.menu-item:hover {
    color: #ff3da2;
}

.separator {
    color: #ffffff;
    opacity: 0.5;
    font-size: 1.25rem;
}

/* Mobile Menu */
.mobile-menu-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.mobile-menu-item {
    color: #ffffff;
    font-weight: 500;
    font-size: 1.25rem;
    transition: color 0.3s;
}

.mobile-menu-item:hover {
    color: #ff3da2;
}

/* Button */
.custom-button {
    background-color: #76b900 !important;
    color: white !important;
    border-color: #76b900 !important;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
    transition:
        background-color 0.3s,
        border-color 0.3s;
}

.custom-button:hover {
    background-color: #66a300 !important;
    border-color: #66a300 !important;
}

/* Text Gradient */
.text-gradient {
    background: linear-gradient(80.92deg, #ff0084 6.89%, #2f3bf5 93.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

/* Hero Image */
.hero-image {
    border-radius: 35px;
    margin-top: 140px;
    max-width: 90%; /* Adjust size if necessary */
}

/* Responsive adjustment for mobile */
@media (max-width: 768px) {
    .hero-image {
        margin-top: 50px;
        border-radius: 15px;
        width: 100%; /* Full width on mobile */
        max-width: 100%; /* Removes max-width limitation for mobile view */
    }
}

/* Adjust spacing for the header */
.landing-wrapper {
    padding-top: 80px; /* Adjust for fixed header */
}

.custom-title {
    font-size: 24px; /* Set the font size to 80px */
    line-height: 1.2; /* Adjust line-height as needed */
}

@media (max-width: 768px) {
    /* Responsive adjustment for smaller screens */
    .custom-title {
        font-size: 40px; /* Reduce font size on smaller screens */
    }
}

@-webkit-keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(calc(-250px * 7));
        transform: translateX(calc(-250px * 7));
    }
}
@keyframes scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(calc(-250px * 7));
        transform: translateX(calc(-250px * 7));
    }
}

/* General Slider Styling */
.slider {
    background: none;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
    height: 200px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100vw;
}

/* Removed pseudo-elements ::before and ::after for gradient effect */

/* Slide Track Styling */
.slider .slide-track {
    display: flex;
    gap: 20px; /* Space between slides */
}

/* Slide Styling */
.slider .slide {
    height: 200px;
    flex-shrink: 0;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider .slide img {
    height: 100%;
    width: auto;
}

/* Right-to-Left Scroll Animation for First Slider */
@keyframes scroll-right-to-left {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.slider-right-to-left .slide-track {
    animation: scroll-right-to-left 90s linear infinite;
    width: calc(250px * 14); /* Adjust based on the number of slides */
}

/* Left-to-Right Scroll Animation for Second Slider */
@keyframes scroll-left-to-right {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

.slider-left-to-right .slide-track {
    animation: scroll-left-to-right 90s linear infinite;
    width: calc(250px * 14); /* Adjust based on the number of slides */
}
</style>
