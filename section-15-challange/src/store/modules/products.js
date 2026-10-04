export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://images.pexels.com/photos/5395725/pexels-photo-5395725.jpeg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://images.pexels.com/photos/13894718/pexels-photo-13894718.jpeg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://images.pexels.com/photos/31251608/pexels-photo-31251608.png',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ]
    }
  },
  getters: {
    products(state) {
      return state.products;
    }
  }
};