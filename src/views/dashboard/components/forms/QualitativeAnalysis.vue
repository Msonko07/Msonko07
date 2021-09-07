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
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Adéquation Homme / Projet (Expérience du porteur de projet par rapport à son projet)
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
                  class="text-right grey--text text-body-2"
                >
                  De combien d'année d'expérience dispose le promoteur dans cette activité?
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
                  class="text-right grey--text text-body-2"
                >
                  A-t-il une formation en lien avec l'activité ?
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
                  class="text-right grey--text text-body-2"
                >
                  Est-il à temps plein sur le projet ?
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
                  class="text-right grey--text text-body-2"
                >
                  Les compétences clés sont-elles présentes ou identifiées dans le projet ?
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
                  class="text-right grey--text text-body-2"
                >
                  L'effectif a-t-il les compétences techniques requises ?
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
          <!-- legal form -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Structure juridique
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
                  class="text-right grey--text text-body-1"
                >
                  Entreprise est elle déja formalisée?
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
          <!-- Marché -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Adéquation produit / marché
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
                  Existe t'il déjà un marché pour le produit ?
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
                  Quelle est la taille du marché ?
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
                  Y'a-t-il un potentiel d'expension du marché ?
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
          <!-- Concurrence -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Concurrence
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(4)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['4']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  L'intensité concurrentielle est-elle raisonnable ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_4.response_1"
                    :items="qualitative.question_4.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_4.response_1"
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
                  Existe-t-il plusieurs acteurs dominants sur le marché ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_4.response_2"
                    :items="qualitative.question_4.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_4.response_2"
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
                    v-model="qualitative_result.question_4.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_4.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_4.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Stratégie -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Stratégie
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(5)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['5']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Le rapport qualité/prix est-il pertinent ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_5.response_1"
                    :items="qualitative.question_5.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_5.response_1"
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
                  Le ciblage est-il adéquat ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_5.response_2"
                    :items="qualitative.question_5.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_5.response_2"
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
                  Les canaux de distribution sont-ils adaptés ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_5.response_3"
                    :items="qualitative.question_5.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_5.response_3"
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
                  Le pricing est-il cohérent par rapport à la concurrence ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_5.response_4"
                    :items="qualitative.question_5.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_5.response_4"
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
                    v-model="qualitative_result.question_5.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_5.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_5.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- appréciation technique -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Appréciation technique
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(6)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['6']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Le lieu d'exercice de l'activité existe-t-il ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_1"
                    :items="qualitative.question_6.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_1"
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
                  Le lieu d'exercice de l'activité est-il aménagé ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_2"
                    :items="qualitative.question_6.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_2"
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
                  Les aménagements sont-ils aux normes ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_3"
                    :items="qualitative.question_6.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_3"
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
                  Les équipements sont-ils disponibles ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_4"
                    :items="qualitative.question_6.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_4"
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
                  Les équipements sont-ils aux normes ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_5"
                    :items="qualitative.question_6.children[4].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_5"
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
                  Les conditions et cycle de production sont-ils maîtrisés ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_6.response_6"
                    :items="qualitative.question_6.children[5].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_6.response_6"
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
                    v-model="qualitative_result.question_6.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_6.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_6.partial_score"
                    label="Score partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <!-- Validation des hypothèse du BP -->
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-title class="font-weight-regular text-overline primary--text text-center">
              Validation des Hypothèses du BP
              <v-spacer />
              <v-icon
                color="primary"
                @click="hide(7)"
              >
                mdi-unfold-more-horizontal
              </v-icon>
            </v-card-title>
            <v-card-text v-show="hidden['7']">
              <v-row>
                <v-col
                  cols="4"
                  class="text-right grey--text text-body-2"
                >
                  Les investissements ont-ils été correctement estimés par rapport à l'activité ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_1"
                    :items="qualitative.question_7.children[0].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_1"
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
                  Les quantités vendues ont-elles été correctement estimées ?
                </v-col>
                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_2"
                    :items="qualitative.question_7.children[1].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_2"
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
                  La production prévisionnelle est-elle cohérente par rapport au cycle de production ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_3"
                    :items="qualitative.question_7.children[2].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_3"
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
                  Les coûts d'exploitation ont-ils été correctement estimés ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_4"
                    :items="qualitative.question_7.children[3].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_4"
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
                  L'évolution du CA est-elle réaliste ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_5"
                    :items="qualitative.question_7.children[4].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_5"
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
                  L'évolution des charges est-elle réaliste ?
                </v-col>

                <v-col>
                  <v-select
                    v-model="qualitative_result.question_7.response_6"
                    :items="qualitative.question_7.children[5].response_option"
                    item-text="name"
                    item-value="point"
                    label="Réponse/Appréciation"
                    outlined
                    dense
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    :value="qualitative_result.question_7.response_6"
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
                    v-model="qualitative_result.question_7.weighting"
                    label="Pondération"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_7.partial_note"
                    label="Note partiel"
                    outlined
                    dense
                    disabled
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="qualitative_result.question_7.partial_score"
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
          </v-row>
          <v-card
            class="px-2 my-1"
            outlined
          >
            <v-card-text>
              <v-row>
                <v-col
                  cols="3"
                  :class="`text-center white--text ${ qualitative_result.percentage < 85 ? 'error' : 'success' } title`"
                >
                  SCORE PROJET: {{ qualitative_result.percentage }}%
                </v-col>
                <v-col
                  cols="3"
                  class="text-center accent white--text text-h6"
                >
                  SCORE MIN: 85%
                </v-col>
                <v-col
                  cols="3"
                  :class="`text-center ${ qualitative_result.percentage < 85 ? 'error' : 'success' } white--text title`"
                >
                  SCORE PROJET: {{ qualitative_result.total_score }}
                </v-col>
                <v-spacer />
                <v-col
                  cols="3"
                  class="text-center accent white--text text-h6"
                >
                  SCORE MAX: 1395
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
  import qualitative from '@/libraries/qualitative.json'
  export default {
    name: 'QualitativeAnalysis',
    data () {
      return {
        result: {},
        project_resume: '',
        project_notice: '',
        hidden_old: true,
        hidden: { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false },
        qualitative: qualitative,
        qualitative_result: {
          question_1: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            response_5: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_2: {
            response_1: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_3: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_4: {
            response_1: 0,
            response_2: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_5: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_6: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            response_5: 0,
            response_6: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          question_7: {
            response_1: 0,
            response_2: 0,
            response_3: 0,
            response_4: 0,
            response_5: 0,
            response_6: 0,
            partial_note: 0,
            partial_score: 0,
            weighting: 0,
          },
          total_score: 0,
          percentage: 0,
        },
      }
    },
    watch: {
      qualitative_result: {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.total_score = parseInt(val.question_1.partial_score) + parseInt(val.question_2.partial_score) + parseInt(val.question_3.partial_score) +
            parseInt(val.question_4.partial_score) + parseInt(val.question_5.partial_score) + parseInt(val.question_6.partial_score) + parseInt(val.question_7.partial_score)

          this.qualitative_result.percentage = Math.round((parseInt(this.qualitative_result.total_score) / 1395) * 100)

          // Emit the final result
          this.$emit('qualitativeResultUpdate', val)
        },
      },
      'qualitative_result.question_1': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_1.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4) + parseInt(val.response_5)
          this.qualitative_result.question_1.weighting = this.qualitative.question_1.totalWeighting
          this.qualitative_result.question_1.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_2': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_2.partial_note = parseInt(val.response_1)
          this.qualitative_result.question_2.weighting = this.qualitative.question_2.totalWeighting
          this.qualitative_result.question_2.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_3': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_3.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3)
          this.qualitative_result.question_3.weighting = this.qualitative.question_3.totalWeighting
          this.qualitative_result.question_3.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_4': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_4.partial_note = parseInt(val.response_1) + parseInt(val.response_2)
          this.qualitative_result.question_4.weighting = this.qualitative.question_4.totalWeighting
          this.qualitative_result.question_4.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_5': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_5.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4)
          this.qualitative_result.question_5.weighting = this.qualitative.question_5.totalWeighting
          this.qualitative_result.question_5.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_6': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_6.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4) + parseInt(val.response_5) + parseInt(val.response_6)
          this.qualitative_result.question_6.weighting = this.qualitative.question_6.totalWeighting
          this.qualitative_result.question_6.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.question_7': {
        immediate: true,
        deep: true,
        handler (val) {
          this.qualitative_result.question_7.partial_note = parseInt(val.response_1) + parseInt(val.response_2) + parseInt(val.response_3) + parseInt(val.response_4) + parseInt(val.response_5) + parseInt(val.response_6)
          this.qualitative_result.question_7.weighting = this.qualitative.question_7.totalWeighting
          this.qualitative_result.question_7.partial_score = parseInt(val.weighting) * parseInt(val.partial_note)
        },
      },
      'qualitative_result.percentage': {
        immediate: true,
        handler (val) {
          this.$emit('scoreUpdate', val)
        },
      },
      project_resume: {
        immediate: true,
        handler (val) {
          this.$emit('projectResumeUpdate', val)
        },
      },
      project_notice: {
        immediate: true,
        handler (val) {
          this.$emit('projectNoticeUpdate', val)
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
