<?php
declare(strict_types=1);   


function getTransactionFiles(String $dirPATH){
    $files = [];
    foreach (scandir($dirPATH) as $file) {
        if (is_dir( $file)) {
            continue;
        }

        $files[] = $file;
    }

    return $files;
}

function getTransactions(String $fileName): array{

    if (!file_exists($fileName)) {
        trigger_error('File "' . $fileName . '" does not exist', E_USER_ERROR);
    }

    $file = fopen($fileName, 'r');

    $transactions = [];

    while (($line = fgetcsv($file)) !== false) {
        $transactions[] = extractTransaction($line) ;
    }

    return $transactions;
}

function extractTransaction (array $transactionRow): array{
    
    [$date, $checkNumber, $description, $ammount ] = $transactionRow;

    $ammount = (float) str_replace(['$', ','], '', $ammount);


    return ['date' => $date,
    'checkNumber' => $checkNumber, 
    'description' => $description, 
    'ammount' => $ammount];

}

function getTotals(array $transactions): array{
    $totalIncome = 0;
    $totalExpense = 0;

    foreach ($transactions as $transaction) {
        if ($transaction['ammount'] > 0) {
            $totalIncome += $transaction['ammount'];
        } else {
            $totalExpense += $transaction['ammount'];
        }
    }

    return [
        'totalIncome' => $totalIncome,
        'totalExpense' => $totalExpense,
        'netTotal' => $totalIncome + $totalExpense
    ];
}