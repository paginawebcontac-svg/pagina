const menuItems = {
    Promos: [
        {
            name: "Combo Gifu",
            description: "Paquete ideal para 2-3 personas",
            items: [
                "2 Rolls especiales a elección",
                "4 Gyozas de cerdo",
                "2 Spring rolls veggie",
                "1 Yakitori de pollo"
            ],
            price: "$45000",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop"
        },
        {
            name: "Combo Premium",
            description: "Experiencia premium para 3-4 personas",
            items: [
                "1 Gohan Premium",
                "6 Gyozas mixtas",
                "4 Langostinos Furai",
                "2 Rolls especiales",
                "2 Cubanitos de langostino"
            ],
            price: "$65000",
            image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
        },
        {
            name: "Combo Familiar",
            description: "Perfecto para compartir en familia (4-5 personas)",
            items: [
                "3 Rolls variados",
                "1 Gohan a elección",
                "6 Gyozas mixtas",
                "4 Spring rolls",
                "2 Yakitori",
                "4 Langostinos Furai"
            ],
            price: "$85000",
            image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop"
        },
        {
            name: "Combo Familiar",
            description: "Perfecto para compartir en familia (4-5 personas)",
            items: [
                "3 Rolls variados",
                "1 Gohan a elección",
                "6 Gyozas mixtas",
                "4 Spring rolls",
                "2 Yakitori",
                "4 Langostinos Furai"
            ],
            price: "$85000",
            image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop"
        },
        {
            name: "Combo Premium",
            description: "Experiencia premium para 3-4 personas",
            items: [
                "1 Gohan Premium",
                "6 Gyozas mixtas",
                "4 Langostinos Furai",
                "2 Rolls especiales",
                "2 Cubanitos de langostino"
            ],
            price: "$65000",
            image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=400&h=300&fit=crop"
        },
        {
            name: "Combo Familiar",
            description: "Perfecto para compartir en familia (4-5 personas)",
            items: [
                "3 Rolls variados",
                "1 Gohan a elección",
                "6 Gyozas mixtas",
                "4 Spring rolls",
                "2 Yakitori",
                "4 Langostinos Furai"
            ],
            price: "$85000",
            image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop"
        }
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
        // Si la categoría es Promos, renderizar en 2 filas con un título en medio
        if (category === 'Promos') {
            // wrapper para promos
            const wrapper = document.createElement('div');
            wrapper.classList.add('promos-wrapper');

            // primera fila (primeras 3 promos)
            const firstRow = document.createElement('div');
            firstRow.classList.add('promos-row');

            const promos = menuItems[category];
            promos.slice(0, 3).forEach(item => {
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
                firstRow.appendChild(menuItem);
            });

            // título separador
            const separator = document.createElement('h3');
            separator.classList.add('promos-title');
            separator.textContent = ' COMBOS DE SUSHI';

            // segunda fila (siguientes 3 promos)
            const secondRow = document.createElement('div');
            secondRow.classList.add('promos-row');

            promos.slice(3, 6).forEach(item => {
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
                secondRow.appendChild(menuItem);
            });

            // ensamblar
            wrapper.appendChild(firstRow);
            wrapper.appendChild(separator);
            wrapper.appendChild(secondRow);
            container.appendChild(wrapper);
        } else {
            // Comportamiento por defecto para otras categorías
            menuItems[category].forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                
                let content = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>`;
                
                // Si es un combo (tiene items), mostrar la lista de items
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
            menuType === 'Gohan' ? 'Gohan' : 'Platos')) {
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
