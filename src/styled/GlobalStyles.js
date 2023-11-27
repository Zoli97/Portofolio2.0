import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*,*::after, *::before{
    box-sizing:border-box;
    margin:0;
    padding:0;

}

h2{
  font-size: 4rem;
}



.home_page{

background: ${({ theme }) => theme.home_background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease, color 0.3s ease;
  
}

.nav-menu.active{
  background: ${({ theme }) => theme.navbar_};
}

.svg-elipse{
  fill: ${({ theme }) => theme.elipse_background};
}

.svg_title{
  fill: ${({ theme }) => theme.text}
}
.title{

  color: ${({ theme }) => theme.text};
}

.list_text{

color: ${({ theme }) => theme.text};
}
.responsive_navbar{
    background: ${({ theme }) => theme.navbar_background};
  }

.top_navbar_title{color: ${({ theme }) => theme.text};}

.about{
  background: ${({ theme }) => theme.about_background};
  transition: background 0.3s ease, color 0.3s ease;
 
}

  .descriptions{
    color: ${({ theme }) => theme.text};
  }

  .my-qoutes-container{
    background: ${({ theme }) => theme.quotes_container};
  }

  .qoute{
    color: ${({ theme }) => theme.text};
  }

  .gallery {
    background: ${({ theme }) => theme.gallery_background};
    transition: all 0.3s ease, color 0.3s ease;
   
  }
  

  .header{
    background: ${({ theme }) => theme.gallery_default_background}
    
    
  }

  .contact_{
    background: ${({ theme }) => theme.contact_background}
    
  }

  .form_bg {

    background: ${({ theme }) => theme.form_background};
  }

  .hamburger_on_dark_bg{
    background: ${({ theme }) => theme.hamburger_background};
  }

  .hamburger_on_light_bg{

    background: ${({ theme }) => theme.hamburger_default_background};
  }
  

  
  .button_bg{

    background: ${({ theme }) => theme.button_background};
    color: ${({ theme }) => theme.text};
    border:  ${({ theme }) => theme.button_background};
  }


  .button_bg:hover {
  background-color: ${({ theme }) => theme.btn_hover_bg};
  color: white;
}

.showTopBtn{
  background: ${({ theme }) => theme.showTopBtn_background};
  color: ${({ theme }) => theme.showTopBtn_color};
  
  
}

.arr_down{
  fill: ${({ theme }) => theme.arr_dwn_bg};
}

.desc {
  color: ${({ theme }) => theme.gallery_text}
}


.footer_{
  background:${({ theme }) => theme.footer_dark_theme};
}
  
`;
