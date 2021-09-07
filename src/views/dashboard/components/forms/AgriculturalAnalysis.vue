<template>
  <v-form>
    <v-container fluid>
      <v-row
        align="center"
      >
        <v-col
          sm="12"
          lg="12"
        >
          <!-- Appréciation de l'exploitation -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Appréciation de l'exploitation
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(1)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['1']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Pertinence de la localisation par rapport au projet
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_1"
                    :items="qualitative.question_1.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_1"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  L'entreprise est elle déja formalisée?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_2"
                    :items="qualitative.question_1.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_2"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Foncier
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_3"
                    :items="qualitative.question_1.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_3"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Aménagements
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_4"
                    :items="qualitative.question_1.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_4"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Equipements (Matériel d'exploitation, Véhicule, Machines etc …)
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_5"
                    :items="qualitative.question_1.children[4].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_5"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Intrants (Pépinières, semences, Phyto, Engrais, Arbres, matières premières etc …)
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_6"
                    :items="qualitative.question_1.children[5].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_6"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-1"
                >
                  Immobilisations Animales
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_1.response_7"
                    :items="qualitative.question_1.children[6].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_1.response_7"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-divider class="mb-1" />
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Total partiel
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_1.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_1.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_1.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Analyse des compétances technique du porteur de projet -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Analyse des Compétances techniques du porteur de projet et/ou des membres
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(2)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['2']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Promoteur en activité
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_2.response_1"
                    :items="qualitative.question_2.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_2.response_1"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Formation technique en lien avec l'activité
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_2.response_2"
                    :items="qualitative.question_2.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_2.response_2"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Nombre d'années d"expérience pratique
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_2.response_3"
                    :items="qualitative.question_2.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_2.response_3"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Acquisition des Compétences techniques requises
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_2.response_4"
                    :items="qualitative.question_2.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_2.response_4"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-divider class="mb-1" />
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Total partiel
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_2.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_2.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_2.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- INDICATEURS DES COMPETENCES EN GESTION DU PORTEUR DE PROJET ET/OU DES MEMBRES -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Indicateurs des compétances en gestion du porteur de projet et/ou des membres
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(3)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['3']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Formation en gestion
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_1"
                    :items="qualitative.question_3.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_1"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Expérience en Autoentreprenariat
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_2"
                    :items="qualitative.question_3.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_2"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Nombre d'années d'expérience en Gestion
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_3"
                    :items="qualitative.question_3.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_3"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Temps de Gestion de l'Activité
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_4"
                    :items="qualitative.question_3.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_4"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Marchés des Intrants - Approvisionnements
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_5"
                    :items="qualitative.question_3.children[4].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_5"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Produits proposés et leurs caractéristiques
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_6"
                    :items="qualitative.question_3.children[5].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_6"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Clientèle
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_7"
                    :items="qualitative.question_3.children[6].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_7"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Marchés visés (Nouveau)
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_8"
                    :items="qualitative.question_3.children[7].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_8"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Existence Revenus Mensuels
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_9"
                    :items="qualitative.question_3.children[8].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_9"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Prix proposés
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_10"
                    :items="qualitative.question_3.children[9].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_10"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Information sur la Concurrence
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_11"
                    :items="qualitative.question_3.children[10].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_11"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Acquisition des Compétences en gestion requises
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_3.response_12"
                    :items="qualitative.question_3.children[11].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_3.response_12"
                    label="Note"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Commentaires"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-divider class="mb-1" />
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Total partiel
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_3.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_3.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_3.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-row>
            <v-col>
              <v-textarea
                v-model="project_resume"
                label="Résumé du projet"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-textarea
                v-model="project_notice"
                label="Avis du projet"
                outlined
                dense
              />
            </v-col>

            <!--<v-col>
              <v-textarea
                v-model="technical_analysis"
                label="Synthèse de l'analyse technique après entretien"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-textarea
                v-model="financial_analysis"
                label="Synthèse de l'analyse financier après entretien"
                outlined
                dense
              />
            </v-col>-->
          </v-row>
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-text>
              <v-row>
                <v-col
                  cols="4"
                  class="text-center accent white--text text-h6"
                >
                  SCORE DE GESTION: {{ qualitative_result.management_score }} %
                </v-col>
                <v-col
                  cols="4"
                  class="text-center accent white--text text-h6"
                >
                  SCORE DE TECHNIQUE: {{ qualitative_result.technical_score }} %
                </v-col>
                <v-col
                  cols="4"
                  class="text-center accent white--text text-h6"
                >
                  SCORE TOTAL: {{ qualitative_result.total_score }} %
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  import qualitative from '@/libraries/agricultural.json'
  export default {
    name: 'AgriculturalAnalysis',
    data () {
      return {
        result: {},
        hidden_old: true,
        hidden: { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
        qualitative: qualitative,
        project_resume: '',
        project_notice: '',
        technical_analysis: '',
        financial_analysis: '',
        qualitative_result: {
          question_1: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            response_5: 0,
            response_6: 0,
            response_7: 0,
            response_8: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_2: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_3: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            response_5: 0,
            response_6: 0,
            response_7: 0,
            response_8: 0,
            response_9: 0,
            response_10: 0,
            response_11: 0,
            response_12: 0,
            response_13: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          total_note: 0,
          total_score: 0,
          management_score: 0,
          technical_score: 0,
          percentage: 0,
        },
      }
    },
    computed: {
      total_score () {
        return parseInt(this.qualitative_result.question_1.partial_score) + parseInt(this.qualitative_result.question_2.partial_score) + parseInt(this.qualitative_result.question_3.partial_score)
      },
      total_weighting () {
        return parseInt(this.qualitative_result.question_1.weighting) + parseInt(this.qualitative_result.question_2.weighting) + parseInt(this.qualitative_result.question_3.weighting)
      },
    },
    watch: {
      project_notice: {
        immediate: true,
        handler (val) {
          this.$emit('projectNoticeUpdate', val)
        },
      },
      project_resume: {
        immediate: true,
        handler (val) {
          this.$emit('projectResumeUpdate', val)
        },
      },
      qualitative_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.total_note = parseInt(val.question_1.partial_note) + parseInt(val.question_2.partial_note) + parseInt(val.question_3.partial_note)
          this.qualitative_result.total_score = Math.round((val.total_note / this.total_weighting) * 100)
          this.qualitative_result.management_score = Math.round(((val.total_note - val.question_3.partial_note) / (this.total_weighting - val.question_3.weighting)) * 100)
          this.qualitative_result.technical_score = Math.round(val.question_3.partial_score)

          this.qualitative_result.percentage = val.total_score
          // Emit the final result
          this.$emit('qualitativeResultUpdate', val)
        },
      },
      'qualitative_result.question_1': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_1.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4) + parseInt(val.response_5) + parseInt(val.response_6) + parseInt(val.response_7)
          this.qualitative_result.question_1.weighting = this.qualitative.question_1.totalWeighting
          this.qualitative_result.question_1.partial_score = (parseInt(val.partial_note) / parseInt(val.weighting)) * 100
        },
      },
      'qualitative_result.question_2': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_2.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4)
          this.qualitative_result.question_2.weighting = this.qualitative.question_2.totalWeighting
          this.qualitative_result.question_2.partial_score = (parseInt(val.partial_note) / parseInt(val.weighting)) * 100
        },
      },
      'qualitative_result.question_3': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_3.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4) + parseInt(val.response_5) + parseInt(val.response_6) +
            parseInt(val.response_7) + parseInt(val.response_8) + parseInt(val.response_9) + parseInt(val.response_10) + parseInt(val.response_11) + parseInt(val.response_12)
          this.qualitative_result.question_3.weighting = this.qualitative.question_3.totalWeighting
          this.qualitative_result.question_3.partial_score = (parseInt(val.partial_note) / parseInt(val.weighting)) * 100
        },
      },
    },
    methods: {
      hide (key) {
        for (const hiddenKey in this.hidden) {
          if (parseInt(hiddenKey) === parseInt(key)) {
            this.hidden[key] = !this.hidden[key]
          } else {
            this.hidden[hiddenKey] = false
          }
        }
      },
    },
  }
</script>

<style scoped>

</style>
