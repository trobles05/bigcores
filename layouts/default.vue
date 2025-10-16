<template>
    <div>
      <Header />
      <main class="main-content">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <style>
  .main-content {
    padding-top: 80px; 
  }
  </style>