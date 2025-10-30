const menuItems = {
    Promos: [
        {
            name: "COMBO GIFU",
            description: "5 variedades - 15 piezas",
            items: [
                "EBI ROLL (Langostino rebozado, queso con cilantro, tomates asados cubierto de muzcarella flameada)",
                "SALMÓN TERI ROLL (Roll de tamago con pasta de salmón cocinada en salsa teriyaki, queso philadelphia, mayo teriyaki y papas yellow)",
                "LANGO SHOKE ROLL (Langostino furai, queso philadelphia, palta, cubierto de salmon ahumado, mayo teriyaki y tulle)",
                "PACIFIC ROLL (Calamar rebozado, tomate flameado, verdeo cubierto de lamina de queso con cilantro)",
                "KANI ROLL (Surimi rebozado, tamago, verdeo y tomate asado, mayo kimchi y verdeo)"
            ],
            price: "$22000",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
        },
        {
            name: "COMBO PREMIUM",
            description: "5 variedades - 15 piezas",
            items: [
                "AHUMADITO ROLL (Langostino tempura, queso con cilantro y palta, envuelto en salmon ahumado flameado y caviar)",
                "TAMAGO LANGO (Roll de tamago con langostinos rebozados, queso philadelphia y palta)",
                "SALMÓN SPRING ROLL (Salmon, langostino tempura, queso con cilantro y palta envuelto en lamina de flores comestibles)",
                "MAKI ROLL (Calamar crispy, queso philadelphia con salsa mango spicy)",
                "LANGO ROLL (Langostino crispy, queso philadelphia y palta con mayo lango y tulle)"
            ],
            price: "$24000",
            image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
        },
        {
            name: "COMBO VEGGIE-VEGAN",
            description: "5 variedades - 15 piezas",
            items: [
                "VEGGIE ROLL (Verduras asadas, queso philadelphia, salsa pimientos, tulle)",
                "ONION ROLL (Cebolla crispy, queso philadelphia, tomate asado, papas yellow, mayo wasabi)",
                "FRESH ROLL (Pepino, queso philadelphia y palta, envuelto en sesamo)",
                "CHAMPI ROLL (Champiñón crispy, queso phila, palta envuelto en queso con cilantro)",
                "ROSE ROLL (Verduras asadas y queso philadelphia envuelto en lamina de flores comestibles)"
            ],
            price: "$18500",
            image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop"
        },
        {
            name: "SELECCIÓN OMAKASE",
            description: "Entrada + piezas de sushi",
            items: [
                "2 HARUMAKIS CASERAS + 12 PIEZAS DE SUSHI A ELECCIÓN DEL SUSHIMAN",
                "4 HARUMAKIS CASERAS + 24 PIEZAS DE SUSHI A ELECCIÓN DEL SUSHIMAN"
            ],
            price: "$18500 / $36000",
            image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop"
        },
        {
            name: "DEGUSTACIÓN DE NIGHTS",
            description: "8 piezas, 4 variedades",
            items: [
                "2 nights de salmon",
                "2 nights de salmon flameado", 
                "2 nights de langostinos",
                "2 nights crispy"
            ],
            price: "$18000",
            image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&h=300&fit=crop"
        },
        {
            name: "ARMALO COMO QUIERAS",
            description: "Elegí las variedades que más te gusten",
            items: [
                "15 PIEZAS - Combina variedades frías y calientes",
                "30 PIEZAS - Combina variedades frías y calientes"
            ],
            price: "$26000 / $49000",
            image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop"
        }
    ],
    Agregados: [
        { name: "GALLETA DE LA FORTUNA", description: "La tradicional galleta de la suerte", price: "$500", image: "https://images.unsplash.com/photo-1519181258491-889c2b001485?w=400&h=300&fit=crop" },
        { name: "SALSA DE SOJA EXTRA", description: "Salsa de soja adicional", price: "$1000", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop" },
        { name: "SALSA TERIYAKI", description: "Salsa teriyaki adicional", price: "$1000", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
        { name: "SALSA BUENOS AIRES", description: "Salsa estilo Buenos Aires", price: "$1000", image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop" },
        { name: "SALSA AGRIDULCE", description: "Salsa agridulce tradicional", price: "$1000", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop" },
        { name: "PALITOS EXTRA", description: "Palitos chinos adicionales", price: "$500", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" }
    ],
    Platitosasiaticos: [
        { name: "Spring rolls veggie caseras x3 unidades", description: "Arrollados de masa filo,rellenos de verduras,acompñados de salsa teriyaki", price: "$10500", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
        { name: "Harumakis de carne caseras x3 unidades", description: "Arrollados de masa filo,rellenos de carne y verduras,acompañados de salsa agridulce", price: "$10500", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop" },
        { name: "Gyozas de langostinos x4 unidades", description: "Empanadillas chinas rellenas de cerdo y langostinos(%30,70%),sellados y cocinados al vapor,acompañados de salsa Teriyaki", price: "$15000", image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop" },
        { name: "Gyozas de cerdo x4 unidades", description: "Empanadillas chinas rellenas de cerdo,selladas y cocinadas al vapor,acompañadas de salsa ponzu", price: "$14000", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop" },
        { name: "Langostinos Furai x4 unidades", description: "Langostinos rebozados en cereal acompañados de mayo spicy", price: "$14000", image: "img/Langostinos-furai.jfif" },
        { name: "Onigiri de langostinos", description: "Triangulitos de arroz de sushi,rellenos de langostinos rebozados,verdeo,mayo spicy, sellado en salsa teriyaki", price: "$8500", image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop" },
        { name: "Onigiri de salmon", description: "Traingulitos de arroz de sushi,relleno de tartar de salmon,pepino,mayo japonesa,cubierto de sesamo y alga nori", price: "$9500", image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop" },
        { name: "Cubanitos de langostino ", description: "Rolls fritos rellenos de cerdo y langostinos(%30,%70), verdeo y salsa teriyaki", price: "$13000", image: "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=400&h=300&fit=crop" },
        { name: "Yakitori de pollo o cerdo", description: "Brocheta japonesa,asada y sellada con salsa de soja y verdeo", price: "$12500", image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=300&fit=crop" }
    ],
    Sushiburgersybox: [
        { name: "Nippon", description: "Taap de arroz langostinos,salmon ahumado,palta,pepino y mayonesa japonesa", price: "$16000", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
        { name: "Okinawa", description: "Tapa de arroz mixta,langostinos,surimi,aros de cebolla crispy,salsa de pimientos", price: "$16000", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop" },
        { name: "Tokio", description: "Doble tapa de arroz,salmon,palta,queso,philadelphia cubierta de sesamo", price: "$17000", image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=400&h=300&fit=crop" },
        { name: "Box Gifu percio uno y precio para dos ", description: "Onigiri,hamurakis de carne,bocaditos de hanikama langostinos cripy, yakitori", price: "$690", image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=400&h=300&fit=crop" },
        { name: "Box Premium precio para uno y precio para dos ", description: "Sushi calientes y frio, cubanitos de langostinos, spring rolls y gyozas de cerdo,langotinos crispy", price: "$650", image: "https://images.unsplash.com/photo-1632709810780-b5a4343cebec?w=400&h=300&fit=crop" }
    ],
    Gohan: [
        { name: "Ghoan Akira log de algo", description: "Base de arroz de sushi, queso philadelphia, palta, salmon fresco, verdeo, hanikama rebozado, calamar crispy", price: "$18999", image: "img/gohan.jfif" },
        { name: "Gohan Kumiko", description: "Base de arroz de sushi,queso philadelphia,palta,pollo rebozado en cereal, con salsa teriyaki,verduras asadas y masa wonton crocante", price: "$16000", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop" },
        { name: "Gohan Sakura", description: "Base de arroz de sushi,queso philadelphia,palta, langostinos crispy verdeo,masa wonton crocante", price: "$17000", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" },
        { name: "Gohan Veggie-Vegan", description: "Base de arroz de sushi, queso philadelphia,palta,champiñon salteado, verduras asadas, verdeo, tomates flameados", price: "$16500", image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop" },
        { name: "Gohan Premium ", description: "Base de arroz de sushi, queso philadelphia, palta, salmmon flameado, calamar crispy,kanikama,langostinos rebozados", price: "$20500", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop" }
    ],
    Platos: [
        { name: "Cerdo coreno ", description: "Cubos de cerdo cocinados en salsa gochujang,miso y salsa de ostras acompañado de verduras, arroz y yema ahumada", price: "$18999", image: "img/Cerdo-coreno.jfif" },
        { name: "Ceviche logo ", description: "Cortes de salmon y langostinos, cebolla en pluma, tomate, pepino y masa wonton crocante en leche de tigre", price: "$16000", image: "img/ceviche.jfif" },
        { name: "Ramen Cremoso logo", description: "Caldo assari cremoso de pollo y langostinos, fideos alcalinos,ajitama, chashu, langostinos, verdeo, aceite de ajo negro", price: "$17000", image: "img/ramen-cremoso.jfif" },
        { name: "Ramen naruto", description: "Caldo assari de pollo y langostinos, fideos alcalinos, ajitama,chashu, verdeo,alga nori,narutomaki casero", price: "$16500", image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop" },
        { name: "Pollo Teriyaki", description: "Pollo rebozado en cereal con salsa teriyaki, arroz y verduras salteadas", price: "$20500", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop" },
        { name: "Donburi de lomo", description: "Lomo cocinado en 13 especias, arroz frito, yema ahumada, mayo wasabi y ajo frito", price: "$17000", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop" }
    ]
};

function renderMenu() {
    Object.keys(menuItems).forEach(category => {
        const container = document.getElementById(category);
        
        if (category === 'Promos') {
            // Para promos, usar grid normal de 3 columnas
            const promos = menuItems[category];
            promos.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                let content = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>`;
                
                if (item.items) {
                    content += `<p>${item.description}</p>
                    <ul class="combo-items">
                        ${item.items.map(comboItem => `<li>${comboItem}</li>`).join('')}
                    </ul>`;
                } else {
                    content += `<p>${item.description}</p>`;
                }
                
                content += `<span class="price">${item.price}</span>
                    </div>`;
                    
                menuItem.innerHTML = content;
                container.appendChild(menuItem);
            });
        } else {
            // Comportamiento por defecto para otras categorías
            menuItems[category].forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                let content = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>`;
                
                if (item.items) {
                    content += `<p>${item.description}</p>
                    <ul class="combo-items">
                        ${item.items.map(comboItem => `<li>${comboItem}</li>`).join('')}
                    </ul>`;
                } else {
                    content += `<p>${item.description}</p>`;
                }
                
                content += `<span class="price">${item.price}</span>
                    </div>`;
                    
                menuItem.innerHTML = content;
                container.appendChild(menuItem);
            });
        }
    });
}

function showMenu(menuType) {
    const contents = document.querySelectorAll('.menu-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent.trim() === (menuType === 'Promos' ? 'Promos' : 
            menuType === 'Platitosasiaticos' ? 'Platitosasiaticos' : 
            menuType === 'Sushiburgersybox' ? 'Sushiburgers y box' : 
            menuType === 'Gohan' ? 'Gohan' : 
            menuType === 'Agregados' ? 'Agregados' : 'Platos')) {
            button.classList.add('active');
        }
    });
    
    document.getElementById(menuType).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});