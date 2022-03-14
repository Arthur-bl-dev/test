import { Icon } from "@iconify/react"
import { useCallback, useRef, useState } from "react"

//styles
import styles from './../assets/styles/pages/main.module.scss';
import stylesButtons from './../assets/styles/components/buttons.module.scss';

const INITIAL_LIST_QUESTIONS = [
    //Topic List 
    {
        id: 1,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 2,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 3,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 4,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 5,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 6,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 7,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 8,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 9,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 10,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 11,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 12,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 13,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 14,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
    {
        id: 15,
        title: "Acentuação Gráfica",
        description: "Uso dos Porquês",
        content: [
            //List questions
            {
                id: 1,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 2,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 3,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 4,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 5,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 6,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 7,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 8,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 9,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 10,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 11,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
            {
                id: 12,
                questionStart: "Analise as afirmativas a seguir:",
                questionEnd: "Com relação ao uso dos porquês, estão corretas:",
                description: {
                    type: "romanList",
                    content: [
                        {
                            id: 1,
                            text: "Queria saber o por quê dessa confusão."
                        },
                        {
                            id: 2,
                            text: "Queria saber porque você faltou aula."
                        },
                        {
                            id: 3,
                            text: "Acordo cedo porque gosto de estudar."
                        },
                    ]
                },
                answers: [
                    {
                        id: 1,
                        text: "II e III."
                    },
                    {
                        id: 2,
                        text: "apenas a I."
                    },
                    {
                        id: 3,
                        text: "I,II e III."
                    },
                    {
                        id: 4,
                        text: "apenas a III."
                    },
                ],
                answer: 1,
            },
        ]
    },
]

export default function Main() {
    const [questionActive, setQuestionActive] = useState({ id: null, next: false, content: null, answerSelected: null })
    const listQuestionRef = useRef(INITIAL_LIST_QUESTIONS)

    const renderQuestion = useCallback((question, index) => (
        <button
            className={`${questionActive.content !== null && questionActive.content.id === question.id ? styles.buttonSelect : ""}`}
            onClick={() => setQuestionActive(preventState => ({ ...preventState, content: question }))}>
            {`Exercício ${index + 1}`}
        </button>
    ), [questionActive.content])

    //Render all List Questions
    const renderTopicList = useCallback((item, index) => (
        <div
            className={`${styles.contentTopicList} ${questionActive.id === item.id ? styles.activeContentTopicList : ''}`}
            key={item.id}>
            <header onClick={() => {

                setQuestionActive(prevState => ({
                    ...prevState,
                    id: prevState.id === item.id ? null : item.id,
                    content: prevState.id === item.id ? null : prevState.content,
                }))
            }}>
                <h4>{`${item.title} ${index + 1}`}</h4> <button><Icon icon="charm:chevron-up" /></button>
            </header>
            <div className={`${styles.contentListTopicList}`}>

                <div className={styles.descriptionTopicList}>
                    <div className={styles.iconDescriptionTopicList}>
                        <Icon icon="majesticons:paper-fold-text" />
                    </div>
                    <span> {item.description}</span>
                </div>

                <div className={styles.contentListQuestions}>
                    {item.content.map(renderQuestion)}
                </div>
            </div>
        </div>
    ), [renderQuestion, questionActive.id]);

    const renderQuestionActive = useCallback(() => {

        const renderRomanList = () => {
            return (
                <ol type="I">
                    {
                        questionActive.content.description.content.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))
                    }
                </ol>
            )
        }

        return (
            <div className={styles.contentQuestion} >
                <div className={styles.contentDescriptionQuestion}>
                    <h4>{questionActive.content.questionStart}</h4>
                    {questionActive.content.description.type === "romanList" && renderRomanList()}
                    <h4>{questionActive.content.questionEnd}</h4>
                </div>

                <ol className={styles.contentListAnswers} type="a">
                    {
                        questionActive.content.answers.map(item => (
                            <li
                                className={`${questionActive.answerSelected === item.id ? styles.selectedQuestionActive : ''}`}
                                onClick={() => {
                                    setQuestionActive(prevState => ({ ...prevState, answerSelected: item.id }))
                                }}
                                key={item.id}>{item.text}</li>
                        ))
                    }
                </ol>
            </div>
        )
    }, [questionActive]);

    //Verify if can go to next or previous question
    const verifyNextBackPage = useCallback((type) => {

        const verifyNext = () => {
            if (questionActive.content !== null && questionActive.next === false) {
                return false
            }

            return true
        }

        const verifyBack = () => {
            if (questionActive.content !== null && questionActive.next === true) {
                return false
            }

            return true
        }

        switch (type) {
            case 'next':
                return verifyNext()

            case 'back':
                return verifyBack()

            default:
                return false
        }

    }, [questionActive.content, questionActive.next]);


    const verifyAnswer = useCallback(() => {
        let result = questionActive.content.answer === questionActive.answerSelected

        alert(`Você ${result ? 'acertou, parabéns!' : 'errou, tente novamente!'}`)

    }, [questionActive.answerSelected, questionActive.content])

    return (
        <>
            <section className={styles.main}>

                <header className={styles.headerContent}>
                    <h2>Lista de exercícios</h2>
                </header>

                <div className={styles.containerTopicList}>
                    {questionActive.content === null || questionActive.next === false ? listQuestionRef.current.map(renderTopicList) : renderQuestionActive()}
                </div>

                <div className={styles.contentNavBar}>
                    <button
                        className={stylesButtons.btnPrimary}
                        disabled={verifyNextBackPage('back')}
                        onClick={() => setQuestionActive(preventState => ({ ...preventState, next: false, answerSelected: null }))}><Icon width={25} icon="eva:chevron-left-outline" /> Voltar</button>

                    {
                        questionActive.content !== null && questionActive.next === true && questionActive.answerSelected !== null ?
                            <button
                                className={stylesButtons.btnPrimary}
                                onClick={verifyAnswer}>Ver resultado<Icon width={19} icon="ant-design:folder-view-outlined" /></button> :
                            <button
                                className={stylesButtons.btnPrimary}
                                disabled={verifyNextBackPage('next')}
                                onClick={() => setQuestionActive(preventState => ({ ...preventState, next: true }))}>Avançar <Icon width={25} icon="eva:chevron-right-fill" /></button>
                    }



                </div>
            </section>
        </>
    )
} 