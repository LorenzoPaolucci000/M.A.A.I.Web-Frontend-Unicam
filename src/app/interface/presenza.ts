import { Stedente } from "./stedente"

export interface Presenza {
  nomeAttivita: string
  partecipanti: Stedente[]
  iscritti: Stedente[]
}
