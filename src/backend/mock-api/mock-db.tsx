import { RootTimeLogs } from "../interfaces/interfaces";




const UserWrapper = [
  {
    "User": {
      "displayName": "Alice O'Keefe",
      "accountId": "bca4cba3-0c21-4f9b-b036-25b227854951",
      "accountType": "customer",
      "emailAddress": "Nelda_Stiedemann-Spinka@gmail.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg",
        "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
        "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/934.jpg",
        "32x32": "https://avatars.githubusercontent.com/u/66468644"
      },
      "active": true,
      "locale": "fr-FR",
      "self": "https://terrible-pail.net/"
    }
  },
  {
    "User": {
      "displayName": "Dr. Lee Leffler",
      "accountId": "a796f99a-6282-4735-9d96-2d3c225d09fc",
      "accountType": "atlassian",
      "emailAddress": "Kris4@gmail.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
        "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
        "16x16": "https://avatars.githubusercontent.com/u/8968251",
        "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg"
      },
      "active": true,
      "locale": "en-US",
      "self": "https://frivolous-macaw.net"
    }
  },
  {
    "User": {
      "displayName": "Clara Howell-Braun",
      "accountId": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
      "accountType": "atlassian",
      "emailAddress": "Ned13@yahoo.com",
      "avatarUrls": {
        "48x48": "https://avatars.githubusercontent.com/u/43323052",
        "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
        "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/221.jpg",
        "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1214.jpg"
      },
      "active": true,
      "locale": "en-US",
      "self": "https://early-admire.name/"
    }
  },
  {
    "User": {
      "displayName": "Marguerite Dickinson",
      "accountId": "31a9eaad-322b-4ca2-a522-15418f556aae",
      "accountType": "atlassian",
      "emailAddress": "Abdullah70@hotmail.com",
      "avatarUrls": {
        "48x48": "https://avatars.githubusercontent.com/u/62211080",
        "24x24": "https://avatars.githubusercontent.com/u/69884526",
        "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/952.jpg",
        "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg"
      },
      "active": false,
      "locale": "fr-FR",
      "self": "https://utilized-wilderness.com"
    }
  },
  {
    "User": {
      "displayName": "Lewis Tromp",
      "accountId": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
      "accountType": "customer",
      "emailAddress": "Marilyne.Jast4@hotmail.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg",
        "24x24": "https://avatars.githubusercontent.com/u/26758447",
        "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/618.jpg",
        "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg"
      },
      "active": false,
      "locale": "fr-FR",
      "self": "https://vital-brand.net/"
    }
  },
  {
    "User": {
      "displayName": "Katie Wehner",
      "accountId": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
      "accountType": "customer",
      "emailAddress": "Edwardo_Fahey11@yahoo.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
        "24x24": "https://avatars.githubusercontent.com/u/76571242",
        "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/103.jpg",
        "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
      },
      "active": true,
      "locale": "en-US",
      "self": "https://active-snarl.name"
    }
  },
  {
    "User": {
      "displayName": "Darlene Runolfsson MD",
      "accountId": "6f832bf3-6bc8-4433-9374-60a67580a95a",
      "accountType": "atlassian",
      "emailAddress": "Sydnee.Abshire18@yahoo.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg",
        "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
        "16x16": "https://avatars.githubusercontent.com/u/26194192",
        "32x32": "https://avatars.githubusercontent.com/u/56889500"
      },
      "active": true,
      "locale": "fr-FR",
      "self": "https://tasty-copyright.net"
    }
  },
  {
    "User": {
      "displayName": "Mr. Tom Barrows",
      "accountId": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
      "accountType": "customer",
      "emailAddress": "Juanita_Berge@yahoo.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/302.jpg",
        "24x24": "https://avatars.githubusercontent.com/u/20831057",
        "16x16": "https://avatars.githubusercontent.com/u/31296816",
        "32x32": "https://avatars.githubusercontent.com/u/13893485"
      },
      "active": false,
      "locale": "fr-FR",
      "self": "https://average-beech.info/"
    }
  },
  {
    "User": {
      "displayName": "Mona Langworth",
      "accountId": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
      "accountType": "customer",
      "emailAddress": "Saul_Murphy@gmail.com",
      "avatarUrls": {
        "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
        "24x24": "https://avatars.githubusercontent.com/u/57968034",
        "16x16": "https://avatars.githubusercontent.com/u/64038426",
        "32x32": "https://avatars.githubusercontent.com/u/58230889"
      },
      "active": false,
      "locale": "en-US",
      "self": "https://buttery-sitar.org"
    }
  },
  {
    "User": {
      "displayName": "Louise Senger",
      "accountId": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
      "accountType": "atlassian",
      "emailAddress": "Darrel_Ward@gmail.com",
      "avatarUrls": {
        "48x48": "https://avatars.githubusercontent.com/u/55100913",
        "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
        "16x16": "https://avatars.githubusercontent.com/u/64137357",
        "32x32": "https://avatars.githubusercontent.com/u/79651489"
      },
      "active": true,
      "locale": "fr-FR",
      "self": "https://wide-succotash.info/"
    }
  }
]

  // Mock Worklog Data
const WorklogWrapper:RootTimeLogs[] = [
  {
    "user": {
      "User": {
        "displayName": "Alice O'Keefe",
        "accountId": "bca4cba3-0c21-4f9b-b036-25b227854951",
        "accountType": "customer",
        "emailAddress": "Nelda_Stiedemann-Spinka@gmail.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/26.jpg",
          "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
          "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/934.jpg",
          "32x32": "https://avatars.githubusercontent.com/u/66468644"
        },
        "active": true,
        "locale": "fr-FR",
        "self": "https://terrible-pail.net/"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 3952293261082624,
          "self": "https://small-jailhouse.net/",
          "accountId": "e71383fe-b42b-473f-863e-a78c635a9e34",
          "accountName": "tremo",
          "department": "theologus",
          "departmentLedgerCode": "tolero",
          "issue": {
            "issueName": "mollitia",
            "id": 7761058101985280,
            "self": "https://quintessential-vane.name"
          },
          "timeSpentSeconds": 5164,
          "billableSeconds": 2322,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "19:33:01",
          "createdAt": "2023-10-12T19:05:16.973Z",
          "updatedAt": "2024-04-17T04:14:26.807Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
            "displayName": "Alice O'Keefe",
            "userID": "bca4cba3-0c21-4f9b-b036-25b227854951",
            "self": "https://decent-hour.name"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4950395417788416,
          "self": "https://frequent-cocoa.biz",
          "accountId": "7f68c270-8747-4cea-9ebf-9438032bc663",
          "accountName": "ventosus",
          "department": "appositus",
          "departmentLedgerCode": "spargo",
          "issue": {
            "issueName": "aestas",
            "id": 3633136208445440,
            "self": "https://busy-employee.info/"
          },
          "timeSpentSeconds": 6757,
          "billableSeconds": 1472,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "11:02:42",
          "createdAt": "2023-04-20T16:30:01.047Z",
          "updatedAt": "2024-04-18T01:05:34.315Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
            "displayName": "Alice O'Keefe",
            "userID": "bca4cba3-0c21-4f9b-b036-25b227854951",
            "self": "https://hurtful-jackfruit.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 2641926272581632,
          "self": "https://spiteful-athletics.info",
          "accountId": "b9a3c6e3-a05d-4550-8e43-aa72176e078e",
          "accountName": "thema",
          "department": "sui",
          "departmentLedgerCode": "aestas",
          "issue": {
            "issueName": "accusamus",
            "id": 5243181849378816,
            "self": "https://bustling-chop.net"
          },
          "timeSpentSeconds": 4932,
          "billableSeconds": 883,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "12:52:59",
          "createdAt": "2023-05-16T13:35:56.285Z",
          "updatedAt": "2024-04-17T10:35:53.446Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
            "displayName": "Alice O'Keefe",
            "userID": "bca4cba3-0c21-4f9b-b036-25b227854951",
            "self": "https://messy-afterlife.biz"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6776365558792192,
          "self": "https://exalted-impact.name/",
          "accountId": "2c8b3003-8ce5-4a79-940c-4c3864e4a484",
          "accountName": "thermae",
          "department": "uredo",
          "departmentLedgerCode": "coerceo",
          "issue": {
            "issueName": "vulgaris",
            "id": 5099753058598912,
            "self": "https://poor-mantle.name"
          },
          "timeSpentSeconds": 2693,
          "billableSeconds": 6598,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "06:06:13",
          "createdAt": "2023-12-09T03:13:22.975Z",
          "updatedAt": "2024-04-18T02:57:00.183Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
            "displayName": "Alice O'Keefe",
            "userID": "bca4cba3-0c21-4f9b-b036-25b227854951",
            "self": "https://live-monitor.info/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 8066022114328576,
          "self": "https://mellow-exam.com/",
          "accountId": "636981ac-4a84-447c-b601-d0cc23c95f34",
          "accountName": "credo",
          "department": "vilis",
          "departmentLedgerCode": "curto",
          "issue": {
            "issueName": "ars",
            "id": 7968530379046912,
            "self": "https://made-up-pasture.info"
          },
          "timeSpentSeconds": 3033,
          "billableSeconds": 4284,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "01:09:52",
          "createdAt": "2023-10-01T09:11:26.689Z",
          "updatedAt": "2024-04-17T19:13:02.715Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/849.jpg",
            "displayName": "Alice O'Keefe",
            "userID": "bca4cba3-0c21-4f9b-b036-25b227854951",
            "self": "https://bold-teenager.net"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Dr. Lee Leffler",
        "accountId": "a796f99a-6282-4735-9d96-2d3c225d09fc",
        "accountType": "atlassian",
        "emailAddress": "Kris4@gmail.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1038.jpg",
          "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
          "16x16": "https://avatars.githubusercontent.com/u/8968251",
          "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg"
        },
        "active": true,
        "locale": "en-US",
        "self": "https://frivolous-macaw.net"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 5938081939062784,
          "self": "https://bright-metaphor.org/",
          "accountId": "bec5876c-905c-4f3f-a338-aa1c9ec0185c",
          "accountName": "consequatur",
          "department": "tredecim",
          "departmentLedgerCode": "aspernatur",
          "issue": {
            "issueName": "appositus",
            "id": 1850384511401984,
            "self": "https://prime-croup.info/"
          },
          "timeSpentSeconds": 5843,
          "billableSeconds": 1871,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "20:48:31",
          "createdAt": "2023-11-30T13:26:49.237Z",
          "updatedAt": "2024-04-17T05:31:24.689Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
            "displayName": "Dr. Lee Leffler",
            "userID": "a796f99a-6282-4735-9d96-2d3c225d09fc",
            "self": "https://critical-twins.info/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6559348809531392,
          "self": "https://identical-rowboat.name",
          "accountId": "d4d20c66-6f44-448f-a7ef-e43ab1a9f35f",
          "accountName": "sponte",
          "department": "deprecator",
          "departmentLedgerCode": "averto",
          "issue": {
            "issueName": "compello",
            "id": 2181283249651712,
            "self": "https://fancy-potty.org"
          },
          "timeSpentSeconds": 3034,
          "billableSeconds": 3281,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "13:25:39",
          "createdAt": "2024-01-30T08:10:49.138Z",
          "updatedAt": "2024-04-17T07:46:09.180Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
            "displayName": "Dr. Lee Leffler",
            "userID": "a796f99a-6282-4735-9d96-2d3c225d09fc",
            "self": "https://exciting-nursery.com/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4418607612166144,
          "self": "https://granular-lot.org",
          "accountId": "d7b10101-1226-4e36-b658-9925485e458e",
          "accountName": "tero",
          "department": "condico",
          "departmentLedgerCode": "veniam",
          "issue": {
            "issueName": "minima",
            "id": 1601219254550528,
            "self": "https://insecure-life.info"
          },
          "timeSpentSeconds": 817,
          "billableSeconds": 4462,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "06:48:43",
          "createdAt": "2024-01-03T09:20:01.625Z",
          "updatedAt": "2024-04-17T20:09:12.275Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
            "displayName": "Dr. Lee Leffler",
            "userID": "a796f99a-6282-4735-9d96-2d3c225d09fc",
            "self": "https://wee-pen.org"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6600888042913792,
          "self": "https://female-leveret.info/",
          "accountId": "e52bb5be-1f36-4ba8-af62-8191604f6ae6",
          "accountName": "conforto",
          "department": "tandem",
          "departmentLedgerCode": "repudiandae",
          "issue": {
            "issueName": "degenero",
            "id": 1864152438013952,
            "self": "https://remorseful-encyclopedia.name"
          },
          "timeSpentSeconds": 5284,
          "billableSeconds": 2629,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "13:10:49",
          "createdAt": "2024-01-08T21:51:22.555Z",
          "updatedAt": "2024-04-17T17:33:46.664Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
            "displayName": "Dr. Lee Leffler",
            "userID": "a796f99a-6282-4735-9d96-2d3c225d09fc",
            "self": "https://unwritten-ale.com/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 5963950904573952,
          "self": "https://evil-breakdown.com/",
          "accountId": "65e58446-dd4c-434c-8224-c889ac1c5f3c",
          "accountName": "aegre",
          "department": "celo",
          "departmentLedgerCode": "sollers",
          "issue": {
            "issueName": "tepidus",
            "id": 3610924990595072,
            "self": "https://imperturbable-airfare.info/"
          },
          "timeSpentSeconds": 2083,
          "billableSeconds": 6951,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "22:43:32",
          "createdAt": "2024-02-26T23:41:31.391Z",
          "updatedAt": "2024-04-17T08:47:27.600Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
            "displayName": "Dr. Lee Leffler",
            "userID": "a796f99a-6282-4735-9d96-2d3c225d09fc",
            "self": "https://fluid-stir-fry.net"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Clara Howell-Braun",
        "accountId": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
        "accountType": "atlassian",
        "emailAddress": "Ned13@yahoo.com",
        "avatarUrls": {
          "48x48": "https://avatars.githubusercontent.com/u/43323052",
          "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
          "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/221.jpg",
          "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1214.jpg"
        },
        "active": true,
        "locale": "en-US",
        "self": "https://early-admire.name/"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 3163652408475648,
          "self": "https://shoddy-ephyra.name/",
          "accountId": "31e3c15c-663e-499c-b11d-588baf726844",
          "accountName": "ambulo",
          "department": "volubilis",
          "departmentLedgerCode": "aurum",
          "issue": {
            "issueName": "cado",
            "id": 1668508641394688,
            "self": "https://trivial-repayment.net"
          },
          "timeSpentSeconds": 3740,
          "billableSeconds": 1948,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "17:19:37",
          "createdAt": "2023-06-16T21:50:04.999Z",
          "updatedAt": "2024-04-17T04:35:42.915Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
            "displayName": "Clara Howell-Braun",
            "userID": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
            "self": "https://lanky-toe.net/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 5183676799254528,
          "self": "https://cuddly-meantime.biz/",
          "accountId": "e0e54fe3-ebb1-463f-b204-df6f4dade1c6",
          "accountName": "texo",
          "department": "videlicet",
          "departmentLedgerCode": "amaritudo",
          "issue": {
            "issueName": "vilicus",
            "id": 3996847922216960,
            "self": "https://crafty-platelet.biz/"
          },
          "timeSpentSeconds": 7147,
          "billableSeconds": 2041,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "14:34:37",
          "createdAt": "2023-11-05T17:48:05.395Z",
          "updatedAt": "2024-04-17T05:31:40.900Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
            "displayName": "Clara Howell-Braun",
            "userID": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
            "self": "https://elated-retailer.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4437187053486080,
          "self": "https://square-sensibility.net",
          "accountId": "f22f1c60-9d90-462d-8bf9-5da60bfe253f",
          "accountName": "aliqua",
          "department": "titulus",
          "departmentLedgerCode": "accusantium",
          "issue": {
            "issueName": "vereor",
            "id": 8685552511483904,
            "self": "https://skinny-tomorrow.net"
          },
          "timeSpentSeconds": 4291,
          "billableSeconds": 4256,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "17:57:14",
          "createdAt": "2023-08-24T22:57:47.093Z",
          "updatedAt": "2024-04-17T09:42:46.212Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
            "displayName": "Clara Howell-Braun",
            "userID": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
            "self": "https://odd-walkway.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 726288172056576,
          "self": "https://warped-foundation.net/",
          "accountId": "5eb68db8-4226-4fda-a335-8d23f65ab534",
          "accountName": "beneficium",
          "department": "victoria",
          "departmentLedgerCode": "cunabula",
          "issue": {
            "issueName": "thermae",
            "id": 6979655034732544,
            "self": "https://unhappy-trance.com/"
          },
          "timeSpentSeconds": 3618,
          "billableSeconds": 6532,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "18:28:59",
          "createdAt": "2023-05-06T09:54:41.120Z",
          "updatedAt": "2024-04-18T01:10:32.877Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
            "displayName": "Clara Howell-Braun",
            "userID": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
            "self": "https://corrupt-plenty.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 7093010510643200,
          "self": "https://unlawful-stole.biz",
          "accountId": "fdbdf1dc-1902-4e36-b000-4c3de7e3d05d",
          "accountName": "nesciunt",
          "department": "vitium",
          "departmentLedgerCode": "summopere",
          "issue": {
            "issueName": "aranea",
            "id": 994378900307968,
            "self": "https://warm-detainee.info/"
          },
          "timeSpentSeconds": 4546,
          "billableSeconds": 4113,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "09:37:16",
          "createdAt": "2023-08-07T10:33:07.071Z",
          "updatedAt": "2024-04-17T16:20:12.244Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1168.jpg",
            "displayName": "Clara Howell-Braun",
            "userID": "4ef4d78d-6c59-48ab-b2f9-5689c6c5f367",
            "self": "https://pungent-camera.com/"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Marguerite Dickinson",
        "accountId": "31a9eaad-322b-4ca2-a522-15418f556aae",
        "accountType": "atlassian",
        "emailAddress": "Abdullah70@hotmail.com",
        "avatarUrls": {
          "48x48": "https://avatars.githubusercontent.com/u/62211080",
          "24x24": "https://avatars.githubusercontent.com/u/69884526",
          "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/952.jpg",
          "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/481.jpg"
        },
        "active": false,
        "locale": "fr-FR",
        "self": "https://utilized-wilderness.com"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 3952993743405056,
          "self": "https://well-informed-descendant.biz/",
          "accountId": "63be0b8f-4b68-4e0d-b191-c837b7886fe0",
          "accountName": "claro",
          "department": "damno",
          "departmentLedgerCode": "cresco",
          "issue": {
            "issueName": "vado",
            "id": 3348531542753280,
            "self": "https://chilly-supper.name/"
          },
          "timeSpentSeconds": 2120,
          "billableSeconds": 6187,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "17:57:47",
          "createdAt": "2023-07-22T06:41:28.738Z",
          "updatedAt": "2024-04-17T22:17:44.963Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/69884526",
            "displayName": "Marguerite Dickinson",
            "userID": "31a9eaad-322b-4ca2-a522-15418f556aae",
            "self": "https://lawful-labour.info/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 7675800574754816,
          "self": "https://kosher-avocado.biz/",
          "accountId": "2a9d81c4-ce77-4fe6-8a34-0968887bca3f",
          "accountName": "similique",
          "department": "tum",
          "departmentLedgerCode": "minima",
          "issue": {
            "issueName": "cultellus",
            "id": 5312359224573952,
            "self": "https://scornful-macaw.biz"
          },
          "timeSpentSeconds": 5110,
          "billableSeconds": 4822,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "01:39:44",
          "createdAt": "2023-12-10T23:30:41.970Z",
          "updatedAt": "2024-04-17T06:00:54.218Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/69884526",
            "displayName": "Marguerite Dickinson",
            "userID": "31a9eaad-322b-4ca2-a522-15418f556aae",
            "self": "https://detailed-photodiode.name/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 5615733755084800,
          "self": "https://impressionable-evaluation.com",
          "accountId": "3fcdc27d-1b3a-45ab-8f6e-b4ee763be84c",
          "accountName": "repellat",
          "department": "denego",
          "departmentLedgerCode": "sonitus",
          "issue": {
            "issueName": "demergo",
            "id": 8147312731750400,
            "self": "https://outrageous-fluke.com/"
          },
          "timeSpentSeconds": 1704,
          "billableSeconds": 5766,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "00:26:22",
          "createdAt": "2023-06-04T05:52:07.408Z",
          "updatedAt": "2024-04-17T18:01:39.040Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/69884526",
            "displayName": "Marguerite Dickinson",
            "userID": "31a9eaad-322b-4ca2-a522-15418f556aae",
            "self": "https://husky-underestimate.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 1795925573894144,
          "self": "https://cruel-web.com",
          "accountId": "5beccb03-fb2b-4f0e-9847-c2953a4941a6",
          "accountName": "derelinquo",
          "department": "alter",
          "departmentLedgerCode": "similique",
          "issue": {
            "issueName": "sol",
            "id": 7554415959474176,
            "self": "https://cultured-anatomy.name/"
          },
          "timeSpentSeconds": 6188,
          "billableSeconds": 3232,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "09:43:17",
          "createdAt": "2024-03-29T16:24:00.818Z",
          "updatedAt": "2024-04-18T01:11:32.063Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/69884526",
            "displayName": "Marguerite Dickinson",
            "userID": "31a9eaad-322b-4ca2-a522-15418f556aae",
            "self": "https://cuddly-chromolithograph.info"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 1198237010624512,
          "self": "https://internal-luggage.com/",
          "accountId": "aa065ea4-172a-482e-ac12-97389ca0335a",
          "accountName": "confido",
          "department": "quam",
          "departmentLedgerCode": "communis",
          "issue": {
            "issueName": "deficio",
            "id": 2429195523194880,
            "self": "https://outgoing-crow.com/"
          },
          "timeSpentSeconds": 7142,
          "billableSeconds": 2438,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "14:57:34",
          "createdAt": "2023-05-01T06:54:41.294Z",
          "updatedAt": "2024-04-17T20:15:09.301Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/69884526",
            "displayName": "Marguerite Dickinson",
            "userID": "31a9eaad-322b-4ca2-a522-15418f556aae",
            "self": "https://distant-attorney.name"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Lewis Tromp",
        "accountId": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
        "accountType": "customer",
        "emailAddress": "Marilyne.Jast4@hotmail.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/827.jpg",
          "24x24": "https://avatars.githubusercontent.com/u/26758447",
          "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/618.jpg",
          "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg"
        },
        "active": false,
        "locale": "fr-FR",
        "self": "https://vital-brand.net/"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 8583469735084032,
          "self": "https://cultivated-outfielder.com/",
          "accountId": "3bbfacc9-e490-4963-9dc6-76ce72b53f1a",
          "accountName": "a",
          "department": "alter",
          "departmentLedgerCode": "amet",
          "issue": {
            "issueName": "cilicium",
            "id": 7663963208679424,
            "self": "https://any-stability.info"
          },
          "timeSpentSeconds": 1212,
          "billableSeconds": 2177,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "10:02:14",
          "createdAt": "2024-02-21T09:51:16.413Z",
          "updatedAt": "2024-04-17T18:02:23.787Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/26758447",
            "displayName": "Lewis Tromp",
            "userID": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
            "self": "https://suspicious-enactment.name"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4402891014012928,
          "self": "https://insistent-pitch.org",
          "accountId": "500de743-1326-4e5e-8119-531b7fe27ce8",
          "accountName": "vomer",
          "department": "coerceo",
          "departmentLedgerCode": "derideo",
          "issue": {
            "issueName": "cibo",
            "id": 355097248792576,
            "self": "https://miserable-republican.net/"
          },
          "timeSpentSeconds": 1806,
          "billableSeconds": 6481,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "18:46:29",
          "createdAt": "2023-12-06T10:34:04.188Z",
          "updatedAt": "2024-04-18T02:37:16.185Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/26758447",
            "displayName": "Lewis Tromp",
            "userID": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
            "self": "https://disastrous-safety.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 2131165007839232,
          "self": "https://careful-obsidian.name",
          "accountId": "e9ea7022-8d8b-450d-9b72-d05a846c1ca2",
          "accountName": "supplanto",
          "department": "casso",
          "departmentLedgerCode": "traho",
          "issue": {
            "issueName": "conspergo",
            "id": 3246843370668032,
            "self": "https://impassioned-cork.org/"
          },
          "timeSpentSeconds": 4595,
          "billableSeconds": 2593,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "18:05:02",
          "createdAt": "2023-11-05T10:03:11.038Z",
          "updatedAt": "2024-04-17T21:50:49.335Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/26758447",
            "displayName": "Lewis Tromp",
            "userID": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
            "self": "https://immense-statin.net"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4641193220636672,
          "self": "https://glorious-weasel.net/",
          "accountId": "f66d4757-3373-4df8-9c4e-75ed30f840b3",
          "accountName": "textus",
          "department": "claustrum",
          "departmentLedgerCode": "consectetur",
          "issue": {
            "issueName": "summisse",
            "id": 1735697146839040,
            "self": "https://mealy-contributor.org"
          },
          "timeSpentSeconds": 6079,
          "billableSeconds": 3343,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "00:40:44",
          "createdAt": "2023-07-29T07:02:29.738Z",
          "updatedAt": "2024-04-17T13:18:27.359Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/26758447",
            "displayName": "Lewis Tromp",
            "userID": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
            "self": "https://sleepy-faith.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 8503563294605312,
          "self": "https://golden-dragster.net/",
          "accountId": "43fcc53d-6712-4118-a18e-a9e4e3d3be43",
          "accountName": "illum",
          "department": "deprecator",
          "departmentLedgerCode": "sponte",
          "issue": {
            "issueName": "confero",
            "id": 5178720446840832,
            "self": "https://fair-guidance.net/"
          },
          "timeSpentSeconds": 2205,
          "billableSeconds": 3564,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-18",
          "loggedTime": "02:02:27",
          "createdAt": "2023-06-16T16:29:31.551Z",
          "updatedAt": "2024-04-18T01:41:49.813Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/26758447",
            "displayName": "Lewis Tromp",
            "userID": "81ad1c63-6403-4ebe-8fb1-21602a58f6c3",
            "self": "https://grave-notepad.net/"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Katie Wehner",
        "accountId": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
        "accountType": "customer",
        "emailAddress": "Edwardo_Fahey11@yahoo.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/695.jpg",
          "24x24": "https://avatars.githubusercontent.com/u/76571242",
          "16x16": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/103.jpg",
          "32x32": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/515.jpg"
        },
        "active": true,
        "locale": "en-US",
        "self": "https://active-snarl.name"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 3672253149478912,
          "self": "https://sore-combat.org",
          "accountId": "50a3cbf8-1c0d-443d-8f11-7e8f4895d11e",
          "accountName": "cicuta",
          "department": "cenaculum",
          "departmentLedgerCode": "tibi",
          "issue": {
            "issueName": "caecus",
            "id": 341039982313472,
            "self": "https://genuine-walnut.info"
          },
          "timeSpentSeconds": 4634,
          "billableSeconds": 2572,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "00:11:05",
          "createdAt": "2024-02-24T09:37:30.926Z",
          "updatedAt": "2024-04-17T17:53:51.841Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/76571242",
            "displayName": "Katie Wehner",
            "userID": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
            "self": "https://bustling-petitioner.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6480040120287232,
          "self": "https://beautiful-breeze.biz",
          "accountId": "e8bc7740-6f95-4659-b7d2-1c456c29763a",
          "accountName": "conqueror",
          "department": "argentum",
          "departmentLedgerCode": "ultio",
          "issue": {
            "issueName": "tepesco",
            "id": 7274531689332736,
            "self": "https://cylindrical-mussel.com/"
          },
          "timeSpentSeconds": 2008,
          "billableSeconds": 1086,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "17:55:31",
          "createdAt": "2024-03-15T15:13:50.270Z",
          "updatedAt": "2024-04-17T11:44:21.364Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/76571242",
            "displayName": "Katie Wehner",
            "userID": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
            "self": "https://unfit-bather.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 7117049576816640,
          "self": "https://magnificent-halibut.org/",
          "accountId": "3feff8b0-755c-4766-ad8e-09fd93c77075",
          "accountName": "circumvenio",
          "department": "testimonium",
          "departmentLedgerCode": "comburo",
          "issue": {
            "issueName": "sono",
            "id": 1766245059788800,
            "self": "https://sophisticated-help.com/"
          },
          "timeSpentSeconds": 2717,
          "billableSeconds": 2434,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "03:56:31",
          "createdAt": "2023-08-15T14:15:52.736Z",
          "updatedAt": "2024-04-17T12:52:56.300Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/76571242",
            "displayName": "Katie Wehner",
            "userID": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
            "self": "https://stylish-trend.org"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4967210166517760,
          "self": "https://mature-adapter.net",
          "accountId": "82bba3b1-12dc-444e-a509-179e8176a9b7",
          "accountName": "vir",
          "department": "vociferor",
          "departmentLedgerCode": "aequitas",
          "issue": {
            "issueName": "tero",
            "id": 6935560719433728,
            "self": "https://hurtful-prairie.name"
          },
          "timeSpentSeconds": 3148,
          "billableSeconds": 4771,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-18",
          "loggedTime": "13:52:57",
          "createdAt": "2023-10-10T00:09:41.254Z",
          "updatedAt": "2024-04-17T07:11:15.832Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/76571242",
            "displayName": "Katie Wehner",
            "userID": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
            "self": "https://nutty-igloo.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 279807055101952,
          "self": "https://nervous-manner.net",
          "accountId": "c6010e0e-2794-4ca6-afb0-f5d78fc6845b",
          "accountName": "a",
          "department": "urbanus",
          "departmentLedgerCode": "ago",
          "issue": {
            "issueName": "subito",
            "id": 7196674466250752,
            "self": "https://moist-string.net/"
          },
          "timeSpentSeconds": 1757,
          "billableSeconds": 1039,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "17:06:20",
          "createdAt": "2023-10-22T21:29:32.233Z",
          "updatedAt": "2024-04-18T03:02:14.351Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/76571242",
            "displayName": "Katie Wehner",
            "userID": "910cae6c-3a9c-4789-8777-5863b2f76b4d",
            "self": "https://sentimental-separation.net"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Darlene Runolfsson MD",
        "accountId": "6f832bf3-6bc8-4433-9374-60a67580a95a",
        "accountType": "atlassian",
        "emailAddress": "Sydnee.Abshire18@yahoo.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg",
          "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
          "16x16": "https://avatars.githubusercontent.com/u/26194192",
          "32x32": "https://avatars.githubusercontent.com/u/56889500"
        },
        "active": true,
        "locale": "fr-FR",
        "self": "https://tasty-copyright.net"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 6828657270063104,
          "self": "https://qualified-witness.info/",
          "accountId": "6be51756-7038-46cd-bb7c-31cb3d672ffb",
          "accountName": "credo",
          "department": "celo",
          "departmentLedgerCode": "speciosus",
          "issue": {
            "issueName": "constans",
            "id": 7329665213530112,
            "self": "https://this-petitioner.name"
          },
          "timeSpentSeconds": 3180,
          "billableSeconds": 5385,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-18",
          "loggedTime": "12:33:30",
          "createdAt": "2023-04-27T15:50:33.611Z",
          "updatedAt": "2024-04-17T11:55:36.414Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
            "displayName": "Darlene Runolfsson MD",
            "userID": "6f832bf3-6bc8-4433-9374-60a67580a95a",
            "self": "https://nonstop-laboratory.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 9003576263180288,
          "self": "https://frivolous-minister.biz",
          "accountId": "bdcd2530-60dc-454b-ae35-f5b92f433157",
          "accountName": "benevolentia",
          "department": "vilitas",
          "departmentLedgerCode": "atrocitas",
          "issue": {
            "issueName": "dens",
            "id": 8169089702821888,
            "self": "https://far-flung-influence.net/"
          },
          "timeSpentSeconds": 1059,
          "billableSeconds": 6927,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "07:00:35",
          "createdAt": "2023-05-10T00:27:24.816Z",
          "updatedAt": "2024-04-17T17:23:29.198Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
            "displayName": "Darlene Runolfsson MD",
            "userID": "6f832bf3-6bc8-4433-9374-60a67580a95a",
            "self": "https://droopy-nurse.info"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6481755498348544,
          "self": "https://growing-coincidence.org/",
          "accountId": "a3f3351d-37af-4eb7-8ce7-245916e4cf7e",
          "accountName": "angulus",
          "department": "aliquid",
          "departmentLedgerCode": "audax",
          "issue": {
            "issueName": "ratione",
            "id": 4040061773414400,
            "self": "https://cluttered-shame.net/"
          },
          "timeSpentSeconds": 2290,
          "billableSeconds": 2262,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "06:29:41",
          "createdAt": "2023-08-17T13:39:54.144Z",
          "updatedAt": "2024-04-17T07:19:30.587Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
            "displayName": "Darlene Runolfsson MD",
            "userID": "6f832bf3-6bc8-4433-9374-60a67580a95a",
            "self": "https://warmhearted-hedge.info"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4009936140894208,
          "self": "https://tiny-cruise.name",
          "accountId": "adc00de1-36f7-4d4b-b974-f0966c02a47d",
          "accountName": "verumtamen",
          "department": "urbanus",
          "departmentLedgerCode": "debitis",
          "issue": {
            "issueName": "sit",
            "id": 2529922933325824,
            "self": "https://indolent-feather.info"
          },
          "timeSpentSeconds": 4014,
          "billableSeconds": 7042,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-18",
          "loggedTime": "11:29:22",
          "createdAt": "2023-04-21T21:44:33.238Z",
          "updatedAt": "2024-04-17T22:24:30.203Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
            "displayName": "Darlene Runolfsson MD",
            "userID": "6f832bf3-6bc8-4433-9374-60a67580a95a",
            "self": "https://urban-girl.net/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 3480217293160448,
          "self": "https://altruistic-mine.name",
          "accountId": "6af9c65f-c2cd-419f-89e0-c59a444a74f9",
          "accountName": "arma",
          "department": "iure",
          "departmentLedgerCode": "amiculum",
          "issue": {
            "issueName": "eos",
            "id": 1391765129003008,
            "self": "https://jittery-pasta.name"
          },
          "timeSpentSeconds": 675,
          "billableSeconds": 6330,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "07:48:51",
          "createdAt": "2023-08-03T18:40:07.166Z",
          "updatedAt": "2024-04-17T13:26:19.048Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/774.jpg",
            "displayName": "Darlene Runolfsson MD",
            "userID": "6f832bf3-6bc8-4433-9374-60a67580a95a",
            "self": "https://robust-stimulation.net"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Mr. Tom Barrows",
        "accountId": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
        "accountType": "customer",
        "emailAddress": "Juanita_Berge@yahoo.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/302.jpg",
          "24x24": "https://avatars.githubusercontent.com/u/20831057",
          "16x16": "https://avatars.githubusercontent.com/u/31296816",
          "32x32": "https://avatars.githubusercontent.com/u/13893485"
        },
        "active": false,
        "locale": "fr-FR",
        "self": "https://average-beech.info/"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 5943057534943232,
          "self": "https://frightened-exchange.net/",
          "accountId": "64924ab6-14c1-47e2-a8d7-ae619ea1c69b",
          "accountName": "coniuratio",
          "department": "deserunt",
          "departmentLedgerCode": "aperio",
          "issue": {
            "issueName": "acsi",
            "id": 8083850540351488,
            "self": "https://pointless-snorer.org"
          },
          "timeSpentSeconds": 5426,
          "billableSeconds": 2783,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "08:23:29",
          "createdAt": "2023-09-20T16:27:48.999Z",
          "updatedAt": "2024-04-17T08:33:05.033Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/20831057",
            "displayName": "Mr. Tom Barrows",
            "userID": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
            "self": "https://average-boon.name/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 7481919159664640,
          "self": "https://illustrious-okra.info",
          "accountId": "ab71474e-7002-4400-b34e-11ac80e379c7",
          "accountName": "sollers",
          "department": "consequuntur",
          "departmentLedgerCode": "vereor",
          "issue": {
            "issueName": "comparo",
            "id": 240658514182144,
            "self": "https://shameful-honey.com"
          },
          "timeSpentSeconds": 5672,
          "billableSeconds": 4966,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "06:49:15",
          "createdAt": "2023-07-17T21:04:35.901Z",
          "updatedAt": "2024-04-17T20:08:47.233Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/20831057",
            "displayName": "Mr. Tom Barrows",
            "userID": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
            "self": "https://metallic-musician.net"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4899417003917312,
          "self": "https://subdued-mandate.net",
          "accountId": "90f54893-691f-41b0-940d-2ecef90c4e7f",
          "accountName": "valens",
          "department": "blandior",
          "departmentLedgerCode": "thymum",
          "issue": {
            "issueName": "abduco",
            "id": 4493851427340288,
            "self": "https://buzzing-gift.info"
          },
          "timeSpentSeconds": 4536,
          "billableSeconds": 5932,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "22:40:52",
          "createdAt": "2023-12-13T04:48:14.610Z",
          "updatedAt": "2024-04-17T19:38:40.556Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/20831057",
            "displayName": "Mr. Tom Barrows",
            "userID": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
            "self": "https://jaded-sun.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 2099490368520192,
          "self": "https://careful-temporariness.com/",
          "accountId": "eb8c50a8-8b65-4312-b601-b34e9c745d52",
          "accountName": "admoveo",
          "department": "acer",
          "departmentLedgerCode": "saepe",
          "issue": {
            "issueName": "tempore",
            "id": 1906812443951104,
            "self": "https://oblong-lining.name"
          },
          "timeSpentSeconds": 3857,
          "billableSeconds": 3296,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "06:43:23",
          "createdAt": "2023-07-08T15:39:18.271Z",
          "updatedAt": "2024-04-18T02:27:43.106Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/20831057",
            "displayName": "Mr. Tom Barrows",
            "userID": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
            "self": "https://limited-modeling.name"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 7050456771592192,
          "self": "https://tricky-guest.net",
          "accountId": "a2d3f412-1c05-44e2-aaea-9398005559dd",
          "accountName": "tamquam",
          "department": "distinctio",
          "departmentLedgerCode": "praesentium",
          "issue": {
            "issueName": "aperio",
            "id": 2032382664245248,
            "self": "https://free-network.info/"
          },
          "timeSpentSeconds": 2141,
          "billableSeconds": 4790,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "12:25:15",
          "createdAt": "2023-10-24T15:31:29.952Z",
          "updatedAt": "2024-04-17T22:32:44.952Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/20831057",
            "displayName": "Mr. Tom Barrows",
            "userID": "c4f74171-8a70-42aa-bdc0-0b93480304c4",
            "self": "https://svelte-viscose.name/"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Mona Langworth",
        "accountId": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
        "accountType": "customer",
        "emailAddress": "Saul_Murphy@gmail.com",
        "avatarUrls": {
          "48x48": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/111.jpg",
          "24x24": "https://avatars.githubusercontent.com/u/57968034",
          "16x16": "https://avatars.githubusercontent.com/u/64038426",
          "32x32": "https://avatars.githubusercontent.com/u/58230889"
        },
        "active": false,
        "locale": "en-US",
        "self": "https://buttery-sitar.org"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 836998438846464,
          "self": "https://whole-swath.biz",
          "accountId": "4103a8ec-ca84-4d4c-8536-c05969d034a7",
          "accountName": "territo",
          "department": "sustineo",
          "departmentLedgerCode": "cervus",
          "issue": {
            "issueName": "crepusculum",
            "id": 8112921882132480,
            "self": "https://impassioned-due.info/"
          },
          "timeSpentSeconds": 1949,
          "billableSeconds": 6724,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "10:19:57",
          "createdAt": "2023-06-21T23:58:40.650Z",
          "updatedAt": "2024-04-18T00:15:20.461Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/57968034",
            "displayName": "Mona Langworth",
            "userID": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
            "self": "https://ashamed-wrench.info/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6765138436685824,
          "self": "https://past-pounding.info",
          "accountId": "a793d0ae-2ed0-42c1-a51f-4f7449765f28",
          "accountName": "bos",
          "department": "sollers",
          "departmentLedgerCode": "arx",
          "issue": {
            "issueName": "cupiditas",
            "id": 8369184784252928,
            "self": "https://wiggly-curtain.biz/"
          },
          "timeSpentSeconds": 3546,
          "billableSeconds": 6020,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "09:43:10",
          "createdAt": "2024-01-19T08:59:12.197Z",
          "updatedAt": "2024-04-18T03:51:02.258Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/57968034",
            "displayName": "Mona Langworth",
            "userID": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
            "self": "https://hopeful-consumer.info/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 8775671731978240,
          "self": "https://sour-serum.org/",
          "accountId": "16518fbc-0041-4263-9998-1e8a78dd892f",
          "accountName": "suasoria",
          "department": "cogito",
          "departmentLedgerCode": "id",
          "issue": {
            "issueName": "atrox",
            "id": 7821788247490560,
            "self": "https://golden-speech.org/"
          },
          "timeSpentSeconds": 4448,
          "billableSeconds": 830,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "20:28:50",
          "createdAt": "2023-09-30T01:59:28.250Z",
          "updatedAt": "2024-04-17T22:25:47.282Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/57968034",
            "displayName": "Mona Langworth",
            "userID": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
            "self": "https://sandy-shoreline.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4962553302089728,
          "self": "https://illustrious-dome.name",
          "accountId": "db451aec-1753-4773-8320-66764faf5466",
          "accountName": "laboriosam",
          "department": "crinis",
          "departmentLedgerCode": "magnam",
          "issue": {
            "issueName": "subvenio",
            "id": 2212396059852800,
            "self": "https://powerful-lion.info"
          },
          "timeSpentSeconds": 5491,
          "billableSeconds": 6701,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "19:27:32",
          "createdAt": "2024-02-24T08:36:15.292Z",
          "updatedAt": "2024-04-17T09:59:58.406Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/57968034",
            "displayName": "Mona Langworth",
            "userID": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
            "self": "https://exotic-favorite.net/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 6570110036738048,
          "self": "https://inexperienced-dungeon.info",
          "accountId": "3066a38a-9cf7-4f08-9939-b4627aee0016",
          "accountName": "urbs",
          "department": "tenuis",
          "departmentLedgerCode": "demens",
          "issue": {
            "issueName": "defero",
            "id": 1449386886299648,
            "self": "https://square-tuxedo.name"
          },
          "timeSpentSeconds": 2434,
          "billableSeconds": 1818,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "09:16:11",
          "createdAt": "2023-06-28T17:08:28.041Z",
          "updatedAt": "2024-04-17T10:34:02.942Z",
          "author": {
            "avatar": "https://avatars.githubusercontent.com/u/57968034",
            "displayName": "Mona Langworth",
            "userID": "cbb1b366-bf8d-48c9-adf7-c1e5a284d9b2",
            "self": "https://wonderful-hospital.com"
          }
        }
      }
    ]
  },
  {
    "user": {
      "User": {
        "displayName": "Louise Senger",
        "accountId": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
        "accountType": "atlassian",
        "emailAddress": "Darrel_Ward@gmail.com",
        "avatarUrls": {
          "48x48": "https://avatars.githubusercontent.com/u/55100913",
          "24x24": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
          "16x16": "https://avatars.githubusercontent.com/u/64137357",
          "32x32": "https://avatars.githubusercontent.com/u/79651489"
        },
        "active": true,
        "locale": "fr-FR",
        "self": "https://wide-succotash.info/"
      }
    },
    "worklogs": [
      {
        "Worklog": {
          "tempoWorklogId": 2366469283250176,
          "self": "https://constant-porter.biz/",
          "accountId": "f8062000-206f-4814-bf75-34cfa4f7b3e2",
          "accountName": "abduco",
          "department": "tolero",
          "departmentLedgerCode": "vociferor",
          "issue": {
            "issueName": "conscendo",
            "id": 143876480303104,
            "self": "https://worthless-housework.info/"
          },
          "timeSpentSeconds": 1494,
          "billableSeconds": 5572,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "22:15:04",
          "createdAt": "2023-09-08T08:03:59.035Z",
          "updatedAt": "2024-04-18T00:43:06.732Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
            "displayName": "Louise Senger",
            "userID": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
            "self": "https://diligent-personal.org/"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 3614562337161216,
          "self": "https://pricey-due.org",
          "accountId": "5b93dcc1-a97e-43f2-bac0-a30ab379bda9",
          "accountName": "accusamus",
          "department": "claustrum",
          "departmentLedgerCode": "coadunatio",
          "issue": {
            "issueName": "distinctio",
            "id": 8419125684600832,
            "self": "https://overdue-bucket.com/"
          },
          "timeSpentSeconds": 6660,
          "billableSeconds": 6151,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "08:53:31",
          "createdAt": "2023-08-01T20:04:42.380Z",
          "updatedAt": "2024-04-17T07:56:28.035Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
            "displayName": "Louise Senger",
            "userID": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
            "self": "https://wide-zoot-suit.org"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 8470829620789248,
          "self": "https://oval-sweat.name/",
          "accountId": "1d41c9aa-c768-48f1-8d09-4d5143cec675",
          "accountName": "succedo",
          "department": "vivo",
          "departmentLedgerCode": "harum",
          "issue": {
            "issueName": "vereor",
            "id": 8235170932981760,
            "self": "https://dapper-battalion.net"
          },
          "timeSpentSeconds": 2265,
          "billableSeconds": 4377,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-17",
          "loggedTime": "11:21:54",
          "createdAt": "2024-01-30T13:59:00.111Z",
          "updatedAt": "2024-04-17T15:05:10.919Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
            "displayName": "Louise Senger",
            "userID": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
            "self": "https://dutiful-accident.biz"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 384639560581120,
          "self": "https://separate-karate.org/",
          "accountId": "1eaa3f86-fd05-4639-a7c2-a3002f794597",
          "accountName": "termes",
          "department": "suffoco",
          "departmentLedgerCode": "ancilla",
          "issue": {
            "issueName": "doloremque",
            "id": 4950932561330176,
            "self": "https://outstanding-needle.com"
          },
          "timeSpentSeconds": 2266,
          "billableSeconds": 3186,
          "issueStartDate": "2024-04-17",
          "loggedDate": "2024-04-18",
          "loggedTime": "23:04:20",
          "createdAt": "2023-12-22T08:02:57.729Z",
          "updatedAt": "2024-04-17T22:57:15.104Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
            "displayName": "Louise Senger",
            "userID": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
            "self": "https://cloudy-dump.com"
          }
        }
      },
      {
        "Worklog": {
          "tempoWorklogId": 4668380663513088,
          "self": "https://black-lumberman.org/",
          "accountId": "78843b9d-0e67-4f63-a03a-1b3a534089e3",
          "accountName": "minima",
          "department": "illo",
          "departmentLedgerCode": "cilicium",
          "issue": {
            "issueName": "caste",
            "id": 3401851653324800,
            "self": "https://wooden-meat.name/"
          },
          "timeSpentSeconds": 7167,
          "billableSeconds": 2984,
          "issueStartDate": "2024-04-18",
          "loggedDate": "2024-04-17",
          "loggedTime": "11:16:06",
          "createdAt": "2024-01-17T23:28:30.083Z",
          "updatedAt": "2024-04-18T02:36:28.053Z",
          "author": {
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
            "displayName": "Louise Senger",
            "userID": "aa7f55cd-8ab1-4b8a-a7d0-1c7ebd35f7da",
            "self": "https://grouchy-vellum.biz/"
          }
        }
      }
    ]
  }
]
  export const UserDB = UserWrapper.map((user) => user.User);
  export const WorklogDB = WorklogWrapper.map((worklog) => worklog.worklogs);