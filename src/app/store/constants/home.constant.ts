export const title="Times Of India"

export const options = {
    params: {
      'country': 'us',
      'category': 'business',
      'sortBy': 'relevancy',
      'pageSize': '10',
      'apiKey':'f7b9c3641bcf4261ad3e875d77c6236a'
    }
  }


   export const searchoptions = {
    params: {
      'q': '',
      'pageSize': '10',
      'apiKey':'f7b9c3641bcf4261ad3e875d77c6236a'
    }
  }


  export const categoryList = [
    {
      id: 'business',
      name: 'Business',
      active: true
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      active: false
    },
    {
      id: 'general',
      name: 'General',
      active: false
    },
    {
      id: 'health',
      name: 'Health',
      active: false
    },
    {
      id: 'technology',
      name: 'Technology',
      active: false
    },
    {
      id: 'sports',
      name: 'Sports',
      active: false
    }
  ]


  export const countryList = [
    {
      id: 'in',
      name: 'India',
      active: false
    },
    {
      id: 'us',
      name: 'USA',
      active: true
    },
    {
      id: 'de',
      name: 'Germany',
      active: false
    },
    {
      id: 'au',
      name: 'Australia',
      active: false
    }
  ]

  export const sorting = ['Relevancy', 'Pouplarity', 'PublishedAt']
  export const paging = ['10', '20', '30', '50', '100']
  // export const paging = [10,20,30,50]