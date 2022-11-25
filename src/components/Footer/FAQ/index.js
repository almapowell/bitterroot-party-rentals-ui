import React from "react";
import './styles.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

export default function FAQ() {


  return (
    <div classname="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="accordion-container">
          <Collapse accordion>

            {
              faqs.map((q, index) => (
                <Panel header={`${index+1}. ${q.question}`} key={index} className="panel">
                  <p className="panel-text">{q.answer}</p>
                </Panel>
              )
            )}
          </Collapse>
        </div>
    </div>
  );
}


const faqs = [
  {
    question: 'How do I rent something out?',
    answer: 'Go to Inventory. Add your items to cart, and fill out your information'
  },
   {
    question: 'How long is your rental period?',
    answer: 'A typical rental period is up to four consecutive days pending availability. Anything extending past that time frame is subject to a two day rental fee.'
  }, {
    question: 'What are your delivery fees?',
    answer: 'Standard delivery fees are based on the location of your event and include deliveries 100ft from where the truck can park. They do not include change in elevation such as elevator, or stairs. Please ask an Event Designer for clarification at the time you request a quote.'
  }, {
    question: 'What is the differenct between a quote and reservation',
    answer: 'Go to Inventory, add your items to cart, and fill out your information'
  }, {
    question: 'What are the customer pickup hours?',
    answer: 'Customer pick up hours are Monday through Friday 9am - 3pm and Saturday 9am - 2pm. We are closed for customer pickup on Sunday. If you wish to pick up outside of these hours, it is possible for an additional fee. Just ask!'
  }, {
    question: 'What is your cancellation polidy?',
    answer: 'All rentals can be cancelled 10 days prior to scheduled delivery or customer pick-up date in order to receive a full refund. Refunds will not be given if rentals are cancelled after this date.'
  },
]