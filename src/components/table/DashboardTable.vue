<template>
  <q-table :rows="rows" :columns="columns" />
</template>

<script>
export default {
  data() {
    return {
      rows: [
        { id: 1, col1: 'Mark Otto', col2: 'ottoto@wxample.com', col3: 'ON the Road', col4: '$25 224.2', col5: '11 May 2017', col6: 'Otsego', col7: 'Sent' },
        { id: 2, col1: 'Jacob Thornton', col2: 'thornton@wxample.com', col3: 'HP Core i7', col4: '$1 254.2', col5: '4 Jun 2017', col6: 'Fivepointville', col7: 'Sent' },
        { id: 3, col1: 'Larry the Bird', col2: 'bird@wxample.com', col3: 'Air Pro', col4: '$1 570.0', col5: '27 Aug 2017', col6: 'Leadville North', col7: 'Pending' },
        { id: 4, col1: 'Joseph May', col2: 'josephmay@wxample.com', col3: 'Version Control', col4: '$5 224.5', col5: '19 Feb 2018', col6: 'Seaforth', col7: 'Declined' },
        { id: 5, col1: 'Peter Horadnia', col2: 'horadnia@wxample.com', col3: "Let's Dance", col4: '$43 594.7', col5: '1 Mar 2018', col6: 'Hanoverton', col7: 'Sent' },
      ],
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: 'col1' },
        { name: 'email', align: 'left', label: 'Email', field: 'col2' },
        { name: 'product', align: 'left', label: 'Product', field: 'col3' },
        { name: 'price', align: 'left', label: 'Price', field: 'col4' },
        { name: 'date', align: 'left', label: 'Date', field: 'col5' },
        { name: 'city', align: 'left', label: 'City', field: 'col6' },
        { name: 'status', align: 'left', label: 'Status', field: 'col7' },
      ],
    }
  },
}
</script>
