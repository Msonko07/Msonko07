<template>
  <v-form
    class="mt-5"
  >
    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Client(s) cible
            <v-spacer />
            <v-icon
              color="primary"
              @click="incTargetCustomers"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in marketInfo.target_customers.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.target_customers[i].name"
                label="Nom"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.target_customers[i].behavior"
                label="Comportement"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.target_customers[i].strategy"
                label="Stratégie"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decTargetCustomers(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Compétiteur(s) identifié(s)
            <v-spacer />
            <v-icon
              color="primary"
              @click="incCompetitors"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in marketInfo.competitors.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.competitors[i].name"
                label="Nom"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.competitors[i].type"
                label="Type"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.competitors[i].description"
                label="Description"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decCompetitors(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Cannaux de distribution
            <v-spacer />
            <v-icon
              color="primary"
              @click="incDistributionChannels"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in marketInfo.distribution_channels.length"
            :key="i"
          >
            <v-col
              sm="12"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.distribution_channels[i].channel"
                label="Cannal"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="12"
              lg="6"
              class="pt-0"
            >
              <v-text-field
                v-model="marketInfo.distribution_channels[i].description"
                label="Description"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > i) ? decDistributionChannels(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'MarketInfos',
    data () {
      return {
        marketInfo: {
          target_customers: [{ name: null, behavior: null, strategy: null }],
          competitors: [{ name: null, type: null, description: null }],
          distribution_channels: [{ channel: null, description: null }],
        },
      }
    },
    watch: {
      marketInfo: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('update', val)
        },
      },
    },
    methods: {
      incTargetCustomers () {
        this.marketInfo.target_customers.push({ name: null, behavior: null, strategy: null })
      },
      decTargetCustomers (i) {
        this.marketInfo.target_customers.splice(i, 1)
      },
      incCompetitors () {
        this.marketInfo.competitors.push({ name: null, type: null, description: null })
      },
      decCompetitors (i) {
        this.marketInfo.competitors.splice(i, 1)
      },
      incDistributionChannels () {
        this.marketInfo.distribution_channels.push({ channel: null, description: null })
      },
      decDistributionChannels (i) {
        this.marketInfo.distribution_channels.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
