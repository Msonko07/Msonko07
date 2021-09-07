<template>
  <v-container
    id="project-infos"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Informations du projet"
          class="px-5 py-1"
        >
          <v-simple-table>
            <tbody>
              <tr>
                <td class="text-overline">
                  Intitulé
                </td>
                <td>{{ project.entitled }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Description
                </td>
                <td>{{ project.description }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Localisation
                </td>
                <td>
                  {{ regions.find(reg => reg.id === project.location.region).name }} / {{ departments.find(dep => dep.id === project.location.department).name }} / {{ towns.find(town => town.id === project.location.town).name }}
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Statut du projet
                </td>
                <td>{{ (project.status) ? projectStatuses.find(status => status.id === project.status).name : '' }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Sectors
                </td>
                <td>
                  {{ project.sectors.map(sub => sectors.find(sec => sec.id === sub).name).join(' / ') }}
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Sous-secteurs
                </td>
                <td>
                  {{ project.subsectors.map(sub => subsectors.find(subSec => subSec.id === sub).name).join(' / ') }}
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Niveau de qualification
                </td>
                <td>{{ project.qualification_level.map(item => qualificationLevel.find(qua => qua.id === item).name).join(' / ') }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Financement reçu dans le cadre du projet
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in project.funding_received"
                    :key="i"
                  >
                    <v-col>
                      <strong>Institution :</strong> {{ item.name }}
                    </v-col>
                    <v-col>
                      <strong>Montant :</strong> {{ item.name }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Renforcement de capacité
                </td>
                <td>{{ project.capacity_building }}</td>
              </tr>
              <tr v-if="project.product_or_service">
                <td class="text-overline">
                  Produits ou services
                </td>
                <td>{{ project.product_or_service.map(item => item).join(' - ') }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Date de début d'activité
                </td>
                <td>{{ project.date_of_first_activity }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ProjectInfos',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
    computed: {
      regions () {
        return this.$store.state.utilities.regions
      },
      departments () {
        return this.$store.state.utilities.departments
      },
      towns () {
        return this.$store.state.utilities.towns
      },
      sectors () {
        return this.$store.state.utilities.sectors
      },
      subsectors () {
        return this.$store.state.utilities.subsectors
      },
      projectStatuses () {
        return this.$store.state.utilities.projectStatuses
      },
      qualificationLevel () {
        return this.sectors.state.utilities.qualificationLevels
      },
    },
  }
</script>

<style scoped>

</style>
