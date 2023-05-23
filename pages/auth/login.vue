
<script  setup>
const query = gql`
  query getUser {
    user {
      id
      first_name
    }
  }
`
const { data, error } = await useAsyncQuery(query)
console.log(data)
console.log(error)



</script>


<template>
    <p>There are {{ data?.ships?.length || 0 }} ships.</p>
</template>
  
 