'use client';
// @ts-ignore
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { DGIcon } from './dg-icon';

export const Widget = () => (
  <WhatsAppWidget
    CompanyIcon={DGIcon}
    phoneNumber={process.env.NEXT_PUBLIC_PHONE_NUMBER}
    companyName='Dereje'
    sendButtonText='Envoyer'
    replyTimeText='Réponse généralement dans la journée'
    inputPlaceHolder='Saisissez un message'
    message="Besoin d'aide ?"
    position='left'
    open={false}
  />
);
