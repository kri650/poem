import React from 'react';
import styles from './Menu.module.css';

const menuItems = [
  { 
    name: 'Artisanal Steak', 
    price: '₹1200', 
    description: 'Tender prime-cut steak with a red wine reduction and wild mushrooms.', 
    image: 'https://images.unsplash.com/photo-1627348574135-d72b260907eb?q=80&w=1587&auto=format&fit=crop'
  },
  { 
    name: 'Seared Scallops', 
    price: '₹950', 
    description: 'Perfectly seared scallops on a bed of pea purée with crispy bacon.', 
    image: 'https://images.unsplash.com/photo-1598921868478-f0761e786b3e?q=80&w=1470&auto=format&fit=crop'
  },
  { 
    name: 'Handmade Pappardelle', 
    price: '₹850', 
    description: 'Fresh pasta with a rich, slow-cooked lamb ragu and Parmesan cheese.', 
    image: 'https://images.unsplash.com/photo-1593442111516-a36c934301a9?q=80&w=1470&auto=format&fit=crop'
  },
  { 
    name: 'Chocolate Lava Cake', 
    price: '₹550', 
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.', 
    image: 'https://images.unsplash.com/photo-1628101740947-f4e910b07a97?q=80&w=1587&auto=format&fit=crop'
  },
  { 
    name: 'Grilled Salmon', 
    price: '₹1100', 
    description: 'Fresh Atlantic salmon, lightly seasoned and grilled to perfection.', 
    image: 'https://images.unsplash.com/photo-1606869406560-63941450a11c?q=80&w=1470&auto=format&fit=crop'
  },
  { 
    name: 'Roasted Duck', 
    price: '₹1500', 
    description: 'Crispy roasted duck breast with a cherry glaze and roasted root vegetables.', 
    image: 'https://images.unsplash.com/photo-1605851189175-437b3a2ad89d?q=80&w=1470&auto=format&fit=crop'
  },
];

const Menu = () => {
  return (
    <section className={styles.menuSection}>
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>Chef's Specials</h2>
        <p className={styles.menuSubtitle}>A taste of our culinary artistry.</p>
      </div>
      <div className={styles.menuScrollContainer}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
            </div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
              <span className={styles.itemPrice}>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;