<script setup>
import { ref } from 'vue';

const selectButtonValue1 = ref('For Yes Users');
const selectButtonValues1 = ref(['For Yes Users', 'For Standard Users']);

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

            <div class="flex flex-col items-center pt-20 px-20 overflow-hidden bg-gradientBlue hero-section">
                <!-- Text Section -->
                <div class="text-center flex flex-col items-center">
                    <h1 class="text-6xl custom-title font-bold text-white mb-8">
                        Game anytime, anywhere on any device with
                        <span class="text-gradient">GeForce NOW Powered by Yes</span>
                    </h1>
                    <Button label="See All Plans" class="custom-button mt-5" rounded></Button>
                </div>
                <!-- Image Section -->
                <div class="flex justify-center mt-4">
                    <img rounded src="/demo/images/cloudgaming-Banner-daypass.png" alt="Hero Image" class="hero-image" />
                </div>

                <!-- Text Section -->
                <div class="pt-20 px-4 lg:px-20 mt-40">
                    <h4>WHAT IS CLOUD GAMING</h4>
                    <h2 class="text-4xl font-bold text-white mt-8 mb-8 text-center lg:text-left">GeForce NOW Powered by Yes streams games straight from the cloud to your device</h2>

                    <div class="flex flex-col lg:flex-row">
                        <div class="info-content lg:w-1/2 w-full">
                            <div class="info-section mt-8">
                                <div class="mb-8">
                                    <h2 class="line-height-1 text-900 text-2xl font-normal mb-4">Higher performance, lower costs</h2>
                                    <p class="text-900 mb-4">Forget gaming hardware upgrades. Subscribe to GeForce NOW to play AAA games with RTX On in 1080p at 60FPS.</p>
                                </div>

                                <div class="mb-8">
                                    <h2 class="line-height-1 text-900 text-2xl font-normal mb-4">More time gaming, less time waiting</h2>
                                    <p class="text-900">No more large game downloads, updates, and patches; GeForce NOW games are always up-to-date.</p>
                                </div>

                                <div class="mb-8">
                                    <h2 class="line-height-1 text-900 text-2xl font-normal mb-4">Game anytime, anywhere, across all your devices</h2>
                                    <p class="text-900">GeForce NOW transforms your laptop, desktop, Mac, TV, Android device, iPhone, or iPad into a powerful PC gaming rig. Switch between devices without skipping a beat.</p>
                                </div>
                            </div>
                        </div>

                        <div class="image-content lg:w-1/2 w-full lg:ml-8 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                            <img class="rounded mt-8 lg:mt-0" src="/demo/images/img-game-the-impossible.png" alt="Hero Image" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center pt-20 px-20 overflow-hidden">
                <!-- Text Section -->
                <div class="text-center flex flex-col items-center">
                    <h1 class="text-6xl custom-title font-bold mb-8">
                        <span class="text-gradient">Put 1900+ games in your pocket</span>
                    </h1>
                    <span class="text-900 gray-700 text-2xl font-normal mb-4 ml-4 mr-4"
                        >Conquer popular titles from major publishers, indie games, and new releases with no hardware dependency while enjoying continuous up-to-date game updates to ensure diverse selection for your gaming pleasure.</span
                    >
                    <span class="text-900 color-900 text-2xl font-normal mb-4 mt-5 ml-4 mr-4"
                        >GeForce NOW supports titles from popular digital gaming stores Steam, Epic Games Store, Ubisoft Connect, Battle.net, GOG.com and Xbox, including supported PC Game Pass titles.</span
                    >
                    <Button label="View Available Games" class="custom-button mt-20 mb-20" rounded></Button>
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

                <div class="flex justify-center mb-40">
                    <div class="slider slider-left-to-right">
                        <div class="slide-track">
                            <div class="slide">
                                <img src="/demo/images/games/hq720.jpg" alt="" />
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
                                <img src="/demo/images/games/91858294_522815448630305_2054010307642130432_n.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Mobile-Legends-Featured-Image-Banner.jpg" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/hq720.jpg" alt="" />
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
                                <img src="/demo/images/games/91858294_522815448630305_2054010307642130432_n.png" alt="" />
                            </div>
                            <div class="slide">
                                <img src="/demo/images/games/Mobile-Legends-Featured-Image-Banner.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center flex flex-col items-center">
                    <h1 class="text-6xl custom-title font-bold text-white mb-8">Choose a plan that suits your gaming lifestyle</h1>
                    <span class="text-900 gray-700 text-2xl font-normal mb-4 ml-4 mr-4">Plus, enjoy uncapped connections and greater value as a Yes 5G customer.</span>
                </div>

                <div class="flex justify-center mt-40 mb-10">
                    <SelectButton class="custom-select-button" v-model="selectButtonValue1" :options="selectButtonValues1" aria-labelledby="basic" />
                </div>

                <div v-if="selectButtonValue1 === 'For Yes Users'" id="yes" class="pt-10 px-4 lg:px-10">
                    <div class="flex flex-col lg:flex-row">
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Yes Annual Plan</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM300/yr</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">Annual Plan for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Yes Monthly Plan</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM30/mo</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">Monthly Plan for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Yes 3-Day Pass</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM20</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">3-Day Pass for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Yes 1-Day Pass</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM10</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">1-Day Pass for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>

                <div v-if="selectButtonValue1 === 'For Standard Users'" id="no" class="pt-10 px-4 lg:px-10">
                    <div class="flex flex-col lg:flex-row">
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Standard Annual Plan</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM500/yr</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">Annual Plan for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Standard Monthly Plan</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM50/mo</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">Monthly Plan for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full mr-4">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Standard 3-Day Pass</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM25</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">3-Day Pass for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
                        <div class="info-content lg:w-1/2 w-full">
                            <Card class="custom-card">
                                <template #title><span class="text-3xl text-gradient">Standard 1-Day Pass</span></template>
                                <template #content>
                                    <p class="text-5xl m-0 text-white mt-8 font-bold">RM12</p>
                                    <div class="flex justify-center mt-4 mb-5">
                                        <Button label="Choose This Plan" class="custom-button mt-5" rounded></Button>
                                    </div>

                                    <ul class="flex-column">
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-md text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">1-Day Pass for Yes Customers</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">RTX On</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">6 hours of non-stop gaming per session</span>
                                        </li>
                                        <li class="py-2">
                                            <i class="pi pi-fw pi-check text-lg text-pink-500 mr-2"></i>
                                            <span class="text-md line-height-3">High priority access to games</span>
                                        </li>
                                    </ul>
                                </template>
                            </Card>
                        </div>
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
    font-size: 70px; /* Set the font size to 80px */
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
