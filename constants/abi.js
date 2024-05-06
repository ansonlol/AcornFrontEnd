module.exports = {
  abi: [

    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        }
      ],
      "name": "add_new_souls",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "buy_history",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "time_minute",
          "type": "uint256"
        }
      ],
      "name": "buy_time_to_play",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "performance",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "time",
          "type": "uint256"
        }
      ],
      "name": "finish_skills_lesson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "finish_level",
          "type": "string"
        }
      ],
      "name": "finish_skills_level",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        }
      ],
      "name": "join_skill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        }
      ],
      "name": "account_name_and_skill_to_index",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        }
      ],
      "name": "check_accounts",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "account_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "skill_name",
          "type": "string"
        }
      ],
      "name": "check_skills",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "a",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "b",
          "type": "string"
        }
      ],
      "name": "compareStrings",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "finish_level",
          "type": "string"
        }
      ],
      "name": "level_to_tokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "performance",
          "type": "string"
        }
      ],
      "name": "performance_to_token",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "skills",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "level",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "hour_spent",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "test",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "time_minutes",
          "type": "uint256"
        }
      ],
      "name": "time_play_to_tokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    }
  ]
};
