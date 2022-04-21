<template>
  <div id="app">
    <LeadCard
    icon="mail.svg"
    iconAlt="Conversões"
    value="2.5 M"
    name="Conversões"
    tooltip="Conversão é a ação do envio de qualquer formulário."
    color="#1E93FF4D"
    >
    </LeadCard>
    <LeadCard
      icon="person.svg"
      iconAlt="Leads"
      value="965.321"
      name="Leads"
      tooltip="Lead é um contato individual do cliente ao enviar formulários."
      color="#B030FF4D"
    >
    </LeadCard>
    <LeadCard
      icon="currency.svg"
      iconAlt="Custo por lead"
      value="R$ 10"
      name="Custo por lead"
      tooltip="É o cálculo do investimento utilizado pela quantidade de leads gerados no período."
      color="#28CC564D"
    >
    </LeadCard>
  </div>
</template>

<script>
import LeadCard from './components/LeadCard.vue'

export default {
  name: 'App',
  components: {
    LeadCard
  }
}
</script>

<style>
#app {
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  gap: 44px;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

body{
  background-color: #f2f6f7;
  padding: 20px;
}

@media only screen and (max-width: 770px) {
  #app {
    flex-direction: column;
  }
}
</style>
