<template>
<header>
   
   <nav class="#app">
      <div class="branding">
         <router-link class="header" :to="{name: 'home' }">Yomosco Foundation </router-link>
      </div>
      <div class="nav-link">
         <ul>
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">About</router-link>
            <router-link class="link" to="#">Categories</router-link>
            <router-link class="link" to="#">Contact</router-link>
            <router-link class="link" to="#">login/register</router-link>
         </ul>

      </div>
   </nav>
   <menuIcon class="menu-icon"/>
   <transition name="mobile-nav">
      <ul>
            <router-link class="link" to="#">Home</router-link>
            <router-link class="link" to="#">About</router-link>
            <router-link class="link" to="#">Categories</router-link>
            <router-link class="link" to="#">Contact</router-link>
            <router-link class="link" to="#">login/register</router-link>
         </ul>
   </transition>
   
</header>
</template>

<script>
import menuIcon from assets/menu.svg

export default {

name: 'navigation',
components:{
   menuIcon
}
};


</script>
<style lang="scss" scoped>

header{
   background-color: gray;
   box-shadow: 0 4px 6px -1px maroon, 0 2px 4px -1px black;
   padding: 0 25px;
   z-index: 99;

   .link{
      font-weight: 500;
      padding: 0 8px;
      transition: .3s color ease;
   }
     
   nav{
   display: flex;
   padding: 25px 0;
   justify-content: flex-end;

   .menu-icon{
      cursor: pointer;
      position: absolute;
      top: 32px;
      right: 25px;
      height: 25px;
      width: auto;
   }

   }
   .branding{
      display: flex;
      align-items: center;
         }
   .header{
         font-weight: 600px;
         font-size: 24px;
         color: blue;
         text-decoration: none;
         justify-content: flex-start;
      }
   ul{
      
      margin-right: 32px;

      .link{
         margin-right: 32px;
      }
   }
   .link:last-child{
   margin-right: 0;

   .nav-link{
   position: relative;
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: flex-end;
}
   
}
}

   

</style>