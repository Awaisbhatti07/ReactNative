import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

// Imports
import Snackbar from "react-native-snackbar";
import Icons from "../components/Icons";
import IconsView from "../components/Icons";

export default function practice07() {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [gameState, setGameState] = useState(new Array(9).fill("empty", 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setGameWinner("");
    setGameState(new Array(9).fill("empty", 0, 9));
  };

  const checkIsWinner = () => {
    // The gameState array holds the board cells, indexed from 0 to 8.
    // Each index represents a cell on the Tic Tac Toe board like this:
    // 0 | 1 | 2
    // 3 | 4 | 5
    // 6 | 7 | 8
    //
    // Each cell can be 'X', 'O', or 'empty'.

    // Check if the top row (cells 0, 1, 2) are all the same and not empty
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== "empty"
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`); // Declare the winner
    }
    // Check if the middle row (cells 3, 4, 5) are all the same and not empty
    else if (
      gameState[3] !== "empty" &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    }
    // Check if the bottom row (cells 6, 7, 8) are all the same and not empty
    else if (
      gameState[6] !== "empty" &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    }
    // Check if the left column (cells 0, 3, 6) are all the same and not empty
    else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }
    // Check if the middle column (cells 1, 4, 7) are all the same and not empty
    else if (
      gameState[1] !== "empty" &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    }
    // Check if the right column (cells 2, 5, 8) are all the same and not empty
    else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }
    // Check the first diagonal (cells 0, 4, 8) for the same symbol
    else if (
      gameState[0] !== "empty" &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    }
    // Check the second diagonal (cells 2, 4, 6) for the same symbol
    else if (
      gameState[2] !== "empty" &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    }
    // If no winner and no empty cell is left, it's a draw
    else if (!gameState.includes("empty")) {
      setGameWinner("Draw game... ⌛️");
    }
  };

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: "#455A64",
        textColor: "#FFFFFF",
      });
    }

    if (gameState[itemNumber] === "empty") {
      gameState[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: "Positions is Already Filled",
        backgroundColor: "#455A64",
        textColor: "#FFFFFF",
      });
    }

    checkIsWinner();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
          style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}
        >
          <Text style={styles.gameTurnTxt}>
            Players {isCross ? "X" : "0"}'s Turn{" "}
          </Text>
        </View>
      )}

      {/* Gaeme Grid */}
      <FlatList
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({ item, index }) => (
          <Pressable
            key={index}
            style={styles.card}
            onPress={() => onChangeItem(index)}
          >
            <IconsView name={item} />
          </Pressable>
        )}
      />
      {/* game action */}
      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gameWinner ? "Start new game" : "reload the game"}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
