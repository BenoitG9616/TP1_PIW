// Tableau d'objets contenant les données des produits
const products = [
    {
      id: 1,
      name: "Mythic Plus Keys",
      price: "1 gold",
      description: "Mythic Plus Keys from +2 to +15"
    },
    {
      id: 2,
      name: "Anurelos Flames Guidance",
      price: "7.000.000 gold",
      description: "Mythic Fyrakk Mount, Guaranteed Drop"
    },
    {
      id: 3,
      name: "Gladiator",
      price: "25.000.000 gold",
      description: "Gladiator Title unlock"
    }
  ];
  
 // Fonction pour générer la liste des produits
function generateProductList() {
    const productList = document.getElementById('product-list');
  
    if (!productList) {
      console.error('Element with id "product-list" not found.');
      return;
    }
  
    products.forEach(product => {
      // Créer un élément de liste pour chaque produit
      const listItem = document.createElement('li');
      listItem.id = `product-${product.id}`;
  
      // Générer le chemin de l'image
      const imagePath = `assets/img/${product.name.replace(/\s+/g, '-').toLowerCase()}.png`;
  
      // Ajouter le contenu HTML pour chaque produit
      listItem.innerHTML = `
        <img src="${imagePath}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Prix: ${product.price}</p>
        <p>Description: ${product.description}</p>
      `;
  
      // Ajouter un événement de clic à l'élément de liste
      listItem.addEventListener('click', () => {
        showProductDetail(product.id);
      });
  
     // Ajouter l'élément de liste à la liste de produits
    productList.appendChild(listItem);
});
console.log('Product list generated successfully.');
}

// Fonction pour afficher les détails du produit
function showProductDetail(productId) {
const product = products.find(p => p.id === productId);
if (!product) {
    productDetailSection.style.display = 'none'; // Masquer la section si aucun produit
    return;
  }

// Mettre à jour le contenu de la section aside
const productDetailContent = document.getElementById('product-detail-content');
productDetailContent.innerHTML = `
  <h3>${product.name}</h3>
  <p>Prix: ${product.price}</p>
  <p>Description: ${product.description}</p>
`;

// Mettre en évidence l'élément cliqué
const listItems = document.querySelectorAll('.product-grid li');
listItems.forEach(item => {
  item.classList.remove('highlight');
});
document.getElementById(`product-${product.id}`).classList.add('highlight');
}

// Appeler la fonction pour générer la liste des produits
generateProductList();

// Fonction pour trier et filtrer les produits
function sortProducts(criteria) {
    let sortedProducts;
  
    switch (criteria) {
      case 'alpha-asc':
        sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sortedProducts = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-desc':
        sortedProducts = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        return;
    }
  
    // Regénérer la liste des produits avec l'ordre trié
    regenerateProductList(sortedProducts);
  }
  
  // Fonction pour régénérer la liste des produits
  function regenerateProductList(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Vider la liste avant de la remplir
  
    productsToDisplay.forEach(product => {
      const listItem = document.createElement('li');
      listItem.id = `product-${product.id}`;
  
      const imagePath = `assets/img/${product.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      listItem.innerHTML = `
        <img src="${imagePath}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Prix: ${product.price}</p>
        <p>Description: ${product.description}</p>
      `;
  
      listItem.addEventListener('click', () => {
        showProductDetail(product.id);
      });
  
      productList.appendChild(listItem);
    });
  }
  
  // Appeler la fonction pour générer la liste des produits au chargement
  generateProductList();
  
  // Fonction pour trier et filtrer les produits
  function sortProducts(criteria) {
    let sortedProducts;
  
    switch (criteria) {
      case 'alpha-asc':
        sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alpha-desc':
        sortedProducts = products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        sortedProducts = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'price-desc':
        sortedProducts = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        return;
    }
  
    // Regénérer la liste des produits avec l'ordre trié
    regenerateProductList(sortedProducts);
  }
  
  // Fonction pour régénérer la liste des produits
  function regenerateProductList(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Vider la liste avant de la remplir
  
    productsToDisplay.forEach(product => {
      const listItem = document.createElement('li');
      listItem.id = `product-${product.id}`;
  
      const imagePath = `assets/img/${product.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      listItem.innerHTML = `
        <img src="${imagePath}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Prix: ${product.price}</p>
        <p>Description: ${product.description}</p>
      `;
  
      listItem.addEventListener('click', () => {
        showProductDetail(product.id);
      });
  
      productList.appendChild(listItem);
    });
  }
  
  // Appeler la fonction pour générer la liste des produits au chargement
  generateProductList();