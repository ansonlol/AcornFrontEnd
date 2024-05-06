import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../constants/abi";
import { useState, useEffect } from "react";
import { assertNormalize } from "ethers";
import { AptosNetworkResolver } from "moralis/common-aptos-utils";

function conver_bigNumber_with_bigNumber(result, index) {
  let answer;
  const firstKey = (Object.keys(result)[index]);
  const firstElement = result[firstKey];
  const secondkey = (Object.keys(firstElement)[0])
  answer = firstElement[secondkey]
  return parseInt(answer);
}



export default function Home() {
  const [hasMetamask, setHasMetamask] = useState(false);
  const { enableWeb3, isWeb3Enabled } = useMoralis();

  // declear params
  const [accountName, setAccountName] = useState(''); // State to store the user input

  const handleInputChange = (event) => {
    setAccountName(event.target.value); // Update the accountName state with the user input
  };

  // 1 function add new souls
  const { data: data1, error: error1, runContractFunction: run_add_new_souls, isFetching: isFetching1, isLoading: isLoading1 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "add_new_souls",
      params: {
        account_name: accountName,

      },
    });
  // 2 fucntion check_accounts
  const { data: data2, error: error2, runContractFunction: run_check_accounts, isFetching: isFetching2, isLoading: isLoading2 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "check_accounts",
      params: {
        account_name: accountName,

      },
    });

  // 3 fucntion join_skill
  const { data: data3, error: error3, runContractFunction: run_join_skill, isFetching: isFetching3, isLoading: isLoading3 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "join_skill",
      params: {
        account_name: "anson",
        skill_name: "flute"

      },
    });
  // 4 function check_skills
  const { data: data4, error: error4, runContractFunction: run_check_skills, isFetching: isFetching4, isLoading: isLoading4 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "check_skills",
      params: {
        account_name: "anson",
        skill_name: "flute"

      },
    });
  // 5 function finish_skills_lesson
  const { data: data5, error: error5, runContractFunction: run_finish_skills_lesson, isFetching: isFetching5, isLoading: isLoading5 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "finish_skills_lesson",
      params: {
        skill_name: "flute",
        account_name: "anson",
        performance: "Excellent",
        time: 3

      },
    });

  // 6 function finish_skills_level
  const { data: data6, error: error6, runContractFunction: run_finish_skills_level, isFetching: isFetching6, isLoading: isLoading6 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "finish_skills_level",
      params: {
        skill_name: "flute",
        account_name: "anson",
        finish_level: "Exploration"

      },
    });

  // 7 function buy_time_to_play
  const { data: data7, error: error7, runContractFunction: run_buy_time_to_play, isFetching: isFetching7, isLoading: isLoading7 } =
    useWeb3Contract({
      abi: abi,
      contractAddress: "0xc0841fa5f4ec3dda8f9fcfa6d4305175ed87f974", // your contract address here
      functionName: "buy_time_to_play",
      params: {
        account_name: "anson",
        time_minute: 60

      },
    });


  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  return (
    <div>

      {hasMetamask ? ( //metamask connection
        isWeb3Enabled ? (
          "Connected! "
        ) : (
          <button onClick={() => enableWeb3()}>Connection testing teieih</button>
        )
      ) : (
        "Please install metamask"
      )}

      <br />

      <input type="text" value={accountName} onChange={handleInputChange} placeholder="Enter account name" />

      {isWeb3Enabled ? (// 1 add_new_souls
        <button onClick={() => run_add_new_souls()}>add_new_souls</button>
      ) : (
        ""
      )}

      {isWeb3Enabled ? (// 2 check_accounts
        <button onClick={async () => {
          try {
            const result = (await run_check_accounts());

            console.log("run_check_accounts", result);

            let ACorn_token = conver_bigNumber_with_bigNumber(result, 0);
            let ACorn_earned = conver_bigNumber_with_bigNumber(result, 1);
            let ACorn_used = conver_bigNumber_with_bigNumber(result, 2);
            let Total_hours = conver_bigNumber_with_bigNumber(result, 3);


            console.log("ACorn_token: ", ACorn_token);
            console.log("ACorn_earned: ", ACorn_earned);
            console.log("ACorn_used: ", ACorn_used);
            console.log("Total_hours: ", Total_hours);
            console.log("skillIndices: ", result[4]);
            console.log("skillName: ", result[5]);

          } catch (error) {
            console.error("Error retrieving value:", error);
          }
        }}>run_check_accounts</button>
      ) : (
        ""
      )}

      <br />

      {isWeb3Enabled ? (// 3 join_skill
        <button onClick={() => run_join_skill()}>join_skill</button>
      ) : (
        ""
      )}

      {isWeb3Enabled ? (// 4 check_skills
        <button onClick={async () => {
          try {
            const result = (await run_check_skills());

            console.log("run_check_skills", result);

            let hour_spent = conver_bigNumber_with_bigNumber(result, 2);


            console.log("level: ", result[0]);
            console.log("performance: ", result[1]);
            console.log("hour_spent: ", hour_spent);

          } catch (error) {
            console.error("Error retrieving value:", error);
          }
        }}>run_check_skills</button>
      ) : (
        ""
      )}

      <br />

      {isWeb3Enabled ? (// 5 finish_skills_lesson
        <button onClick={() => run_finish_skills_lesson()}>finish_skills_lesson</button>
      ) : (
        ""
      )}

      <br />

      {isWeb3Enabled ? (// 6 finish_skills_level
        <button onClick={() => run_finish_skills_level()}>finish_skills_level</button>
      ) : (
        ""
      )}

      <br />

      {isWeb3Enabled ? (// 7 buy_time_to_play
        <button onClick={() => run_buy_time_to_play()}>buy_time_to_play</button>
      ) : (
        ""
      )}


    </div>
  );
}
