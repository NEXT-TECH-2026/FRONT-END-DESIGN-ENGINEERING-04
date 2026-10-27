import assert from 'node:assert/strict';
import test from 'node:test';
import { validarPontosSimulacao } from '../src/utils/simulacao.ts';

test('recusa saldo insuficiente, inclusive acima do mínimo que escapava da validação antiga', () => {
  assert.match(validarPontosSimulacao(3000, 2760)!, /pontos suficientes/);
  assert.match(validarPontosSimulacao(552, 0)!, /pontos suficientes/);
});

test('recusa valores vazios, negativos, fracionários e não finitos', () => {
  for (const valor of [0, -1, 551, 552.5, NaN, Infinity]) {
    assert.notEqual(validarPontosSimulacao(valor, 2760), null);
  }
});

test('aceita o mínimo e o resgate exato do saldo', () => {
  assert.equal(validarPontosSimulacao(552, 2760), null);
  assert.equal(validarPontosSimulacao(2760, 2760), null);
});
